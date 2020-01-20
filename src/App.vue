<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link> |   
      <router-link to="/statisticsDay">Admin</router-link> |
      <router-link to="/menuOfTheWeek">Ementa Semanal</router-link> |
      <router-link to="/reserva">Reservar Refeição</router-link> |
      <router-link to="/feedback">Feedback</router-link> |
      <router-link to="/menuSelection">Selecionar Menu</router-link> |
    </div>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
