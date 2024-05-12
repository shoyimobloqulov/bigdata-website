<script>

</script>

<template>
  <section class="inner_page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Личный кабинет</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="lk_body">
            <p>Если Вы еще не зарегистрированы, просим Вас пройти <RouterLink to="/registration">РЕГИСТРАЦИЮ</RouterLink></p>
            <p>В Личном кабинете Вы можете:</p>
            <ul>
              <li>внести изменения в свои персональные данные;</li>
              <li>ознакомиться с дополнительной информацией о мероприятии.</li>
            </ul>
            <div class="like_p"><div class="block"><form method="post" action="#" class="login ajax">
              <input type="hidden" name="action" value="auth">
              <input type="hidden" name="module" value="registration">
              <input type="hidden" name="form_tag" value="registration_auth">
              <input type="text" name="name" placeholder="Логин" autocomplete="off">
              <input type="password" name="pass" placeholder="Пароль" autocomplete="off">
              <br><input type="checkbox" id="not_my_computer" name="not_my_computer" value="1">
              <label for="not_my_computer">Чужой компьютер</label>
              <br><input type="submit" value="Войти"><br><RouterLink to="/reminding" class="arrow-link black">Забыли пароль?</RouterLink> <RouterLink to="/registration" class="arrow-link black">Регистрация</RouterLink><div class="errors error" style="display:none"></div></form></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>