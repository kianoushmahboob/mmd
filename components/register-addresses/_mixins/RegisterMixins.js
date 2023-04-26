export default {
  methods: {
    async saveData(data) {
      try {
        let userData = JSON.stringify(data);
        await localStorage.setItem("user_new_address", userData);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
