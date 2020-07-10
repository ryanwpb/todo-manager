import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

//load vuex here
Vue.use(Vuex);

//create store here
export default new Vuex.Store({
  modules: {
    todos,
  },
});
