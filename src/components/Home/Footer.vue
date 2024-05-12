<script>
  import foot_title_23 from "@/assets/libs/img/foot_title_23.png"
  import vk_23 from "@/assets/libs/img/vk_23.png"
  import telega_23 from  "@/assets/libs/img/telega_23.png"
  export default {
    data:function (){
      return {
        foot_title_23: foot_title_23,
        vk_23: vk_23,
        telega_23: telega_23
      }
    }
  }
</script>

<template>
  <footer id="kontakty23" class="target_23_5 active">
    <div class="container">
      <div class="row contacts23">
        <div class="col-12 col-xl-4 col-lg-5">
          <img class="foot_logo" :src="foot_title_23" alt="Большие данные в медицине">
        </div>
        <div class="col-12 col-xl-4 col-lg-5">
          <div class="phone">
            Тел.:<br>
            <span class="font_900">+7 (499) 390-34-38</span>
          </div>
          <div class="mail">
            <a href="mailto:bigdata@confreg.org">bigdata@confreg.org</a>
          </div>
          <div class="soc">
            <img :src="vk_23" alt="Мы ВКонтакте">
            <img :src="telega_23" alt="Мы в Телеграм">
          </div>
        </div>
        <div class="col-12 col-xl-4 col-lg-2"></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>