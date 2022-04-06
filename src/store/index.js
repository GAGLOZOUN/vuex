/*import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';


Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
    todos
  }
});*/

import { createStore } from 'vuex';
import todos from './modules/todos';

const store = createStore({
  modules: {
    todos
  }

})

export default store;