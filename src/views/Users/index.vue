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
            <b-button v-b-modal.userDetails-form>Send Invite to User</b-button>
          </div>
        </div>
      </div>
      <!-- Page Header Ends -->
      <!-- Table List Starts -->
      <b-table
        id="userDetails-table"
        class="userDetails-table"
        striped
        hover
        :items="records"
        :busy="loading"
        :fields="fields"
        show-empty
      >
        <template #cell(action)="data">
          <b-button
            class="edit-btn"
            @click="onClickEdit((data && data.item) || {})"
          >
            <i class="ri-pencil-line" />
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
          aria-controls="userDetails-table"
        ></b-pagination>
      </div>
      <!-- Table Pagination Ends -->
      <!-- Modal Form Starts -->
      <b-modal
        id="userDetails-form"
        ref="modal"
        :title="formType ? `${formType} Users` : 'Create Users'"
        v-model="showModal"
        @hidden="resetModal"
        @ok="handleSubmit"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div v-for="item in columns" :key="item.id">
            <!-- Input Field -->  
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
                :disabled="item.editOptions && (item.editOptions.create || (item.editOptions.edit && formType === 'Update'))"
              ></b-form-input>
            </b-form-group>
            <!-- Input Field -->
            <!-- Select Field -->
             <b-form-group
              v-if="item.type === 'select'"
              :label="item.label"
              :label-for="item.key"
            >
            <b-form-select :name="item.key" :disabled="item.editOptions && (item.editOptions.create || (item.editOptions.edit && formType === 'Update'))" v-model="form[item.key]" :options="item.options"></b-form-select>
            </b-form-group>
            <!-- Input Field -->
            <!-- Checkbox Field -->
            <b-form-checkbox
              v-if="item.type === 'checkbox'"
              :id="item.key"
              v-model="form[item.key]"
              :name="item.key"
              :disabled="item.editOptions && (item.editOptions.create || (item.editOptions.edit && formType === 'Update'))"
            >
              {{ item.label }}
            </b-form-checkbox>
            <!-- Checkbox Field -->
            <!-- File Upload Field -->
            <b-form-file
              v-if="item.type === 'file'"
              v-model="form[item.key]"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              :disabled="item.editOptions && (item.editOptions.create || (item.editOptions.edit && formType === 'Update'))"
            ></b-form-file>
            <!-- File Upload Field -->
          </div>
        </form>
        <template #modal-ok>Submit</template>
      </b-modal>
      <!-- Modal Form Ends -->
    </div>
  </div>
</template>
<script>
import { findash } from "../../config/pluginInit";
import { Users } from "../../schema";
import { resolveColumns } from "../../Utils/tools";
import api from "../../Utils/api";

const { columns } = Users;

const fields = resolveColumns(columns);

export default {
  name: "Users",
  data: () => ({
    breadcrumb: [
      {
        text: "SETTINGS",
        href: "#",
      },
      {
        text: "USERS",
        active: true,
      },
    ],
    loading: false,
    showModal: false,
    fields: (fields || []).filter((_) => _.viewRecord),
    columns: (fields || []).filter((_) => _.editRecord),
    records: [],
    formType: false,
    formId: false,
    form: {},
    currentPage: 1,
    rows: 0,
    perPage: 10,
  }),
  mounted() {
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
        .post("/user/find-many", reqData)
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.users &&
            res.data.data.pagination
          ) {
            this.records = res.data.data.users || [];
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
    async handleSubmit() {
      if (this.formType === "Update") {
        api
          .post(`/user/update-user-role`, {
            data: [
              {
                id: this.formId,
                role: this.form.role,
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
      } else {
        api
          .post(`/invite`, {
            data: {
                user: {
                    email: this.form.email,
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    user_title: this.form.user_title
                },
                role: this.form.role
            },
          })
          .then((res) => {
            this.makeToast("success", "Success", "Invite Sent Successfully.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to create record.");
          });
      }
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
    resetModal() {
      this.showModal = false;
      this.formId = false;
      this.formType = false;
      this.form = {};
      this.columns = (fields || []).filter((_) => _.editRecord);
    },
    makeToast(variant = null, title, body) {
      this.$bvToast.toast(body || "", {
        title: title || "",
        variant: variant,
        solid: true,
      });
    },
    handlePagination(currentPage) {
      this.currentPage = currentPage;
      this.getList();
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
.header button:first-child {
  margin-right: 15px;
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

.custom-select {
    color: var(--iq-secondary)
}
</style>
