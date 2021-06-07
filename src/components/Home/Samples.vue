<template>
  <section id="samples">
      <div class="samples">
        <h1>Workouts</h1>
        <ul>
          <li v-for="workout in workouts" :key="workout.id">
            <img :src="workout.imageURL" />
          </li>
        </ul>
      </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'workouts'
    ])
  }
}
</script>
