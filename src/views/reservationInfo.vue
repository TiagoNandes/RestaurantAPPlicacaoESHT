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
              <hr />
              <p>
                Obrigado pela sua preferência!
                <br />Disponibilizamos aqui as informações da sua reserva.
              </p>
            </div>

            <div class="col-md-2" style></div>
          </div>
        </div>
        <section id="resInfo" class="pt-4">
          <div class="row">
            <div
              class="col-4"
              style="border-right:1px solid #000;height:500px"
            >Reserva {{idReserva}}</div>
            <div class="col-6">
              <h5 class="text-left">Número de Pessoas: {{numPessoas}}</h5>
              <h5 class="text-left">Data: {{date}}</h5>
              <h5 class="text-left">Tipo de Serviço: {{mealTime}}</h5>

              <h5 class="pt-4">Pratos</h5>
              <p>Carne: {{carne}}</p>
              <p>Peixe: {{peixe}}</p>
              <p>Vegetariano: {{vegetariano}}</p>
              <hr />

              <h5>Elementos da reserva </h5>
              <p>Comunidade Campus II: {{comunidade}}</p>
              <p>Crianças: {{criancas}}</p>
              <p>Outros:{{normal}}</p>
              <!-- <hr /> -->
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <h5>TOTAL: {{price}}€</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import navBar from "@/components/navBar.vue";
export default {
  name: "reservation",
  components: {
    navBar
  },
  data() {
    return {
      idReserva: 0,
      numPessoas: 0,
      date:"",
      mealTime:"",
      carne:0,
      peixe:0,
      vegetariano:0,
      price:0,
      comunidade:0,
      criancas:0,
      normal:0
    };
  },
  created: function() {
    alert("reserva efetuada")
    this.idReserva = this.$route.params.newReservation1.idReservation;
    this.numPessoas =
      this.$route.params.newReservation1.numPersonsCommunity +
      this.$route.params.newReservation1.numPersonsRegular +
      this.$route.params.newReservation1.numPersonsKids;
    this.date = this.getMenuById(this.$route.params.newReservation1.idMenu).date
    this.mealTime = this.getMenuById(this.$route.params.newReservation1.idMenu).mealTime
    this.carne = this.$route.params.newReservation1.carne
    this.peixe = this.$route.params.newReservation1.peixe
    this.vegetariano = this.$route.params.newReservation1.vegetariano
    this.price = this.$route.params.newReservation1.price
    this.normal=this.$route.params.newReservation1.numPersonsRegular
    this.criancas = this.$route.params.newReservation1.numPersonsKids
    this.comunidade = this.$route.params.newReservation1.numPersonsCommunity
  },
  computed: {
    ...mapGetters("menu", ["getMenuById"])
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
