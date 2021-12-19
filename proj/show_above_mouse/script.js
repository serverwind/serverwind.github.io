$("#spanhovering").hover(function(event) {
    $("#divtoshow").css({top: event.clientY, left: event.clientX}).show();
}, function() {
    $("#divtoshow").hide();
});
