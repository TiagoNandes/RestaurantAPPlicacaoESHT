<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2 style="text-align: center;">Gestão de Reservas</h2>
      <br />
      <div id="result"></div>
      <div class="table-responsive">
        <table class="table table-bordered" id="tableMeal">
          <thead>
            <tr>
              <th>#</th>
              <th>Data</th>
              <th>Horario</th>
              <th>E-mail</th>
              <th>Comunidade</th>
              <th>Normal</th>
              <th>Crianças</th>
              <th>Preço</th>
              <th>Data de reserva</th>
              <th>Carne</th>
              <th>Peixe</th>
              <th>Vegetariano</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in this.getAllReservations" :key="reservation">
              <td>{{reservation.idReservation}}</td>
              <td>{{getMenuById(reservation.idMenu).date}}</td>
              <td>{{getMenuById(reservation.idMenu).mealTime}}</td>
              <td>{{getUserById(reservation.idUser).email}}</td>
              <td>{{reservation.numPersonsCommunity}}</td>
              <td>{{reservation.numPersonsRegular}}</td>
              <td>{{reservation.numPersonsKids}}</td>
              <td>{{reservation.price}}</td>
              <td>{{reservation.date}}</td>
              <td>{{reservation.carne}}</td>
              <td>{{reservation.peixe}}</td>
              <td>{{reservation.vegetariano}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deletingReservation(reservation.idReservation, reservation.idMenu, reservation.idUser, reservation.price,reservation.numPersonsCommunity, reservation.numPersonsRegular, reservation.numPersonsKids)"
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
  name: "listAllReservations",
  components: {
    Navbar
  },
  data() {
    return {
      actualDate: ""
    };
  },
  computed: {
    ...mapGetters("user", ["getUserById", "getAllUsers"]),
    ...mapGetters("menu", ["getMenuById", "getAvaiableSeatsById"]),
    ...mapGetters("reservations", [
      "getAllReservations",
      "getReservationsByIdReservation"
    ])
  },
  methods: {
    ...mapMutations("reservations", ["reservationDeleter"]),
    ...mapMutations("menu", ["updateAvaiableSeats"]),
    ...mapMutations("user", ["updateSaldo"]),
    deletingReservation(
      idReservation,
      idMenu,
      idUser,
      price,
      numPersonsCommunity,
      numPersonsRegular,
      numPersonsKids
    ) {
      let seats = numPersonsCommunity + numPersonsRegular + numPersonsKids;
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
          this.reservationDeleter({ idReservation });
          this.updateAvaiableSeats({ idMenu, seats }); //update lugares disponiveis
          this.updateSaldo({ idUser, price }); //update saldo
        }
      });
    }
  }
};
</script>
<style>
@import "../../assets/admin.css";
</style>