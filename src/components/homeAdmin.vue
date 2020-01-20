<template>
    <!-- Sidebar  -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Restaurante Aplicação</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Admin Page</p>
        <li>
          <a
            href="#ementaMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Ementa</a>
          <ul class="collapse list-unstyled" id="ementaMenu">
            <li>
              <a href="#">
                <router-link class="dropdown-item" to="/listAllEmentas">Listar todas</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link to="/addEmentaSemanal">Adicionar ementa</router-link>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#reservationsMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Reservas</a>
          <ul class="collapse list-unstyled" id="reservationsMenu">
            <li>
              <a href="#">
                <router-link to="/listAllReservations">Listar todas</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                 <router-link to="/addEmentaSemanal">Adicionar reserva</router-link>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#userMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Utilizador</a>
          <ul class="collapse list-unstyled" id="userMenu">
            <li>
              <a href="#">
                <router-link to="/listAllUsers">Listar todas</router-link>
              </a>
            </li>
            <li>
              <a href="#">Adcionar utilizador</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#statsMenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Estatísticas</a>
          <ul class="collapse list-unstyled" id="statsMenu">
            <li>
              <a href="#">
                <router-link to="/statisticsDay">Diárias</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link to="/statisticsFeedbacks">Feedbacks</router-link>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <router-link to="/listAllFeedbacks">Comentários</router-link>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {};
</script>
<style scoped>
/*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
}

#sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #15D381;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #55B375;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #55B375;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #15D381;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #55B375;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #55B375;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #15D381;
}

a.article,
a.article:hover {
    background: #55B375 !important;
    color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: calc(100% - 250px);
    padding: 40px;
    min-height: 100vh;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    right: 0;
}

#content.active {
    width: 100%;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #content {
        width: 100%;
    }
    #content.active {
        width: calc(100% - 250px);
    }
    #sidebarCollapse span {
        display: none;
    }
}
</style>