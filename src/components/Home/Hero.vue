<template>
  <div class="hero">
      <img src="../assets/sass/img/herobg.jpeg" alt="">
      <div class="hero__content">
        <h1>
          ONLINE TRAINING PROGRAMS.
        </h1>
        <p>
          Join The Online Workouts Today. <br />
          Get Access to Your Favorite Workouts!
        </p>
      <router-link to= "/register" class="hero__button"> Learn more </router-link>
    </div>
  </div>
  <div class="hero__footer">
    <p>Discover new ways to conquer your goals find a way to improve yourself.</p>
    <i class='bx bxs-chevron-down bx-fade-down'></i>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
