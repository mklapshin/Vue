<template>
  <main class="todo-app__content app-content">
    <div class="app-content__wrapper">
      <Tasks />
      <input
        class="app-content__add-task"
        type="text"
        placeholder="Add a new task"
      />
    </div>
  </main>
</template>

<script>
import Tasks from "./Tasks.vue";

export default {
  name: "App",
  components: {
    Tasks,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.todo-app__content {
  padding: 1.875rem 0;
  background-color: $linen;
  .app-content {
    &__wrapper {
      padding: 0 1.875rem;
    }

    &__add-task {
      padding: 0.75rem 1rem;
      width: 100%;
      outline: none;
      background: $serenade;
      border: 0.125rem dashed $peachOrange;
      border-radius: 0.625rem;
      font-family: "Inter", sans-serif;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: $mainColor;
      text-align: center;
      &::placeholder {
        font-family: "Inter", sans-serif;
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: $peachOrange;
      }
      &:focus {
        border: 0.125rem solid $carrotOrange;
      }
    }
  }
}
</style>
 