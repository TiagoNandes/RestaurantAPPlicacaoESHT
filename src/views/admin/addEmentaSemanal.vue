<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2>Adicionar Nova Ementa Semanal</h2>
      <br />

      <form @submit.prevent="formSubmit" class="needs-validation" novalidate>
        <div class="row">
          <div class="col">
            <label required for="date" class="mr-sm-2">Escolha o dia:</label>
            <input id="date" type="date" v-model="date" />
          </div>
          <div class="col">
            <div class="form-group">
              <label required for="sel1">Selecione o horário:</label>
              <select class="form-control" id="sel1" name="sellist1" v-model="mealTime">
                <option>Almoço</option>
                <option>Jantar</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label for="availableSeats">Lugares disponíveis:</label>
            <input
              minlength="1"
              min="1"
              required
              type="number"
              class="form-control"
              id="availableSeats"
              v-model="availableSeats"
              placeholder="ex: 150"
            />
          </div>
        </div>
        <!-- ver https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/data para mais info -->
        <br />
        <br />
        <div class="row">
          <div class="col">
            <label for="entrada" class="mr-sm-2">Entrada:</label>
            <input
              minlength="3"
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="entrada"
              placeholder="Entrada"
              name="entrada"
              v-model="entrada"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="sopa" class="mr-sm-2">Sopa:</label>
            <input
              minlength="3"
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="sopa"
              placeholder="Sopa"
              name="sopa"
              v-model="sopa"
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
              minlength="3"
              type="text"
              class="form-control"
              id="pratoCarne"
              placeholder="Prato Carne"
              name="pratoCarne"
              v-model="pratoCarne"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="col">
            <label for="pratoPeixe">Prato Peixe:</label>
            <input
              minlength="3"
              type="text"
              class="form-control"
              id="pratoPeixe"
              placeholder="Prato Peixe"
              name="pratoPeixe"
              v-model="pratoPeixe"
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
              minlength="3"
              type="text"
              class="form-control"
              id="pratoVeg"
              placeholder="Prato Vegetariano"
              name="pratoVeg"
              v-model="pratoVeg"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <br />
          <div class="col">
            <label for="sobremesa">Sobremesa:</label>
            <input
              minlength="3"
              required
              type="text"
              class="form-control"
              id="sobremesa"
              placeholder="Sobremesa"
              name="sobremesa"
              v-model="sobremesa"
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <br />
        <button type="submit" class="submit btn btn-success">Guardar</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Swal from "sweetalert2";

import Navbar from "@/components/homeAdmin.vue";
export default {
  name: "listAllFeedbacks",
  components: {
    Navbar
  },
  data() {
    return {
      date: "",
      mealTime: "",
      availableSeats: "",
      sopa: "",
      entrada: "",
      pratoCarne: "",
      pratoPeixe: "",
      pratoVeg: "",
      sobremesa: ""
    };
  },
  computed: {
    ...mapGetters("menu", ["getMenuById", "getIdMenuByDaySchedule"])
  },
  methods: {
    ...mapMutations("meals", ["mealCreater"]),
    ...mapMutations("menu", ["menuCreater"]),

    formSubmit() {
      let newMeal = {
        date: this.date,
        mealTime: this.mealTime,
        availableSeats: this.availableSeats,
        sopa: this.sopa,
        entrada: this.entrada,
        pratoCarne: this.pratoCarne,
        pratoPeixe: this.pratoPeixe,
        pratoVeg: this.pratoVeg,
        sobremesa: this.sobremesa
      };
      if (
        this.date === "" ||
        this.mealTime === "" ||
        this.availableSeats === "" ||
        this.sopa === "" ||
        this.entrada === "" ||
        this.pratoCarne === "" ||
        this.pratoPeixe === "" ||
        this.pratoVeg === "" ||
        this.sobremesa === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Preencha todos os campos!",
          confirmButtonColor: "#127834"
        });
      } else {
        if (this.getIdMenuByDaySchedule(newMeal.mealTime, newMeal.date)) {
          //create meals
          let menu = this.getIdMenuByDaySchedule(newMeal.mealTime, newMeal.date)
            .idMenu;
          this.mealCreater([menu, newMeal.sopa, 1]);
          this.mealCreater([menu, newMeal.entrada, 2]);
          this.mealCreater([menu, newMeal.pratoCarne, 3]);
          this.mealCreater([menu, newMeal.pratoPeixe, 4]);
          this.mealCreater([menu, newMeal.pratoVeg, 5]);
          this.mealCreater([menu, newMeal.sobremesa, 6]);
        } else {
          //create menu then create meals
          this.menuCreater([
            newMeal.date,
            newMeal.mealTime,
            newMeal.availableSeats
          ]);
          let menu = this.getIdMenuByDaySchedule(
            newMeal.mealTime,
            newMeal.date
          );
          this.mealCreater([menu.idMenu, newMeal.sopa, 1]);
          this.mealCreater([menu.idMenu, newMeal.entrada, 2]);
          this.mealCreater([menu.idMenu, newMeal.pratoCarne, 3]);
          this.mealCreater([menu.idMenu, newMeal.pratoPeixe, 4]);
          this.mealCreater([menu.idMenu, newMeal.pratoVeg, 5]);
          this.mealCreater([menu.idMenu, newMeal.sobremesa, 6]);
        }
        Swal.fire({
          text: "Ementa semanal adicionada!",
          icon: "success",
          confirmButtonColor: "#127834"
        });
      }
    }
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