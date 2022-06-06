<template>
  <b-container fluid>
    <div class="d-flex flex-wrap w-100">
      <b-card class="stat-card card-common">
        <b-card-text>
          <b-row class="d-flex flex-wrap justify-content-between pl-3 pr-2">
            <div class="d-flex">
              <div>
                <img
                  :src="require('../../assets/images/Vector.svg')"
                  class="svg-icon"
                />
              </div>
              <div class="ml-2">STATISTICS</div>
            </div>
            <div class="d-flex">
              <b-form-select
                v-model="selected"
                :options="options2"
                size="sm"
                class="w-100px border-none"
              ></b-form-select>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
                class="ml-1 w-100px border-none"
              ></b-form-select>
            </div>
          </b-row>
          <b-row class="d-flex flex-wrap statictics-font px-3">
            <div>
              <div>2,263,840.2</div>
              <div class="flex-start sub-class">ASSETS</div>
            </div>
            <div class="slash-color">|</div>
            <div>
              <div>163,788</div>
              <div class="flex-start sub-class">ASSETS</div>
            </div>
            <div class="slash-color">|</div>
            <div>
              <div>163,788</div>
              <div class="flex-start sub-class">ASSETS</div>
            </div>
            <div class="slash-color">|</div>
            <div>
              <div>163,788</div>
              <div class="flex-start sub-class">ASSETS</div>
            </div>
            <div class="slash-color">|</div>
            <div>
              <div>163,788</div>
              <div class="flex-start sub-class">ASSETS</div>
            </div>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="ml-1 px-3 text-center request-card card-common">
        <b-card-text>
          <b-row class="d-flex flex-wrap justify-content-between">
            <div class="d-flex">
              <div>
                <img
                  :src="require('../../assets/images/Vector1.svg')"
                  class="svg-icon"
                />
              </div>
              <div class="ml-2">REVIEW REQUEST</div>
            </div>
            <b-button class="blue-color" variant="light">+View All</b-button>
          </b-row>
          <b-row class="mt-1 d-flex flex-wrap justify-content-between">
            <div class="d-flex">
              <b-avatar size="2rem"></b-avatar>
              <div class="ml-1 black">
                Wade Warren
              </div>
            </div>
            <div class="font-12">May 21, 2020 | 09:00 am</div>
            <div class="d-flex blue-color">
              <div>
                <img
                  :src="require('../../assets/images/Vector1.svg')"
                  class="svg-icon"
                />
              </div>
              <div class="ml-1 mtop-2 font-12">View COA</div>
            </div>
            <div class="d-flex blue-color">
              <div>
                <b-icon icon="chat-dots"></b-icon>
              </div>
              <div class="ml-1">2</div>
            </div>
            <div class="d-flex">
              <b-button variant="light" class="ml-1 red">Decline</b-button>
              <b-button variant="light" class="blue">Accept</b-button>
            </div>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
    <div class="mt-1 w-100 table-outline">
      <div class="d-flex px-2 flex-wrap justify-content-between w-100">
        <div class="d-flex flex-wrap mx-2 mt-1">
          <b-button
            @click="changeState('income')"
            variant="light"
            class="blue-color"
            :class="activeButton == 'income' ? 'active-btn' : ''"
            >INCOME</b-button
          >
          <div class="mt-1 mx-2">|</div>
          <b-button
            @click="changeState('trial_balance')"
            variant="light"
            class="blue-color"
            :class="activeButton == 'trial_balance' ? 'active-btn' : ''"
            >TRIAL BALANCE</b-button
          >
          <div class="mt-1 mx-2">|</div>
          <b-button
            @click="changeState('allowable')"
            variant="light"
            class="blue-color"
            :class="activeButton == 'allowable' ? 'active-btn' : ''"
            >ALLOWABLE</b-button
          >
          <div class="mt-1 mx-2">|</div>
          <b-button
            @click="changeState('non_allowable')"
            variant="light"
            class="blue-color"
            :class="activeButton == 'non_allowable' ? 'active-btn' : ''"
            >NON-ALLOWABLE</b-button
          >
        </div>
        <div class="d-flex mt-2">
          <b-form-select
            v-model="selected"
            :options="options2"
            size="sm"
            class="w-100px border-none"
          ></b-form-select>
          <!-- <b-dropdown variant="light" class="drop-down" text="Quarter">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown> -->
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="ml-1 w-100px border-none"
          ></b-form-select>
          <!-- <b-dropdown variant="light" class="drop-down ml-1" text="Q2-2022">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown> -->
        </div>
      </div>
      <b-table
        :items="items"
        :fields="fields"
        fixed="fixed"
        class="mt-2 px-2 table-height"
        details-td-class="px-0"
        tbody-tr-class="table-slots"
        sticky-header
        @row-clicked="onRowClicked"
      >
        <template v-slot:cell(ACCOUNT_NAME)="data">
          <div class="m-0 p-0 w-180 d-flex">
            <div class="ml-n2">
              <b-icon
                :icon="
                  data.item._showDetails
                    ? 'caret-down-fill'
                    : 'caret-right-fill'
                "
                class="mr-1 mb-1 icon-dimension"
              ></b-icon>
            </div>
            <div>{{ data.item.ACCOUNT_NAME }}</div>
          </div>
        </template>
        <template v-slot:cell(ACC_NO)="data">
          <div class="without-month-slots">{{ data.item.ACC_NO }}</div>
        </template>
        <template v-slot:cell(TYPE)="data">
          <div class="without-month-slots">{{ data.item.TYPE }}</div>
        </template>
        <template v-slot:cell(FOCUS_ID)="data">
          <div class="without-month-slots">{{ data.item.FOCUS_ID }}</div>
        </template>
        <template v-slot:cell(SSOI_ID)="data">
          <div class="without-month-slots">{{ data.item.SSOI_ID }}</div>
        </template>
        <template v-slot:cell(ALLOWABLE_NA)="data">
          <div class="without-month-slots">{{ data.item.ALLOWABLE_NA }}</div>
        </template>
        <template v-slot:cell(JAN_2022)="data">
          {{ data.item.JAN_2022 }}
        </template>
        <template v-slot:cell(FEB_2022)="data">
          {{ data.item.FEB_2022 }}
        </template>
        <template v-slot:cell(MAR_2022)="data">
          {{ data.item.MAR_2022 }}
        </template>
        <template v-slot:cell(APR_2022)="data">
          {{ data.item.APR_2022 }}
        </template>
        <template v-slot:cell(MAY_2022)="data">
          {{ data.item.MAY_2022 }}
        </template>
        <template v-slot:cell(JUN_2022)="data">
          {{ data.item.JUN_2022 }}
        </template>
        <template #row-details="{ item }">
          <div class="w-100 p-0 m-0">
            <b-table
              :items="item.array"
              :fields="fields"
              fixed="fixed"
              striped
              class="px-0 py-0 mx-0 my-0"
              thead-class="d-none"
              tbody-tr-class="px-0"
              ><template v-slot:cell(ACCOUNT_NAME)="data">
                <div class="m-0 w-180">
                  {{ data.item.ACCOUNT_NAME }}
                </div>
              </template>
              <template v-slot:cell(ACC_NO)="data">
                <div class="without-month-slots">{{ data.item.ACC_NO }}</div>
              </template>
              <template v-slot:cell(TYPE)="data">
                <div class="without-month-slots">{{ data.item.TYPE }}</div>
              </template>
              <template v-slot:cell(FOCUS_ID)="data">
                <div class="without-month-slots">{{ data.item.FOCUS_ID }}</div>
              </template>
              <template v-slot:cell(SSOI_ID)="data">
                <div class="without-month-slots">{{ data.item.SSOI_ID }}</div>
              </template>
              <template v-slot:cell(ALLOWABLE_NA)="data">
                <div class="without-month-slots">
                  {{ data.item.ALLOWABLE_NA }}
                </div>
              </template>
            </b-table>
          </div>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "BalanceSheet",
  data() {
    return {
      fixed: false,
      activeButton: "income",
      expanded_rows: {},
      selected: null,
      options: [
        { value: null, text: "Q2-2022" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      options2: [
        { value: null, text: "Quarter" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      items: [
        {
          id: "uu123",
          _showDetails: undefined,
          ACCOUNT_NAME: "Total income",
          ACC_NO: "123",
          TYPE: "CUR",
          FOCUS_ID: "12",
          SSOI_ID: "12",
          ALLOWABLE_NA: "N/A",
          JAN_2022: "223,572",
          FEB_2022: "234,567",
          MAR_2022: "981,234",
          APR_2022: "871,236",
          MAY_2022: "626,262",
          JUN_2022: "666,789",
          array: [
            {
              ACCOUNT_NAME: "Interest Income",
              ACC_NO: "123",
              TYPE: "SAV",
              FOCUS_ID: "21",
              SSOI_ID: "21",
              ALLOWABLE_NA: "N/A",
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
            {
              ACCOUNT_NAME: "Parent Employee",
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
        {
          id: "axbj876",
          _showDetails: undefined,
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
            {
              ACCOUNT_NAME: "Parent Employee",
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
        { key: "ACCOUNT_NAME", thClass: "header" },
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
      item._showDetails = !item._showDetails;
    },
  },
};
</script>

<style>
.red {
  color: red !important;
}
.blue {
  color: blue !important;
}
.black {
  color: black;
  font-weight: bold;
}
.card-common {
  border-style: solid !important;
  border-color: #e9e9e9 !important;
}
.stat-card {
  width: 730px !important;
}
.request-card {
  width: 618px !important;
}
.drop-down :hover {
  background-color: white;
  color: black;
}
.active-btn {
  background-color: #e9ecef !important;
  font-weight: bold !important;
}
.header {
  background-color: rgb(149, 147, 147) !important;
  color: white !important;
  font-size: 10px !important;
}
.header-month {
  background-color: #1e3d73 !important;
  color: white !important;
  font-size: 10px !important ;
}
.hidden-header {
  visibility: hidden !important;
}
.slot-width {
  max-width: 340px !important;
}
.icon-dimension {
  height: 7px !important;
  width: 7px !important;
}
.svg-icon {
  height: 15px !important;
  width: 15px !important;
}
.statictics-font {
  justify-content: space-between;
  color: #1e3d73;
  font-size: 24px !important;
  font-family: "Manrope" !important;
  font-weight: 700 !important;
}
.slash-color {
  color: #e6e6e6 !important;
}
.sub-class {
  font-size: 10px;
  margin-top: -7px !important;
  font-weight: 400 !important;
}
.w-100 {
  width: 100% !important;
}
.w-100px {
  width: 100px !important;
}
.w-180 {
  width: 180px !important;
}
.blue-color {
  color: #1e3d73 !important;
}
.table-outline {
  height: 72vh !important ;
  border-style: solid;
  border-color: #e9e9e9;
}
.table-slots {
  color: #1e3d73 !important;
  background-color: #e9ecef;
  font-weight: 700 !important;
}
.without-month-slots {
  color: #212529;
  font-weight: 400 !important;
}
.border-none {
  border: none !important;
}
.b-table-sticky-header {
  max-height: 645px !important;
  overflow: auto !important;
}
.font-12 {
  font-size: 12px !important;
}
.mtop-2 {
  margin-top: 2px !important;
}
</style>
