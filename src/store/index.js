import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const savedLists = localStorage.getItem("task-manager-lists");

const store = new Vuex.Store({
  state: {
    lists: savedLists
      ? JSON.parse(savedLists)
      : [
          {
            title: "今日中にやること",
            cards: [{ todo: "部屋の掃除" }, { todo: "ゴミ出し" }],
          },
          {
            title: "今週中にやること",
            cards: [{ todo: "トイレ掃除" }],
          },
        ],
  },
  mutations: {
    addList(state, payload) {
      state.lists.push({ title: payload.title, cards: [] });
    },
    removeList(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ todo: payload.todo });
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1);
    },
    updateList(state, payload) {
      state.lists = payload.lists;
    },
  },
  actions: {
    addList(context, payload) {
      context.commit("addList", payload);
    },
    removeList(context, payload) {
      context.commit("removeList", payload);
    },
    addCardToList(context, payload) {
      context.commit("addCardToList", payload);
    },
    removeCardFromList(context, payload) {
      context.commit("removeCardFromList", payload);
    },
    updateList(context, payload) {
      context.commit("updateList", payload);
    },
  },
  getters: {
    totalCardCount(state) {
      let count = 0;
      state.lists.map((content) => (count += content.cards.length));
      return count;
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("task-manager-lists", JSON.stringify(state.lists));
});

export default store;
