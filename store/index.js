import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutation from './mutation';
import getters from './getters';
import actions from './actions';

const store = new Vuex.Store({
  state,
  mutation,
  getters,
  actions
});

Vue.use(Vuex);
