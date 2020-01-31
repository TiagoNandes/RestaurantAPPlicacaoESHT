<template>
  <div id="app"><router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import injectedData from './injectedData'

export default {
  data(){
    return{

    }
  },
  created(){
      //localStorage.clear()
      injectedData
  },
  beforeDestroy() {
    localStorage.setItem("reservations", JSON.stringify(this.getAllReservations))
    localStorage.setItem("user", JSON.stringify(this.getAllUsers))
    localStorage.setItem("menu", JSON.stringify(this.getAllMenus))
    localStorage.setItem("meal", JSON.stringify(this.getAllMeals))
    localStorage.setItem("feedback", JSON.stringify(this.getAllFeedbacks))
      },
  computed: {
    ...mapGetters("reservations", ["getAllReservations"]),
    ...mapGetters("user",["getAllUsers"]),
    ...mapGetters("menu",["getAllMenus"]),
    ...mapGetters("meals",["getAllMeals"]),
    ...mapGetters("feedback",["getAllFeedbacks"]),
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
