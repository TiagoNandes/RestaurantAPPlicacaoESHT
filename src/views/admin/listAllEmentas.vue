<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div id="content">
      <br />
      <h2 style="text-align: center;">Gestão de Refeições</h2>
      <br />
      <div id="result"></div>
      <div class="table-responsive">
        <table class="table table-bordered" id="tableMeal">
          <thead>
            <tr>
              <th>#</th>
              <th>Data</th>
              <th>Horario</th>
              <th>Tipo de refeição</th>
              <th>descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="meal in this.getAllMeals" :key="meal">
              <td>{{meal.idMeal}}</td>
              <td>{{getMenuById(meal.idMenu).date}}</td>
              <td>{{getMenuById(meal.idMenu).mealTime}}</td>
              <td>{{getMealTypeById(meal.idMealType).mealType}}</td>
              <td>{{meal.description}}</td>
              <td>
                <button type="button" class="btn btn-success" v-on:click="editMeal(meal.idMeal)">
                  <i class="fas fa-edit"></i>
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deletingMeal(meal.idMeal)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <dialog id="editMealDialog">
          <form @submit.prevent="updatingMeal" method="dialog">
            <div class="row">
              <div class="col">
                <label for="description">Descrição</label>
                <input
                  v-model="form.editDescription"
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="description"
                  required
                />
              </div>
              <br />
              <br />
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
import { mapGetters, mapMutations } from "vuex";
import router from "../../router/index";
import Navbar from "@/components/homeAdmin.vue";

//import { stringify } from 'querystring';
export default {
  name: "listAllEmentas",
  components: {
    Navbar
  },
  data() {
    return {
      mealTypes: this.getAllMealTypes,
      idMenu: "",
      form: {
        editId: 0,
        editDescription: "",
        editIdMealType: "",
        editIdMenu: ""
      },
      updatedMeal: {}
    };
  },
  computed: {
    ...mapGetters("mealType", ["getAllMealTypes", "getMealTypeById"]),
    ...mapGetters("meals", ["getAllMeals"]),
    ...mapGetters("menu", ["getMenuById"]),
    meals() {
      return this.getAllMeals;
    }
  },
  methods: {
    ...mapMutations("meals", ["mealUpdater", "mealDeleter"]),
    modalClose() {
      document.getElementById("editMealDialog").close();
      router.go();
    },
    deletingMeal(idMeal) {
        this.mealDeleter(idMeal);
    },
    editMeal(idMeal) {
      document.getElementById("editMealDialog").showModal();
      const meal = this.getAllMeals.filter(meal => meal.idMeal === idMeal)[0];
      this.form.editId = meal.idMeal;
      this.form.editDescription = meal.description;
      this.form.editIdMealType = meal.idMealType;
      this.form.editIdMenu = meal.idMenu;
    },
    updatingMeal() {
      this.updatedMeal = {
        idMeal: this.form.editId,
        description: this.form.editDescription,
        idMealType: this.form.editIdMealType,
        idMenu: this.form.editIdMenu
      };
      const index = this.getAllMeals.findIndex(
        meal => meal.idMeal === this.updatedMeal.idMeal
      );
      let newMeal = this.updatedMeal;
      alert(JSON.stringify(newMeal));
      this.mealUpdater({ index, newMeal });
      this.modalClose();
    }
  }
};
</script>
<style>
@import "../../assets/admin.css";
</style>