(function($) {
$('html').removeClass('nojs').addClass('js');

$('abbr[title]').bind('click', function() {
  var abbrText = $(this).html();
  var expandedText = $(this).attr('title');
  $(this).html(expandedText + " (" + abbrText + ")").removeAttr('title').unbind('click');
});



/*

var current = new Date();
var hours = current.getHours();
hours = 8;
if (hours > 5 && hours < 19) {
  $('h1').html('Good day!');
}
else {
  $('h1').html('Good evening!');
}
*/

})(jQuery);
