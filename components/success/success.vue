<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="register-success d-flex flex-column align-items-center justify-content-center">
                        <i class="mdi mdi-checkbox-marked-circle-outline"></i>
                        <p>اطلاعات شما با موفقیت ثبت شد</p>
                        <span @click="$router.push('/addresses')" class="submit-btn">مشاهده اطلاعات</span>
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