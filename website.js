function main() {
  var mijnLinks = document.getElementsByClassName("menuelement");
  for (var teller = 0; teller < mijnLinks.length; teller++) {
    mijnLinks[teller].onclick = function() {
      var id = this.getAttribute("data-id");
      var divke = document.getElementById(id);
      var zichtbaarDivke = document.getElementsByClassName("zichtbaar")[0];
      zichtbaarDivke.className = "verborgen";
      divke.className = "zichtbaar";
    }
  }
}
window.onload = function() {
  main();
}
