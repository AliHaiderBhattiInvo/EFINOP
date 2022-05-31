<template>
  <div class="container-fluid">
    <div>
      <!-- Page Header Starts -->
      <div class="header">
        <div>
          <b-breadcrumb :items="breadcrumb" style="margin: 0px" />
        </div>
        <div>
          <div>
            <b-button v-b-modal.reportDetails-form>Create COA</b-button>
            <b-button @click="onClickUpload">Upload COA</b-button>
            <b-button @click="handleClone">Clone COA</b-button>
            <b-button v-if="role === 'MIDDLE'" @click="handleReview"
              >Send for Review</b-button
            >
            <b-button v-if="role === 'ADMIN'" @click="handleReview"
              >Push to Final</b-button
            >
          </div>
        </div>
      </div>
      <!-- Page Header Ends -->
      <!-- Table List Starts -->
      <b-table
        id="reportDetails-table"
        class="reportDetails-table"
        striped
        hover
        :items="records"
        :busy="loading"
        :fields="fields"
        show-empty
      >
        <template #cell(focus_setting)="data">
          <div
            v-if="
              data &&
              data.item &&
              data.item.focus_setting &&
              data.item.focus_setting.focus_id
            "
          >
            <div style="display: flex; align-items: center">
              {{
                (data &&
                  data.item &&
                  data.item.focus_setting &&
                  data.item.focus_setting.focus_id) ||
                ""
              }}
              <i class="las la-check-circle coa-review-success"></i>
            </div>
            <b-badge
              class="border border-danger text-danger mr-1"
              variant="none"
              @click="unmapSettings('focus', data && data.item && data.item.id)"
            >
              <i class="las la-times" style="cursor: pointer"> Remove </i>
            </b-badge>
          </div>
          <div v-if="data && data.item && !data.item.focus_setting">
            <b-badge
              @click="
                openSettingsModal('focus', data && data.item && data.item.id)
              "
              class="border border-primary text-primary mr-1"
              variant="none"
              ><i class="las la-plus" style="font-size: 14px; cursor: pointer">
                Select Focus ID
              </i></b-badge
            >
          </div>
        </template>
        <template #cell(ssoi_setting)="data">
          <div
            v-if="
              data &&
              data.item &&
              data.item.ssoi_setting &&
              data.item.ssoi_setting.ssoi_id
            "
          >
            <div style="display: flex; align-items: center">
              {{
                (data &&
                  data.item &&
                  data.item.ssoi_setting &&
                  data.item.ssoi_setting.ssoi_id) ||
                ""
              }}
              <i class="las la-check-circle coa-review-success"></i>
            </div>
            <b-badge
              class="border border-danger text-danger mr-1"
              variant="none"
              @click="unmapSettings('ssoi', data && data.item && data.item.id)"
            >
              <i class="las la-times" style="cursor: pointer"> Remove </i>
            </b-badge>
          </div>
          <div v-if="data && data.item && !data.item.ssoi_setting">
            <b-badge
              @click="
                openSettingsModal('ssoi', data && data.item && data.item.id)
              "
              class="border border-primary text-primary mr-1"
              variant="none"
              ><i class="las la-plus" style="font-size: 14px; cursor: pointer">
                Select SSOI ID
              </i></b-badge
            >
          </div>
        </template>
        <template #cell(allowable)="data">
          <div>
            {{
              data && data.item && data.item.allowable
                ? "Allowable"
                : data && data.item && data.item.allowable === false
                ? "Non Allowable"
                : ""
            }}
          </div>
        </template>
        <template #cell(action)="data">
          <b-button
            class="edit-btn"
            @click="onClickEdit((data && data.item) || {})"
          >
            <i class="ri-pencil-line" />
          </b-button>
          <b-button
            class="del-btn"
            @click="onDelete(data && data.item && data.item.id)"
          >
            <i class="ri-delete-bin-7-line" />
          </b-button>
        </template>
        <template #table-busy>
          <div class="text-center my-2" style="color: #1f3d73">
            <b-spinner
              class="align-middle"
              style="margin-right: 10px"
            ></b-spinner>
            <strong>Please Wait...</strong>
          </div>
        </template>
        <template #empty>
          <h5>No Records Found.</h5>
        </template>
      </b-table>
      <!-- Table List Ends -->
      <!-- Table Pagination Starts -->
      <div class="pagination">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          @change="handlePagination"
          aria-controls="reportDetails-table"
        ></b-pagination>
      </div>
      <!-- Table Pagination Ends -->
      <!-- Modal Form Starts -->
      <b-modal
        id="reportDetails-form"
        ref="modal"
        :title="formType ? `${formType} COA` : 'Create COA'"
        v-model="showModal"
        @hidden="resetModal"
        @ok="handleSubmit"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div v-for="item in columns" :key="item.id">
            <b-form-group
              v-if="item.type === 'text'"
              :label="item.label"
              :label-for="item.key"
            >
              <b-form-input
                :name="item.key"
                :id="item.key"
                v-model="form[item.key]"
                :required="item.required"
              ></b-form-input>
            </b-form-group>
            <b-form-checkbox
              v-if="item.type === 'checkbox'"
              :id="item.key"
              v-model="form[item.key]"
              :name="item.key"
            >
              {{ item.label }}
            </b-form-checkbox>
            <b-form-file
              v-if="item.type === 'file'"
              v-model="form[item.key]"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </div>
        </form>
        <template #modal-ok>Submit</template>
      </b-modal>
      <!-- Modal Form Ends -->
      <!-- Modal Settings List Starts -->
      <b-modal
        id="settings-list-modal"
        ref="settings-modal"
        size="xl"
        title="Please select the row"
        v-model="settings.showModal"
        @show="getSettingsList(settings.type)"
        @hidden="resetModal"
        :ok-disabled="true"
      >
        <div>
          <div class="search">
            <b-form-input
              name="search_key"
              id="search_key"
              v-model="settings.search_key"
              placeholder="Search Keyword"
              @input="setSearchKeyword"
              required
            ></b-form-input>
            <b-button
              style="background-color: #1f3d73; border: none"
              @click="getSettingsList(settings.type)"
              >Search</b-button
            >
            <b-button @click="handleClearSearch">Clear</b-button>
          </div>
          <b-table
            id="settings-table"
            class="reportDetails-table"
            striped
            hover
            :items="settings && settings.records[settings.type]"
            :busy="settings && settings.loading"
            :fields="settings && settings.columns[settings.type]"
            show-empty
            selectMode="single"
            selectable
            @row-selected="mapSettings"
          >
            <template #table-busy>
              <div class="text-center my-2" style="color: #1f3d73">
                <b-spinner
                  class="align-middle"
                  style="margin-right: 10px"
                ></b-spinner>
                <strong>Please Wait...</strong>
              </div>
            </template>
            <template #empty>
              <h5>No Records Found.</h5>
            </template>
          </b-table>
          <!-- Table Pagination Starts -->
          <div class="pagination">
            <b-pagination
              v-model="settings.currentPage"
              :total-rows="settings.rows"
              :per-page="settings.perPage"
              @change="handleSettingsPagination"
              aria-controls="reportDetails-table"
            ></b-pagination>
          </div>
          <!-- Table Pagination Ends -->
        </div>
      </b-modal>
      <!-- Modal Settings List Ends -->
    </div>
  </div>
