<template>
  <div>
    <h4>Register</h4>
    <form class="register" @submit.prevent="formRegister">
      <label for="nome">Name</label>
      <div>
        <input id="nome" type="text" v-model="nome" required autofocus />
      </div>
      <label for="sobrenome">Sobrenome</label>
      <div>
        <input id="sobrenome" type="text" v-model="sobrenome" required autofocus />
      </div>
      <label for="data_nascimento">Data de nascimento</label>
      <div>
        <input id="data_nascimento" type="date" v-model="data_nascimento" required autofocus />
      </div>
      <label for="id_tipoUser">Tipo de utilizador</label>
      <div>
        <input id="id_tipoUser" type="text" v-model="id_tipoUser" autofocus />
      </div>
      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="text" v-model="email" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <!--<label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required />
      </div>-->

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
      data_nascimento: "",
      email: "",
      password: "",
      saldo: "",
      telefone: "",
      id_tipoUser: ""
    };
  },
  methods: {
    ...mapMutations("user", ["register", "logout"]),
    formRegister() {
      /* let data = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      data_nascimento: this.data_nascimento,
      email: this.email,
      password: this.password,
      saldo:this.saldo,
      telefone:this.telefone,
      id_tipoUser: this.id_tipoUser
      };*/
      let data = {
        nome: "S",
        sobrenome: "R",
        data_nascimento: "12-1-1998",
        email: "s@esmad.ipp.pt",
        password: "123",
        saldo: 0.0,
        telefone: 12345,
        id_tipoUser: 1
      };
      return this.register({ data });
    }
  }
};
</script>