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
              <h1 class="text-center pt-5 pb-4" style="color: #127834;">Reservar Refeição</h1>
            </div>

            <div class="col-md-2" style></div>
          </div>
        </div>
        <div class="progress" style="width:35%; margin:0 auto;">
          <div class="progress-bar bg-success" style="width:25%">25%</div>
        </div>
        <section id="formReservation" class="outer-wrapper text-center pt-4">
          <div class="inner-wrapper">
            <div class="container">
              <div class="row" style="margin-top: 32px">
                <div class="col-md-12">
                  <form role="form" @submit.prevent="saveReservation">
                    <div class="form-group">
                      <div class="container">
                        <p>Numero Pessoas</p>

                        <div class="row">
                          <div v-for="i in 6" :key="i" class="col-md-2 col-lg-2 col-sm-2">
                            <label>
                              <input
                                required
                                type="radio"
                                name="people"
                                id="people"
                                v-model="people"
                                class="card-input-element"
                                v-bind:value="i"
                              />
                              <div class="panel panel-default card-input border">
                                <div class="panel-heading">
                                  <!-- <b>{{moment(ementa[i-1].date).day('dddd')}}</b> -->
                                </div>
                                <div class="panel-body">{{i}}</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="container">
                        <p>Data</p>

                        <div class="row">
                          <div v-for="i in 3" :key="i" class="col-md-4 col-lg-4 col-sm-4">
                            <label>
                              <input
                                required
                                type="radio"
                                name="date"
                                id="date"
                                v-model="dateSelected"
                                class="card-input-element"
                                v-bind:value="ementa[i-1].date"
                              />
                              <div class="panel panel-default card-input border">
                                <div class="panel-heading">
                                  <!-- <b>{{moment(ementa[i-1].date).day('dddd')}}</b> -->
                                </div>
                                <div class="panel-body">{{ementa[i-1].date}}</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="container">
                        <p>Tipo de Serviço</p>

                        <div class="row">
                          <div
                            v-for="i in getMenuByDate.length"
                            :key="i"
                            class="col-md-6 col-lg-6 col-sm-6"
                          >
                            <label>
                              <input
                                required
                                type="radio"
                                name="mealTime"
                                id="mealTime"
                                v-model="mealTimeSelected"
                                class="card-input-element"
                                v-bind:value="getMenuByDate[i-1].mealTime"
                              />
                              <div class="panel panel-default card-input border p-3">
                                <div class="panel-body">{{getMenuByDate[i-1].mealTime}}</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- apaga-se o router link, button on click chama method que guarda os valores da data() and get id menu(funçao da store)-->
                    <!-- <router-link to="/confirmation"> -->
                    <button
                      type="submit"
                      class="btn btn btn-primary my-2 my-sm-0 p-2"
                      style="background-color: #127834; border-color: #127834;"
                    >Continuar</button>
                    <!-- </router-link> -->
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
        if (this.getSaldoByUserLogged >= 6.4 * this.people) {
          router.push({
            name: "confirmation",
            params: { people: this.people, idMenu: idMenu }
          });
        } else {
          alert(
            "Saldo insuficente!! Para esta reserva necessita de ter um saldo maior ou igual a " +
              parseFloat(6.4 * this.people).toFixed(2) +
              "€"
          );
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
