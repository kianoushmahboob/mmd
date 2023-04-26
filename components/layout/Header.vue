<template>
  <div>
    <header>
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <img
              width="70"
              height="70"
              class="header-logo"
              src="~/assets/images/achareh-1.png"
              alt=""
            />
          </div>
          <div class="links">
            <NuxtLink class="register-address" to="/register-address"
              >ثبت آدرس</NuxtLink
            >
            <NuxtLink class="addresses" to="/addresses"
              >مشاهده آدرس ها</NuxtLink
            >
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="~/assets/styles/layout/Header.scss" scoped></style>
