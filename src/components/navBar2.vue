<!-- Versão melhorada da navbar -->

<template id="navbarF">
<div>
  <nav class="navbar fixed-top navbar-expand-lg border border-success" >
    <div class="container"> <a class="navbar-brand" href="#">
        <img id="navbarLogo" src="../assets/alDenteNavbar.png" alt="">
      </a> <button class="navbar-toggler navbar-toggler-right border-0 pt-4" type="button" data-toggle="collapse" data-target="#navbar11">
        <span class="navbar-toggler-icon"><i class="fas fa-bars" style="color:#127834;"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar11">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"> <router-link style="color: #127834" to="/weeklyMenu">Ementa</router-link></li>
          <li class="nav-item"> <router-link style="color: #127834" to="/restaurant">Instalações</router-link> </li>
          <li class="nav-item"> <router-link style="color: #127834" to="/ourDishes">Os Nossos Pratos</router-link> </li>
          <li v-show="this.getUser !== undefined" class="nav-item"> <router-link style="color: #127834" to="/reservation">Reservar Refeição</router-link> </li>
          <li v-show="this.getUser !== undefined" class="nav-item"> <router-link style="color: #127834" to="/feedback">Feedback</router-link> </li>        
        </ul>
        <ul class="navbar-nav ml-auto">
          <div id="divLogout" v-if="this.getUser == undefined">
          <router-link  to="/LoginUser"><button id="btnLogin" class="btn btn btn-primary my-2 my-sm-0" style="background-color: #127834; border-color: #127834" >Entrar</button></router-link>
        </div>
        <div id="divLogout" v-else>
          <router-link style="color: #127834" to="/profile" >{{this.getUser.nome}} &nbsp; </router-link>
          <img src="../assets/avatar.jpg" alt="Avatar" class="avatar"> 
          <router-link to = ""><button v-on:click="logOut1()" class="btn btn btn-primary my-2 my-sm-0 ml-3" style="background-color: #127834; border-color: #127834" >Sair</button></router-link>
        </div>
        </ul>
      </div>
    </div>
  </nav>

</div>
</template>

<script>
import {  mapGetters, mapMutations } from 'vuex'


export default {
  data() {
    return {
      user: ""
    };
  },
  mounted(){

  },
  computed: {
...mapGetters( "user",['getUserLogged']),
  getUser(){
    return this.getUserLogged
  }
    
  },
  methods:{
    ...mapMutations("user", ["logOut"]),

    logOut1(){
      return this.logOut()
    },
  }
};
</script>

<style>

@media screen and (max-width: 992px) {
  #divLogout{
    margin-top: 15px;
  }
  #btnLogin {
    margin-left: 25px;
  }
}

</style>