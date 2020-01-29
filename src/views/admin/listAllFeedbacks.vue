<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2 style="text-align: center;">Gestão de Feedbacks</h2>
      <br />
      <div id="result"></div>
      <div class="table-responsive">
        <table class="table table-bordered" id="tableMeal">
          <thead>
            <tr>
              <th>#</th>
              <th>Data Refeição</th>
              <th>Horário</th>
              <th>Comentário</th>
              <th>
                Temperatura
                <br />(0-5)
              </th>
              <th>
                Sabor
                <br />(0-5)
              </th>
              <th>
                Serviço
                <br />(0-5)
              </th>
              <th>
                Apresentação
                <br />(0-5)
              </th>

              <th>Email User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="feedback in this.getAllFeedbacks" :key="feedback">
              <td>{{feedback.idFeedback}}</td>
              <td>{{getMenuById(getReservationsByIdReservation(feedback.idReservation).idMenu).date}}</td>
              <td>{{getMenuById(getReservationsByIdReservation(feedback.idReservation).idMenu).mealTime}}</td>
              <td>{{feedback.comentario}}</td>
              <td>{{feedback.temperature}}</td>
              <td>{{feedback.taste}}</td>
              <td>{{feedback.service}}</td>
              <td>{{feedback.presentation}}</td>
              <td>{{getUserById(feedback.idUser).email}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deletingFeedback(feedback.idFeedback)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template> 
<script>
import { mapGetters, mapMutations } from "vuex";
//import router from "../../router/index";
import Navbar from "@/components/homeAdmin.vue";
import Swal from "sweetalert2";

export default {
  name: "listAllFeedbacks",
  components: {
    Navbar
  },
  data() {
    return {
      actualDate: "",
      idReservation: ""
    };
  },
  computed: {
    ...mapGetters("user", ["getUserById", "getAllUsers"]),
    ...mapGetters("menu", ["getMenuById", "getAvaiableSeatsById"]),
    ...mapGetters("reservations", [
      "getAllReservations",
      "getReservationsByIdReservation"
    ]),
    ...mapGetters("feedback", ["getAllFeedbacks"])
  },
  methods: {
    ...mapMutations("feedback", ["feedbackDeleter"]),
    deletingFeedback(idFeedback) {
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
          this.feedbackDeleter(idFeedback);
        }
      });
    }
  }
};
</script>
<style>
@import "../../assets/admin.css";
</style>