<template>
  <div>
    <div class="container">
      <i @click="$router.push('/register-address')" class="mdi location-page-arrow mdi-arrow-right"></i>
      <h4 class="mb-4 d-inline-block">انتخاب آدرس</h4>
      <div class="row">
        <div class="col-12">
          <div>
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
    <div class="submit-form">
      <b-button
        @click="submitUserData"
        class="btn btn-success submit-btn btn-lg"
        >ثبت و ادامه<b-spinner v-if="loading" class="loading-spiner register-address-loading"  small variant="success"></b-spinner></b-button
      >
    </div>
  </div>
</template>

<script>
import LocationMixins from "./_mixins/LocationMixins";
import LocationVariables from "./_mixins/LocationVariables";
export default {
  mixins: [LocationMixins, LocationVariables],
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    async submitUserData() {
      try {
        let data;
        this.loading = true;
        let initialUserData = localStorage.getItem("user_new_address");
        if (initialUserData) {
          data = JSON.parse(initialUserData);
          const result = this.submitData(data);
          if (result) {
            localStorage.removeItem('user_new_address');
            this.$swal({
            titleText: "عملیات با موفقیت انجام شد",
            icon: "success",
          }); 
            setTimeout(() => {
              this.$router.push('/success');
            }, 1000);
          }else{
            this.$swal({
            titleText: "ثبت اطلاعات با خطا مواجه شد لطفا دوباره تلاش کنید",
            icon: "error",
          }); 
          }
        } else {
          this.$swal({
            titleText: "لطفا برای تکمیل اطلاعات خود به صفحه قبل بروید!",
            icon: "error",
          });
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" src="~/assets/styles/registerAddress/register.scss"></style>
