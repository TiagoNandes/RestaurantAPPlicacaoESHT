<template>
  <div class="home page-holder bg-cover">
    <div id="loginButton">
      <div class="row pt-5">
        <div class="col-10"><router-link to="/loginUser"><button
          class="btn btn btn-primary my-2 my-sm-0 float-right"
          style="background-color: #127834; border-color: #127834"
        >Entrar</button></router-link></div>
        <div class="col-2">
          
        
      
        </div>
      </div>
    </div>
   

    <div id="landingPage" class="container pt-5">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-xs-12 col-12 text-center">
          <img
            class="mainLogo"
            id="mainLogo"
            src="../assets/alDente.png"
            alt="Logótipo Temporário"
            style=" top:2px;"
          />
          <h1 id="alDente" style="color: #127834; font-family:Pacifico;">Al Dente</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <hr class="lineBreak" />
          <h5 class="lineBreak smallText">ESHT</h5>
          <h5 class="lineBreak smallText">Gestão e Administração Hoteleira</h5>
          <router-link to="/restaurant">
          <a class="button1">O que é o<br/>Restaurante de Aplicação Al Dente?</a>
          </router-link>

        </div>
      </div>
    </div>

    <div id="routerOptions" class="container">
      <div class="row">
        <div class="col-md-3 mainOptions"><router-link to="/weeklyMenu">
              <img
                id="ementaSemanal"
                src="../assets/ementaSemanal1.png"
              />
            </router-link>
        </div>
        <div class="col-md-3 mainOptions">
              <router-link to="/reservation">
              <img
                id="reservarRefeicao"
                src="../assets/reservarRefeicao1.png"
              />
            </router-link>
        </div>
        <div class="col-md-3 mainOptions"><router-link to="/restaurant">
              <img
                id="instalacoes"
                src="../assets/instalacoes.png"
              />
            </router-link></div>
        <div class="col-md-3 mainOptions"><router-link to="/feedback">
              <img
                id="feedback"
                src="../assets/feedback1.png"
              />
            </router-link></div>
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
a.button1{
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid #127834;
background-color:#127834;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:white;
text-align:center;
transition: all 0.2s;
}
a.button1:hover{
color:black;
background-color:transparent;
}
@media all and (max-width:30em){
a.button1{
display:block;
margin:0.4em auto;
}
}
.content{
  display: none;
  background-color: #f1f1f1;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
/*Ecrãs 768px e para baixo..*/
@media only screen and (max-width: 768px) {
  body{
  height: 100%;
overflow-y: scroll;
overflow-x:hidden
}
  #landingPage {
    position: relative;
    top: -65px;
  }
  .button1 {
    position: relative;
    top: -150px;
  }
  .mainOptions {
    position: relative;
    top: -150px;
  }
  .lineBreak {
    position: relative;
    top: -75px;
  }
  #mainLogo {
    transform: scale(0.5);
  }
  .smallText {
    visibility: hidden;
  }
  #alDente {
    transform: scale(0.8);
    position: relative;
    top: -70px;
  }
  .mainOptions {
    transform: scale(0.30);
    position: relative;
    top:-100px;
    margin-top:-250px;
  }
  #ementaSemanal{
    position:relative;
    left:-25px;
  }
  #reservarRefeicao{
    position: relative;
    right: -15px;
  }
   #instalacoes{
    position: relative;
    left: -15px;
  }
}
/*Ecrãs 768px e para cima..*/
@media only screen and (min-width: 768px) {
  #landingPage {
    position: relative;
    top: -65px;
  }
  .lineBreak {
    position: relative;
    top: -25px;
  }
  #mainLogo {
    transform: scale(0.6);
  }
  #alDente {
    position: relative;
    top: -25px;
  }
  .mainOptions {
    transform: scale(0.20);
    position: relative;
    top: -200px;
    left: -20px;
  }
}
/*Ecrãs 1200px e para cima..*/
@media only screen and (min-width: 1200px) {
  #landingPage {
    position: relative;
    top: -130px;
  }
  #mainLogo {
    transform: scale(0.7);
  }
  #alDente {
    position: relative;
    top: -10px;
  }
  #routerOptions{
    position: relative;
    top:-50px;
  }
  .mainOptions{
    position: relative;
    top: -260px;
    transform: scale(0.25);
  }
}
</style>