</template>
<script>
import { findash } from "../../config/pluginInit";
import { UploadCOA, Focus, SSOI } from "../../schema";
import { formatBytes } from "../../Utils/tools";
import api, { uploadFile } from "../../Utils/api";

const { columns, uploadColumns } = UploadCOA;

const focusColumns = (Focus && Focus.columns) || [];
const ssoiColumns = (SSOI && SSOI.columns) || [];

export default {
  name: "Upload",
  data: () => ({
    breadcrumb: [
      {
        text: "CHART OF ACCOUNTS",
        href: "#",
      },
      {
        text: "UPLOAD COA",
        active: true,
      },
    ],
    settings: {
      showModal: false,
      loading: false,
      type: false,
      coa_review_id: false,
      list_api: {
        focus: "/focus-setting/find-many",
        ssoi: "/ssoi-setting/find-many",
      },
      map_api: {
        focus: "/focus-setting/map-coa",
        ssoi: "/ssoi-setting/map-coa",
      },
      unmap_api: {
        focus: "/focus-setting/unmap-coa",
        ssoi: "/ssoi-setting/unmap-coa",
      },
      records: {
        focus: [],
        ssoi: [],
      },
      columns: {
        focus: (focusColumns || []).filter((_) => _.viewRecord),
        ssoi: (ssoiColumns || []).filter((_) => _.viewRecord),
      },
      currentPage: 1,
      rows: 0,
      perPage: 10,
      search_key: "",
    },
    loading: false,
    showModal: false,
    fields: (columns || []).filter((_) => _.viewRecord),
    columns: (columns || []).filter((_) => _.editRecord),
    records: [],
    formType: false,
    formId: false,
    form: {},
    currentPage: 1,
    rows: 0,
    perPage: 10,
    role: false,
    user: false
  }),
  mounted() {
    const { user } = this.$store.getters["Setting/authUserState"] || {};
    this.user = user;
    this.role = user && user.role;

    findash.index();
    this.getList();
  },
  methods: {
    async getList() {
      this.loading = true;

      const reqData = {
        pagination: {
          take: this.perPage,
          page: this.currentPage,
        },
      };

      api
        .post("/coa-review/find-many", reqData)
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.coa_reviews &&
            res.data.data.pagination
          ) {
            this.records = res.data.data.coa_reviews || [];
            const { page, count } = res.data.data.pagination;
            this.currentPage = page;
            this.rows = count;
          } else {
            this.makeToast("danger", "Error", "Unable to fetch api records");
          }
        })
        .catch((Err) => {
          this.makeToast("danger", "Error", "Unable to fetch api records");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async getSettingsList(name) {
      this.settings.loading = true;

      const reqData = {
        pagination: {
          take: this.settings.perPage,
          page: this.settings.currentPage,
        },
        search: this.settings.search_key,
      };

      if (
        this.settings &&
        this.settings.list_api &&
        this.settings.list_api[name]
      ) {
        api
          .post(this.settings.list_api[name], reqData)
          .then((res) => {
            if (
              res &&
              res.data &&
              res.data.data &&
              (res.data.data.focus_settings || res.data.data.ssoi_settings) &&
              res.data.data.pagination
            ) {
              this.settings.records[name] =
                res.data.data.focus_settings || res.data.data.ssoi_settings;
              const { page, count } = res.data.data.pagination;
              this.settings.currentPage = page;
              this.settings.rows = count;
            } else {
              this.makeToast("danger", "Error", "Unable to fetch api records");
            }
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to fetch api records");
          })
          .finally(() => {
            this.settings.loading = false;
          });
      }
    },
    async handleSubmit() {
      if (this.formType === "Update") {
        api
          .post(`/coa-review/update-many`, {
            data: [
              {
                account_id: this.formId,
                data: this.form,
              },
            ],
          })
          .then((res) => {
            this.makeToast("success", "Success", "Record Updated Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to update record.");
          });
      } else if (this.formType === "Upload") {
        const files = this.form && this.form.files && [this.form.files];
        files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size),
          })
        );

        const formData = new FormData();
        formData.append("files", files[0]);
        formData.append("path", `upload/staging/UPLOAD-COA-REVIEW/${this.user.id}`);

        uploadFile(formData, 'UPLOAD-COA-REVIEW')
          .then((res) => {
            this.makeToast("success", "Success", "Record Created Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to create record.");
          });
      } else {
        api
          .post(`/coa-review/create`, {
            data: this.form,
          })
          .then((res) => {
            this.makeToast("success", "Success", "Record Created Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to create record.");
          });
      }
    },
    async onDelete(id) {
      if (confirm("Do you really want to delete?")) {
        api
          .post(`/coa-review/delete-many`, { data: { account_ids: [id] } })
          .then((res) => {
            this.makeToast("success", "Success", "Delete Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to delete record.");
          });
      }
    },
    async handleClone() {
      api
        .post(`/coa-review/clone-coa`, {})
        .then((res) => {
          this.makeToast("success", "Success", "Data Cloned Successfuly.");
          this.getList();
        })
        .catch((Err) => {
          this.makeToast("danger", "Error", "Unable to clone the records.");
        });
    },
    async mapSettings(row) {
      const record = (row && row.length > 0 && row[0]) || false;
      const url =
        this.settings &&
        this.settings.map_api &&
        this.settings.map_api[this.settings.type];

      const reqData =
        this.settings.type === "focus"
          ? { focus_id: record.id }
          : this.settings.type === "ssoi"
          ? { ssoi_id: record.id }
          : false;
      if (url && reqData && this.settings.coa_review_id && record) {
        api
          .patch(url, {
            data: {
              coa_review_id: this.settings.coa_review_id,
              ...reqData,
            },
          })
          .then((res) => {
            this.resetModal();
            this.makeToast("success", "Success", "Data Mapped Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to delete record.");
          });
      }
    },
    async unmapSettings(type, id) {
      const url =
        this.settings &&
        this.settings.unmap_api &&
        this.settings.unmap_api[type];
      if (url && type && id) {
        this.loading = true;
        api
          .patch(url, {
            data: {
              coa_review_id: id,
            },
          })
          .then((res) => {
            this.makeToast("success", "Success", "Data Unmapped Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to delete record.");
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    async handleReview() {
      api
        .post(`/coa-review/mark-done`, { data: {} })
        .then((res) => {
          this.makeToast("success", "Success", "Review sent.");
          this.getList();
        })
        .catch((Err) => {
          this.makeToast("danger", "Error", "Unable to delete record.");
        });
    },
    onClickEdit(data) {
      const editFormData = this.columns.reduce(
        (a, el) => Object.assign({}, a, { [el.key]: data[el.key] }),
        {}
      );
      this.form = editFormData;
      this.formType = "Update";
      this.formId = data.id;
      this.showModal = true;
    },
    onClickUpload() {
      this.columns = (uploadColumns || []).filter((_) => _.editRecord);
      this.formType = "Upload";
      this.showModal = true;
    },
    openSettingsModal(type, id) {
      this.settings.type = type;
      this.settings.coa_review_id = id;
      this.settings.showModal = true;
    },
    resetModal() {
      this.showModal = false;
      this.formId = false;
      this.formType = false;
      this.form = {};
      this.columns = (columns || []).filter((_) => _.editRecord);
      this.settings = {
        loading: false,
        type: false,
        coa_review_id: false,
        list_api: {
          focus: "/focus-setting/find-many",
          ssoi: "/ssoi-setting/find-many",
        },
        map_api: {
          focus: "/focus-setting/map-coa",
          ssoi: "/ssoi-setting/map-coa",
        },
        unmap_api: {
          focus: "/focus-setting/unmap-coa",
          ssoi: "/ssoi-setting/unmap-coa",
        },
        records: {
          focus: [],
          ssoi: [],
        },
        columns: {
          focus: (focusColumns || []).filter((_) => _.viewRecord),
          ssoi: (ssoiColumns || []).filter((_) => _.viewRecord),
        },
        currentPage: 1,
        rows: 0,
        perPage: 10,
        search_key: "",
      };
    },
    makeToast(variant = null, title, body) {
      this.$bvToast.toast(body || "", {
        title: title || "",
        variant: variant,
        solid: true,
      });
    },
    handleSettingsPagination(currentPage) {
      this.settings.currentPage = currentPage;
      this.getSettingsList(this.settings.type);
    },
    handlePagination(currentPage) {
      this.currentPage = currentPage;
      this.getList();
    },
    setSearchKeyword(val) {
      this.settings.search_key = val;
    },
    handleClearSearch() {
      this.settings.search_key = "";
      this.getSettingsList(this.settings.type);
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header button:first-child,
.header button:nth-child(2) {
  margin-right: 15px;
  background-color: #1f3d73;
  border: none;
}

.header button:nth-child(3) {
  background-color: #1f3d73;
  margin-right: 15px;
  border: none;
}

.header button:nth-child(4) {
  background-color: #1f3d73;
  border: none;
}

.edit-btn {
  background-color: #1f3d73 !important;
  margin-right: 15px;
  border: none;
}

.del-btn {
  background-color: #c61212 !important;
  border: none;
}

.edit-btn i,
.del-btn i {
  margin: 0px !important;
}

.pagination {
  display: flex;
  justify-content: center;
}
.coa-review-success {
  color: green;
  font-weight: bold;
  font-size: 22px;
  margin-left: 8px;
}
.search {
  display: flex;
  flex-direction: row;
}

.search input {
  width: 24%;
  margin-right: 15px;
}

.search button {
  margin-right: 15px;
}
</style>