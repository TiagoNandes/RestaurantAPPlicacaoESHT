<template>
  <div id="principal">
    <navBar2></navBar2>

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
              <h1 class="text-center pt-5 pb-4" style="color: #1FBA53;">Carregamento de Carteira</h1>
              <h6 class="text-center pb-4">
                Escolha o seu método de pagamento
                <br />
              </h6>
              <a
                id="buttonMultibanco"
                class="btn btn-outline-success text-center"
                style="padding: 41px 47px;"
              >
                <img id="iconMultibanco" src="../assets/multibanco.png" alt />
                <br />Cartão de Crédito
              </a>
            </div>

            <div class="col-md-2" style></div>
          </div>
        </div>

        <section id="formMultibanco" class="outer-wrapper text-center">
          <div class="inner-wrapper">
            <div class="container">
              <div class="row" style="margin-top: 32px">
                <div class="col-sm-4"></div>
                <div class="col-sm-4 col-sm-offset-8">
                  <form role="form" @submit.prevent="addFunds">
                    <div class="form-group">
                      <label for="exampleInputCard">Número de Cartão</label>
                      <input
                        minlength="13"
                        maxlength="16"
                        required
                        type="text"
                        class="form-control text-center"
                        id="exampleInputEmail1"
                        placeholder="Insira o número de cartão"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCVV">CVV</label>
                      <input
                      minlength="3"
                      maxlength="3"
                      required
                        type="text"
                        class="form-control text-center"
                        id="exampleInputPassword1"
                        placeholder="Insira o CVV"
                      />
                    </div>
                    <div class="form-group pb-4">
                      <label for="exampleInputAmount">Quantia</label>
                      <input
                      step="0.01"
                      min="1"
                      required
                        type="number"
                        class="form-control text-center"
                        id="exampleInputPassword1"
                        v-model="newSaldo"
                        placeholder="5.00"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn btn-primary my-2 my-sm-0"
                      style="background-color: #127834; border-color: #127834"
                    >CONFIRMAR PAGAMENTO</button>
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
import { mapMutations, mapGetters } from "vuex";
import navBar2 from "@/components/navBar2.vue";
import router from "../router/index";

export default {
  name: "main",
  components: {
    navBar2
  },

  data() {
    return {
      newSaldo: 0,
      idUser: null
    };
  },
  computed: {
    ...mapGetters("user", ["getSaldoByUserLogged", "getUserLogged"])
  },
  methods: {
    ...mapMutations("user", ["updateSaldo"]),
    addFunds() {
      this.idUser = this.getUserLogged.id;
      this.newSaldo = this.newSaldo;
      this.updateSaldo({ idUser: this.idUser, price: Math.abs(this.newSaldo) });
      router.push("/profile")
    }
  }
};
</script>

<style>
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

