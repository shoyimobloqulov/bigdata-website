<script>

import {defineComponent} from "vue";
import Top from "@/components/Layout/Top.vue";
import Footer from "@/components/Home/Footer.vue";
import Register from "@/components/Register.vue";

export default defineComponent({
  components: {Register, Footer, Top}
})
</script>

<template>
  <main>
    <Top />
    <Register />
  </main>

  <Footer />
</template>

<style scoped>

</style>