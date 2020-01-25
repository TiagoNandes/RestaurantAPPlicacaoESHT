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
  mealCreater(context, [idMenu, description, idTipo]){
    const newId = state.meals[state.meals.length - 1].idMeal + 1
    let newMeal = {
      idMeal: newId,
      description: description,
      idMealType: idTipo,
      idMenu: idMenu
    }
    return state.meals.push(newMeal)
  },
      //Update USER
  mealUpdater(context,{index,newMeal}) {
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
        return state.meals.filter(meal=>meal.idMenu===idMenu)
    },
     //Ementa correspondente ao menu(dia e horario) e ao idtipomenu
     getMealByMenuType: state => (idMenu, idMealType) => {
      return state.meals.find(meals => (meals.idMenu === idMenu && meals.idMealType === idMealType))
  },
}
const Meals = {
    namespaced: true,
    state,
    mutations,
    getters
}
export default Meals;