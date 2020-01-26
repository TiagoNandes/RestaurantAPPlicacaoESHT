<template>
  <div id="principal">
    <navBar></navBar>

    <div class="container">
      <div class="row">
        <router-link to="/">Home |</router-link>
        <router-link to="/about">About |</router-link>
        <router-link to="/main">Main (testes)</router-link>
      </div>
      <div class="py-4">
        <div class="container"></div>
      </div>
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-2" style></div>
            <div class="col-md-8" style>
              <h1 class="text-center pt-5" style="color: #127834;">A sua Reserva</h1>
              <hr>
              <p>Obrigado pela sua preferência! <br> Disponibilizamos aqui as informações da sua reserva.</p>
            </div>

            <div class="col-md-2" style></div>
          </div>
        </div>
      <section id="resInfo" class="pt-4">
        <div class="row">
        <div class="col-4" style="border-right:1px solid #000;height:500px">Reserva #NUMERO_DE_RESERVA</div>
        <div class="col-6">
          <h5 class="text-left">Número de Pessoas:</h5>
          <h5 class="text-left">Data:</h5>
          <h5 class="text-left">Tipo de Serviço:</h5>

          <h5 class="pt-4">Pessoa 1</h5>
          <p>Adulto</p>
          <p>Vegetariano</p>
          <hr>

          <h5>Pessoa 2</h5>
          <p>Criança</p>
          <p>Peixe</p>
          <hr>
        </div>
        </div>
        <div class="row">
          <div class="col-4"><h5>TOTAL: x€</h5></div></div>
      </section>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import navBar from "@/components/navBar.vue";
import router from "../router/index";
export default {
  name: "reservation",
  components: {
    navBar
  },
  data() {
    return {
      nextMenus: "",
      numPeople: 0,
      dateSelected: "",
      price: 0,
      numPersonsCommunity: 0,
      numPersonsRegular: 0,
      numPersonsKids: 0,
      state: "Em curso",
      mealTime: 0,
      todaysDate: "",
      //guardar ementas com data > hoje
      ementa: [],
      data: "",
      people: 0,
      mealTimeSelected: 0
    };
  },
  computed: {
    ...mapGetters("menu", [
      "getMenuById",
      "getIdMenuByDaySchedule",
      "getMenusNextMenus",
      "getIdMenuByDate"
    ]),
    ...mapGetters("user", ["getSaldoByUserLogged"]),
    getMenuByDate() {
      return this.getIdMenuByDate(this.dateSelected);
    }
  },
  methods: {
    saveReservation() {
      let idMenu = this.getIdMenuByDaySchedule(
        this.mealTimeSelected,
        this.dateSelected
      ).idMenu;
      let avaiableSeats = this.getIdMenuByDaySchedule(
        this.mealTimeSelected,
        this.dateSelected
      ).avaiableSeats;
      if (avaiableSeats >= this.people) {
        if (this.getSaldoByUserLogged>= 6.4*this.people) {
          router.push({
            name: "confirmation",
            params: { people: this.people, idMenu: idMenu }
          });
        }
        else{
          alert("Saldo insuficente!! Para esta reserva necessita de ter um saldo maior ou igual a " + parseFloat(6.4*this.people).toFixed(2)+ "€")
        }
      } else {
        alert("Apenas existem " + avaiableSeats + " lugares disponiveis!");
      }
    },
    filteredByDay() {
      const uniqueDate = Array.from(new Set(this.ementa.map(a => a.date))).map(
        date => {
          return this.ementa.find(a => a.date === date);
        }
      );
      this.ementa = uniqueDate;
    }
  },
  created: function() {
    this.todaysDate = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
    //get ementas com data > hoje
    this.ementa = this.getMenusNextMenus(this.todaysDate);
    //    alert(JSON.stringify(this.ementa))
    this.dateSelected = this.ementa[0].date;
    this.filteredByDay();
  }
};
</script>


<style>
label {
  width: 100%;
}

.card-input-element {
  display: none;
}

.card-input {
  margin: 10px;
  padding: 00px;
}

.card-input:hover {
  cursor: pointer;
}

.card-input-element:checked + .card-input {
  box-shadow: 0 0 1px 1px #2ecc71;
}

#principal {
  font-family: "Poppins", sans-serif;
}

#buttonMultibanco:focus {
  border-color: white;
}
#buttonMultibanco:hover {
  background-color: #fff !important;
  text-decoration: none;
}

.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

.carousel-indicators li {
  background-color: #127834;
}
/*#footer{
  height: 50px;
  position: absolute;
  bottom: -25px;
  background-color: #383a38;
  border-radius: 25px;
} */
</style>
