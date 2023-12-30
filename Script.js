function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function getRandomDarkColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var hexValue = Math.floor(Math.random() * 128); // Generating darker shades
      var hexString = hexValue.toString(16);
      color += hexString.length === 1 ? '0' + hexString : hexString;
    }
    return color;
  }
  function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var hexValue = Math.floor(Math.random() * 128) + 128; // Generating lighter shades
      var hexString = hexValue.toString(16);
      color += hexString.length === 1 ? '0' + hexString : hexString;
    }
    return color;
  }

function Colors() {

    var lightCheck = document.getElementById("lightCheckBox");
    if(lightCheck.checked){
        document.getElementById("body").style.backgroundColor = getRandomDarkColor();
        document.getElementById("Title1").style.color = "white";
        document.getElementById("Title2").style.color = "white";
        document.getElementById("link3").style.color = "white";
        document.getElementById("mainBox").style.backgroundColor = getRandomDarkColor();
        document.getElementById("icon").style.display = "none";
        document.getElementById("icon2").style.display = "inline";
        document.getElementById("icon3").style.display = "none";
        document.getElementById("icon4").style.display = "inline";
        document.getElementById("icon5").style.display = "none";
        document.getElementById("icon6").style.display = "inline";
        document.getElementById("switchback").style.backgroundColor = getRandomDarkColor();
    }
    else{
        document.getElementById("body").style.backgroundColor = getRandomLightColor();
        document.getElementById("Title1").style.color = "black";
        document.getElementById("Title2").style.color = "black";
        document.getElementById("link3").style.color = "black";
        document.getElementById("mainBox").style.backgroundColor = getRandomLightColor();
        document.getElementById("icon2").style.display = "none";
        document.getElementById("icon").style.display = "inline";
        document.getElementById("icon3").style.display = "inline";
        document.getElementById("icon4").style.display = "none";
        document.getElementById("icon5").style.display = "inline";
        document.getElementById("icon6").style.display = "none";
        document.getElementById("switchback").style.backgroundColor = getRandomLightColor();
        
    }

}
