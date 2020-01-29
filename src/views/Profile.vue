<template>
  <div>
    <navBar></navBar>
    <div class="container">
      <div class="row">
        <div class="col-sm-2 sidenav"></div>
        <div class="col-sm-8 text-center" style="padding-top:85px; margin-bottom: -40px;">
          <div id="mainText">
            <div class="pt-5 mt-5">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">
                    <i class="far fa-8x fa-user-circle text-center" style="color: #127834 "></i>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="pt-4" style>
              <b>Nome do Utilizador</b>
            </h4>
            <!--Maybe cor verde também? -->
            <hr />
          </div>
        </div>
      </div>
    </div>

    <div class="py-3">
      <div class="container">
        <div class="row mb-3">
          <div class="col-6 pl-5">
            <h2>
              <b>0.50€</b>
            </h2>
            <router-link to="/addFunds">
              <button
                type="submit"
                class="btn btn btn-primary my-2 my-sm-0 p-2"
                style="background-color: #127834; border-color: #127834;"
              >Adicionar Saldo</button>
            </router-link>
          </div>
          <div class="text-center mx-auto col-6 pr-5" style="margin-bottom: 50px">
            <h2>
              <b>********</b>
            </h2>
            <button
              @click="showAlert"
              class="btn btn btn-primary my-2 my-sm-0 p-2"
              style="background-color: #127834; border-color: #127834;"
            >Mudar Password</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Hora</th>
              <th scope="col">Avaliação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!-- <i class="fas fa-trash-alt"></i> -->
              <td>7 Dezembro</td>
              <td>7h55</td>
              <td>
                <a href>
                  <i class="fas fa-trash-alt" style="color: #127834; float:right;"></i>
                </a>
                <a href>
                  <i class="fas fa-eye" style="color: #127834; float:right; padding-right: 15px;"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>18 Março</td>
              <td>16h00</td>
              <td>
                <a href>
                  <i class="fas fa-trash-alt" style="color: #127834; float:right;"></i>
                </a>
                <a href>
                  <i class="fas fa-eye" style="color: #127834; float:right; padding-right: 15px;"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Dia</td>
              <td>Hora</td>
              <td>
                Avaliação
                <a href>
                  <i class="fas fa-trash-alt" style="color: #127834; float:right;"></i>
                </a>
                <a href>
                  <i class="fas fa-eye" style="color: #127834; float:right; padding-right: 15px;"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
import navBar from "@/components/navBar.vue";
import Swal from "sweetalert2";

export default {
  components: {
    navBar
  },
  methods: {
    showAlert() {
      Swal.fire({
        title: "Insira a sua nova password:",
        input: "password",
        confirmButtonColor: '#127834',
        inputPlaceholder: "Password",
        inputAttributes: {
          maxlength: 10,
          autocapitalize: "off",
          autocorrect: "off"
        }
      });
    }
  }
};
</script>
