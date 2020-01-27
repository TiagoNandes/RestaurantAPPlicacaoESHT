<template>
 <div class="home page-holder bg-cover">
   <div id="loginButton" class="container">
     <div class="row pt-5">
       <div class="col-10"></div>
       <div class="col-2">
          <router-link to="/loginUser">
        <button class="btn btn btn-primary my-2 my-sm-0 float-right" style="background-color: #127834; border-color: #127834">Entrar</button>
          </router-link>
      </div>
     </div>
   </div>

   <div id="landingPage" class="container pt-5">
     <div class="row">
       <div class="col-3"></div>
       <div class="col-6 text-center">
         <img
            id="mainLogo"
            src="../assets/alDente.png"
            alt="Logótipo Temporário"
            style="transform: scale(0.7); top:2px;"
          />
          <!-- tamanho do logo lixa o responsiveness -->
       </div>
     </div>
   </div>

 </div>
</template>

<style>
.home {
  background-image: url("../assets/bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

@media only screen and (max-width: 768px) {

	#mainLogo{
    transform: scale(1.5);
  }
}
</style>