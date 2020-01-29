<template>
  <div id="principal">
    <navBar></navBar>

    <div class="container">
      <div class="py-5">
        //FORM
        <form class="py-5 mt-5 register" @submit.prevent="register1">
          <h1 style="color: #127834;" class="py-4">Criar Conta</h1>
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  id="nome"
                  v-model="nome"
                  name
                  class="form-control"
                  placeholder="Nome Próprio"
                  type="text"
                  required
                />
              </div>

              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  id="sobrenome"
                  v-model="sobrenome"
                  name
                  class="form-control"
                  placeholder="Apelido"
                  type="text"
                  required
                />
                <!-- <input type="date" name="bday" class="form-control" placeholder="Data de Nascimento"> -->
              </div>
              <!-- Date input -->
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-birthday-cake"></i>
                  </span>
                </div>

                <input
                  v-model="data_nascimento"
                  id="data_nascimento"
                  type="date"
                  name="bday"
                  class="form-control"
                  placeholder="Data de Nascimento"
                  required
                  max="2004-12-31"
                />
              </div>
              <!-- form-group// -->
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
                <div class="">
                <input
                  id="email"
                  v-model="email"
                  name
                  class="form-control"
                  placeholder="E-mail"
                  type="text"
                  pattern="[^@\x22]+"
                />
                </div>
                <input
                  required
                  id="esmad"
                  v-model="escola"
                  name="escola"
                  class="form-control"
                  placeholder="Endereço de e-mail"
                  value="@esmad.ipp.pt"
                  type="radio"
                /> @esmad.ipp.pt
                <input
                  required
                  id="esmad"
                  v-model="escola"
                  name="escola"
                  class="form-control"
                  placeholder="Endereço de e-mail"
                  value="@esht.ipp.pt"
                  type="radio"
                />@esht.ipp.pt
              </div>
              <!-- form-group// -->
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-phone"></i>
                  </span>
                </div>
                <input
                  name
                  class="form-control"
                  v-model="telefone"
                  placeholder="Phone number"
                  type="text"
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
                  id="password"
                  v-model="password"
                  class="form-control"
                  placeholder="Insira uma password"
                  type="password"
                />
              </div>
              <!-- form-group// -->
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input class="form-control" placeholder="Repita a password" type="password" />
              </div>
              <!-- form-group// -->
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  style="background-color: #127834; border-color: #127834"
                >Criar Conta</button>
              </div>
              <!-- form-group// -->
              <p class="text-center">
                Já possui uma conta?
                <router-link to="/loginUser">
                  <a href style="color: #127834;">Log In</a>
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


<style>
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

input[type="radio"] {
  transform: scale(0.5);
  vertical-align: sub;
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
import $ from "jquery";
import { mapMutations } from "vuex";

export default {
  name: "main",
  components: {
    navBar
  },
  data() {
    return {
      nome: "",
      sobrenome: "",
      data_nascimento: "",
      email: "",
      telefone: "",
      password: "",
      escola: ""
    };
  },
  methods: {
    ...mapMutations("user", ["register"]),
    register1() {
      let data = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        data_nascimento: this.data_nascimento,
        email: this.email + this.escola,
        password: this.password,
        saldo: 0,
        telefone: this.telefone,
        id_tipoUser: 2
      };
      this.register({ data });
    }
  }
};

$(document).ready(function() {
  $("#datepicker").datepicker();
});
</script>
