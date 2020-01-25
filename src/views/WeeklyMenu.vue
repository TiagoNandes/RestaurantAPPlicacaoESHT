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
              <h1 class="text-center pt-5 pb-4" style="color: #127834;">Ementa Semanal</h1>
              <!-- <ul class="nav nav-pills nav-fill pt-5">
                <li class="nav-item border">
                  <a class="nav-link" href="#">Segunda-Feira</a>
                </li>
                <li class="nav-item border">
                  <a class="nav-link" href="#">Terça-Feira</a>
                </li>
                <li class="nav-item border">
                  <a class="nav-link" href="#">Quarta-Feira</a>
                </li>
                <li class="nav-item border">
                  <a class="nav-link" href="#">Quinta-Feira</a>
                </li>
                <li class="nav-item border">
                  <a class="nav-link" href="#">Sexta-Feira</a>
                </li>
              </ul>-->

              <form @submit.prevent="myFilter" class="needs-validation" novalidate>
                <div class="row">
                  <div class="col">
                    <label for="date" class="mr-sm-2">Escolha o dia:</label>
                    <input id="date" type="date" v-model="date" />
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="sel1">Selecione o horário:</label>
                      <select class="form-control" id="sel1" name="sellist1" v-model="mealTime">
                        <option>Almoço</option>
                        <option>Jantar</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn btn btn-primary my-2 my-sm-0 btn-lg mt-5"
                  style="background-color: #127834; border-color: #127834"
                >Procurar</button>
              </form>
            </div>
          </div>
        </div>

        <section id="formMultibanco" class="outer-wrapper text-center">
          <div v-if="this.idMenu == undefined || this.idMenu == 0" class="py-5">
            <h2>Não existem ementas para este dia.</h2>
          </div>
          <div v-else class="py-5">
            <div class="container pt-5">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item flex-fill">Entrada</li>
                <li class="list-group-item flex-fill">Sopa</li>
                <li class="list-group-item flex-fill">Prato Principal</li>
                <li class="list-group-item flex-fill">Sobremesa</li>
              </ul>
              <ul class="list-group list-group-horizontal pt-5">
                <li class="list-group-item flex-fill border-0">{{this.getEntrada}}</li>
                <li class="list-group-item flex-fill border-0">{{this.getSopa}}</li>
                <li class="list-group-item flex-fill border-0">
                  {{this.getCarne}}
                  <br />ou
                  <br />
                  {{this.getPeixe}}
                  <br />ou
                  <br />
                  {{this.getVegetariano}}
                </li>
                <li class="list-group-item flex-fill border-0">{{this.getSobremesa}}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!--<div>
      <button
        type="submit"
        class="btn btn btn-primary my-2 my-sm-0 btn-lg mt-5"
        style="background-color: #127834; border-color: #127834"
      >Reservar</button>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
//import mapMutations from "vuex";
import navBar from "@/components/navBar.vue";
//import $ from "jquery";
//import moment from "moment";

export default {
  name: "weeklyMenu",
  components: {
    navBar
  },
  data() {
    return {
      isActive: false,
      entrada: 0,
      sopa: 0,
      idMenu: 0,
      meals: [],
      filterDay: "",
      filterSchedule: "",
      mealTime: "",
      date: "",
      ementa: "",
      err: false
    };
  },
  created() {
    // this.meals = this.getAllMeals;
    this.date = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
    if (this.getIdMenuByDaySchedule("Almoço", String(this.date))) {
      this.idMenu = this.getIdMenuByDaySchedule(
        "Almoço",
        String(this.date)
      ).idMenu;
      this.mealTime = "Almoço";
    } else if (this.getIdMenuByDaySchedule("Jantar", String(this.date))) {
      this.idMenu = this.getIdMenuByDaySchedule(
        "Jantar",
        String(this.date)
      ).idMenu;
      this.mealTime = "Jantar";
    } 
  },
  computed: {
    ...mapGetters("mealType", [
      "getAllMealTypes",
      "getMealTypeById",
      "getMealTypeByMealType"
    ]),
    ...mapGetters("meals", [
      "getAllMeals",
      "getMealByIdMenu",
      "getMealByMenuType"
    ]),
    ...mapGetters("menu", [
      "getMenuById",
      "getIdMenuByDaySchedule",
      "getMenusNextMenus"
    ]),

    getEntrada() {
      if (
        typeof this.getMealByMenuType(this.idMenu, 2) !== 'undefined' &&
        this.getMealByMenuType(this.idMenu, 2) !== null
      ) {
        return this.getMealByMenuType(this.idMenu, 2).description;
      } else return this.err;
    },
    getSopa() {
      if (
        typeof this.getMealByMenuType(this.idMenu, 1) !== 'undefined' &&
        this.getMealByMenuType(this.idMenu, 1) !== null
      ) {
        return this.getMealByMenuType(this.idMenu, 1).description;
      } else return this.err
    },
    getCarne() {
      if (
        typeof this.getMealByMenuType(this.idMenu, 3) !== 'undefined' &&
        this.getMealByMenuType(this.idMenu, 3) !== null
      ) {
        return this.getMealByMenuType(this.idMenu, 3).description;
      } else return this.err
    },
    getPeixe() {
      if (
        typeof this.getMealByMenuType(this.idMenu, 4) !== 'undefined' &&
        this.getMealByMenuType(this.idMenu, 4) !== null
      ) {
        return this.getMealByMenuType(this.idMenu, 4).description;
      } else return this.err
    },
    getVegetariano() {
      if (
        typeof this.getMealByMenuType(this.idMenu, 5) !== 'undefined' &&
        this.getMealByMenuType(this.idMenu, 5) !== null
      ) {
        return this.getMealByMenuType(this.idMenu, 5).description;
      } else return this.err
    },
    getSobremesa() {
      if (
        typeof this.getMealByMenuType(this.idMenu, 6) !== 'undefined' &&
        this.getMealByMenuType(this.idMenu) !== null
      ) {
        return this.getMealByMenuType(this.idMenu, 6).description;
      } else return this.err
    }
  },
  methods: {
    myFilter() {
      let idAchieved = this.getIdMenuByDaySchedule(this.mealTime, this.date);
      if (typeof idAchieved !== 'undefined' && idAchieved !== null) {
        this.idMenu = idAchieved.idMenu;
      } else {
        this.idMenu = 0;
      }
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
.navlink > .active {
  color: white;
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

/*#footer{
  height: 50px;
  position: absolute;
  bottom: -25px;
  background-color: #383a38;
  border-radius: 25px;
} */
</style>
