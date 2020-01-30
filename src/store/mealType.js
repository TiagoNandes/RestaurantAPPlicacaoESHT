//TipoRefeiçao(idMealType, MealType)

const state = {
    //*MEAL TYPES
    mealTypes: [{
        idMealType: 2,
        mealType: "Entrada"
      },
      {
        idMealType: 1,
        mealType: "Sopa"
      },
      {
        idMealType: 3,
        mealType: "Prato Carne"
      },
      {
        idMealType: 4,
        mealType: "Prato Peixe"
      },
      {
        idMealType: 5,
        mealType: "Prato Vegetariano"
      },
      {
        idMealType: 6,
        mealType: "Sobremesa"
      },
    ]
}

const getters = {
  getAllMealTypes: state => state.mealTypes,
  getlastID: state => state.mealTypes[state.mealTypes.length - 2].id + 1,
  getMealTypeById: state => idMealType => {
    return state.mealTypes.find(mealTypes => (mealTypes.idMealType === idMealType))
  },
  getMealTypeByMealType: state => mealType => {
    return state.mealTypes.find(mealTypes => (mealTypes.mealType === mealType))
  },

}
const MealType = {
    namespaced: true,
    state,
    getters
}
export default MealType;