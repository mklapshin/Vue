<template>
  <div class="page-container">
    <div class="page-wrapper">
      <div class="todo-app">
        <ToDoHeader />
        <ToDoMain />
        <ToDoFooter />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoHeader from "./ToDoHeader.vue";
import ToDoMain from "./ToDoMain.vue";
import ToDoFooter from "./ToDoFooter.vue";

export default {
  name: "App",
  components: {
    ToDoHeader,
    ToDoMain,
    ToDoFooter,
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