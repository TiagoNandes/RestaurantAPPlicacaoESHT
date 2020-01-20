<template>
  <div class="hello">
    <h2>Reservar refeição</h2>

    <p>Numero de pessoas</p>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button">7</button>
    <br />
    <br />
    <p>Data</p>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <br />
    <br />
    <p>Serviço</p>
    <button type="button">Almoço</button>
    <button type="button">Jantar</button>
    <br />
    <br />
    <button type="button">Continuar</button>
  </div>
</template>

<script>
export default {
  name: "reserva",
  data: function() {
    return {
      numPeople: 0,
      date: 0,
      price: 0,
      numPersonsCommunity: 0,
      numPersonsRegular: 0,
      numPersonsKids: 0,
      state: "Em curso",
      mealTime: 0
    };
  },
  methods: {
    saveReservation() {
      this.$store.dispatch("SAVE_RESERVATION", {
        numPeople: this.numPeople,
      date: this.date,
      price: this.price,
      numPersonsCommunity: this.numPersonsCommunity,
      numPersonsRegular: this.numPersonsRegular,
      numPersonsKids: this.numPersonsKids,
      state: this.state,
      mealTime: this.mealTime,
        
      });
    }
  },
  mounted() {},
  created: function() {
    this.menuOfTheWeek = this.$store.getters.getMenuOfTheWeek;
    var dayOfWeek;
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    for (var a = 0; a < 5; a++) {
      dayOfWeek = weekday[d.getDay() + this.num];
      if (d.getDay() + this.num == 6) {
        var difference = d.getDay() - 1;
        this.num = 0;
        dayOfWeek = weekday[d.getDay() - this.num - difference];
      }

      this.num = this.num + 1;
      this.daysCont.push(dayOfWeek);
    }
    //alert(this.daysCont);
    //alert(JSON.stringify(this.$store.getters.getMenuOfTheWeek));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
