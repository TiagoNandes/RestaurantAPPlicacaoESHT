//const user = JSON.parse(localStorage.getItem('user'));
import router from '../router/index'
import store from '../store'
import Swal from 'sweetalert2'
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
    let date = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
    let showAlert = false
    let saveI = null
    if (loggedIn) {
      state.userLoggedId = userId;
      if (userType == 2) {
        if (store.getters["reservations/getReservationsByUser"](userId).length != 0) {
          for (let i in store.getters["reservations/getReservationsByUser"](userId)) {
            if (store.getters["menu/getMenuById"](store.getters["reservations/getReservationsByUser"](userId)[i].idMenu).date == date) {
              showAlert = true
              saveI = i
            }
          }
        }

        router.push("/weeklyMenu")
      } else if (userType == 1) {
        router.push("/statisticsDay")
      }
    } else if (!loggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email ou password incorretos!',
        confirmButtonColor: '#127834'
      })
    }
    if (showAlert == true) {
      Swal.fire({
        position: 'top-end',
        text: 'Hoje tem reservas no restaurante aplicação da ESHT ao ' + store.getters["menu/getMenuById"](store.getters["reservations/getReservationsByUser"](userId)[saveI].idMenu).mealTime,
        showConfirmButton: true,
        confirmButtonColor: '#127834',
        timer: 10000,
        backdrop: false
      })

    }
  },
  register(context, {
    data
  }) {
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
    let existe = false
    for (let i in state.users) {
      if (state.users[i].email == newUser.email) {
        existe = true
      }
    }
    if (existe == false) {
      Swal.fire({
        title: 'Conta criada com sucesso!',
        text: 'Efetue o login',
        icon: 'success',
        confirmButtonColor: '#127834'
      })
      router.push("/loginUser")
      return state.users.push(newUser)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Já existe uma conta com este email!',
        confirmButtonColor: '#127834'
      })
    }
  },
  //Update USER
  updater(context, {
    index,
    newUser
  }) {
    state.users[index] = newUser
    return localStorage.setItem('user', JSON.stringify(state.users))
  },
  deleter(context, id) {
    Swal.fire({
      text: "Deseja mesmo remover?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#127834",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!"
    }).then(result => {
      if (result.value) {
        Swal.fire({
          text: "Removido com sucesso!",
          icon: "success",
          confirmButtonColor: "#127834"
        });
        for (let user in state.users) {
          if (state.users[user].id == id) {
            state.users.splice(user, 1);
          }
        }
      }
    });
  },
  //Carregamento saldo

  updateSaldo(context, {
    idUser,
    price
  }) {
    for (let user in state.users) {
      if (state.users[user].id == idUser) {
        state.users[user].saldo = state.users[user].saldo + price
        if (store.getters["userType/getTypeByUser"](state.userLoggedId) == "user") {
          Swal.fire({
            title: 'Saldo atualizado',
            text: 'Saldo atual: ' + state.users[user].saldo,
            icon: 'success',
            confirmButtonColor: '#127834'
          })
        }
      }
    }

  },
  logOut() {
    state.userLoggedId = null
    router.push("/main")
  },
  updatePassword(context, newPassword){
    for (let i in state.users) {
     if( state.users[i].id==state.userLoggedId){
       state.users[i].password= newPassword
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