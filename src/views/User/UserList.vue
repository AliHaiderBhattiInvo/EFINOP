<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">User List</h4>
          </template>
          <!-- <template v-slot:headerAction>
            <b-button variant="primary" :to="{ name: 'user.add' }">Add User</b-button>
          </template>-->
          <template v-slot:body>
            <!-- <ag-grid-vue id="ag-grid" class="ag-theme-material border height-500"
                         :columnDefs="columnDefs"
                         :rowData="rowData"
                         :floatingFilter="true"
                         :modules="modules"
                         rowSelection="multiple" >
            </ag-grid-vue>-->
            <div class="table-responsive">
              <div class="row justify-content-between">
                <div class="col-sm-12 col-md-6">
                  <div id="user_list_datatable_info" class="dataTables_filter">
                    <form class="mr-3 position-relative">
                      <div class="form-group mb-0">
                        <input
                          type="search"
                          class="form-control"
                          id="exampleInputSearch"
                          placeholder="Search"
                          aria-controls="user-list-table"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="user-list-files d-flex float-right">
                    <a class="iq-bg-primary" href="#">Print</a>
                    <a class="iq-bg-primary" href="#">Excel</a>
                    <a class="iq-bg-primary" href="#">Pdf</a>
                  </div>
                </div>
              </div>
              <b-table
                id="user-list-table"
                :items="userList"
                :fields="userFields"
                class="table-striped table-bordered mt-4"
                role="grid"
                aria-describedby="user-list-page-info"
              >
                <template v-slot:cell(Profile)="data">
                  <b-img :src="data.value" rounded alt="img-flaf" class="img-fluid avatar-40" />
                </template>
                <template v-slot:cell(Status)="data1">
                  <span :class="'badge '+ data1.value.colorClass">{{ data1.value.title }}</span>
                </template>
                <template v-slot:cell(Action)>
                  <div class="flex align-items-center list-user-action">
                    <a
                      class="iq-bg-primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Add"
                      href="#"
                    >
                      <i class="ri-user-add-line"></i>
                    </a>
                    <a
                      class="iq-bg-primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Edit"
                      href="#"
                    >
                      <i class="ri-pencil-line"></i>
                    </a>
                    <a
                      class="iq-bg-primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Delete"
                      href="#"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </a>
                  </div>
                </template>
              </b-table>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
export default {
  name: 'UserList',
  mounted () {
    findash.index()
  },
  data () {
    return {
      userFields: [
        'Profile',
        'Name',
        'Contact',
        'Email',
        'Country',
        'Status',
        'Company',
        'joinDate',
        'Action'
      ],
      userList: [
        {
          Profile: require('../../assets/images/user/01.jpg'),
          Name: 'Anna Sthesia',
          Contact: '(760) 756 7568',
          Email: 'annasthesia@gmail.com',
          Country: 'USA',
          Status: { colorClass: 'iq-bg-primary', title: 'Active' },
          Company: 'Acme Corporation',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/02.jpg'),
          Name: 'Brock Lee',
          Contact: '+62 5689 458 658',
          Email: 'brocklee@gmail.com',
          Country: 'Indonesia',
          Status: { colorClass: 'iq-bg-primary', title: 'Active' },
          Company: 'Soylent Corp',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/03.jpg'),
          Name: 'Dan Druff',
          Contact: '+55 6523 456 856',
          Email: 'dandruff@gmail.com',
          Country: 'Brazil',
          Status: { colorClass: 'iq-bg-warning', title: 'Pending' },
          Company: 'Umbrella Corporation',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/04.jpg'),
          Name: 'Hans Olo',
          Contact: '+91 2586 253 125',
          Email: 'hansolo@gmail.com',
          Country: 'India',
          Status: { colorClass: 'iq-bg-danger', title: 'Inactive' },
          Company: 'Vehement Capital',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/05.jpg'),
          Name: 'Lynn Guini',
          Contact: '+27 2563 456 589',
          Email: 'lynnguini@gmail.com',
          Country: 'Africa',
          Status: { colorClass: 'iq-bg-primary', title: 'Active' },
          Company: 'Massive Dynamic',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/06.jpg'),
          Name: 'Eric Shun',
          Contact: '+55 25685 256 589',
          Email: 'ericshun@gmail.com',
          Country: 'Brazil',
          Status: { colorClass: 'iq-bg-warning', title: 'Pending' },
          Company: 'Globex Corporation',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/07.jpg'),
          Name: 'aaronottix',
          Contact: '(760) 765 2658',
          Email: 'budwiser@ymail.com',
          Country: 'USA',
          Status: { colorClass: 'iq-bg-info', title: 'Hold' },
          Company: 'Acme Corporation',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/08.jpg'),
          Name: 'Marge Arita',
          Contact: '+27 5625 456 589',
          Email: 'margearita@gmail.com',
          Country: 'Africa',
          Status: { colorClass: 'iq-bg-success', title: 'Complite' },
          Company: 'Vehement Capital',
          joinDate: '2019/12/01',
          Action: true
        },
        {
          Profile: require('../../assets/images/user/09.jpg'),
          Name: 'Bill Dabear',
          Contact: '+55 2563 456 589',
          Email: 'billdabear@gmail.com',
          Country: 'Brazil',
          Status: { colorClass: 'iq-bg-primary', title: 'Active' },
          Company: 'Massive Dynamic',
          joinDate: '2019/12/01',
          Action: true
        }
      ]
    }
  },
  method: {}
}
</script>
