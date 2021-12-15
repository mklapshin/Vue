<template>
  <header class="todo-app__header">
    <p class="todo-app__title">to do list</p>
  </header>
</template>

<style lang="scss">
@import "../assets/scss/main.scss";
.todo-app {
  &__header {
    background-color: $peachOrange;
  }
}
.todo-app__title {
  padding: 0.75rem 0;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
</style>
 