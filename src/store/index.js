import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleBase from "./module"
import moduleUser from './user.js'
import moduleUserType from './userType.js'
import moduleMeals from './meals.js'
import moduleMenu from './menu.js'
import moduleReservations from './reservations'
import moduleFeedback from './feedback'
import moduleMealType from './mealType'
export default new Vuex.Store({
  state: moduleBase.state,
  mutations: moduleBase.mutations,
  getters: moduleBase.getters,
  modules: {
    user: moduleUser,
    userType: moduleUserType,
    meals:moduleMeals,
    menu:moduleMenu,
    reservations: moduleReservations,
    feedback: moduleFeedback,
    mealType:moduleMealType
  },
})