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
import ourDishes from '../views/ourDishes.vue'
import Registration from '../views/auth/Registration.vue'
import LoginUser from '../views/auth/LoginUser.vue'
import Profile from '../views/Profile.vue'
import store from '../store'
import feedback from '../views/feedback.vue'
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
import finishReservation from '../views/FinishReservation.vue'
import reservationInfo from '../views/reservationInfo.vue'
//import user from '../store/user'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/feedback',
  name: 'feedback',
  component: feedback,
  meta: { requiresAuthUser: true }

},
{
  path: '/profile',
  name: 'profile',
  component: Profile,
  meta: { requiresAuthUser: true }

},
{
  path: '/menuSelection',
  name: 'menuSelection',
  component: menuSelection,
  meta: { requiresAuthUser: true }
},
{
  path: '/addEmentaSemanal',
  name: 'addEmentaSemanal',
  component: addEmentaSemanal,
  meta: { requiresAuthAdmin: true }

},
{
  path: '/addNewUser',
  name: 'addNewUser',
  component: addNewUser,
},
{
  path: '/listAllUsers',
  name: 'listAllUsers',
  component: listAllUsers,
  meta: { requiresAuthAdmin: true }

},
{
  path: '/listAllEmentas',
  name: 'listAllEmentas',
  component: listAllEmentas
},
{
  path: '/listAllReservations',
  name: 'listAllReservations',
  component: listAllReservations,
  meta: { requiresAuthAdmin: true }

},
{
  path: '/listAllFeedbacks',
  name: 'listAllFeedbacks',
  component: listAllFeedbacks,
  meta: { requiresAuthAdmin: true }
},
{
  path: '/editUser',
  name: 'editUser',
  component: editUser,
  meta: { requiresAuthUser: true }

},
{
  path: '/main',
  name: 'main',
  component: Main
},
{
  path: '/addFunds',
  name: 'addFunds',
  component: AddFunds,
  meta: { requiresAuthUser: true }
},
{
  path: '/weeklyMenu',
  name: 'weeklyMenu',
  component: WeeklyMenu
},
{
  path: '/reservation',
  name: 'reservation',
  component: Reservation,
  meta: { requiresAuthUser: true }

},
{
  path: '/confirmation/:people/:idMenu',
  name: 'confirmation',
  component: Confirmation,
  meta: { requiresAuthUser: true }

},
{
  path: '/restaurant',
  name: 'restaurant',
  component: Restaurant
},
{
  path: '/ourDishes',
  name: 'ourDishes',
  component: ourDishes
},
{
  path: '/About',
  name: 'About',
  component: About
},
{
  path: '/statisticsDay',
  name: 'statisticsDay',
  component: statiscsDay,
  meta: { requiresAuthAdmin: true }

},
{
  path: '/statisticsFeedbacks',
  name: 'statisticsFeedbacks',
  component: statisticsFeedbacks,
  meta: { requiresAuthAdmin: true }

},
{
  path: '/registration',
  name: 'registration',
  component: Registration,
},
{
  path: '/loginUser',
  name: 'loginUser',
  component: LoginUser
},
{
  path: '/finishReservation/:people/:idmenu/:carne/:peixe/:vegetariano',
  name: 'finishReservation',
  component: finishReservation,
  meta: { requiresAuthUser: true }

},
{
  path: '/reservationInfo',
  name: 'reservationInfo',
  component: reservationInfo,
  meta: { requiresAuthUser: true }

}

]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(routes => routes.meta.requiresAuthUser)) {
    if (store.getters["user/getUserLogged"] == undefined) {
      next(router.push("/"))
      /*next({
        path: "/main",
        query: {
          redirect: to.fullPath
        }
      })*/
      return
    }
    else{
      if(store.getters["user/getUserLogged"].id_tipoUser!=2){
        next({
          path: "/statisticsDay",
          query: {
            redirect: to.fullPath
          }
        })
        return
      }else
    next()
  }
  } else {
    next()
  }
  if (to.matched.some(routes => routes.meta.requiresAuthAdmin)) {
    if (store.getters["user/getUserLogged"] == undefined) {
      next(router.push("/"))
      /*next({
        path: "/main",
        query: {
          redirect: to.fullPath
        }
      })*/
      return
    }
    else{
      if(store.getters["user/getUserLogged"].id_tipoUser!=1){
        next({
          path: "",
          query: {
            redirect: to.fullPath
          }
        })
        return
      }else
    next()
  }
  } else {
    next()
  }
})


export default router