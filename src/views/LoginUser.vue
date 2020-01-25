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
        <form class="py-5 mt-5 login" @submit.prevent="loginForm()">
          <h1 style="color: #127834;" class="py-4">Início de Sessão</h1>
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              <!-- form-group// -->
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
                <input
                  required
                  v-model="email"
                  class="form-control"
                  placeholder="Endereço de e-mail"
                  type="email"
                />
              </div>

              <!-- form-group end.// -->
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  required
                  v-model="password"
                  class="form-control"
                  placeholder="Insira a sua password"
                  type="password"
                />
              </div>
              <!-- form-group// -->
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  style="background-color: #127834; border-color: #127834"
                >Iniciar Sessão</button>
              </div>
              <!-- form-group// -->
              <p class="text-center">
                Não tem conta?
                <router-link to="/Registration">
                  <a href style="color: #127834;">Crie uma!</a>
                </router-link>
              </p>
            </div>
            <!--col-->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";
import $ from "jquery";
import { mapMutations } from "vuex";

export default {
  name: "login",
  components: {
    navBar
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations("user", ["login", "logout"]),
    loginForm() {
      const email = this.email;
      const pass = this.password;
      this.login({ email, pass });
    }
  }
};

$(document).ready(function() {
  $("#datepicker").datepicker();
});
</script>


<style>
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