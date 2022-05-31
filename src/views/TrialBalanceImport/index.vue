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
            <b-button @click="onClickUpload">Upload Trial Balance</b-button>
          </div>
        </div>
      </div>
      <!-- Page Header Ends -->
      <!-- Table List Starts -->
      <b-table
        id="trialBalance-table"
        class="trialBalance-table"
        striped
        hover
        :items="records"
        :busy="loading"
        :fields="fields"
        show-empty
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
        <template #cell(efinop_user)="data">
          <div>{{ `${data && data.item && data.item.efinop_user && data.item.efinop_user.first_name} ${data && data.item && data.item.efinop_user && data.item.efinop_user.last_name}`  }}</div>
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
          aria-controls="trialBalance-table"
        ></b-pagination>
      </div>
      <!-- Table Pagination Ends -->
      <!-- Modal Form Starts -->
      <b-modal
        id="trialBalance-form"
        ref="modal"
        title="Upload Trial Balance"
        v-model="showModal"
        @hidden="resetModal"
        @ok="handleSubmit"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div v-for="item in uploadColumns" :key="item.id">
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
            <b-form-group
              v-if="item.type === 'monthPicker'" 
              :label="item.label"
              :label-for="item.key"
            >
            <month-picker-input :no-default="true" @change="handlePickerChange"></month-picker-input>
            </b-form-group>
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
import { TrialBalance } from "../../schema";
import { formatBytes } from "../../Utils/tools";
import api, { uploadFile } from "../../Utils/api";
import moment from 'moment'

const { columns, uploadColumns } = TrialBalance;

export default {
  name: "Upload",
  data: () => ({
    breadcrumb: [
      {
        text: "TRIAL BALANCE",
        href: "#",
      },
      {
        text: "IMPORT",
        active: true,
      },
    ],
    loading: false,
    showModal: false,
    fields: (columns || []).filter((_) => _.viewRecord),
    columns: (columns || []).filter((_) => _.editRecord),
    uploadColumns:  (uploadColumns || []).filter((_) => _.editRecord),
    records: [],
    formType: false,
    formId: false,
    form: {
    },
    currentPage: 1,
    rows: 0,
    perPage: 10,
    role: false,
    user: false
  }),
  mounted() {
    const { user } = this.$store.getters["Setting/authUserState"] || {};
    console.log('user', user)
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
        where: {},
      };

      api
        .post("/uploaded-balance/find-many", reqData)
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.uploaded_balances &&
            res.data.data.pagination
          ) {
            this.records = res.data.data.uploaded_balances || [];
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
    async handlePickerChange(val) {

      console.log('val', val)
      this.form.time_report =  val && val.from && moment(val.from).format('MMM YY')
    },
    async handleSubmit() {
      console.log('form', this.form)
      const files = this.form && this.form.files && [this.form.files];
        files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size),
          })
        );

        const formData = new FormData();
        formData.append("files", files[0]);
        formData.append("path", `upload/staging/UPLOAD-TRIAL-BALANCE/${this.user.id}`);
        formData.append("time_report", this.form.time_report.toUpperCase());

        uploadFile(formData, 'UPLOAD-TRIAL-BALANCE')
          .then((res) => {
            this.makeToast("success", "Success", "Record Created Successfuly.");
            this.getList();
          })
          .catch((Err) => {
            this.makeToast("danger", "Error", "Unable to create record.");
          });
    },
    resetModal() {
      this.showModal = false;
      this.formId = false;
      this.formType = false;
      this.form = {};
      this.columns = (columns || []).filter((_) => _.editRecord);
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
    onClickUpload() {
      this.showModal = true
    }
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