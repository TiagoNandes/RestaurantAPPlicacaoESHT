//Reserva(id_reserva, n_pessoasComunidade, n_pessoasPublico, n_criancas, valor, estado, data_reserva, id_menu, id_utilizador)
//Meal(idMeal, description, idMealType)
//Menu(id_menu, data, horario, id_prato)
//const user = JSON.parse(localStorage.getItem('user'));
import router from '../router/index'

const imported = JSON.parse(localStorage.getItem('reservations'))

const state = {
    //*RESERVATIONS
    reservations: imported,
}

const getters = {
    getAllReservations: state => state.reservations,
    getlastID: state => state.reservations[state.users.length - 2].id + 1,
    //GET RESERVATIONS BY ID
    getReservationsByIdReservation: state => idReservation => {
        return state.reservations.find(reservations => (reservations.idReservation === idReservation))
    },
    //get numero reservas by idMenu
    getReservationsByIdMenu: state => idMenu => state.reservations.filter(reservations => (reservations.idMenu === idMenu)),
    getNumberReservationsByIdMenu: state => idMenu => state.reservations.filter(reservations => reservations.idMenu === idMenu).length,
    getReservationsByUser: state => idUser => state.reservations.filter(reservations => reservations.idUser === idUser),
    getIdReservationByUserMenu: state => (idUser, idMenu) => {
        return state.reservations.find(reservations => (reservations.idUser === idUser && reservations.idMenu == idMenu))
    },
}

const mutations = {
    //UpdatemenusdaReserva ??
    //cancelarReserva(delete)
    reservationDeleter(context, {
        idReservation
    }) {
        for (let reservation in state.reservations) {
            if (state.reservations[reservation].idReservation == idReservation) {
                state.reservations.splice(reservation, 1);

            }
        }
    },
    reservationCreater(context, {newReservation}) {
        const newId = state.reservations[state.reservations.length - 1].idReservation + 1
        let newReservation1 = {
            idReservation: newId,
            numPersonsCommunity: newReservation.numPersonsCommunity,
            numPersonsRegular: newReservation.numPersonsRegular,
            numPersonsKids: newReservation.numPersonsKids,
            price: newReservation.numPersonsKids * 6.4 + newReservation.numPersonsRegular * 8 + newReservation.numPersonsCommunity * 6.4,
            date: newReservation.date,
            carne: newReservation.carne,
            peixe: newReservation.peixe,
            vegetariano: newReservation.vegetariano,
            idMenu: newReservation.idMenu,
            idUser: newReservation.idUser
        }
         state.reservations.push(newReservation1)
         return router.push({name:"reservationInfo",params:{newReservation1}})
    }
}
const Reservation = {
    namespaced: true,
    state,
    getters,
    mutations
}
export default Reservation;