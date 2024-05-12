<script>
  import Header from "@/components/Home/Header.vue";
  import About from "@/components/Home/About.vue";
  import Target from "@/components/Home/Target.vue";
  import Landing from "@/components/Home/Landing.vue";
  import Summer from "@/components/Home/Summer.vue";
  export default {
    components: {Summer, Landing, Target, About, Header},
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
  <Summer />
</template>

<style scoped>

</style>