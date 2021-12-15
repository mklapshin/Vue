<template>
  <div class="app-footer__tabs app-tabs">
    <Tab1 />
    <Tab2 />
    <Tab3 />
  </div>
</template>

<script>
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

export default {
  name: "App",
  components: {
    Tab1,
    Tab2,
    Tab3,
  },
};
</script>