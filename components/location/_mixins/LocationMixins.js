export default {
    methods: {
      async submitData(data) {
        try {
          const result = await this.$authAxios.$post('karfarmas/address' , data);
          return result;
        } catch (error) {
          console.log(this.$swal);
            this.$swal({
                titleText: "ثبت اطلاعات با خطا مواجه شد لطفا دوباره تلاش کنید",
                icon: "error",
              }); 
        }
      },
    },
  };
  