<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2>Adicionar Novo Utilizador</h2>

      <form action="/action_page.php form-inline" class="needs-validation" novalidate>
        <br />
        <div class="row">
          <div class="col">
            <label for="nome" class="mr-sm-2">Nome:</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="nome"
              placeholder="Nome"
              name="nome"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="sobrenome" class="mr-sm-2">Sobrenome:</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="sobrenome"
              placeholder="Sobrenome"
              name="sobrenome"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label for="nif">NIF:</label>
            <input type="text" class="form-control" id="nif" placeholder="NIF" name="nif" required />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="username">Nome Utilizador:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Nome Utilizador"
              name="username"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label for="password">Palavra Passe:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Palavra Passe"
              name="password"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label for="emailInst">Email Institucional:</label>
            <input
              type="email"
              class="form-control"
              id="emailInst"
              placeholder="Email Institucional"
              name="emailInst"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="numTelemovel">Numero Telemovel:</label>
            <input
              type="text"
              class="form-control"
              id="numTelemovel"
              placeholder="Numero Telemovel"
              name="numTelemovel"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label for="emailInst">Tipo de User:</label>
            <br />
            <div class="form-check-inline">
              <label class="form-check-label" for="radioUser">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radioUser"
                  name="optradio"
                  value="user"
                  checked
                />Utilizador
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label" for="radioAdmin">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radioAdmin"
                  name="optradio"
                  value="admin"
                />Admin
              </label>
            </div>
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </div>
</template>
 <script>
import Navbar from "@/components/homeAdmin.vue";

export default {
  name: "listAllEmentas",
  components: {
    Navbar
  }
};

/*   // Disable form submissions if there are invalid fields
        (function () {
            'use strict';
            window.addEventListener('load', function () {
                // Get the forms we want to add validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();*/
</script>
<style>
@import "../../assets/admin.css";
</style>