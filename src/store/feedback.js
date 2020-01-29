//Comentario(id_comentario, comentario, temperatura, sabor, serviço, apresentação, id_reserva, id_utilizador)
//calcular media de pontuações (getTemperatura)
const imported = JSON.parse(localStorage.getItem('feedback'))
import Swal from 'sweetalert2'

const state = {
  feedbacks: imported
}
const mutations = {
  feedbackDeleter(context, idFeedback) {
    for (let feedback in state.feedbacks) {
      if (state.feedbacks[feedback].idFeedback == idFeedback) {
        state.feedbacks.splice(feedback, 1);
      }
    }
  },
  //post Feedback
  feedbackCreater(context, {
    newFeedback
  }) {
    const newId = state.feedbacks[state.feedbacks.length - 1].idFeedback + 1
    let newFeedback1 = {
      idFeedback: newId,
      comentario: newFeedback.comentario,
      temperature: newFeedback.temperature,
      taste: newFeedback.taste,
      service: newFeedback.service,
      presentation: newFeedback.presentation,
      idReservation: newFeedback.idReservation,
      idUser: newFeedback.idUser
    }
    Swal.fire({
      text: 'Novo feedback adicionado!',
      icon: 'success',
      confirmButtonColor: '#127834'
    })
    return  state.feedbacks.push(newFeedback1)
  }
}
const getters = {
  getAllFeedbacks: state => state.feedbacks, //get all feedbacks
  //check if reservation aready has feedback
  getFeedbackByReservation: state => idReservation => state.feedbacks.filter(feedbacks => feedbacks.idReservation === idReservation),
  //check if user already has feedback state => idReservation =>state.feedbacks.find(feedbacks=> feedbacks.idReservation ===idReservation),
  //GET FEEDBACKS BY USER
  getFeedbackByUser: state => idUser => state.feedbacks.filter(feedbacks => feedbacks.idUser === idUser),
  getFeedbackByUserAndReservation: state => (userLoggedId, idReservation) => {
    return state.feedbacks.find(feedbacks => (feedbacks.idUser === userLoggedId && feedbacks.idReservation == idReservation))
  },
}

const Feedback = {
  namespaced: true,
  state,
  mutations,
  getters
}
export default Feedback;