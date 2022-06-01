<template>
  <div>
    <div class="d-flex" style="width: 100%;">
      <b-card style="width: 55%; border-style:solid; border-color: #e9e9e9;">
        <b-card-text>
          <b-row class="d-flex justify-content-between">
            <div class="d-flex">
              <div>
                <b-icon icon="list"></b-icon>
              </div>
              <div class="ml-1">STATISTICS</div>
            </div>
            <div class="d-flex">
              <b-dropdown variant="light" class="drop-down" text="Quarter">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="light" class="drop-down ml-1" text="Q2-2022">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-row>
          <b-row
            class="d-flex"
            style="justify-content: space-between;color: #1E3D73"
          >
            <div>
              <div>2,263,840.2</div>
              <div class="flex-start" style="font-size: 7px">ASSETS</div>
            </div>
            |
            <div>
              <div>163,788</div>
              <div class="flex-start" style="font-size: 7px">ASSETS</div>
            </div>
            |
            <div>
              <div>163,788</div>
              <div class="flex-start" style="font-size: 7px">ASSETS</div>
            </div>
            |
            <div>
              <div>163,788</div>
              <div class="flex-start" style="font-size: 7px">ASSETS</div>
            </div>
            |
            <div>
              <div>163,788</div>
              <div class="flex-start" style="font-size: 7px">ASSETS</div>
            </div>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card
        style="width: 45%; border-style:solid; border-color: #e9e9e9;"
        class="ml-1 text-center"
      >
        <b-card-text>
          <b-row class="d-flex justify-content-between">
            <div class="d-flex">
              <div>
                <b-icon icon="list-ul"></b-icon>
              </div>
              <div class="ml-1">REVIEW REQUEST</div>
            </div>
            <b-button style="color: #1E3D73" variant="light"
              >+View All</b-button
            >
          </b-row>
          <b-row class="mt-1 d-flex justify-content-between">
            <div class="d-flex">
              <b-avatar size="2rem"></b-avatar>
              <div style="color: black; font-weight: bold" class="ml-1">
                Wade Warren
              </div>
            </div>
            <div>May 21, 2020 | 09:00 am</div>
            <div class="d-flex" style="color: #1E3D73">
              <div>
                <b-icon icon="list"></b-icon>
              </div>
              <div class="ml-1">View COA</div>
            </div>
            <div class="d-flex" style="color: #1E3D73">
              <div>
                <b-icon icon="chat-dots"></b-icon>
              </div>
              <div class="ml-1">2</div>
            </div>
            <div class="d-flex">
              <b-button variant="light" style="color: red" class="ml-1"
                >Decline</b-button
              >
              <b-button variant="light" style="color: blue">Accept</b-button>
            </div>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
    <div
      style="width: 100%; height: 100vh; border-style:solid; border-color: #e9e9e9;"
      class="mt-1"
    >
      <div class="d-flex justify-content-between">
        <div class="d-flex mx-2 mt-1">
          <b-button
            @click="changeState('income')"
            variant="light"
            style="color: #1E3D73;"
            :class="activeButton == 'income' ? 'active-btn' : ''"
            >INCOME</b-button
          >
          <div class="mt-1 mx-2">|</div>
          <b-button
            @click="changeState('trial_balance')"
            variant="light"
            style="color: #1E3D73"
            :class="activeButton == 'trial_balance' ? 'active-btn' : ''"
            >TRIAL BALANCE</b-button
          >
          <div class="mt-1 mx-2">|</div>
          <b-button
            @click="changeState('allowable')"
            variant="light"
            style="color: #1E3D73"
            :class="activeButton == 'allowable' ? 'active-btn' : ''"
            >ALLOWABLE</b-button
          >
          <div class="mt-1 mx-2">|</div>
          <b-button
            @click="changeState('non_allowable')"
            variant="light"
            style="color: #1E3D73"
            :class="activeButton == 'non_allowable' ? 'active-btn' : ''"
            >NON-ALLOWABLE</b-button
          >
        </div>
        <div class="d-flex">
          <b-dropdown variant="light" class="drop-down" text="Quarter">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
          <b-dropdown variant="light" class="drop-down ml-1" text="Q2-2022">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <b-table
        :items="items"
        :fields="fields"
        striped
        responsive="sm"
        class="mt-2 mx-2"
        @row-clicked="onRowClicked"
      >
        <template v-slot:cell(ACCOUNT_NAME)="data">
          {{ data.item.ACCOUNT_NAME }}
        </template>
        <template #row-details="{ item }">
          <div>{{ item }}</div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BalanceSheet",
  data() {
    return {
      activeButton: "income",
      items: [
        {
          ACCOUNT_NAME: "Total income",
          ACC_NO: "",
          TYPE: "",
          FOCUS_ID: "",
          SSOI_ID: "",
          ALLOWABLE_NA: "",
          JAN_2022: "223,572",
          FEB_2022: "234,567",
          MAR_2022: "981,234",
          APR_2022: "871,236",
          MAY_2022: "626,262",
          JUN_2022: "666,789",
          array: [
            {
              ACCOUNT_NAME: "Interest Income",
              ACC_NO: "",
              TYPE: "",
              FOCUS_ID: "",
              SSOI_ID: "",
              ALLOWABLE_NA: "",
              JAN_2022: "223,572",
              FEB_2022: "234,567",
              MAR_2022: "981,234",
              APR_2022: "871,236",
              MAY_2022: "626,262",
              JUN_2022: "666,789",
            },
            {
              ACCOUNT_NAME: "Equity Commissions",
              ACC_NO: "",
              TYPE: "",
              FOCUS_ID: "",
              SSOI_ID: "",
              ALLOWABLE_NA: "",
              JAN_2022: "223,572",
              FEB_2022: "234,567",
              MAR_2022: "981,234",
              APR_2022: "871,236",
              MAY_2022: "626,262",
              JUN_2022: "666,789",
            },
            {
              ACCOUNT_NAME: "Mutual Funds",
              ACC_NO: "",
              TYPE: "",
              FOCUS_ID: "",
              SSOI_ID: "",
              ALLOWABLE_NA: "",
              JAN_2022: "223,572",
              FEB_2022: "234,567",
              MAR_2022: "981,234",
              APR_2022: "871,236",
              MAY_2022: "626,262",
              JUN_2022: "666,789",
            },
            {
              ACCOUNT_NAME: "Principle Trade",
              ACC_NO: "",
              TYPE: "",
              FOCUS_ID: "",
              SSOI_ID: "",
              ALLOWABLE_NA: "",
              JAN_2022: "223,572",
              FEB_2022: "234,567",
              MAR_2022: "981,234",
              APR_2022: "871,236",
              MAY_2022: "626,262",
              JUN_2022: "666,789",
            },
          ],
        },
      ],
      fields: [
        { key: "ACCOUNT_NAME", thClass: "header header-width" },
        { key: "ACC_NO", thClass: "header" },
        { key: "TYPE", thClass: "header" },
        { key: "FOCUS_ID", thClass: "header" },
        { key: "SSOI_ID", thClass: "header" },
        { key: "ALLOWABLE_NA", thClass: "header" },
        { key: "JAN_2022", thClass: "header-month" },
        { key: "FEB_2022", thClass: "header-month" },
        { key: "MAR_2022", thClass: "header-month" },
        { key: "APR_2022", thClass: "header-month" },
        { key: "MAY_2022", thClass: "header-month" },
        { key: "JUN_2022", thClass: "header-month" },
      ],
    };
  },
  methods: {
    changeState(val) {
      return (this.activeButton = val);
    },
    onRowClicked(item) {
      console.log("method called", item);
      // item.detailsShowing = !item.detailsShowing
      // const { expanded_rows } = this;
      // const { uuid } = item;

      // this.$set(expanded_rows, uuid, !expanded_rows[uuid]);
    },
  },
};
</script>

<style>
.drop-down :hover {
  background-color: white;
  color: black;
}
.active-btn {
  background-color: #e9ecef !important;
}
.header {
  background-color: rgb(149, 147, 147) !important;
  color: white !important;
}
.header-month {
  background-color: #1e3d73 !important;
  color: white !important;
}
.header-width {
  width: 25%;
}
</style>
