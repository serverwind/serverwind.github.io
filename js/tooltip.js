function openTooltip() {
  var element = document.getElementById("toolTip");
  element.classList.add("tooltip-show");
  $(function() {
    $("#toolTip").click(function(e) {
      var offset = $(this).offset();
      var relativeX = (e.pageX - offset.left);
      var relativeY = (e.pageY - offset.top);
    });
  });
}
function removeTooltip() {
  var element = document.getElementById("toolTip");
  element.classList.remove("tooltip-show");
}
