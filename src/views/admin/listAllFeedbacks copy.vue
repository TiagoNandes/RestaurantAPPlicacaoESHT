<template>
  <div class="container">
    <div>{{meals}}</div>

    <br />
    <h2 style="text-align: center;">titulo</h2>
    <br />
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anna</td>
            <td>Pitt</td>
            <td>35</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i>
              </button>
              <button type="button" class="btn btn-success">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="btn btn-danger">
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>{{mealsByIdMenu}}</div>
    <!--  <form @submit.prevent="clicked()">
    <input v-model="idMenu" placeholder="idMenu"> 
    <button type="submit">click</button>
    <div id="demo" ></div>
    </form>-->
    <br />
    <br />
    <br />
    <!-- <div>{{getAllUsers}}</div> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
//import { stringify } from 'querystring';
export default {
  data() {
    return { idMenu: "" };
  },
  computed: {
    ...mapGetters("meals", [
      "getMealByIdMenu",
      "getMealsByIdMenu",
      "getAllMeals"
    ]),
    ...mapGetters("menu", [
      "getIdMenuByDaySchedule",
      "getIdMenuByDate",
      "getIdMenuByMealTime"
    ]),
    ...mapGetters("reservations", [
      "getAllReservations",
      "getReservationsByIdMenu",
      "getNumberReservationsByIdMenu"
    ]),
    ...mapGetters("user", ["getSaldoByUser"]),
    ...mapGetters("feedback", ["getFeedbackByReservation", "getFeedbackByUser"]),
    meals() {
      return this.getAllMeals;
    },

    mealsByIdMenu() {
      /*  
    GET RESERVATIONS BY DAY BY SCHEDULE 
    let menu = this.getIdMenuByDaySchedule("Almoço", "08-01-2020");
        return this.getReservationsByIdMenu(menu.idMenu) */
      /*GET NUMBER OF RESERVATIONS BY IDMenu 
    return this.getNumberReservationsByIdMenu(4)*/
      /* GET NUMBER OF RESERVAS BY MEALTYPE
    let menus = this.getIdMenuByDaySchedule("Almoço", "08-01-2020");
    let reservations = this.getReservationsByIdMenu(menus.idMenu)
    let carne=0;
    let peixe =0
    let vegetariano=0;
    for(let reservation in reservations){
        carne=carne + reservations[reservation].carne
        peixe= peixe + reservations[reservation].peixe
        vegetariano= vegetariano +reservations[reservation].vegetariano
    }
    let diario={carne, peixe, vegetariano}
    return diario
*/
      /*  GET SALDO BY USER 
    return this.getSaldoByUser(1); 
    */

      /*FEEDBACKS BY reserva 
      let menus = this.getIdMenuByDaySchedule("Almoço", "08-01-2020");
      let reservations = this.getReservationsByIdMenu(menus.idMenu);
      let allFeedbacks = [];
      for (let reservation in reservations) {
        //alert(reservations[reservation].idReservation)
        let feedbacks = this.getFeedbackByReservation(
          reservations[reservation].idReservation
        );
        allFeedbacks.push(feedbacks);
      }
      return JSON.stringify(allFeedbacks);*/

        /*GET FEEDBACK BY ID USER */
        return this.getFeedbackByUser(1)


    }
  }
};
</script>