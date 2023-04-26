export default function (context, inject) {
    if (process.client) {
        const authAxios = context.$axios.create({})
        authAxios.setHeader('Accepts', 'application/json');
        authAxios.setHeader('Authorization', 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4');
        // authAxios.onRequest((config) => {
        //     // HAS ERROR 
        //     config.headers.Authorization = 'Bearer ' + context.store.getters['login/getUserData']().token
        // })

        authAxios.onResponse((response) => {
            if (response.data.date) {
                // context.store.dispatch("date/setDate", response.data.date);
            }
        })
        inject('authAxios', authAxios)
    }
}