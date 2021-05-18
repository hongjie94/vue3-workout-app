<template>
  <div id="home">
    <Hero />
    <Intro />
    <GetStarted />
    <Samples />
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue'
import Intro from '@/components/Home/Introduction.vue'
import GetStarted from '@/components/Home/GetStarted.vue'
import Samples from '@/components/Home/Samples.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Intro,
    GetStarted,
    Samples
  }
}
</script>
