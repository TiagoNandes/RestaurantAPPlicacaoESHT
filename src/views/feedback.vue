<template>
  <div id="principal">
    <navBar></navBar>

    <div class="container">
      <div class="row">
        <router-link to="/">Home |</router-link>
        <router-link to="/about">About |</router-link>
        <router-link to="/main">Main (testes)</router-link>
      </div>

      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-2" style></div>
            <div class="col-md-8" style>
              <h1 class="text-center pt-5 pb-4" style="color: #127834;">Feedback</h1>
            </div>

            <div class="col-md-2" style></div>
          </div>
        </div>

        <div class="form-group">
          <div class="container">
            <p>Reservas anteriores</p>
            <div class="row">
              <div
                v-for="i in this.idMenuFilteredByDate.length"
                :key="i"
                class="col-md-4 col-lg-4 col-sm-4"
              >
                <label>
                  <input
                    required
                    type="radio"
                    name="date"
                    id="date"
                    v-model="idMenu"
                    class="card-input-element"
                    v-bind:value="idMenuFilteredByDate[i-1].idMenu"
                  />
                  <div class="panel panel-default card-input border">
                    <div class="panel-heading"></div>
                    <div
                      class="panel-body"
                    >{{idMenuFilteredByDate[i-1].date}} , {{idMenuFilteredByDate[i-1].mealTime}}</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <section id="formMultibanco" class="outer-wrapper text-center pt-4">
          <div class="inner-wrapper">
            <div class="container">
              <div class="row" style="margin-top: 32px">
                <div class="col-sm-4"></div>
                <div class="col-sm-4 col-sm-offset-8">
                  <form role="form" @submit.prevent="saveFeedback">
                    <div class="form-group">
                      <p for="exampleInputCard">Como estava a comida?</p>
                      <input
                        @click="updateTaste(1)"
                        name="ratingFood"
                        v-bind:value="1"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTaste(2)"
                        name="ratingFood"
                        v-bind:value="2"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTaste(3)"
                        name="ratingFood"
                        v-bind:value="3"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTaste(4)"
                        name="ratingFood"
                        v-bind:value="4"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTaste(5)"
                        name="ratingFood"
                        v-bind:value="5"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                    </div>
                    <div class="form-group">
                      <p>Como foi o serviço?</p>
                      <input
                        @click="updateService(1)"
                        v-bind:value="1"
                        name="ratingService"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateService(2)"
                        v-bind:value="2"
                        name="ratingService"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateService(3)"
                        v-bind:value="3"
                        name="ratingService"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateService(4)"
                        v-bind:value="4"
                        name="ratingService"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateService(5)"
                        v-bind:value="5"
                        name="ratingService"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                    </div>
                    <div class="form-group">
                      <p>A comida estava à temperatura adequada?</p>
                      <input
                        @click="updateTemperature(1)"
                        v-bind:value="1"
                        name="ratingTemperature"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTemperature(2)"
                        v-bind:value="2"
                        name="ratingTemperature"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTemperature(3)"
                        v-bind:value="3"
                        name="ratingTemperature"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTemperature(4)"
                        v-bind:value="4"
                        name="ratingTemperature"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updateTemperature(5)"
                        v-bind:value="5"
                        name="ratingTemperature"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                    </div>
                    <div class="form-group pb-4">
                      <p>Gostou da apresentação da comida?</p>
                      <input
                        @click="updatePresentation(1)"
                        v-bind:value="1"
                        name="ratingPresentation"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updatePresentation(2)"
                        v-bind:value="2"
                        name="ratingPresentation"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updatePresentation(3)"
                        v-bind:value="3"
                        name="ratingPresentation"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updatePresentation(4)"
                        v-bind:value="4"
                        name="ratingPresentation"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                      <input
                        @click="updatePresentation(5)"
                        v-bind:value="5"
                        name="ratingPresentation"
                        class="btn btn-outline-success rating"
                        type="button"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn btn-primary my-2 my-sm-0"
                      style="background-color: #127834; border-color: #127834"
                    >Enviar feedback</button>
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
import navBar from "@/components/navBar.vue";
import { mapGetters, mapMutations } from "vuex";
//import router from "../router/index";

export default {
  name: "feedback",
  components: {
    navBar
  },
  data() {
    return {
      taste: 0,
      service: 0,
      temperature: 0,
      presentation: 0,
      userLoggedId: 0,
      usersReservations: [],
      reservationsMenuId: [],
      idMenu: 0,
      //data selecionada botão
      dateSelected: 0,
      //meal time selecionada botão
      mealTimeSelected: "",
      idReservationWithoutFeedback: [],
      //array filtrado por idMenu, data < data de hoje e sem feedbacks
      idMenuFilteredByDate: [],
      todaysDate: 0
    };
  },
  computed: {
    ...mapGetters("reservations", ["getReservationsByUser"]),
    ...mapGetters("menu", ["getMenuById", "getIdMenuByDaySchedule"]),
    ...mapGetters("user", ["getSaldoByUserLogged", "getUserLogged"]),
    ...mapGetters("feedback", ["getFeedbackByUserAndReservation"]),

    getMenuByDate() {
      return this.getIdMenuByDate(this.dateSelected);
    }
  },
  methods: {
    ...mapMutations("feedback", ["feedbackCreater"]),
    updateTaste(input) {
      this.taste = input;
    },
    updateService(input) {
      this.service = input;
    },
    updateTemperature(input) {
      this.temperature = input;
    },
    updatePresentation(input) {
      this.presentation = input;
    },
    saveFeedback() {
      let newFeedback = {
        comentario: "Olá",
        temperature: this.temperature,
        taste: this.taste,
        service: this.service,
        presentation: this.presentation,
        idReservation: this.idReservation,
        idUser: this.userLoggedId
      };
      this.feedbackCreater({ newFeedback });
    }
  },
  created() {
    this.todaysDate = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
    this.userLoggedId = this.getUserLogged.id;
    this.usersReservations = this.getReservationsByUser(this.userLoggedId);
    //filtrar por reservas ainda sem feedback
    let reservationsMenu = [];
    for (let i = 0; i < this.getReservationsByUser(1).length; i++) {
      reservationsMenu.push(this.getReservationsByUser(1)[i].idMenu);
      for (let j = 0; j < reservationsMenu.length; j++) {
        //para cada valor obtido no array resevationsMenu vai fazer push do id menu para data()
        if (typeof this.getFeedbackByUserAndReservation(1, 3) == "undefined") {
         this.reservationsMenuId.push(this.getReservationsByUser(1)[i].idMenu);
        }
      }
    }
    //erro nao está aqui, está acima
    for (let i = 0; i < this.reservationsMenuId.length; i++) {
      if (this.getMenuById(this.reservationsMenuId[i]).date<this.todaysDate) {
        this.idMenuFilteredByDate.push(this.getMenuById(this.reservationsMenuId[i]));
      }  
    }
    alert(JSON.stringify(this.idMenuFilteredByDate))

    // for (let i = 0; i < this.usersReservations.length; i++) {
    //   for (let j = 0; i < this.usersReservations.length; j++) {
    //     this.reservationsMenuId.push(
    //       this.getMenuById(this.usersReservations[j].idMenu)
    //     );
    //   }
    // }
    //this.dateSelected = this.reservationsMenuId[0].date;
  },
  updated() {
    // this.mealTimeSelected = this.getMenuById(this.idMenu).mealTime;
    // this.dateSelected = this.getMenuById(this.idMenu).date;
  }
};
</script>


<style>
.rating {
  border-radius: 8px;
  background-color: #127834; /* Green */
  border: none;
  color: white;
  padding: 6px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
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




