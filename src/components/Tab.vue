<template>
  <label class="app-tabs__label app-tabs__label_one">
    <input
      class="app-tabs__input app-tabs__input_one"
      type="radio"
      name="tab"
      :checked="tabChecked"
    />
    <span class="app-tabs__fake">{{ tabText }}</span>
  </label>
</template>

<script>
export default {
  props: {
    tabText: String,
    tabChecked: Boolean,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.todo-app__footer {
  .app-footer {
    &__tabs {
      &__label {
        cursor: pointer;
        border: 0.125rem solid $peachOrange;
        border-radius: 0.25rem;
        &:hover {
          border-color: $carrotOrange;
          &::after {
            background-color: $carrotOrange;
          }
          &::before {
            background-color: $carrotOrange;
          }
        }
        padding: 0.25rem 0.625rem;

        font-size: 1.25rem;
        line-height: 1.75rem;
        color: $twineOpacity;
        background-color: transparent;
        border: 0.125rem solid transparent;
        border-radius: 0.625rem;
        cursor: pointer;
        transition: border-color 0.5s, color 0.5s;
        &:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }
  }
}
.app-tabs {
  &__input {
    display: none;
  }

  &__fake {
    cursor: pointer;
    display: inline-block;
    width: 5.3rem;
    height: 0.875rem;
    margin: 0 0.2rem 0 0;
    text-align: center;
    border-radius: 0.25rem;
    position: relative;

    &::before {
      cursor: pointer;
      content: "";
      position: absolute;
      display: block;
      width: 5.7rem;
      margin: 0 0 0 0.3rem;
      height: 2rem;
      border-radius: 0.7rem;
      border: 0.2rem solid $rajah;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.2s;
      z-index: 3;
    }
  }

  .app-tabs__input:checked + .app-tabs__fake::before {
    opacity: 1;
    cursor: pointer;
  }
}
</style>