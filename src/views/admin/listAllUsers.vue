<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2 style="text-align: center;">Gestão de Utilizadores</h2>
      <br />
      <div id="result"></div>
      <div class="table-responsive">
        <table class="table table-bordered" id="tableUser">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Data de Nascimento</th>
              <th>Email</th>
              <th>Password</th>
              <th>Saldo</th>
              <th>Telefone</th>
              <th>id_tipoUser</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in getAllUsers" :key="user">
              <td>{{user.id}}</td>
              <td>{{user.nome}}</td>
              <td>{{user.sobrenome}}</td>
              <td>{{user.data_nascimento}}</td>
              <td>{{user.email}}</td>
              <td>{{user.password}}</td>
              <td>{{user.saldo}}</td>
              <td>{{user.telefone}}</td>
              <td>{{getTypeByUser(user.id_tipoUser)}}</td>
              <td>
                <button type="button" class="btn btn-success" v-on:click="editUser(user.id)">
                  <i class="fas fa-edit"></i>
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deletingUser(user.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <dialog id="editUserDialog">
          <form @submit.prevent="updatingUser" method="dialog">
            <div class="row">
              <div class="col">
                <label for="nome">Nome</label>
                <input
                  v-model="form.editNome"
                  type="text"
                  class="form-control"
                  id="nome"
                  placeholder="nome"
                  required
                />
              </div>
              <div class="col">
                <label for="sobrenome">Sobrenome</label>
                <input
                  v-model="form.editSobrenome"
                  type="text"
                  class="form-control"
                  id="sobrenome"
                  placeholder="sobrenome"
                  required
                />
              </div>
              <div class="col">
                <label for="data_nascimento">Data de Nascimento</label>
                <input
                  v-model="form.editData_nascimento"
                  type="date"
                  class="form-control"
                  id="data_nascimento"
                  placeholder="data_nascimento"
                  required
                />
              </div>
              <div class="col">
                <label for="email">Email</label>
                <input
                  v-model="form.editEmail"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col">
                <label for="password">Password</label>
                <input
                  v-model="form.editPassword"
                  type="text"
                  class="form-control"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>
              <div class="col">
                <label for="form.editSaldo">Saldo</label>
                <input
                  v-model="form.editSaldo"
                  type="text"
                  class="form-control"
                  placeholder="saldo"
                  required
                />
              </div>
              <div class="col">
                <label for="form.editTelefone">Telefone</label>
                <input
                  v-model="form.editTelefone"
                  type="tel"
                  class="form-control"
                  placeholder="telefone"
                  required
                />
              </div>
              <div class="col">
                <div>
                  <label for="idTipoUser">Tipo User</label>
                  <!-- <input
                  v-model="form.editIdTipoUser"
                  type="text"
                  class="form-control"
                  id="idTipoUser"
                  placeholder="id_tipoUser"
                  required
                  />-->
                  <div>
                    <label
                      class="radio-inline"
                      v-for="userTypes in this.getAllUserTypes"
                      :key="userTypes"
                    >
                      <input
                        type="radio"
                        name="optradio"
                        v-model="form.editIdTipoUser"
                        v-bind:value="userTypes.id_tipoUser"
                      />
                      {{userTypes.tipo}}
                    </label>
                  </div>
                </div>
              </div>
              <input v-model="form.editId" type="hidden" />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">SAVE</button>
            &nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-primary"
              @click="modalClose()"
            >CLOSE</button>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Navbar from "@/components/homeAdmin.vue";

import router from "../../router/index";
export default {
  name: "listAllUsers",
  components: {
    Navbar
  },
  data() {
    return {
      idMenu: "",
      selectedID: "",
      userType: this.getAllUserTypes,
      form: {
        editId: 0,
        editNome: "",
        editSobrenome: "",
        editData_nascimento: "",
        editEmail: "",
        editPassword: "",
        editSaldo: 0,
        editTelefone: "",
        editIdTipoUser: 0,
        filterName: ""
      },
      updatedUser: {}
    };
  },
  computed: {
    ...mapGetters("userType", ["getTypeByUser", "getAllUserTypes"]),
    ...mapGetters("user", ["getAllUsers", "getSaldoByUser"])
  },
  methods: {
    ...mapMutations("user", ["updater", "deleter"]),
    deletingUser(id) {
      this.deleter(id);
    },
    editUser(id) {
      document.getElementById("editUserDialog").showModal();
      const user = this.getAllUsers.filter(user => user.id === id)[0];
      this.form.editId = user.id;
      this.form.editNome = user.nome;
      this.form.editSobrenome = user.sobrenome;
      this.form.editData_nascimento = user.data_nascimento;
      this.form.editEmail = user.email;
      this.form.editPassword = user.password;
      this.form.editSaldo = user.saldo;
      this.form.editTelefone = user.telefone;
      this.form.editIdTipoUser = user.id_tipoUser;
    },
    updatingUser() {
      this.updatedUser = {
        id: this.form.editId,
        nome: this.form.editNome,
        sobrenome: this.form.editSobrenome,
        data_nascimento: this.form.editData_nascimento,
        email: this.form.editEmail,
        password: this.form.editPassword,
        saldo: this.form.editSaldo,
        telefone: this.form.editTelefone,
        id_tipoUser: this.form.editIdTipoUser
      };
      const index = this.getAllUsers.findIndex(
        user => user.id === this.updatedUser.id
      );
      let newUser = this.updatedUser;
      this.updater({ index, newUser });
      this.modalClose();
    },
    modalClose() {
      document.getElementById("editUserDialog").close();
      router.go();
    }
  }
};
</script>
<style>
@import "../../assets/admin.css";
</style>