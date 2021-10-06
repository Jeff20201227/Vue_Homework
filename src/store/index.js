import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoriesList: [],
    pages: 0,
    isFetchListLoading: false,
    totalCosts: 0,
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push({ id: "?", ...payload });
      state.totalCosts = state.totalCosts + payload.amount;
    },
    setCategories(state, categories) {
      if (!Array.isArray(categories)) {
        categories = [categories];
      }
      state.categoriesList.push(...categories);
    },
    setCurrentPage(state, page) {
      state.page = page;
    },
    toggleLoading(state, value) {
      state.isFetchListLoading = value;
    },
    setTotalCosts(state, value) {
      state.totalCosts = value;
    },
    setPages(state, value) {
      state.pages = value;
    },
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList,
    getFullPaymentValue: (state) => state.totalCosts,
    // state.paymentsList.reduce((acc, item) => acc + item.amount, 0),
    getCategoriesList: (state) => state.categoriesList,
    getLoading: (state) => state.isFetchListLoading,
    getPagesNumber: (state) => state.pages,
  },
  actions: {
    fetchData({ commit }, page) {
      commit("toggleLoading", true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            page1: [
              { id: 1, date: "28/07/2021", category: "Книги", amount: 169 },
              { id: 2, date: "24/07/2021", category: "Метро", amount: 569 },
              { id: 3, date: "21/07/2021", category: "Еда", amount: 532 },
            ],
            page2: [
              {
                id: 4,
                date: "28/07/2021",
                category: "Развлечения",
                amount: 541,
              },
              { id: 5, date: "24/07/2021", category: "Мороженное", amount: 75 },
              { id: 6, date: "21/07/2021", category: "Туризм", amount: 854 },
            ],
            page3: [
              {
                id: 7,
                date: "28/07/2021",
                category: "Музеи",
                amount: 456,
              },
              { id: 8, date: "24/07/2021", category: "Книги", amount: 586 },
              { id: 9, date: "21/07/2021", category: "Друзья", amount: 258 },
            ],
            totalPages: 3,
            totalCosts: 4040,
          });
        }, 1000);
      }).then((res) => {
        commit("setPages", res.totalPages);
        commit("setTotalCosts", res.totalCosts);
        commit("setPaymentsListData", res[page]);
        commit("toggleLoading", false);
      });
    },
    loadCategories({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Еда", "Транспорт", "Образование", "Развлечения"]);
        }, 1000);
      }).then((res) => {
        commit("setCategories", res);
      });
    },
  },
});
