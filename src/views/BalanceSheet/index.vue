<template>
  <div class="d-flex" style="width: 100%;">
    <b-card style="width: 55%;" border-variant="light">
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
    <b-card style="width: 45%;" class="ml-1 text-center">
      <b-card-text>
        <b-row class="d-flex justify-content-between">
          <div class="d-flex">
            <div>
              <b-icon icon="list-ul"></b-icon>
            </div>
            <div class="ml-1">REVIEW REQUEST</div>
          </div>
          <b-button style="color: #1E3D73" variant="light">+View All</b-button>
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
</template>

<script>
export default {
  name: "BalanceSheet",
};
</script>

<style>
.drop-down :hover {
  background-color: white;
  color: black;
}
</style>
