import dataFile from "./data.json";

export const useStoreStore = defineStore({
  id: "stores",
  state: () => {
    return {
      stores: [],
    };
  },
  mutations: {
    setStores(state, payload) {
      state.stores = payload;
    },
  },
  getters: {
    getStoreById: (state) => {
      return (storeId) => state.stores[storeId];
    },
    getStoreNameById: (state) => {
      return (storeId) => state.stores[storeId].name;
    },
    getProduct: (state) => {
      return (storeId, productId) => state.stores[storeId].products[productId];
    },
  },
  actions: {
    async loadStores() {
      if (this.stores.length != 0) {
        return;
      }

      // setTimeout(async () => {
      this.stores = dataFile.stores;
      // }, 2000);
    },
  },
});
