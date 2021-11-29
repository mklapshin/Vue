<template>
  <div class="page-container">
    <div class="page-wrapper">
      <div class="todo-app">
        <header class="todo-app__header">
          <p class="todo-app__title">to do list</p>
        </header>
        <main class="todo-app__content app-content">
          <h1 class="app-content__title visually-hidden">
            Application to-do list
          </h1>
          <div class="app-content__wrapper">
            <ul class="app-content__tasks">
              <li class="app-content__task task">
                <label class="task__label">
                  <input type="checkbox" class="task__input" />
                  <span class="task__fake"></span>
                  <span class="task__text">Task 1</span>
                </label>
                <button class="task__btn" aria-label="remove-task"></button>
              </li>
              <li class="app-content__task task">
                <label class="task__label">
                  <input type="checkbox" class="task__input" />
                  <span class="task__fake"></span>
                  <span class="task__text">Task 2</span>
                </label>
                <button class="task__btn" aria-label="remove-task"></button>
              </li>
              <li class="app-content__task task">
                <label class="task__label">
                  <input type="checkbox" class="task__input" />
                  <span class="task__fake"></span>
                  <span class="task__text">Task 3</span>
                </label>
                <button class="task__btn" aria-label="remove-task"></button>
              </li>
            </ul>
            <input
              class="app-content__add-task"
              type="text"
              placeholder="Add a new task"
            />
          </div>
        </main>
        <footer class="todo-app__footer app-footer">
          <div class="app-footer__wrapper">
            <p class="app-footer__count">1/3 left</p>
            <div class="app-footer__tabs app-tabs">
              <label class="app-tabs__label app-tabs__label_one">
                <input
                  class="app-tabs__input app-tabs__input_one"
                  type="radio"
                  name="tab"
                  checked
                />
                <span>All</span>
              </label>
              <label class="app-tabs__label app-tabs__label_two" for="active">
                <input
                  class="app-tabs__input app-tabs__input_two"
                  type="radio"
                  name="tab"
                />
                <span>Active</span>
              </label>
              <label
                class="app-tabs__label app-tabs__label_three"
                for="completed"
              >
                <input
                  class="app-tabs__input app-tabs__input_three"
                  type="radio"
                  name="tab"
                />
                <span>Completed</span>
              </label>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
.page-container {
  background: linear-gradient(104.11deg, $rajah 14.52%, $colar 87.26%);
  .page-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./assets/img/list.png") center right no-repeat;
    @include breakpoint($md) {
      background: none;
    }
    .todo-app {
      width: 33.75rem;
      display: flex;
      flex-direction: column;
      &__header {
        background-color: $peachOrange;
      }
      &__title {
        padding: 0.75rem 0;
        display: flex;
        text-align: center;
        justify-content: center;
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      &__content {
        padding-top: 1.875rem;
        padding-bottom: 1.875rem;
        flex: 1 1 auto;
        background-color: $linen;
        .app-content {
          &__title {
            @include visually-hidden;
          }
          &__wrapper {
            padding: 0 1.875rem;
          }
          &__tasks {
            list-style: none;
            width: 100%;
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
                display: inline-block;
                width: 24px;
                height: 24px;
                border: 1.5px solid #feb567;
                border-radius: 5px;
                position: relative;
                &::before {
                  content: "";
                  position: absolute;
                  display: block;
                  width: 24px;
                  height: 24px;
                  background-color: orange;
                  background: url("./assets/img/vector.png") center right
                    no-repeat;
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
              }
              &__text {
              }
              &__btn {
                margin: 0 0 0 310px;
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
      &__footer {
        .app-footer {
          &__wrapper {
            padding: 0.75rem 1.875rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background-color: $peachOrange;
            @include breakpoint($sm) {
              justify-content: center;
            }
          }
          &__count {
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: $twineOpacity;
            @include breakpoint($sm) {
              width: 100%;
              text-align: center;
              margin-bottom: 1rem;
            }
          }
          &__tabs {
            .app-tabs {
              &__input {
                appearance: none;
                position: absolute;
                &_one:checked ~ .app-tabs__label_one,
                &_two:checked ~ .app-tabs__label_two,
                &_three:checked ~ .app-tabs__label_three {
                  border-color: $twine;
                  color: $twine;
                }
              }
              &__label {
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
                  @include breakpoint($sm) {
                    margin-right: 0.75rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>