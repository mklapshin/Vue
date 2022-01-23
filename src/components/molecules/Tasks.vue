<template>
  <ul class="tasks" v-if="getTasksFiltered.length != 0">
    <Task
      v-for="task in getTasksFiltered"
      :key="task.id"
      :taskText="task.title"
      :id="task.id"
      :taskChecked="task.isChecked"
    />
  </ul>
</template>

<script>
import Task from "../atoms/Task.vue";
import { mapMutations } from "vuex";

import { mapGetters } from "vuex";
export default {
  components: { Task },
  computed: mapGetters(["getTasksFiltered"]),
  ...mapMutations(["removeTask"]),
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.tasks {
  list-style: none;
  width: 100%;
}
</style>