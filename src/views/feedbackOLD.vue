<template>
  <div class="hello">
    <h2>Feedback</h2>

    <p>Reservas anteriores</p>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <button type="button">Click Me!</button>
    <br />
    <br />
    <p>Como estava a comida?</p>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <br />
    <br />
    <p>Como foi o serviço?</p>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <br />
    <br />
    <p>Como estava o ambiente?</p>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <br />
    <br />
    <p>A temperatura da sala estava agradável?</p>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <br />
    <br />
    <p>A temperatura da sala estava agradável?</p>
    <textarea rows="4" cols="50" name="comment" form="usrform">Enter text here...</textarea>
    <br>
    <button type="button">Submeter</button>
  </div>
</template>

<script>
export default {
  name: "menuOfTheWeek",
  data: function() {
    return {
      daysCont: [],
      menuOfTheWeek: [],
      num: 0,
      cont: 0
    };
  },
  methods: {
    /*  callFunction: function() {
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

        dayOfWeek = weekday[d.getDay() + this.num];

        if (d.getDay() + this.num == 5) {
          this.num = 0;
          //dayOfWeek = weekday[d.getDay() + this.num];
        }

        this.num = this.num + 1;

        return dayOfWeek;
    }*/
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
