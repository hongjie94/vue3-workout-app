<template>
  <Nav />
  <router-view/>
  <Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Nav, Footer },
  setup () {
    return {}
  }
}
</script>
