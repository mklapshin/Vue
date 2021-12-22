<template>
  <main :class="$style.appContent">
    <div :class="$style.appContentWrapper">
      <Tasks />
      <input
        :class="$style.appContentAddTask"
        type="text"
        placeholder="Add a new task"
      />
    </div>
  </main>
</template>

<script>
import Tasks from "../molecules/Tasks.vue";

export default {
  name: "App",
  components: {
    Tasks,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.appContent {
  padding: 1.875rem 0;
  background-color: $linen;
}

.appContentWrapper {
  padding: 0 1.875rem;
}

.appContentAddTask {
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
</style>
 