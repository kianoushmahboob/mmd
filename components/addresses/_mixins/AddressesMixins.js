export default {
  methods: {
    async getData() {
      try {
        const result = await this.$authAxios.$get("karfarmas/address");
        return result;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
