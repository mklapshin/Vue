import { v4 as uuidv4 } from "uuid";
export default {
  state: {
    tabs: [
      {
        id: uuidv4(),
        text: "All",
        isChosen: true,
      },
      {
        id: uuidv4(),
        text: "Active",
        isChosen: false,
      },
      {
        id: uuidv4(),
        text: "Completed",
        isChosen: false,
      },
    ],
    tasks: [],
    tabStatus: "All",
  },
  getters: {
    getTabs(state) {
      return state.tabs;
    },
    getAllTasks(state) {
      return state.tasks;
    },
    getActiveTasks(state) {
      return state.tasks.filter((task) => task.isChecked === false);
    },
    getTabStatus(state) {
      return state.tabStatus;
    },
    getFilteredTasks(state, getters) {
      switch (state.tabStatus) {
        case "Active":
          return getters.getActiveTasks;
        case "Completed":
          return state.tasks.filter((task) => task.isChecked === true);
        default:
          return getters.getAllTasks;
      }
    },
  },
  mutations: {
    changeTabStatus(state, id) {
      state.tabs = state.tabs.map((tab) =>
        tab.id === id ? { ...tab, isChosen: true } : { ...tab, isChosen: false }
      );
    },
    changeTab(state, text) {
      state.tabs.map((tab) => {
        if (tab.text === text) {
          state.tabStatus = tab.text;
        }
      });
    },
    createTask(state, text) {
      if (text) {
        state.tasks.push({
          id: uuidv4(),
          text: text,
          isChecked: false,
        });
      }
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
    changeTaskStatus(state, id) {
      state.tasks.map((task) => {
        if (task.id === id) task.isChecked = !task.isChecked;
      });
    },
  },
  actions: {},
};