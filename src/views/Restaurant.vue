<template>
  <div class="restaurantPage">
    <!-- <navBar></navBar> -->
    <navBar2></navBar2>
  <div class="container">
    <div class="row">
    <div class="col-sm-2 sidenav"></div>
    <div class="col-sm-8 text-center" style="padding-top:85px; margin-bottom: -40px;"> 
      <div id="mainText">
      <img src="../assets/alDente.png" alt="Logo do Restaurante" style="transform: scale(0.5); margin-bottom: -70px;" >
      <hr>
      <h4 style="color: #127834; font-family:Courgette;"><b>Instalações</b></h4>
      </div>
      <div id="buttonScene">
      <div id="flips">     
      </div>
    </div>
    </div>
    </div>
  </div>

  <div class="py-5" >
    <div class="container">
      <div class="row mb-3">
        <div class="text-center rounded-lg mx-auto p-4 col-lg-8 col-md-10 border border-success" style="margin-bottom: 50px">
          <!-- <h2 class="text-white">Heading 2</h2> -->
          <p>O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas.
Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.</p>
        </div>
      </div>
      <div class="row">
        <div class="p-4 col-lg-6">
          <img src="../assets/img_sala.jpg" alt="Imagem da sala" width="450">
        </div>
        <!-- <div class="p-4 col-lg-1"></div> -->
        <div class="pt-5 col-md-6">
          <div class="pt-5">
          <h2 class="mb-1 mr-5" style="color: #127834; font-family:Courgette;"><b>Restaurante Aplicação</b></h2>
          <p class=" mr-5">O nosso restaurante conta com capacidade para 50 pessoas, onde são aplicados os métodos de serviço leccionados nas UC de Práticas Hoteleiras da ESHT.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="pt-5 col-md-6">
          <div class="pt-5">
          <h2 class="mb-1" style="color: #127834; font-family:Courgette;"><b>Bar Aplicação</b></h2>
          <p class=" mr-5 pl-5 text-center" style="font-family:Poppins;">No Bar Aplicação, os estudantes poêm em prática os conhecimentos de serviço de bar, obtidos nas aulas da Licenciatura. É um espaço agradável e acolhedor.</p>
        </div>
        </div>
        
        <div class="p-4 col-lg-6 text-left">
          <img src="../assets/img_bar.jpg" alt="Imagem do bar" width="450">
        </div>
        <!-- <div class="p-4 col-lg-1"></div> -->
        
      </div>

      <div class="row">
        <div class="p-4 col-lg-6">
          <img src="../assets/img_cozinha.jpg" alt="Imagem da sala" width="450">
        </div>
        <!-- <div class="p-4 col-lg-1"></div> -->
        <div class="pt-5 col-md-6">
          <div class="pt-5">
          <h2 class="mb-1 mr-5" style="color: #127834; font-family:Courgette;"><b>Cozinha Aplicação</b></h2>
          <p class="mr-5">Gerida pelo Cozinheiro Chefe, Rui Fonseca, a nossa cozinha encontra-se totalmente equipada e preparada para os mais diversos serviços.</p>
        </div>
        </div>
      </div>

      
     
        


    </div>
  </div>
<!--
<div class="py-5" >
    <div class="container">
      <div class="row">
        <div class="text-center mx-auto col-lg-8 col-10">
          <h1 class="mb-3">Carousel</h1>
          <div id="carousel1" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
            <div class="carousel-inner">
              <div class="carousel-item active"> <img class="d-block w-100" src="../assets/img_sala.jpg"> <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div> </div>
              <div class="carousel-item"> <img class="d-block w-100" src="https://static.pingendo.com/cover-bubble-light.svg"> </div>
              <div class="carousel-item"> <img class="d-block w-100" src="https://static.pingendo.com/cover-bubble-dark.svg"> </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#carousel1" data-slide-to="0" class="active"> </li>
              <li data-target="#carousel1" data-slide-to="1"> </li>
              <li data-target="#carousel1" data-slide-to="2"> </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  
  </div>
  
</template>


<style>
.restaurantPage{
  height: 100%;
overflow-y: auto;
overflow-x: hidden;
}
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

#logoText {
  position: relative;
  bottom: 10px;
}

#mainText {
  position: relative;
  bottom: 45px;
  
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
import bgImage from "@/assets/bg.png";
import navBar2 from "@/components/navBar2.vue";


export default {
  name: "main",
  components: {
   navBar2
  },
  data() {
    return {
      bgImage: bgImage
    };
  }
};



</script>
