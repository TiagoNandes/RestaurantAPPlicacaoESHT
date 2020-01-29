import Swal from 'sweetalert2'
//TipoUser(id_tipoUser,tipoUser)
const state = {
  userTypes: [
    {
      id_tipoUser: 1,
      tipo: "admin"
    },
    {
      id_tipoUser: 2,
      tipo: "user"
    }]
}
const mutations = {
  newTipoUser(context, { data }) {
    const newId = state.userTypes[state.userTypes.length - 1].id_tipoUser + 1

    let newTipoUser = {
      id_tipoUser: newId,
      tipo: data.tipo
    }
    state.userTypes.push(newTipoUser)
    Swal.fire({
      text: 'Novo tipo de user criado com sucesso!',
      icon: 'success',
      confirmButtonColor: '#127834'
    })
  }
}
const getters = {
  getAllUserTypes: state => state.userTypes,
  getTypeByUser: state => id_tipoUser => {
    return state.userTypes.find(userTypes => (userTypes.id_tipoUser === id_tipoUser)).tipo
  },

}

const userType = {
  namespaced: true,
  state,
  mutations,
  getters
}
export default userType;
