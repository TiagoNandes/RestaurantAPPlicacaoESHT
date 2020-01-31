<template>
  <div id="principal">
    <navBar2></navBar2>

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

        <div class="form-group" v-if="JSON.stringify(this.idMenusReservation) != '[]'">
          <div class="container">
            <p>Reservas anteriores</p>
            <div class="row">
              <div
                v-for="i in this.idMenusReservation.length"
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
                    v-bind:value="idMenusReservation[i-1].idMenu"
                  />
                  <div class="panel panel-default card-input border">
                    <div class="panel-heading"></div>
                    <div
                      class="panel-body"
                    >{{idMenusReservation[i-1].date}} , {{idMenusReservation[i-1].mealTime}}</div>
                  </div>
                </label>
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
                    <div id="rtnFood" class="form-group" data-toggle="buttons">
                      <p for="exampleInputCard">Como estava a comida?</p>
                      <input
                        @click="updateTaste(1)"
                        name="ratingFood"
                        v-bind:value="1"
                        class="btn btn-outline-success rating btnFood"
                        type="button"
                      />
                      <input
                        @click="updateTaste(2)"
                        name="ratingFood"
                        v-bind:value="2"
                        class="btn btn-outline-success rating btnFood"
                        type="button"
                      />
                      <input
                        @click="updateTaste(3)"
                        name="ratingFood"
                        v-bind:value="3"
                        class="btn btn-outline-success rating btnFood"
                        type="button"
                      />
                      <input
                        @click="updateTaste(4)"
                        name="ratingFood"
                        v-bind:value="4"
                        class="btn btn-outline-success rating btnFood"
                        type="button"
                      />
                      <input
                        @click="updateTaste(5)"
                        name="ratingFood"
                        v-bind:value="5"
                        class="btn btn-outline-success rating btnFood"
                        type="button"
                      />
                    </div>
                    <div id="rtnService" class="form-group" data-toggle="buttons">
                      <p>Como foi o serviço?</p>
                      <input
                        @click="updateService(1)"
                        v-bind:value="1"
                        name="ratingService"
                        class="btn btn-outline-success rating btnService"
                        type="button"
                      />
                      <input
                        @click="updateService(2)"
                        v-bind:value="2"
                        name="ratingService"
                        class="btn btn-outline-success rating btnService"
                        type="button"
                      />
                      <input
                        @click="updateService(3)"
                        v-bind:value="3"
                        name="ratingService"
                        class="btn btn-outline-success rating btnService"
                        type="button"
                      />
                      <input
                        @click="updateService(4)"
                        v-bind:value="4"
                        name="ratingService"
                        class="btn btn-outline-success rating btnService"
                        type="button"
                      />
                      <input
                        @click="updateService(5)"
                        v-bind:value="5"
                        name="ratingService"
                        class="btn btn-outline-success rating btnService"
                        type="button"
                      />
                    </div>
                    <div class="form-group" data-toggle="buttons">
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
                    <div class="form-group pb-4" data-toggle="buttons">
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
                    <div><p>Comentário adicional</p> 
                      <textarea
                        id="inputComment"
                        v-model = comentario
                        name="comentario"
                        class="btn btn-outline-success rating"
                        style="height: 150px; width: 300px;"
                        type="text"
                      />
                      <br>
                      <br>  
                    </div>
                    <hr/>
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
        <div v-else>
          <h3>Não existem reservas sem avaliação para mostrar</h3>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar2 from "@/components/navBar2.vue";
import { mapGetters, mapMutations } from "vuex";


export default {
  name: "feedback",
  components: {
    navBar2
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
      feedbackUser: [],
      idMenusReservation: [],
      todaysDate: 0,
      comentario:""

      

    };
  },
  mounted(){ /*
// Vai encontrar a div rtnFood
var rtnFood = document.getElementById("rtnFood");
// Vai encontrar os btnsFood
var buttonFood = rtnFood.getElementsByClassName("btnFood");
// Loop para meter active o botao clicado
for (var i = 0; i < buttonFood.length; i++) {
  buttonFood[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("focus");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" focus", "");
    }

    // Add the active class to the current/clicked button
    this.className += " focus";
  });
} */

/*
// Vai encontrar a div rtnFood
var rtnService = document.getElementById("rtnService");
// Vai encontrar os btnsFood
var btnService = rtnService.getElementsByClassName("btnService");
// Loop para meter active o botao clicado
for (var j = 0; j < btnService.length; j++) {
  btnService[j].addEventListener("click", function() {
    var current = document.getElementsByClassName("focus");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" focus", "");
    }

    // Add the active class to the current/clicked button
    this.className += " focus";
  });
} */

  },
  computed: {
    ...mapGetters("reservations", [
      "getReservationsByUser",
      "getReservationsByIdReservation",
      "getIdReservationByUserMenu"
    ]),
    ...mapGetters("menu", ["getMenuById", "getIdMenuByDaySchedule"]),
    ...mapGetters("user", ["getSaldoByUserLogged", "getUserLogged"]),
    ...mapGetters("feedback", [
      "getFeedbackByUserAndReservation",
      "getFeedbackByUser"
    ]),

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
      let idReservation = this.getIdReservationByUserMenu(
        this.userLoggedId,
        this.idMenu
      ).idReservation;
      let newFeedback = {
        comentario: this.comentario,
        temperature: this.temperature,
        taste: this.taste,
        service: this.service,
        presentation: this.presentation,
        idReservation: idReservation,
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
    //Get todas as reservas do utilizador logado e adiciona o idReservation ao array usersReservations no data()
    for (let i in this.getReservationsByUser(this.userLoggedId)) {
      this.usersReservations.push(
        this.getReservationsByUser(this.userLoggedId)[i].idReservation
      );
    }
    //Get todos os feedbacks do user e para cada elemento vai verificar se correspondem às reservas obtidas anteriormente
    for (let i in this.getFeedbackByUser(this.userLoggedId)) {
      this.feedbackUser.push(
        this.getFeedbackByUser(this.userLoggedId)[i].idReservation
      );
    }
    for (let i in this.usersReservations) {
      let existe = false;
      for (let j in this.feedbackUser) {
        if (this.usersReservations[i] == this.feedbackUser[j]) {
          existe = true;
        }
      }
      if (existe == false) {
        this.idReservationWithoutFeedback.push(this.usersReservations[i]);
      }
    }
    for (let i in this.idReservationWithoutFeedback) {
      let idsMenu = this.getReservationsByIdReservation(
        this.idReservationWithoutFeedback[i]
      ).idMenu;
      //check date
      if (this.getMenuById(idsMenu).date < this.todaysDate) {
        this.idMenusReservation.push(this.getMenuById(idsMenu));
      }
    }
  },
  updated() {
    // this.mealTimeSelected = this.getMenuById(this.idMenu).mealTime;
    // this.dateSelected = this.getMenuById(this.idMenu).date;
  }
};
</script>


<style>

#inputComment:hover{
background-color: white;
color: black;
}
.rating {
  border-radius: 8px;
  background-color: white; /* Green */
  border-color: green;
  color: black;
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



