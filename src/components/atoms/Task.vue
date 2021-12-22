<template>
  <li :class="$style.task">
    <label :class="$style.taskLabel">
      <input type="checkbox" :class="$style.taskInput" :checked="taskChecked" />
      <span :class="$style.taskFake"></span>
      <div :class="$style.taskText">{{ taskText }}</div>
    </label>
    <button :class="$style.taskBtn" aria-label="remove-task"></button>
  </li>
</template>

<script>
export default {
  props: {
    taskText: String,
    taskChecked: Boolean,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.task {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  background: $karry;
  border-radius: 0.625rem;
}

.taskInput {
  display: none;
}

.taskFake {
  flex: 0 0 1.5rem;
  cursor: pointer;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid $rajah;
  border-radius: 0.25rem;
  position: relative;
  &::before {
    flex: 0 0 1.5rem;
    cursor: pointer;
    content: "";
    position: absolute;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: orange;
    background: url("../../assets/img/vector.png") center right no-repeat;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.2s;
    z-index: 3;
  }
}

.taskInput:checked + .taskFake::before {
  opacity: 1;
  cursor: pointer;
}

.taskLabel {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}

.taskText {
  margin: 0 0 0 24px;
}

.taskBtn {
  flex: 0 0 1.5rem;
  cursor: pointer;
  margin: 0 0 0 50px;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background: none;
  border: 0.125rem solid $peachOrange;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: border-color 0.5s;
  position: relative;
  @include breakpoint($sm) {
    margin: 0;
  }

  &:hover {
    border-color: $carrotOrange;
    &::after {
      background-color: $carrotOrange;
    }
    &::before {
      background-color: $carrotOrange;
    }
  }
  &::after {
    content: "";
    width: 0.75rem;
    height: 0.125rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: $peachOrange;
    transition: background-color 0.5s;
  }
  &:before {
    display: block;
    content: "";
    width: 0.75rem;
    height: 0.125rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: $peachOrange;
    transition: background-color 0.5s;
  }
}
</style>