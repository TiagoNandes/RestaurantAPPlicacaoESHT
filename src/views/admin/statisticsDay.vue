<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <br />
    <br />
    <div id="content" class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col" id="contentSpan">
          <span class="badge badge-secondary">
            <i class="fas fa-utensils" style="font-size:36px"></i>
            <br/>
            <br/><br/>  
            <h3>TOTAL</h3>
            <div>{{this.carneCount + this.peixeCount + this.vegetarianoCount}}</div>
            <br />
            <br />
          </span>
        </div>
        <br />

        <div class="col" id="contentSpan">
          <span class="badge badge-danger">
            <i class="fas fa-drumstick-bite" style="font-size:36px"></i>
            <br><br><br>
            <h3>Carne em dia x</h3>
            <div>{{this.carneCount}}</div>
            <br>
            <br>
          </span>
        </div>
        <br />
        <div class="col" id="contentSpan">
          <span class="badge badge-info">
            <i class="fas fa-fish" style="font-size:36px"></i>
            <br><br><br>
            <h3>Peixe em dia x</h3>
            <div>{{this.peixeCount}}</div>
            <br><br>
          </span>
        </div>
        <br />
        <div class="content col">
          <span class="badge badge-success">
            <i class='fas fa-carrot' style='font-size:36px'></i>
            <br><br><br>
            <h3>Vegetariano em dia x</h3>
            <div>{{this.vegetarianoCount}}</div>
            <br>
            <br>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/homeAdmin.vue";

export default {
  name: "homeAdmin",
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
    mealsDay() {
      let count =
        this.carneCount() + this.peixeCount() + this.vegetarianoCount();
      return count.length;
    },
    carneCount() {
      var count = 0;
      let reservations = this.getReservationsByIdMenu(1);
      for (let i in reservations) {
        count = reservations[i].carne + count;
      }
      return count;
    },
    peixeCount() {
      var count = 0;
      let reservations = this.getReservationsByIdMenu(1);
      for (let i in reservations) {
        count = reservations[i].peixe + count;
      }
      return count;
    },
    vegetarianoCount() {
      var count = 0;
      let reservations = this.getReservationsByIdMenu(1);
      for (let i in reservations) {
        count = reservations[i].vegetariano + count;
      }
      return count;
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