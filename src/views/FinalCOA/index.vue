<template>
  <div class="container-fluid">
    <!-- Page Header Starts -->
    <div class="header">
      <div>
        <b-breadcrumb :items="breadcrumb" style="margin: 0px" />
      </div>
      <div>
        <h3>Final COA</h3>
      </div>
    </div>
    <!-- Page Header Ends -->
    <!-- Table List Start -->
    <div class="pt-5">
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
          <div>
            {{
              data &&
              data.item &&
              data.item.focus_setting &&
              data.item.focus_setting.focus_id
            }}
          </div>
        </template>
        <template #cell(ssoi_setting)="data">
          <div>
            {{
              data &&
              data.item &&
              data.item.ssoi_setting &&
              data.item.ssoi_setting.ssoi_id
            }}
          </div>
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
      <div class="pagination">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          @change="handlePagination"
          aria-controls="reportDetails-table"
        ></b-pagination>
      </div>
    </div>
    <!-- Table List Ends -->
  </div>
</template>
<script>
import { findash } from "../../config/pluginInit";
import { FinalCOA } from "../../schema";
import api from "../../Utils/api";

const { columns } = FinalCOA;

export default {
  name: "COA",
  data: () => ({
    breadcrumb: [
      {
        text: "CHART OF ACCOUNTS",
        href: "#",
      },
      {
        text: "FINAL COA",
        active: true,
      },
    ],
    loading: false,
    showModal: false,
    fields: (columns || []).filter((_) => _.viewRecord),
    columns: (columns || []).filter((_) => _.editRecord),
    records: [],
    items: [{ message: "Foo" }, { message: "Bar" }],
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
        .post(`/coa/find-many`, reqData)
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.coas &&
            res.data.data.pagination
          ) {
            this.records = res.data.data.coas || [];
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
</style>
