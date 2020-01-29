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
              <select class="mr-sm-2 form-control" id="mealTime" name="mealTime" v-model="mealTime">
                <option>Almoço</option>
                <option>Jantar</option>
              </select>
            </div>
          </div>
        </div>
        <br>
        <button type="submit" class="btn btn-success">Ver estatistica</button>
      </form>
      <br />
      <br>
            <h2>Estatisticas do dia {{this.date}} ao {{this.mealTime}}</h2>

      <br />
      <br>
      <div v-if = "this.existe===true" class="row">
        <div class="col" id="contentSpan">
          <span class="badge badge-secondary w-100 p-3">
            <i class="fas fa-utensils" style="font-size:36px"></i>
            <br />
            <br />
            <br />
            <h3>TOTAL</h3>
            <div>{{this.carneCount + this.peixeCount + this.vegetarianoCount}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />

        <div class="col" id="contentSpan">
          <span class="badge badge-danger w-100 p-3">
            <i class="fas fa-drumstick-bite" style="font-size:36px"></i>
            <br />
            <br />
            <br />
            <h3>Carne</h3>
            <div>{{this.carneCount}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />
        <div class="col" id="contentSpan">
          <span class="badge badge-info w-100 p-3">
            <i class="fas fa-fish" style="font-size:36px"></i>
            <br />
            <br />
            <br />
            <h3>Peixe</h3>
            <div>{{this.peixeCount}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />
        <div class="content col">
          <span class="badge badge-success w-100 p-3">
            <i class="fas fa-carrot" style="font-size:36px"></i>
            <br />
            <br />
            <br />
            <h3>Vegetariano</h3>
            <div>{{this.vegetarianoCount}}</div>
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
  name: "homeAdmin",
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
      existe: false
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
    ...mapGetters("menu", ["getIdMenuByDaySchedule"]),
    mealsDay() {
      let count =
        this.carneCount() + this.peixeCount() + this.vegetarianoCount();
      return count.length;
    },
    carneCount() {
      var count = 0;
      let reservations = this.getReservationsByIdMenu(this.idMenu);
      for (let i in reservations) {
        count = reservations[i].carne + count;
      }
      return count;
    },
    peixeCount() {
      var count = 0;
      let reservations = this.getReservationsByIdMenu(this.idMenu);
      for (let i in reservations) {
        count = reservations[i].peixe + count;
      }
      return count;
    },
    vegetarianoCount() {
      var count = 0;
      let reservations = this.getReservationsByIdMenu(this.idMenu);
      for (let i in reservations) {
        count = reservations[i].vegetariano + count;
      }
      return count;
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