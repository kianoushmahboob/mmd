<template>
  <div>
    <div class="container">
      <h4 class="mb-4">ثبت آدرس</h4>
      <div class="row">
        <div class="col-12">
          <b-card>
            <b-card-text class="p-3">
              <h5 class="mb-4">لطفا مشخصات و آدرس خود را وارد کنید</h5>
              <b-form @submit.stop.prevent>
                <div class="row">
                  <div class="col-12 register-fields col-md-4 mt-3">
                    <label for="feedback-user">نام</label>
                    <b-form-input
                      placeholder="مثال : محمدرضا"
                      v-model="data.first_name"
                      :state="validateFirstName"
                      id="feedback-user"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validateFirstName">
                      لطفا نام خود را وارد کنید
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validateFirstName">
                    </b-form-valid-feedback>
                  </div>
                  <div class="col-12 register-fields col-md-4 mt-3">
                    <label for="feedback-user">نام خانوادگی</label>
                    <b-form-input
                      placeholder="مثال : دل آشوب"
                      v-model="data.last_name"
                      :state="validateLastName"
                      id="feedback-user"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validateLastName">
                      نام خانوادگی باید حداقل دارای سه کاراکتر باشد
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validateLastName">
                    </b-form-valid-feedback>
                  </div>
                  <div class="col-12 register-fields col-md-4 mt-3">
                    <label for="feedback-user">شماره تلفن همراه</label>
                    <b-form-input
                      placeholder="مثال : 09132226666"
                      v-model="data.coordinate_mobile"
                      :state="phoneNumber"
                      id="feedback-user"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="phoneNumber">
                      شماره وارد شده صحیح نمی باشد
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="phoneNumber">
                      
                    </b-form-valid-feedback>
                  </div>

                  <div class="col-12 register-fields col-md-4 mt-3">
                    <label for="feedback-user"
                      >شماره تلفن ثابت <small>(اختیاری)</small></label
                    >
                    <b-form-input
                      placeholder="مثال : 09132226666"
                      v-model="data.coordinate_phone_number"
                      :state="validation"
                      id="feedback-user"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation">
                      Your user ID must be 5-12 characters long.
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validation">
                      Looks Good.
                    </b-form-valid-feedback>
                  </div>

                  <div class="col-12 register-fields col-md-8 mt-3">
                    <label for="feedback-user">آدرس</label>
                    <b-form-input
                      placeholder="مثال : خیابان ادیب؛ کوچه زرین..."
                      v-model="data.address"
                      :state="validateAddress"
                      id="feedback-user"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validateAddress">
                      آدرس باید حداقل بیش از سه کاراکتر باشد
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validateAddress">
                    </b-form-valid-feedback>
                  </div>

                  <div
                    class="
                      col-12
                      register-fields
                      mt-3
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <label for="">جنسیت </label>
                    <b-form-group v-slot="{ ariaDescribedby }">
                      <b-form-radio-group
                        id="radio-group-1"
                        v-model="data.gender"
                        :options="options"
                        :aria-describedby="ariaDescribedby"
                        name="radio-options"
                      ></b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
    <div class="submit-form">
      <b-button
        @click="saveUserData()"
        class="btn btn-success submit-btn btn-lg"
        >ثبت و ادامه</b-button
      >
    </div>
  </div>
</template>

<script>
import RegisterMixins from "./_mixins/RegisterMixins";
import RegisterVariables from "./_mixins/RegisterVariables";
export default {
  mixins: [RegisterMixins, RegisterVariables],
  data() {
    return {
      options: [
        { text: "خانم", value: "female" },
        { text: "آقا", value: "male" },
      ],
    };
  },

  mounted() {
    let initialUserData = localStorage.getItem("user_new_address");
    if (initialUserData) {
      this.data = JSON.parse(initialUserData);
      this.$swal({
        titleText: "اطلاعات با موفقیت بازیابی شد",
        icon: "success",
      });
    } else {
      return false;
    }
  },

  methods: {
    async saveUserData() {
      try {
        if (this.validateAddress && this.validateLastName && this.phoneNumber && this.validateFirstName) {
          const result = await this.saveData(this.data);
          if (result) {
            this.$swal({
              titleText: "اطلاعات با موفقیت ذخیره شد",
              icon: "success",
            });
            setTimeout(() => {
              this.$router.push("/location");
            }, 1000);
          } else {
            this.$swal({
              titleText: "خطا در ثبت اطلاعات",
              icon: "error",
            });
          }
        }else{
          this.$swal({
              titleText: "لطفا فرم را تکمیل کنید",
              icon: "error",
            });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    validateAddress() {
      return this.data.address.length < 3 ? false : true;
    },
    validateLastName() {
      return this.data.last_name.length < 3 ? false : true;
    },
    validateFirstName(){
      return this.data.first_name.length < 3 ? false : true;
    }, 
    
    phoneNumber() {
      var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
      var result = regex.test(this.data.coordinate_mobile);
      return result;
    },
  },
};
</script>

<style lang="scss" src="~/assets/styles/registerAddress/register.scss"></style>
