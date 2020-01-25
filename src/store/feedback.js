//Comentario(id_comentario, comentario, temperatura, sabor, serviço, apresentação, id_reserva, id_utilizador)
//calcular media de pontuações (getTemperatura)
const imported = JSON.parse(localStorage.getItem('feedback'))

const state = {
  feedbacks:imported
}
const mutations = {
  feedbackDeleter(context, idFeedback){
    for (let feedback in state.feedbacks) {
      if (state.feedbacks[feedback].idFeedback == idFeedback) {
        alert(feedback)
        state.feedbacks.splice(feedback, 1);
      }
    }
  }
  //post Feedback
}
const getters = {
  getAllFeedbacks: state => state.feedbacks, //get all feedbacks
  //check if reservation aready has feedback
  getFeedbackByReservation: state => idReservation =>state.feedbacks.filter(feedbacks=> feedbacks.idReservation ===idReservation),
  //check if user already has feedback state => idReservation =>state.feedbacks.find(feedbacks=> feedbacks.idReservation ===idReservation),
  //GET FEEDBACKS BY USER
  getFeedbackByUser: state => idUser =>state.feedbacks.filter(feedbacks=> feedbacks.idUser ===idUser),

}

const Feedback = {
    namespaced: true,
    state,
    mutations, 
    getters
  }
  export default Feedback;
  