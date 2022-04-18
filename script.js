var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

navigator.getBattery().then(battery => {

function UpdateBattery(){
  UpdateChargingInfo();
  updateLevelInfo();
}


var power = 0
function printBattery(){
  $("#plugged_in").text(battery.charging ? "Charging" : "Not Charging")
  $('#power').text(Math.round(power) + "%")
  power += ((battery.level * 100)-power)/40
  window.requestAnimationFrame(printBattery)
}

window.requestAnimationFrame(printBattery)

})

var user = detect.parse(navigator.userAgent)
var browser = user.browser.family
var computer = user.os.family

$("#computer").text(computer)
$("#browser").text(browser)

if(user.os.family == "Windows"){
  $("#platform").attr("src",'images/windows_white.png')
}else if(user.os.family == "Mac OS X"){
  $('#platform').attr("src","images/apple_white.png")
}

let cookies = navigator.cookieEnabled
let language = navigator.language;
console.log(cookies)
if (cookies == true){
  cookies = "Cookies enabled"
}else{
  cookies = "Cookies disabled"
}

$("#lang").text(language)
$("#wifi").text(cookies)

//TODO: Add FAKETYPE (of your urls --> comb.codeitfast.xyz)


//webkit nightly

/*console.log(navigator.platform)
console.log(navigator.cookieEnabled)
console.log(navigator.deviceMemory)
console.log(navigator.geolocation)
console.log(navigator.userAgent)*/