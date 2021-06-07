<template>
  <header class="nav-header" id="header">
    <nav class="nav nav-container">
      <router class="nav__logo"> <h1><b>V3</b></h1> <div class="logo-sub">Online <br/> Workouts</div></router>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"><router-link  to="/" class="nav__link active-link">Home</router-link></li>
          <li class="nav__item"><a href="/#GetStarted" class="nav__link">About</a></li>
          <li class="nav__item"><a href="/#samples" class="nav__link">Workouts</a></li>
          <li class="nav__item"><router-link  to="/dashbroad" class="nav__link">Dashbroad</router-link></li>
          <li class="nav__item"><router-link  to="/dashbroad" class="nav__link">Login</router-link></li>
          <li class="nav__item"><router-link  to="/register" class="nav__link">Register</router-link></li>
        </ul>
      </div>
      <div class="nav__toggle" id="nav-toggle">
        <i class='bx bx-menu'></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>
