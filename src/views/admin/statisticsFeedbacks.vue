<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <h3>Feedbacks em dia x</h3>
      <div>{{this.calculateAverage}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/homeAdmin.vue";

export default {
  name: "statisticsFeedback",
  components: {
    Navbar
  },
  data() {
    return {
      actualDate: "",
      idReservation: 0
    };
  },
  computed: {
    ...mapGetters("reservations", [
      "getAllReservations",
      "getReservationsByIdMenu"
    ]),
    ...mapGetters("feedback", ["getFeedbackByReservation"]),
    calculateAverage() {
      //By menu (day and mealTime)
      //average temperatura, service, taste, presentation
      let mediaTaste = 0;
      let mediaService = 0;
      let mediaPresentation = 0;
      let mediaTemperature = 0;
      let reservationsByIdmenu = this.getReservationsByIdMenu(2);
      let idsReservations = [];
      let count = 0;
      let taste = 0;
      let service = 0;
      let presentation = 0;
      let temperature = 0;
      for (let i in reservationsByIdmenu) {
        idsReservations.push(reservationsByIdmenu[i].idReservation);
      }
      for (let i in idsReservations) {
        let idReservation = idsReservations[i];
        let feedbacksByReservation = this.getFeedbackByReservation(
          idReservation
        );
        for (let j in feedbacksByReservation) {
          count++;
          taste = taste + feedbacksByReservation[j].taste;
          service = service + feedbacksByReservation[j].service;
          presentation = presentation + feedbacksByReservation[j].presentation;
          temperature = temperature + feedbacksByReservation[j].temperature;
        }

        mediaTaste = taste / count;
        mediaService = service / count;
        mediaPresentation = service / count;
        mediaTemperature = temperature / count;
      }
      return (
        "Média sabor " +
        mediaTaste +
        " Média serviço " +
        mediaService +
        " Média apresentação " +
        mediaPresentation +
        " Média Temperatura " +
        mediaTemperature
      );
    }
  }
};
</script>
<style>
@import "../../assets/admin.css";
</style>