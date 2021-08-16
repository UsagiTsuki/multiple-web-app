<template>
  <header class="root">
    <router-link to="/">
      <img
        src="@/assets/images/logo.png"
        class="logo"
        alt="multiple-web-tsuki"
      />
      <span class="logoText">Multiple Web Tools</span>
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
.root {
  width: 100vw;
  background: #fff;
  display: flex;
  padding: 16px 20px;
  align-items: center;
  position: sticky;
  a {
    display: flex;
    align-items: center;
  }
}
img.logo {
  width: 42px;
}
.logoText {
  color: #2c2c35;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0 1rem;
}
</style>
