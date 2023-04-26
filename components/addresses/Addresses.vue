<template>
  <div>
    <div class="container">
      <h4 class="mb-4">آدرس ها و مشخصات</h4>
      <div class="row">
        <div class="col-12">
          <div v-if="loading" class="loading-content">
            <p>درحال دریافت اطلاعات<b-spinner class="loading-spiner" small variant="success"></b-spinner></p>
          </div>
          <b-card class="mt-5" v-if="index <=5" v-for="(item , index) in userAddresses" :key="index">
            <b-card-text class="p-3">
              <div class="row">
                <div
                  class="
                    col-12
                    address-parts
                    col-md-4
                    d-flex
                    flex-row flex-md-column
                    justify-content-between
                  "
                >
                  <label>نام</label>
                  <span class="mt-0 mt-md-3">{{item.first_name}}</span>
                </div>
                <div
                  class="
                    col-12
                    address-parts
                    col-md-4
                    d-flex
                    flex-row flex-md-column
                    justify-content-between
                    mt-3 mt-md-0
                  "
                >
                  <label>نام خانوادگی</label>
                  <span class="mt-0 mt-md-3">{{item.last_name}}</span>
                </div>
                <div
                  class="
                    col-12
                    address-parts
                    col-md-4
                    d-flex
                    flex-row flex-md-column
                    justify-content-between
                    mt-3 mt-md-0
                  "
                >
                  <label>شماره تلفن همراه</label>
                  <span class="mt-0 mt-md-3">{{item.coordinate_mobile}}</span>
                </div>
                <div
                  class="
                    col-12
                    address-parts
                    col-md-4
                    d-flex
                    flex-row flex-md-column
                    justify-content-between
                    mt-3
                  "
                >
                  <label>شماره تلفن ثابت</label>
                  <span class="mt-0 mt-md-3">{{item.coordinate_phone_number}}</span>
                </div>
                <div
                  class="
                    col-12
                    address-parts
                    col-md-4
                    d-flex
                    flex-row flex-md-column
                    justify-content-between
                    mt-3
                  "
                >
                  <label>جنسیت</label>
                  <span class="mt-0 mt-md-3">{{item.gender == '' ? '--' : item.gender}}</span>
                </div>
                <div
                  class="
                    col-12
                    address-parts
                    user-address
                    col-md-4
                    d-flex
                    flex-row flex-md-column
                    justify-content-between
                    mt-3
                  "
                >
                  <label>آدرس</label>
                  <span class="mt-0 mt-md-3">{{ item.address }}</span>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddressesMixins from "./_mixins/AddressesMixins";
import AddressesVariables from "./_mixins/AddressesVariables";
export default {
  mixins: [AddressesMixins, AddressesVariables],
  async created() {
    await this.getAddresses();
  },

  data() {
    return {
      loading: true,
      userAddresses : [] , 
    };
  },
  methods: {
    async getAddresses() {
      try {
        const result = await this.getData();
        if (result) {
          this.userAddresses = result;
          this.$swal({
            titleText: "اطلاعات با موفقیت دریافت شد",
            icon: "success",
          });
          this.loading = false;
        } else {
          this.$swal({
            titleText: "خطا در خواندن اطلاعات",
            icon: "error",
          });
        }
      } catch (error) {
        this.$swal({
          titleText: "خطا در خواندن اطلاعات",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style
  lang="scss"
  src="~/assets/styles/userAddress/addresses.scss"
  scoped
></style>
