//Meal(idMeal, description, idMealType)
//Menu(id_menu, data, horario, id_prato)

//const user = JSON.parse(localStorage.getItem('user'));
//import {mapState } from 'vuex'
const imported = JSON.parse(localStorage.getItem('meal'))

const state = {
    //*MEALS
    meals: imported
}
const mutations = {
      //Update USER
  mealUpdater(context,{index,newMeal}) {
      alert(index + newMeal)
    state.meals[index] = newMeal
    return localStorage.setItem('meal',JSON.stringify(state.meals))
  },
  mealDeleter(context, idMeal){
    if (confirm("Deseja mesmo remover?")) {
      for (let meal in state.meals){ 
        if (state.meals[meal].idMeal == idMeal){
          state.meals.splice(meal, 1);
        }
    }
    }
  }
}
const getters = {
    getAllMeals: state => state.meals,
    getlastID: state => state.meals[state.meals.length - 2].id + 1,
    //getAll
    getMealsByIdMenu: state =>(idMenu)=>{
        return state.meals.filter(meals => meals.idMenu===idMenu)
    },
    //getOne
    getMealByIdMenu:state =>(idMenu)=>{
        return state.meals.find(meal=>meal.idMenu===idMenu)
    }
}
const Meals = {
    namespaced: true,
    state,
    mutations,
    getters
}
export default Meals;