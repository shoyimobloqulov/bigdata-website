<script>
  import sechenov_23 from "@/assets/libs/img/sechenov_23.png";
  import msu_logo from "@/assets/libs/img/msu_logo.png";
  import logo_23_2 from "@/assets/libs/img/logo_23_2.png";
  import pic_lk_23 from "@/assets/libs/img/pic_lk_23.svg"
  export default {
    data: function (){
      return {
        sechenov_23: sechenov_23,
        msu_logo: msu_logo,
        logo_23_2:logo_23_2,
        pic_lk_23: pic_lk_23
      }
    }
  }
</script>

<template>
  <section id="head23" class="header target_23_0 active">
    <div class="container">
      <nav class="navbar">
        <div class="row">
          <div class="logo_wrap">
            <div class="logo">
              <img class="top_logo1" :src="sechenov_23" alt="Сеченовский университет">
              <img class="top_logo2" :src="msu_logo" alt="МГУ">
            </div>
          </div>
          <div class="nav_wrap">
            <div class="menu navbar-collapse flex-sm-row collapse show" id="navBar" data-mobile-scroll-hide="true">
              <ul class="navbar-nav" id="js-scroll-nav">
                <li class="nav-item menu__parent current"><a href="#head23" class="first">Главная</a></li>
                <li class="nav-item menu__parent"><a href="#cel23" class="first">Цель</a></li>
                <li class="nav-item menu__parent"><a href="#struct23" class="first">Структура</a></li>
                <li class="nav-item menu__parent"><a href="#mesto23" class="first">Площадка</a></li>
                <li class="nav-item menu__parent"><a href="#programma23" class="first">Программа</a></li>
                <li class="nav-item menu__parent"><a href="#lektory23" class="first">Лекторы</a></li>
                <li class="nav-item menu__parent"><a href="#kontakty23" class="first">Контакты</a></li>
                <li class="nav-item menu__parent lk_item">
                  <a href="lichnyy-kabinet/" class="first" title="Личный кабинет">
                    <img :src="pic_lk_23" width="34" alt="Личный кабинет">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="hamburger hamburger--3dy">
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="event_logo">
          <img :src="logo_23_2" alt="Большие данные в медицине">
        </div>
      </div>
      <div class="row">
        <div class="reg_btn">
          <RouterLink class="btn23" to="/registration">РЕГИСТРАЦИЯ</RouterLink>
        </div>
        <div class="lk_btn">
          <RouterLink class="btn23" to="/lichnyy-kabinet"><img :src="pic_lk_23" width="34" alt="Личный кабинет"></RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>