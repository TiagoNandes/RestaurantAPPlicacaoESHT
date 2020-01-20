<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2>Adicionar Nova Ementa Semanal</h2>
      <br />

      <form action="/action_page.php form-inline" class="needs-validation" novalidate>
        <label for="date" class="mr-sm-2">Escolha o dia:</label>
        <input id="date" type="date" />
        <!-- ver https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/data para mais info -->
        <br />
        <br />
        <div class="row">
          <div class="col">
            <label for="entrada" class="mr-sm-2">Entrada:</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="entrada"
              placeholder="Entrada"
              name="entrada"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="sopa" class="mr-sm-2">Sopa:</label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="sopa"
              placeholder="Sopa"
              name="sopa"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label for="pratoCarne">Prato Carne:</label>
            <input
              type="text"
              class="form-control"
              id="pratoCarne"
              placeholder="Prato Carne"
              name="pratoCarne"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="pratoPeixe">Prato Peixe:</label>
            <input
              type="text"
              class="form-control"
              id="pratoPeixe"
              placeholder="Prato Peixe"
              name="pratoPeixe"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <label for="pratoVeg">Prato Vegetariano:</label>
            <input
              type="text"
              class="form-control"
              id="pratoVeg"
              placeholder="Prato Vegetariano"
              name="pratoVeg"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />
          <div class="col">
            <label for="sobremesa">Sobremesa:</label>
            <input
              type="text"
              class="form-control"
              id="sobremesa"
              placeholder="Sobremesa"
              name="sobremesa"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
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
  name: "listAllFeedbacks",
  components: {
    Navbar
  }
};
/*  // Disable form submissions if there are invalid fields
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