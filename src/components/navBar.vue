<template id="navbarF">
<div>
    <nav class="navbar navbar-expand-md navbar fixed-top border border-success">
      <div id="navBar">
      <router-link to="/"><img id="navbarLogo" src="../assets/navbarLogo2.png" alt=""></router-link>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- mx-md-auto faz os elementos da navbar centrarem -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link style="color: #127834" to="/weeklyMenu">Ementa<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link style="color: #127834" to="/restaurant">Instalações</router-link>
          </li>
          <li v-show="this.getUser !== undefined" class="nav-item">
            <router-link style="color: #127834" to="/reservation">Reservar Refeição</router-link>
          </li>
          <li v-show="this.getUser !== undefined" class="nav-item">
            <router-link style="color: #127834" to="/feedback">Feedback</router-link>
          </li>
        </ul>
       <!-- <div v-if="this.getUser!== 'undefined' || this.getUser !=='null' ">
          <router-link style="color: #127834" to="/addFunds" >Saldo: {{this.getUser.saldo}}</router-link>
        </div>-->
        <div v-if="this.getUser == undefined">
          <router-link  to="/LoginUser"><button class="btn btn btn-primary my-2 my-sm-0" style="background-color: #127834; border-color: #127834" >Entrar</button></router-link>
        </div>
        <div v-else>
          <router-link style="color: #127834" to="/addFunds" >Saldo: {{this.getUser.saldo}} </router-link>
          <router-link  to="/LoginUser"><button class="btn btn btn-primary my-2 my-sm-0" style="background-color: #127834; border-color: #127834" >Sair</button></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: ""
    };
  },
  computed: {
...mapGetters( "user",['getUserLogged']),
  getUser(){
    return this.getUserLogged
  }
    
  },
};
</script>

<style>
#navBar {
  color: #127834;
  font-family: 'Poppins', sans-serif;
  padding-left: 7%;
}

.navbar {
  text-align: center;
  min-height: 80px;
  background-color: white;
  font-family: 'Poppins', sans-serif;
}
.navbar-nav > li{
  padding-left:30px;
  padding-right:5px;
  padding-top: 15px;
}



</style>