import feedback from './feedback'
import mealType from './mealType'
import meals from './meals'
import menu from './menu'
import reservation from './reservations'
import user from './user'
import userType from './userType'

const state = (
    feedback.state,
    meals.state,
    mealType.state,
    menu.state,
    reservation.state,
    user.state,
    userType.state
)
const mutations = (
    feedback.mutations,
    meals.mutations,
    mealType.mutations,
    menu.mutations,
    reservation.mutations,
    user.mutations,
    userType.mutations
)

const getters = (
    feedback.getters,
    meals.getters,
    mealType.getters,
    menu.getters,
    reservation.getters,
    user.getters,
    userType.getters
)
export default {
    state,
    mutations,
    getters
}