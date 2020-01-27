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
              <h1 class="text-center pt-5 pb-4" style="color: #127834;">Selecionar Menu</h1>
            </div>

            <div class="col-md-2" style></div>
          </div>
        </div>
        <div class="progress" style="width:35%; margin:0 auto;">
          <div class="progress-bar bg-success" style="width:75%">75%</div>
        </div>
        <section id="formConfirmation" class="outer-wrapper text-center pt-4">
          <div class="inner-wrapper">
            <div class="container">
              <div class="row" style="margin-top: 32px">
                <div class="col-md-12">
                  <form role="form" @submit.prevent="nextPage">
                    <div v-for="i in numOfPeople" :key="i" class="form-group">
                      <div class="container">
                        <p>Pessoa {{i}}</p>
                        <div class="row">
                          <div class="col-md-4 col-lg-4 col-sm-4">
                            <label>
                              <input
                                type="radio"
                                :id="i"
                                :name="'menu'+(i+1)"
                                v-model="value[i]"
                                value="comunidade"
                                class="card-input-element"
                              />
                              <div class="panel panel-default card-input border">
                                <div class="panel-body p-3">Comunidade Campus II</div>
                              </div>
                            </label>
                          </div>
                          <div class="col-md-4 col-lg-4 col-sm-4">
                            <label>
                              <input
                                type="radio"
                                :id="i"
                                :name="'menu'+(i+1)"
                                v-model="value[i]"
                                value="publico"
                                class="card-input-element"
                              />

                              <div class="panel panel-default card-input border">
                                <div class="panel-body p-3">Público</div>
                              </div>
                            </label>
                          </div>
                          <div class="col-md-4 col-lg-4 col-sm-4">
                            <label>
                              <input
                                type="radio"
                                :id="i"
                                :name="'menu'+(i+1)"
                                v-model="value[i]"
                                value="criancas"
                                class="card-input-element"
                              />

                              <div class="panel panel-default card-input border">
                                <div class="panel-body p-3">Crianças</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn btn-primary my-2 my-sm-0 p-2"
                      style="background-color: #127834; border-color: #127834;"
                    >Continuar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


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


<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";
//import router from '../router/index'
import {mapMutations, mapGetters} from "vuex";
export default {
  name: "main",
  components: {
    navBar
  },

  data() {
    return {
      idMenu: "",
      numOfPeople: 0,
      comunidade: 0,
      publico: 0,
      criancas: 0,
      carne: 0,
      peixe: 0,
      price:0,
      vegetariano: 0,
      value: [],
      todaysDate: 0
    };
  },
  created() {
    // alert(router.go(1))
    this.idMenu = this.$route.params.idMenu;
    this.numOfPeople = this.$route.params.people;
    this.carne = this.$route.params.carne;
    this.peixe = this.$route.params.peixe;
    this.vegetariano = this.$route.params.vegetariano;
    for (let i in this.numOfPeople) this.value.push(0 * i);
  },
  computed:{
    ...mapGetters("user", ["getSaldoByUserLogged", "getUserLogged"])
  },
  methods: {
    ...mapMutations("reservations", ["reservationCreater"]),
    ...mapMutations("user", ["updateSaldo"]),
    nextPage() {
      this.comunidade=0
      this.criancas= 0
      this.publico = 0
      for (let i = 1; i <= this.numOfPeople; i++) {
        if (this.value[i] == "comunidade") {
          this.comunidade++;
        } else if (this.value[i] == "publico") {
          this.publico++;
        } else if (this.value[i] == "criancas") {
          this.criancas++;
        }
      }
      //date
      this.todaysDate = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "-");
      this.price = this.criancas * 6.4 + this.publico * 8 + this.comunidade * 6.4
      let newReservation = {
        numPersonsCommunity: this.comunidade,
        numPersonsRegular: this.publico,
        numPersonsKids: this.criancas,
        price: this.price,
        date: this.todaysDate,
        carne: this.carne,
        peixe: this.peixe,
        vegetariano: this.vegetariano,
        idMenu: this.idMenu,
        idUser: this.getUserLogged.id
      };
      if (this.getSaldoByUserLogged>= newReservation.price){
      this.reservationCreater({newReservation})
      this.updateSaldo({idUser:newReservation.idUser, price: -Math.abs(newReservation.price)})
      alert(JSON.stringify(this.getUserLogged))

      }
      else{
         alert("Saldo insuficente!! Para esta reserva necessita de ter um saldo maior ou igual a " + parseFloat(this.price).toFixed(2)+ "€")
      }
    }
  }
};
</script>
