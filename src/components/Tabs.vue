<template>
  <div class="app-footer__tabs app-tabs">
    <Tab v-for="tab in tabs" :key="tab.id" :tabText="tab.text" />
  </div>
</template>

<script>
import Tab from "./Tab.vue";

export default {
  data() {
    return {
      tabs: [
        {
          text: "All",
          id: 1,
        },
        {
          text: "Active",
          id: 2,
        },
        {
          text: "Completed",
          id: 3,
        },
      ],
    };
  },
  components: {
    Tab,
  },
};
</script>