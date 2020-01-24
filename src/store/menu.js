//Menu(idMenu, date, mealTime, idMeal)

//const user = JSON.parse(localStorage.getItem('user'));
//import router from '../router/index'
//import {mapState } from 'vuex'
const imported = JSON.parse(localStorage.getItem('menu'))

const state = {
    //*MENUS
    menus: imported
}
const mutations = {
    menuCreater(context, [date, mealTime]) {
        const newId = state.menus[state.menus.length - 1].idMenu + 1
        let newMenu = {
            idMenu: newId,
            date: date,
            mealTime: mealTime,
        }
        return state.menus.push(newMenu)
    },
    updateAvaiableSeats(context, {
        idMenu,
        seats
    }) {
        for (let menu in state.menus) {
            if (state.menus[menu].idMenu == idMenu) {
                state.menus[menu].avaiableSeats = state.menus[menu].avaiableSeats + seats
            }
        }
    }
}
const getters = {
    getAllMenus: state => state.menus,
    //getMenusById: state => id => state.menus.filter(menus=>menus.id===id),
    getMenuById: state => idMenu => {
        return state.menus.find(menus => (menus.idMenu === idMenu))
    },
    //Ementa correspondente ao dia e horario
    getIdMenuByDaySchedule: state => (mealTime, date) => {
        return state.menus.find(menus => (menus.date === date && menus.mealTime == mealTime))
    },
    getIdMenuByDate: state => date => state.menus.filter(menus => menus.date === date),
    getIdMenuByMealTime: state => mealTime => state.menus.filter(menus => menus.mealTime === mealTime),
    getMenusNextMenus:state => todaysDate => state.menus.filter(menus=> (menus.date>=todaysDate)), //Get ementas seguintes
    getMenuOfTheWeek: state => state.meals,

    getAvaiableSeatsById: state => idMenu => {
        return state.menus.find(menus => (menus.idMenu === idMenu)).avaiableSeats
    }

}
const menu = {
    namespaced: true,
    state,
    getters,
    mutations
}
export default menu;