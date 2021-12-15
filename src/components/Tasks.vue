<template>
  <ul class="app-content__tasks">
    <Task1 />
    <Task2 />
    <Task3 />
  </ul>
</template>

<script>
import Task1 from "./Task1.vue";
import Task2 from "./Task2.vue";
import Task3 from "./Task3.vue";

export default {
  name: "App",
  components: {
    Task1,
    Task2,
    Task3,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.app-content {
  &__tasks {
    list-style: none;
    width: 100%;
  }
}
</style>