/*$(document).ready(function(e) {
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top},
        'slow');
});
});*/

$(document).ready(function(e) {
$("a").click(function() {
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top},
        'slow');
});
});

/*$("button").click(function() {
	$('body').animate({
		scrollTop: $("div#heroes").offset().top},
		'slow');
});*/
