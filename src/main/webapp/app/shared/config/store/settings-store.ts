import { Module } from 'vuex';

export const settingStore: Module<any, any> = {
  state: {
    layout: 'simple-layout'
  },
  getters: {
    layout: state => state.layout
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    }
  }
};
