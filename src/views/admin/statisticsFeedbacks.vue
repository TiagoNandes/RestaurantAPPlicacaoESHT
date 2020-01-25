<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <br />
    <br />
    <div id="content" class="container">
      <br />
      <br />
      <br />
      <form @submit.prevent="filteredStatistics" class="needs-validation" novalidate>
        <div class="row">
          <div class="col">
            <label for="date" class="mr-sm-2">Escolha o dia:</label>
            <input id="date" type="date" v-model="date" />
          </div>
          <div class="col">
            <div class="form-group">
              <label for="sel1">Selecione o horário:</label>
              <select class="form-control" id="mealTime" name="mealTime" v-model="mealTime">
                <option>Almoço</option>
                <option>Jantar</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-success">Ver estatistica</button>
      </form>
      <br />
            <h2>Estatisticas do dia {{this.date}} ao {{this.mealTime}}</h2>

      <br />
      <div v-if = "this.existe===true" class="row">
        <div class="col" id="contentSpan">
          <span class="badge badge-secondary">
            <br>
            <i class="fas fa-pepper-hot" style="font-size:36px"></i>
            <br />
            <br />
            <h3>Sabor</h3>
            <div>{{this.tasteValue}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />

        <div class="col" id="contentSpan">
          <span class="badge badge-danger">
            <br>
            <i class="fas fa-cocktail" style="font-size:36px"></i>
            <br />
            <br />
            <h3>Apresentação</h3>
            <div>{{this.presentationValue}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />
        <div class="col" id="contentSpan">
          <span class="badge badge-info">
            <br>
            <i class="fas fa-thermometer-half" style="font-size:36px"></i>
            <br />
            <br />
            <h3>Temperatura</h3>
            <div>{{this.temperatureValue}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />
        <div class="content col">
          <span class="badge badge-success">
            <br>
            <i class="fas fa-concierge-bell" style="font-size:36px"></i>
            <br />
            <br />
            <h3>Serviço</h3>
            <div>{{this.tasteValue}}</div>
            <br />
            <br />
          </span>
        </div>
      </div>
          <div v-if= "this.existe===false" class="row">
            <h3>Não existem estatisticas para este dia</h3>
    </div>
    </div>
  </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/homeAdmin.vue";
import moment from 'moment'
export default {
  name: "statisticsFeedback",
  components: {
    Navbar
  },
  data() {
    return {
      actualDate: "",
      idReservation: 0,
      idMenu: "",
      date: "",
      mealTime: "",
      existe: false,
      actualDate: "",
      idReservation: 0,
      tasteValue:0,
      presentationValue:0,
      serviceValue:0,
      temperatureValue:0
    };
  },
  created() {
    this.date = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
    if (this.getIdMenuByDaySchedule("Almoço", String(this.date))) {
      this.idMenu = this.getIdMenuByDaySchedule("Almoço",String(this.date)
      ).idMenu;
      this.mealTime= "Almoço"
      this.existe = true

    } else if (this.getIdMenuByDaySchedule("Jantar", String(this.date))){
      this.idMenu = this.getIdMenuByDaySchedule("Jantar", String(this.date)).idMenu;
      this.mealTime= "Jantar"
      this.existe = true
    }
  },
  computed: {
      ...mapGetters("reservations", [
      "getAllReservations",
      "getReservationsByIdMenu"
    ]),
    ...mapGetters("feedback", ["getFeedbackByReservation"]),
    ...mapGetters("menu", ["getIdMenuByDaySchedule"]),
    calculateAverage() {
      //By menu (day and mealTime)
      //average temperatura, service, taste, presentation
      let mediaTaste = 0;
      let mediaService = 0;
      let mediaPresentation = 0;
      let mediaTemperature = 0;
      let reservationsByIdmenu = this.getReservationsByIdMenu(this.idMenu);
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
        this.tasteValue= mediaTaste
        this.serviceValue = mediaService
        this.presentationValue = mediaPresentation
        this.temperatureValue = mediaTemperature
      }
      return this.tasteValue, this.serviceValue, this.presentationValue,this.temperatureValue
    }
  },
  methods: {
    filteredStatistics() {
      if(typeof this.getIdMenuByDaySchedule(this.mealTime, this.date) !== 'undefined'){
      this.existe= true
      this.idMenu = this.getIdMenuByDaySchedule(
        this.mealTime,
        this.date
      ).idMenu;
      this.calculateAverage;
      }
      else {
        this.existe = false
      }

    }
  }
};
</script>
<style>
@import "../../assets/admin.css";
#contentSpan {
  max-width: 75%;
  align-self: auto;
}
.wrapper {
  vertical-align: sub;
}
</style>
