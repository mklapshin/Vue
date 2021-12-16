<template>
  <ul class="app-content__tasks">
    <Task v-for="task in tasks" :key="task.id" :taskText="task.text" />
  </ul>
</template>

<script>
import Task from "./Task.vue";

export default {
  data() {
    return {
      tasks: [
        {
          text: "Task1",
          id: 1,
          isChecked: false,
        },
        {
          text: "Task2",
          id: 2,
          isChecked: false,
        },
        {
          text: "Task3",
          id: 3,
          isChecked: false,
        },
      ],
    };
  },
  components: {
    Task,
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