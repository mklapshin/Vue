<template>
  <li class="app-content__task task">
    <label class="task__label">
      <input type="checkbox" class="task__input" />
      <span class="task__fake"></span>
      <div class="task__text">{{ taskText }}</div>
    </label>
    <button class="task__btn" aria-label="remove-task"></button>
  </li>
</template>

<style lang="scss">
@import "../assets/scss/main.scss";
.task {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  background: $karry;
  border-radius: 0.625rem;

  &__input {
    display: none;
  }
  &__fake {
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
      background: url("../assets/img/vector.png") center right no-repeat;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.2s;
      z-index: 3;
    }
  }
  .task__input:checked + .task__fake::before {
    opacity: 1;
    cursor: pointer;
  }
  &__label {
    // width: 370px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }
  &__text {
    margin: 0 0 0 24px;
    // max-width: 20rem;
  }
  &__btn {
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
}
</style>



<script>
export default {
  props: {
    taskText: String,
  },
};
</script>