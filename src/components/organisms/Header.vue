<template>
  <header :class="$style.todoAppHeader">
    <p :class="$style.todoAppTitle">to do list</p>
  </header>
</template>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.todoAppHeader {
  background-color: $peachOrange;
}

.todoAppTitle {
  padding: 0.75rem 0;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
</style>
 