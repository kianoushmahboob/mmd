<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="home-content register-success d-flex flex-column align-items-center justify-content-center">
                        <img src="~/assets/images/achareh-1.png" alt="">
                        <p>به آچاره خوش آمدید برای ادامه به <span class="addresses-page-link" @click="$router.push('/addresses')" >صفحه آدرس ها</span> بروید</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" src="~/assets/styles/success/success.scss" scoped>

</style>