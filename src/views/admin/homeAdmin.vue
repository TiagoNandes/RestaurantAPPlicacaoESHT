<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <!-- Brand -->
      <a class="navbar-brand" href="#">Restaurante Aplicação</a>

      <!-- Links -->
      <ul class="navbar-nav">
        <!-- Ementa -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Ementa</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              <router-link class="dropdown-item" to="/listAllEmentas">Todas</router-link>
            </a>
            <a class="dropdown-item" href="#">
              <router-link to="/addEmentaSemanal">Adicionar</router-link>
            </a>
          </div>
        </li>

        <!-- Reserva -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >Reservas</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              <router-link to="/listAllReservations">Todas</router-link>
            </a>
            <a class="dropdown-item" href="#">
              <router-link to="/addEmentaSemanal">Adicionar</router-link>
            </a>
          </div>
        </li>

        <!-- User -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">User</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              <router-link to="/listAllUsers">Todas</router-link>
            </a>
            <a class="dropdown-item" href="#">Adicionar</a>
          </div>
        </li>

        <!-- Comentários -->
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/listAllFeedbacks">Comentários</router-link>
          </a>
        </li>
      </ul>

      <!-- Terminar Sessão -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Terminar Sessão</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>