<template>
  <header class="nav-header" id="header">
    <nav class="nav nav-container">
      <router class="nav__logo">V3 Workout App</router>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"><router-link  to="/" class="nav__link active-link">Home</router-link></li>
          <li class="nav__item"><router-link  to="/workouts" class="nav__link">Workouts</router-link></li>
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
