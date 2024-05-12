<script>
  import logo_lk_23_2 from "@/assets/libs/img/logo_lk_23_2.png"
  import sechenov_lk_23 from "@/assets/libs/img/sechenov_lk_23.png"
  import pic_lk_23 from "@/assets/libs/img/pic_lk_23.svg"
  export default {
    data:function () {
      return {
        logo_lk_23_2: logo_lk_23_2,
        sechenov_lk_23: sechenov_lk_23,
        pic_lk_23: pic_lk_23
      }
    }
  }
</script>

<template>
  <section class="header inner_head_23 active">
    <div class="container">
      <div class="hamburger hamburger--3dy">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
      <div class="lk23_top_row">
        <div class="lk_logo">
          <img :src="logo_lk_23_2" alt="Большие данные в медицине">
        </div>
        <div class="lk_sechenov">
          <img :src="sechenov_lk_23" alt="Сеченовский Университет">
        </div>
        <div class="clearleft"></div>
      </div>
      <div class="lk_nav_row">
        <div class="menu">
          <ul class="navbar-nav" id="js-scroll-nav">
            <li class="nav-item menu__parent current"><a href="../#head23" class="active first">Главная</a></li>
            <li class="nav-item menu__parent"><a href="../#cel23" class="first">Цель</a></li>
            <li class="nav-item menu__parent"><a href="../#struct23" class="first">Структура</a></li>
            <li class="nav-item menu__parent"><a href="../#mesto23" class="first">Площадка</a></li>
            <li class="nav-item menu__parent"><a href="../#programma23" class="first">Программа</a></li>
            <li class="nav-item menu__parent"><a href="../#lektory23" class="first">Лекторы</a></li>
            <li class="nav-item menu__parent"><a href="../#kontakty23" class="first">Контакты</a></li>
            <li class="nav-item menu__parent lk_item">
              <a href="index.html" class="first" title="Личный кабинет">
                <img :src="pic_lk_23" width="34" alt="Личный кабинет">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>