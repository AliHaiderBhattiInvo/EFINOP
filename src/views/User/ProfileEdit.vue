<template>
  <b-container fluid>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <b-row>
          <b-col lg="12">
            <div class="iq-edit-list-data">
              <iq-card>
                <template v-slot:headerTitle>
                  <h4 class="card-title">Profile Information</h4>
                </template>
                <template v-slot:body>
                  <b-row align-v="center">
                    <b-form-group class="col-sm-12 profile-group">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="company_name"
                        >COMPANY NAME:</label
                      >
                      <b-form-input
                        style="flex: 5"
                        type="text"
                        v-model="company.company_name"
                        id="company_name"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      class="col-sm-12"
                      style="display: flex; align-items: center"
                    >
                      <label
                        style="font-weight: bold; flex: 1"
                        for="address_one"
                        >ADDRESS 1:</label
                      >
                      <b-form-textarea
                        name="address_one"
                        v-model="company.address_one"
                        style="line-height: 22px; flex: 5"
                        rows="5"
                      ></b-form-textarea>
                    </b-form-group>

                    <b-form-group
                      class="col-sm-12"
                      style="display: flex; align-items: center"
                    >
                      <label
                        style="font-weight: bold; flex: 1"
                        for="address_two"
                        >ADDRESS 2:</label
                      >
                      <b-form-textarea
                        name="address_two"
                        v-model="company.address_two"
                        style="line-height: 22px; flex: 5"
                        rows="5"
                      ></b-form-textarea>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label style="font-weight: bold; flex: 1" for="city"
                        >CITY:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.city"
                        id="city"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label style="font-weight: bold; flex: 1" for="state"
                        >STATE:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.state"
                        id="state"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="postal_code"
                        >POSTAL CODE:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.postal_code"
                        id="postal_code"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label style="font-weight: bold; flex: 1" for="country"
                        >COUNTRY:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.country"
                        id="country"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label style="font-weight: bold; flex: 1" for="crd_number"
                        >FINRA CRD NO.:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.crd_number"
                        id="crd_number"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="sec_file_number"
                        >SEC FILE NO.:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.sec_file_number"
                        id="sec_file_number"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-12">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="min_net_capital_req"
                        >MINIMUM NET CAPITAL REQUIREMENT:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.min_net_capital_req"
                        id="min_net_capital_req"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6" v-slot="{ ariaDescribedby }">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="report_frequency"
                        >FILING FREQUENCY:</label
                      >
                      <div
                        style="
                          display: flex;
                          flex: 2;
                          justify-content: space-around;
                        "
                      >
                        <b-form-radio
                          v-model="company.report_frequency"
                          :aria-describedby="ariaDescribedby"
                          name="report_frequency"
                          value="monthly"
                          >Monthly</b-form-radio
                        >
                        <b-form-radio
                          v-model="company.report_frequency"
                          :aria-describedby="ariaDescribedby"
                          name="report_frequency"
                          value="quarterly"
                          >Quarterly</b-form-radio
                        >
                      </div>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="fiscal_end_date"
                        >FISCAL YEAR END DATE:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.fiscal_end_date"
                        id="fiscal_end_date"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      class="col-sm-12"
                      v-slot="{ ariaDescribedby }"
                    >
                      <label
                        style="font-weight: bold; padding-right: 25px"
                        for="is_disclosed_broker"
                        >IS THE FIRM A FULLY DISCLOSED BROKER-DEALER?</label
                      >
                      <div style="display: flex; justify-content: space-around">
                        <b-form-radio
                          style="padding-right: 25px"
                          v-model="company.is_disclosed_broker"
                          :aria-describedby="ariaDescribedby"
                          name="is_disclosed_broker"
                          value="yes"
                          >Yes</b-form-radio
                        >
                        <b-form-radio
                          v-model="company.is_disclosed_broker"
                          :aria-describedby="ariaDescribedby"
                          name="is_disclosed_broker"
                          value="no"
                          >No</b-form-radio
                        >
                      </div>
                    </b-form-group>

                    <b-form-group class="col-sm-12">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="clearing_firm_name"
                        >NAME OF THE FIRM'S CLEARING FIRM:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.clearing_firm_name"
                        id="clearing_firm_name"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="primary_contact_first_name"
                        >PRIMARY CONTACT FIRST NAME:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.primary_contact_first_name"
                        id="primary_contact_first_name"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="primary_contact_middle_name"
                        >MIDDLE NAME:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.primary_contact_middle_name"
                        id="primary_contact_middle_name"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="primary_contact_last_name"
                        >PRIMARY CONTACT LAST NAME:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.primary_contact_last_name"
                        id="primary_contact_last_name"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="primary_contact_office_phone_number"
                        >TELEPHONE NO.:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="text"
                        v-model="company.primary_contact_office_phone_number"
                        id="primary_contact_office_phone_number"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label
                        style="font-weight: bold; flex: 1"
                        for="primary_contact_email"
                        >PRIMARY CONTACT EMAIL:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="email"
                        v-model="company.primary_contact_email"
                        id="primary_contact_email"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group class="col-sm-6">
                      <label style="font-weight: bold; flex: 1" for="domain"
                        >DOMAIN:</label
                      >
                      <b-form-input
                        style="flex: 2"
                        type="url"
                        v-model="company.domain"
                        id="domain"
                      ></b-form-input>
                    </b-form-group>
                  </b-row>
                  <b-button type="submit" variant="primary" class="mr-2"
                    >Submit</b-button
                  >
                  <b-button type="reset" variant="none" class="iq-bg-danger"
                    >Cancel</b-button
                  >
                </template>
              </iq-card>
            </div>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
  </b-container>
</template>
<script>
import { findash } from "../../config/pluginInit";
import api, { setAuthToken } from "../../Utils/api";

export default {
  name: "ProfileEdit",
  mounted() {
    findash.index();
    this.getProfileData();
  },
  data() {
    return {
      company: {
        id: localStorage.getItem("user_id"),
        company_name: "",
        address_one: "",
        address_two: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        finra_card_no: "",
        sec_file_number: "",
        min_net_capital_req: "",
        report_frequency: "",
        fiscal_end_date: "",
        is_disclosed_broker: "",
        clearing_firm_name: "",
        primary_contact_first_name: "",
        primary_contact_middle_name: "",
        primary_contact_last_name: "",
        primary_contact_email: "",
        primary_contact_office_phone_number: "",
      },
      currentPassword: ""
    };
  },
  methods: {
    onSubmit() {
      const access_token = localStorage.getItem("access_token");
      setAuthToken(access_token);

      api
        .post(`/company/update`, this.company)
        .then((res) => {
          findash.showSnackbar(
            "success",
            "Company Profile has been updated successfully."
          );
        })
        .catch((error) => {
          const Err =
            (error.response &&
              error.response.data &&
              error.response.data.error) ||
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            "Unable to update company profile data.";
          findash.showSnackbar("error", Err);
        });
    },
    previewImage: function (event) {
      const input = event.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.company.profile_image = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    async getProfileData() {
      setAuthToken(`Bearer ${localStorage.getItem("access_token")}`);
      await api
        .get(`company`)
        .then((res) => {
          console.log(res)
          if (res && res.data && res.data.data) {
            this.company = res.data.data.company_info;
          } else {
            findash.showSnackbar("error", "Unable to fetch data.");
          }
        })
        .catch((error) => {
          const Err =
            (error.response &&
              error.response.data &&
              error.response.data.error) ||
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            "Unable to fetch data.";
          findash.showSnackbar("error", Err);
        });
    },
    changePassword: function () {},
  },
};
</script>
<style>
.bv-no-focus-ring {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
