<script>
  import reminding8492 from "@/assets/captcha/get/reminding8492.jpg"
  export default {
    data:function (){
      return {
        reminding8492: reminding8492,
      }
    }
  }
</script>

<template>
  <section class="inner_page">
    <div class="container">
      <h1>Восстановление доступа</h1>
      <form method="POST" action="#" class="reminding_form ajax">
        <input type="hidden" name="action" value="mail">
        <input type="hidden" name="module" value="reminding">
        <div class="infofield">Введите ваш e-mail<span style="color:red;">*</span>:</div>
        <input type="email" name="mail" value=""><br>
        <div class="errors error_mail" style="display:none"></div>
        <div class="captcha"><div class="block captcha">
          <img :src="reminding8492" width="159" height="80" class="code_img captcha-image">
          <input type="hidden" name="captchaint" value="8492">
          <input type="hidden" name="captcha_update" value="">
          <span class="input-title">Введите код с картинки:</span>
          <input type="text" name="captcha" value="" autocomplete="off">
          <br>
          <div class="js_captcha_update captcha_update"><a href="javascript:void(0)"><i class="fas fa-redo">&nbsp;</i></a></div></div><div class="errors error_captcha" style="display:none"></div></div>
        <input type="submit" value="Отправить">
        <div class="required_field"><span style="color:red;">*</span> — Поля, обязательные для заполнения</div>
      </form>
      <div class="errors error reminding_result" style="display:none"></div>
    </div>
  </section>
</template>

<style scoped>

</style>