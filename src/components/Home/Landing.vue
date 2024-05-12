<script>
  import palmira from "@/assets/libs/img/palmira-logo.svg";

  export default {
    data: function () {
      return {
        palmira: palmira,
      }
    }
  }
</script>

<template>
  <section id="mesto23" class="target_23_2 active">
    <div class="place_block">
      <div class="place_inner">
        <h3>Площадка</h3>
        <div class="hotel_logo">
          <img :src="palmira" width="440" alt="Palmira Garden Hotel">
        </div>
        <p class="hotel_name">Отель Palmira Garden<br>
          Ленинский городской округ, Видное,<br>
          ул. Школьная д.92.</p>
        <p class="org_attention">Организационный комитет на время проведения школы предоставляет возможность размещения в двухместных номерах. <br>Питание включено в проживание.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>