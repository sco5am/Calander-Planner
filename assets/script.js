$(document).ready(function () {
  $('.saveBtn').click(function () {

    var value = $(this).siblings('.description').val();
    var time = $(this).parent()('time-block');

    localStorage.setItem(value, time);

    $('.feedback').addClass('show');

   setTimeout(function () {
      $('.feedback').removeClass('show');
    }, 4000);
  });
  
    function updateHour() {
      var currentHour = dayjs().hour();

      $('.time-block').each(function() {
      var setHour =parseInt($(this).attr('id').split('-')[1]);

      if (setHour === currentHour) {
        $(this).addClass('present');
      } else if (setHour < currentHour) {
        $(this).removeClass('present');
        $(this).addClass('past');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  
  updateHour();

  setInterval(updateHour, 5000);

  

  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#today').text(dayjs().format('dddd, MMMM D, YYYY'));
});
