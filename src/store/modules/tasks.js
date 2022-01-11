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

  },
  mutations: {

  },
  actions: {},
};