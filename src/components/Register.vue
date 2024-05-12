<script>
import registration9463 from "@/assets/captcha/get/registration9463.jpg"

export default {
  data: function () {
    return {
      registration9463: registration9463
    }
  }
}
</script>

<template>
  <section class="inner_page">
    <div class="container">
      <h1>Регистрация</h1>
      <div class="mb20">Для участия в мероприятии просим Вас пройти регистрацию, заполнив форму ниже. Перед регистрацией
        ознакомьтесь, пожалуйста, с документами, регламентирующими обеспечение оказания услуг зарегистрированным
        участникам, а также вопросы обработки персональных данных. Принятием указанных документов является простановка
        галочки и регистрация на данном сайте.
      </div>
      <div class="agree_wrap mb20">
        <input name="agree_param" id="agree_param" class="agree_param" value="1" type="checkbox"><label
          for="agree_param">Я принимаю условия </label>
        <div class="agree_text"><a href="@/assets/libs/files/poljzovateljskoe_soglashenie_2023.pdf" target="_blank">Пользовательского
          Соглашения</a>, <a href="@/assets/libs/files/dogovor_oferty_2023.pdf" target="_blank">Договора оферты</a> и <a
            href="@/assets/libs/files/soglasie_na_obrabotku_personaljnyh_dannyh_2023.pdf" target="_blank">Согласия на
          обработку персональных данных</a>.
        </div>
      </div>
      <div class="mb10">Прохождение регистрации является Вашим согласием с условиями, указанными в документах</div>
      <div>Если Вы уже зарегистрированы, пожалуйста, пройдите в&nbsp;<RouterLink to="/lichnyy-kabinet">Личный&nbsp;кабинет</RouterLink>
      </div>
      <hr>
      <form action="#" method="POST" class="js_registration_form registration_form ajax" enctype="multipart/form-data">
        <input type="hidden" name="module" value="registration">
        <input type="hidden" name="url" value="">
        <input type="hidden" name="action" value="add">
        <input type="hidden" name="tmpcode" value="eaa32c96f620053cf442ad32258076b9">
        <div class="infofield">Фамилия<span style="color:red;">*</span>:</div>
        <input type="text" name="fio" value="">
        <div class="errors error_fio" style="display:none"></div>
        <div class="infofield">Имя<span style="color:red;">*</span>:</div>
        <input type="text" name="first_name" value="">
        <div class="errors error_first_name" style="display:none"></div>
        <div class="infofield">Отчество:</div>
        <input type="text" name="middle_name" value="">
        <div class="errors error_middle_name" style="display:none"></div>
        <div class="infofield">E-mail<span style="color:red;">*</span>:</div>
        <input type="email" name="mail" value="">
        <div class="errors error_mail" style="display:none"></div>
        <input type="hidden" name="phone" value="">
        <div class="errors error_phone" style="display:none"></div>
        <div class="infofield">Логин<span style="color:red;">*</span>:</div>
        <input type="text" name="name" value="">
        <div class="errors error_name" style="display:none"></div>
        <div class="infofield">Пароль<span style="color:red;">*</span>:</div>
        <input type="password" name="password">
        <div class="errors error_password" style="display:none"></div>
        <div class="infofield">Повторите пароль<span style="color:red;">*</span>:</div>
        <input type="password" name="password2">
        <div class="errors error_password2" style="display:none"></div>
        <div class="param1">
          <div class="infofield">Страна <span style="color:red;">*</span>:</div>
          <select name="p1" class="inpselect chosen-select">
            <option value="">-</option>
            <option value="1">Австралия</option>
            <option value="2">Австрия</option>
            <option value="3">Азербайджан</option>
            <option value="4">Аландские острова</option>
            <option value="5">Албания</option>
            <option value="6">Алжир</option>
            <option value="7">Американские Виргинские острова</option>
            <option value="8">Американское Самоа</option>
            <option value="9">Ангилья</option>
            <option value="10">Ангола</option>
            <option value="11">Андорра</option>
            <option value="12">Антарктида</option>
            <option value="13">Антигуа и Барбуда</option>
            <option value="14">Аргентина</option>
            <option value="15">Армения</option>
            <option value="16">Аруба</option>
            <option value="17">Афганистан</option>
            <option value="18">Багамские острова</option>
            <option value="19">Бангладеш</option>
            <option value="20">Барбадос</option>
            <option value="21">Бахрейн</option>
            <option value="22">Белиз</option>
            <option value="23">Белоруссия</option>
            <option value="24">Бельгия</option>
            <option value="25">Бенин</option>
            <option value="26">Бермуды</option>
            <option value="27">Болгария</option>
            <option value="28">Боливия</option>
            <option value="29">Босния и Герцеговина</option>
            <option value="30">Ботсвана</option>
            <option value="31">Бразилия</option>
            <option value="32">Британские Виргинские острова</option>
            <option value="33">Британские территории в Индийском океане</option>
            <option value="34">Бруней</option>
            <option value="35">Буркина Фасо</option>
            <option value="36">Бурунди</option>
            <option value="37">Бутан</option>
            <option value="38">Вануату</option>
            <option value="39">Ватикан</option>
            <option value="40">Великобритания</option>
            <option value="41">Венгрия</option>
            <option value="42">Венесуэла</option>
            <option value="43">Внешние малые острова (США)</option>
            <option value="44">Восточный Тимор</option>
            <option value="45">Вьетнам</option>
            <option value="46">Габон</option>
            <option value="47">Гаити</option>
            <option value="48">Гайана</option>
            <option value="49">Гамбия</option>
            <option value="50">Гана</option>
            <option value="51">Гваделупа</option>
            <option value="52">Гватемала</option>
            <option value="53">Гвинея</option>
            <option value="54">Гвинея-Бисау</option>
            <option value="55">Германия</option>
            <option value="56">Гибралтар</option>
            <option value="57">Гондурас</option>
            <option value="58">Гонконг</option>
            <option value="59">Гренада</option>
            <option value="60">Гренландия</option>
            <option value="61">Греция</option>
            <option value="62">Грузия</option>
            <option value="63">Гуам</option>
            <option value="64">Дания</option>
            <option value="65">Джибути</option>
            <option value="66">Доминика</option>
            <option value="67">Доминиканская республика</option>
            <option value="68">ДР Конго</option>
            <option value="69">Египет</option>
            <option value="70">Замбия</option>
            <option value="71">Западная Сахара</option>
            <option value="72">Зимбабве</option>
            <option value="73">Израиль</option>
            <option value="74">Индия</option>
            <option value="75">Индонезия</option>
            <option value="76">Иордания</option>
            <option value="77">Ирак</option>
            <option value="78">Иран</option>
            <option value="79">Ирландия</option>
            <option value="80">Исландия</option>
            <option value="81">Испания</option>
            <option value="82">Италия</option>
            <option value="83">Йемен</option>
            <option value="84">Кабо-Верде</option>
            <option value="85">Казахстан</option>
            <option value="86">Каймановы острова</option>
            <option value="87">Камбоджа</option>
            <option value="88">Камерун</option>
            <option value="89">Канада</option>
            <option value="90">Катар</option>
            <option value="91">Кения</option>
            <option value="92">Кипр</option>
            <option value="93">Кирибати</option>
            <option value="94">Китай</option>
            <option value="95">Кокосовые острова</option>
            <option value="96">Колумбия</option>
            <option value="97">Коморские острова</option>
            <option value="98">Конго</option>
            <option value="99">Коста-Рика</option>
            <option value="100">Кот-д’Ивуар</option>
            <option value="101">Куба</option>
            <option value="102">Кувейт</option>
            <option value="103">Кыргызстан</option>
            <option value="104">Лаос</option>
            <option value="105">Латвия</option>
            <option value="106">Лесото</option>
            <option value="107">Либерия</option>
            <option value="108">Ливан</option>
            <option value="109">Ливия</option>
            <option value="110">Литва</option>
            <option value="111">Лихтенштейн</option>
            <option value="112">Люксембург</option>
            <option value="113">Маврикий</option>
            <option value="114">Мавритания</option>
            <option value="115">Мадагаскар</option>
            <option value="116">Майотта</option>
            <option value="117">Макао</option>
            <option value="118">Македония</option>
            <option value="119">Малави</option>
            <option value="120">Малайзия</option>
            <option value="121">Мали</option>
            <option value="122">Мальдивы</option>
            <option value="123">Мальта</option>
            <option value="124">Марокко</option>
            <option value="125">Мартиника</option>
            <option value="126">Маршалловы острова</option>
            <option value="127">Мексика</option>
            <option value="128">Мозамбик</option>
            <option value="129">Молдова</option>
            <option value="130">Монако</option>
            <option value="131">Монголия</option>
            <option value="132">Монтсеррат</option>
            <option value="133">Мьянма</option>
            <option value="134">Намибия</option>
            <option value="135">Науру</option>
            <option value="136">Непал</option>
            <option value="137">Нигер</option>
            <option value="138">Нигерия</option>
            <option value="139">Нидерландские Антильские острова</option>
            <option value="140">Нидерланды</option>
            <option value="141">Никарагуа</option>
            <option value="142">Ниуэ</option>
            <option value="143">Новая Зеландия</option>
            <option value="144">Новая Каледония</option>
            <option value="145">Норвегия</option>
            <option value="146">Норфолк</option>
            <option value="147">О.Святой Елены</option>
            <option value="148">ОАЭ</option>
            <option value="149">Оман</option>
            <option value="150">Остров Буве</option>
            <option value="151">Остров Рождества</option>
            <option value="152">Острова Кука</option>
            <option value="153">Пакистан</option>
            <option value="154">Палау</option>
            <option value="155">Палестина</option>
            <option value="156">Панама</option>
            <option value="157">Папуа — Новая Гвинея</option>
            <option value="158">Парагвай</option>
            <option value="159">Перу</option>
            <option value="160">Питкэрн</option>
            <option value="161">Польша</option>
            <option value="162">Португалия</option>
            <option value="163">Пуэрто-Рико</option>
            <option value="164">Реюньон</option>
            <option value="165">Россия</option>
            <option value="166">Руанда</option>
            <option value="167">Румыния</option>
            <option value="168">Сальвадор</option>
            <option value="169">Самоа</option>
            <option value="170">Сан-Марино</option>
            <option value="171">Сан-Томе и Принсипи</option>
            <option value="172">Саудовская Аравия</option>
            <option value="173">Свазиленд</option>
            <option value="174">Северная Корея</option>
            <option value="175">Северные Марианские острова</option>
            <option value="176">Сейшельские острова</option>
            <option value="177">Сенегал</option>
            <option value="178">Сен-Пьер и Микелон</option>
            <option value="179">Сент-Винсент и Гренадины</option>
            <option value="180">Сент-Киттс и Невис</option>
            <option value="181">Сент-Люсия</option>
            <option value="182">Сербия</option>
            <option value="183">Сербия и Черногория</option>
            <option value="184">Сингапур</option>
            <option value="185">Сирия</option>
            <option value="186">Словакия</option>
            <option value="187">Словения</option>
            <option value="188">Соломоновы острова</option>
            <option value="189">Сомали</option>
            <option value="190">Судан</option>
            <option value="191">Суринам</option>
            <option value="192">США</option>
            <option value="193">Сьерра-Леоне</option>
            <option value="194">Таджикистан</option>
            <option value="195">Тайвань</option>
            <option value="196">Тайланд</option>
            <option value="197">Танзания</option>
            <option value="198">Тёркс и Кайкос</option>
            <option value="199">Того</option>
            <option value="200">Токелау</option>
            <option value="201">Тонга</option>
            <option value="202">Тринидад и Тобаго</option>
            <option value="203">Тувалу</option>
            <option value="204">Тунис</option>
            <option value="205">Туркменистан</option>
            <option value="206">Турция</option>
            <option value="207">Уганда</option>
            <option value="208">Узбекистан</option>
            <option value="209">Украина</option>
            <option value="210">Уоллис и Футуна</option>
            <option value="211">Уругвай</option>
            <option value="212">Фарерские острова</option>
            <option value="213">Федеративные Штаты Микронезии</option>
            <option value="214">Фиджи</option>
            <option value="215">Филиппины</option>
            <option value="216">Финляндия</option>
            <option value="217">Фолклендские острова</option>
            <option value="218">Франция</option>
            <option value="219">Французская Гвиана</option>
            <option value="220">Французская Полинезия</option>
            <option value="221">Французские Южные и Антарктические Территории</option>
            <option value="222">Херд и Макдональд</option>
            <option value="223">Хорватия</option>
            <option value="224">ЦАР</option>
            <option value="225">Чад</option>
            <option value="226">Черногория</option>
            <option value="227">Чехия</option>
            <option value="228">Чили</option>
            <option value="229">Швейцария</option>
            <option value="230">Швеция</option>
            <option value="231">Шпицберген и Ян-Майен</option>
            <option value="232">Шри-Ланка</option>
            <option value="233">Эквадор</option>
            <option value="234">Экваториальная Гвинея</option>
            <option value="235">Эритрея</option>
            <option value="236">Эстония</option>
            <option value="237">Эфиопия</option>
            <option value="238">ЮАР</option>
            <option value="239">Южная Георгия и Южные Сандвичевы острова</option>
            <option value="240">Южная Корея</option>
            <option value="241">Ямайка</option>
            <option value="242">Япония</option>
          </select>
          <div class="registration_form_param_text"></div>
          <div class="errors error_p1" style="display:none"></div>
        </div>
        <div class="param2">
          <div class="infofield">Город<span style="color:red;">*</span>:</div>
          <input type="text" name="p2" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p2" style="display:none"></div>
        </div>
        <div class="param13">
          <div class="infofield">Телефон<span style="color:red;">*</span>:</div>
          <input type="tel" name="p13" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p13" style="display:none"></div>
        </div>
        <div class="param3">
          <div class="infofield">Адрес<span style="color:red;">*</span>:</div>
          <input type="text" name="p3" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p3" style="display:none"></div>
        </div>
        <div class="param4">
          <div class="infofield">Индекс<span style="color:red;">*</span>:</div>
          <input type="text" name="p4" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p4" style="display:none"></div>
        </div>
        <div class="param5">
          <div class="infofield">Ученая степень:</div>
          <input type="text" name="p5" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p5" style="display:none"></div>
        </div>
        <div class="param6">
          <div class="infofield">Звание:</div>
          <input type="text" name="p6" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p6" style="display:none"></div>
        </div>
        <div class="param7">
          <div class="infofield">Дата рождения<span style="color:red;">*</span>:</div>
          <input type="text" name="p7" value="">
          <div class="regcomments">просим Вас вносить данные в следующем формате: дд.мм.гггг</div>
          <div class="registration_form_param_text"></div>
          <div class="errors error_p7" style="display:none"></div>
        </div>
        <div class="param8">
          <div class="infofield">Основное место работы<span style="color:red;">*</span>:</div>
          <textarea name="p8" rows="10" cols="30"></textarea>
          <div class="registration_form_param_text"></div>
          <div class="errors error_p8" style="display:none"></div>
        </div>
        <div class="param9">
          <div class="infofield">Занимаемая должность:</div>
          <input type="text" name="p9" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p9" style="display:none"></div>
        </div>
        <div class="param10">
          <div class="infofield">Факс:</div>
          <input type="text" name="p10" value="">
          <div class="registration_form_param_text"></div>
          <div class="errors error_p10" style="display:none"></div>
        </div>
        <div class="param11">
          <div class="infofield">Комментарии:</div>
          <textarea name="p11" rows="10" cols="30"></textarea>
          <div class="registration_form_param_text"></div>
          <div class="errors error_p11" style="display:none"></div>
        </div>
        <div class="captcha">
          <div class="block captcha">
            <img :src="registration9463" width="159" height="80" class="code_img captcha-image">
            <input type="hidden" name="captchaint" value="9463">
            <input type="hidden" name="captcha_update" value="">
            <span class="input-title">Введите код с картинки:</span>
            <input type="text" name="captcha" value="" autocomplete="off">
            <br>
            <div class="js_captcha_update captcha_update"><a href="javascript:void(0)"><i class="fas fa-redo">&nbsp;</i></a>
            </div>
          </div>
          <div class="errors error_captcha" style="display:none"></div>
        </div>
        <br>
        <input id="regsubmit" type="submit" value="Регистрация">
        <div class="warning_wrap"></div>
        <div class="errors error" style="display:none"></div>
        <div class="required_field"><span style="color:red;">*</span> — Поля, обязательные для заполнения</div>
      </form>
      <div class="errors registration_message"></div>
    </div>
  </section>
</template>

<style scoped>

</style>