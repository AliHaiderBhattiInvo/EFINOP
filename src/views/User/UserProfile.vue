<template>
<b-container fluid>
    <form @submit.prevent="onSubmit()">
        <b-row>
            <b-col lg="12">
                <div class="iq-edit-list-data">
                    <iq-card>
                        <template v-slot:headerTitle>
                            <h4 class="card-title">User Profile Information</h4>
                        </template>
                        <template v-slot:body>
                            <b-row align-v="center">
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="username">Username:</label>
                                    <b-form-input style="flex: 2" type="text" v-model="user.username" id="username"></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="email">Email:</label>
                                    <b-form-input style="flex: 2" type="email" v-model="unChangedFields.email" id="email" readonly></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="first_name">First Name:</label>
                                    <b-form-input style="flex: 2" type="text" v-model="user.first_name" id="first_name"></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="office_phone_number">Office Telephone:</label>
                                    <b-form-input style="flex: 2" type="text" v-model="user.office_phone_number" id="office_phone_number"></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="middle_name">Middle Name or Initial:</label>
                                    <b-form-input style="flex: 2" type="text" v-model="user.middle_name" id="middle_name"></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="direct_phone_number">Direct Telephone:</label>
                                    <b-form-input style="flex: 2" type="text" v-model="user.direct_phone_number" id="direct_phone_number"></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="last_name">Last Name </label>
                                    <b-form-input style="flex: 2" type="text" v-model="user.last_name" id="last_name"></b-form-input>
                                </b-form-group>
                                <b-form-group class="col-sm-6">
                                    <label style="font-weight: bold; flex: 1" for="mobile_telephone">Mobile Telephone </label>
                                    <b-form-input style="flex: 2" type="text" v-model="unChangedFields.phone_number" id="mobile_telephone" readonly></b-form-input>
                                </b-form-group>
                            </b-row>
                            <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
                            <b-button type="reset" variant="none" class="iq-bg-danger">Cancel</b-button>
                        </template>
                    </iq-card>
                </div>
            </b-col>
        </b-row>
    </form>
</b-container>
</template>

<script>
import api, {
    setAuthToken
} from "../../Utils/api"
import {
    findash
} from "../../config/pluginInit";

export default {
    name: "UserProfile",
    data() {
        return {
            user: {
                username: "",
                first_name: "",
                office_phone_number: "",
                middle_name: "",
                direct_phone_number: "",
                last_name: "",
            },
            unChangedFields: {
                email: "",
                phone_number: ""
            }
        }
    },
    methods: {
        async onSubmit() {
            setAuthToken(`Bearer ${localStorage.getItem("access_token")}`);
            await api
                .post(`/user/update-profile`, {
                    "data": {
                        ...this.user

                    }
                })
                .then((res) => {
                    findash.showSnackbar(
                        "success",
                        "User Profile has been updated successfully."
                    );
                }).catch((error) => {
                    console.log(error)
                })
        },
        async getUserProfileData() {
            setAuthToken(`Bearer ${localStorage.getItem("access_token")}`);
            await api
                .get(`/me`)
                .then((res) => {
                    const {
                        username,
                        first_name,
                        email,
                        office_phone_number,
                        middle_name,
                        direct_phone_number,
                        last_name,
                        phone_number
                    } = res.data.data.user
                    this.user = {
                        username,
                        first_name,
                        office_phone_number,
                        middle_name,
                        direct_phone_number,
                        last_name,
                    }
                    this.unChangedFields = {
                        email,
                        phone_number
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getUserProfileData()
    }
}
</script>

<style>

</style>
