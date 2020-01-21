import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'
import AddFunds from '../views/AddFunds.vue'
import WeeklyMenu from '../views/WeeklyMenu.vue'
import Reservation from '../views/Reservation.vue'
import Confirmation from '../views/Confirmation.vue'
import Restaurant from '../views/Restaurant.vue'
import Registration from '../views/Registration.vue'

import store from '../store'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import usersList from '../views/usersList.vue'
//import homeAdmin from '../views/admin/homeAdmin.vue'
import menuOfTheWeek from '../views/menuOfTheWeek.vue'
import reserva from '../views/reserva.vue'
import Feedback from '../views/feedback.vue'
import menuSelection from '../views/menuSelection.vue'
import addEmentaSemanal from '../views/admin/addEmentaSemanal.vue'
import addNewUser from '../views/admin/addNewUser.vue'
import listAllUsers from '../views/admin/listAllUsers.vue'
import listAllEmentas from '../views/admin/listAllEmentas.vue'
import listAllReservations from '../views/admin/listAllReservations.vue'
import listAllFeedbacks from '../views/admin/listAllFeedbacks.vue'
import editUser from '../views/admin/editUser.vue'
import statiscsDay from '../views/admin/statisticsDay.vue'
import statisticsFeedbacks from '../views/admin/statisticsFeedbacks.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/usersList',
    name: 'usersList',
    component: usersList
  },
  /*{
      path:'/homeAdmin',
      name:'homeAdmin',
      component:homeAdmin
    },*/
  {
    path: '/menuOfTheWeek',
    name: 'menuOfTheWeek',
    component: menuOfTheWeek
  }, {
    path: '/reserva',
    name: 'reserva',
    component: reserva
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path: '/menuSelection',
    name: 'menuSelection',
    component: menuSelection
  },
  {
    path: '/addEmentaSemanal',
    name: 'addEmentaSemanal',
    component: addEmentaSemanal
  },
  {
    path: '/addNewUser',
    name: 'addNewUser',
    component: addNewUser
  },
  {
    path: '/listAllUsers',
    name: 'listAllUsers',
    component: listAllUsers
  },
  {
    path: '/listAllEmentas',
    name: 'listAllEmentas',
    component: listAllEmentas
  },
  {
    path: '/listAllReservations',
    name: 'listAllReservations',
    component: listAllReservations
  },
  {
    path: '/listAllFeedbacks',
    name: 'listAllFeedbacks',
    component: listAllFeedbacks
  },
  {
    path: '/editUser',
    name: 'editUser',
    component: editUser
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/addFunds',
    name: 'addFunds',
    component: AddFunds
  },
  {
    path: '/weeklyMenu',
    name: 'weeklyMenu',
    component: WeeklyMenu
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path: '/statisticsDay',
    name: 'statisticsDay',
    component: statiscsDay
  }, {
    path: '/statisticsFeedbacks',
    name: 'statisticsFeedbacks',
    component: statisticsFeedbacks
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})


export default router