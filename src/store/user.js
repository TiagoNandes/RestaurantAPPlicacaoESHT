//const user = JSON.parse(localStorage.getItem('user'));
import router from '../router/index'
//import {mapState } from 'vuex'
const imported = JSON.parse(localStorage.getItem('user'))
const state = {
  users: imported,
  userLoggedId: null
}

const mutations = {
  login(context, {
    email,
    pass
  }) {
    var loggedIn = false
    var users = []
    var userId = null
    var userType = null
    users = state.users
    for (var user in users) {
      if (users[user] != null) {
        if (JSON.stringify(users[user].email) == JSON.stringify({
          email
        }.email)) {
          if (users[user].password == {
            pass
          }.pass) {
            loggedIn = true
            userId = users[user].id
            userType = users[user].id_tipoUser
          }
        }
      }
    }
    if (loggedIn) {
      alert("Login efetuado com sucesso");
      state.userLoggedId = userId;
      localStorage.setItem("token", userId)
      if (userType == 2) {
        router.push("/weeklyMenu")
      }
      else if (userType == 1) { router.push("/statisticsDay") }
    } else if (!loggedIn) {
      alert("dados incorretos")
      router.go()
    }

  },
  register(context, { data }) {
    //localStorage.clear()
    const newId = state.users[state.users.length - 1].id + 1
    let newUser = {
      id: newId,
      nome: data.nome,
      sobrenome: data.sobrenome,
      data_nascimento: data.data_nascimento,
      email: data.email,
      password: data.password,
      saldo: data.saldo,
      telefone: data.telefone,
      id_tipoUser: data.id_tipoUser
    }
    router.push("/listAllUsers")
    return state.users.push(newUser)
  },
  //Carregamento saldo

  //Update password ou outros dados do user

  //Update USER
  updater(context, { index, newUser }) {
    state.users[index] = newUser
    return localStorage.setItem('user', JSON.stringify(state.users))
  },
  deleter(context, id) {
    if (confirm("Deseja mesmo remover?")) {
      for (let user in state.users) {
        if (state.users[user].id == id) {
          state.users.splice(user, 1);
        }
      }
    }
  },
  updateSaldo(context, { idUser, price }) {
    for (let user in state.users) {
      if (state.users[user].id == idUser) {
        state.users[user].saldo = state.users[user].saldo + price
        alert(JSON.stringify(state.users[user]))
      }
    }
  }
}
const getters = {
  getAllUsers: state => state.users,
  //getlastIDUser: state => state.users[state.users.length -1].id +1,
  //getUserbyId
  getUserById: state => id => {
    return state.users.find(users => (users.id === id))
  },
  //GET SALDO USER
  // getSaldoByUser: state => idUser => state.users.filter(users=> users.idUser===idUser),
  getSaldoByUserLogged: state => {
    return state.users.find(users => (users.id === state.userLoggedId)).saldo
  },
  getUserLogged: state => { 
    return state.users.find(users => (users.id === state.userLoggedId))
  }
}
const user = {
  namespaced: true,
  state,
  mutations,
  getters
}
export default user;