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
                                value="carne"
                                class="card-input-element"
                              />
                              <div class="panel panel-default card-input border">
                                <div class="panel-body p-3">Carne</div>
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
                                value="peixe"
                                class="card-input-element"
                              />

                              <div class="panel panel-default card-input border">
                                <div class="panel-body p-3">Peixe</div>
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
                                value="vegetariano"
                                class="card-input-element"
                              />

                              <div class="panel panel-default card-input border">
                                <div class="panel-body p-3">Vegetariano</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <router-link to="/reservationInfo">
                    <button
                      type="submit"
                      class="btn btn btn-primary my-2 my-sm-0 p-2"
                      style="background-color: #127834; border-color: #127834;"
                    >Continuar</button> </router-link>
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
import router from '../router/index'
export default {
  name: "main",
  components: {
    navBar
  },

  data() {
    return {
      idMenu: "",
      numOfPeople: 0,
      carne: 0,
      peixe: 0,
      vegetariano: 0,
      value: []
    };
  },
  created() {
    // alert(router.go(1))
    this.idMenu = this.$route.params.idMenu;
    this.numOfPeople = this.$route.params.people;
    for (let i in this.numOfPeople) this.value.push(0 * i);
  },

  methods: {
    nextPage() {
      for (let i = 1; i <= this.numOfPeople; i++) {
        if (this.value[i] == "carne") {
          this.carne++;
        } else if (this.value[i] == "peixe") {
          this.peixe++;
        } else if (this.value[i] == "vegetariano") {
          this.vegetariano++;
        }
      }
      router.push({name:"finishReservation", params:{people:this.numOfPeople, idMenu:this.idMenu, carne:this.carne, peixe:this.peixe, vegetariano:this.vegetariano}})

    }
  }
};
</script>
