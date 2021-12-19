$(document).ready(function(){
    $("img").each(function(){
        $(this).attr("title", $(this).attr("alt"));
    });
});
