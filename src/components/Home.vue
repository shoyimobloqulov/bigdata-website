<script>
  import Header from "@/components/Home/Header.vue";
  import About from "@/components/Home/About.vue";
  import Target from "@/components/Home/Target.vue";
  import Landing from "@/components/Home/Landing.vue";
  import Summer from "@/components/Home/Summer.vue";
  import Programma from "@/components/Home/Programma.vue";
  export default {
    components: {Programma, Summer, Landing, Target, About, Header},
    data: function (){
      return {
      }
    }
  }
</script>

<template>
  <Header />
  <About />
  <Target />
  <Landing />
  <Programma />
  <Summer />
</template>

<style scoped>

</style>