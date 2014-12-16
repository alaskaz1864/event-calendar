// Accordion Menu
$('span[role=panel-collapse]').click(function() {
	if ($(this).hasClass('glyphicon-chevron-down pull-right')) {
		$(this).removeClass('glyphicon-chevron-down pull-right');
		$(this).addClass("glyphicon glyphicon-chevron-right pull-right");
	} else {
		$(this).removeClass("glyphicon glyphicon-chevron-right pull-right");
		$(this).addClass('glyphicon glyphicon-chevron-down pull-right');
	}
});
//Accordion Menu Ends//

//Tooltip
$('[data-toggle="tooltip"]').tooltip();
//Tooltip ends