function PopUpShow() {
  $("#popup1").show();
  }
  //Функция скрытия PopUp
  function PopUpHide() {
  $("#popup1").hide(); 
  }

  function PopUpHide2() {
    $("#popup2").hide();
    $(".landingMenu").show(); 
    }

  (function($) {
    $(window).load(function() {
      // Проверим, есть ли запись в куках о посещении посетителя
      // Если запись есть - ничего не делаем
      if (!$.cookie('was')) {
        // Покажем всплывающее окно
        $('#popup1').show();
      }
      // Запомним в куках, что посетитель к нам уже заходил
      $.cookie('was', true, {
        expires: 365,
        path: '/'
      });
    });
  })(jQuery);
