<template>
  <div class="page-container">
    <div class="page-wrapper">
      <div class="todo-app">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.page-container {
  background: linear-gradient(104.11deg, $rajah 14.52%, $colar 87.26%);
  .page-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/list.png") center right no-repeat;
    @include breakpoint($md) {
      background: none;
    }
    .todo-app {
      max-width: 33.75rem;
    }
  }
}
</style>