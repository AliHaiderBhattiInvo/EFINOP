<template>
  <div class="container-fluid">
    <!-- Page Header Starts -->
    <div class="header">
      <div>
        <b-breadcrumb :items="breadcrumb" style="margin: 0px" />
      </div>
      <div>
        <h3>MAP FOCUS PART IIA</h3>
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
import { Focus } from "../../schema";
import { resolveColumns } from "../../Utils/tools";
import api from "../../Utils/api";

const { columns } = Focus;

const fields = resolveColumns(columns);

export default {
  name: "Focus",
  data: () => ({
    breadcrumb: [
      {
        text: "CHART OF ACCOUNTS",
        href: "#",
      },
      {
        text: "MAP FOCUS PART IIA",
        active: true,
      },
    ],
    loading: false,
    showModal: false,
    fields: (fields || []).filter((_) => _.viewRecord),
    columns: (fields || []).filter((_) => _.editRecord),
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
        .post(`/focus-setting/find-many`, reqData)
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.focus_settings &&
            res.data.data.pagination
          ) {
            this.records = res.data.data.focus_settings || [];
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
