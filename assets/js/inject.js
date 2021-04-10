var inject_content = [
    ["&%$","html","HTML & JS"],
    ["assets/img/creations/manu.jpg","Manu Gym","Gym for Manu Gym","'https://link.danlan.co.uk/s/manu'","Code","'https://link.danlan.co.uk/d/manu'","Demo"],
    ["assets/img/creations/startpage.jpg","Startpage","Startpage","'https://link.danlan.co.uk/s/spge'","Code","'https://startpage.danlan.co.uk'","Demo"],
    ["assets/img/creations/csspec.png","Compscipage","CS: Scheme of Work","'https://link.danlan.co.uk/s/csspec'","Code","'https://link.danlan.co.uk/d/csspec'","Demo"],
    ["assets/img/creations/ISBN.png","ISBN","ISBN Validator","'https://link.danlan.co.uk/s/isbn'","Code","'https://danlan.co.uk/creations/isbn'","Demo"],
    ["assets/img/creations/Intranet.png","Springwood Intranet","WNAT Intranet","'https://link.danlan.co.uk/s/wnat'","Code","'https://wnat.danlee.uk.to/beta/springwood/index.html'","Demo"],
    ["assets/img/creations/Revision.png","GCSE History","Edexcel History Revision","'https://link.danlan.co.uk/s/gcseh'","Code","'https://danlan.co.uk/creations/gcse'","Demo"],
    ["assets/img/creations/tetris.png","Tetris","Tetris Fork","'https://link.danlan.co.uk/d/tetris'","Demo",],
    ["&%$","python","Python"],
    ["assets/img/creations/poggle.jpg","Pirated_Boggle","Poggle","'https://link.danlan.co.uk/s/pgle'",'Code & Download'],
    ["assets/img/creations/poker.jpg","man_&_his_cards","Poker & Yahzee Solver","'https://link.danlan.co.uk/s/pker'",'Code & Download'],
    ["assets/img/creations/spam.png","Spam_in_a_can","File Spammer","'https://link.danlan.co.uk/s/spaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam'",'Code & Download'],
    ["&%$","other","Other"],
    ["assets/img/creations/hspin.png","HesSpin","HexSpin","'https://link.danlan.co.uk/s/hspin'",'Coming soon']];
let string_of_html= `
                <div class="column" >
                <div class="polaroid hvr-grow-shadow">
                        <img class="portfolioIMG" src='{0}' alt={1}>
                        <div class="container">
                            <p class="portfolioText">{2}</p>
                            {3}
                        </div>
                    </div>
                    </div>

`;
var to_insert = 0;
var newElement = 0;
for( i= 0; i < inject_content.length; i++){
    newElement = document.createElement("div");
    if(inject_content[i][0] == "&%$"){
        to_insert = "<h1 style='clear:both' ><a id='"+inject_content[0][1]+"'></a>"+inject_content[i][2]+"</h1>"
    }
    else {
        to_insert = string_of_html
        for( x= 0; x < 4; x++){
            if( x >= 3){
                var button_to_insert = '';
                for(p=3; p < (inject_content[i].length); p++){
                    button_to_insert += ('<button class="linkButton" target="_blank" onclick="window.location.href='+inject_content[i][p]+'">'+inject_content[i][p+1]+'</button>');
                    p+=1;
                }
                to_insert = to_insert.replace("{"+x+"}",button_to_insert);
            }
            else{
                to_insert = to_insert.replace("{"+x+"}",inject_content[i][x]);
            }
        }
    }
    newElement.innerHTML = to_insert
    document.getElementById("htmlsection").appendChild(newElement);
}


$(document).ready(function(){
      $(window).scroll(function () {

        if ($(window).scrollTop() > 85) {
          $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 80) {
          $('#nav_bar').removeClass('navbar-fixed');
        }
      });
});

//Night Mode
function darkModeFunc(){;
    if (darkmode == false || darkmode == "false") {
        darkmode = false;
        setCookie("darkmode",false,30)
        document.getElementById("colorMode").innerHTML = '<img src="assets/img/light/sun.svg" width="100%">';
        document.documentElement.style.setProperty("--bgColor", "#EEF0F4")
        document.documentElement.style.setProperty("--fontColor", "#001f3f")
    } else {
        darkmode = true;
        setCookie("darkmode",true,30)
        document.getElementById("colorMode").innerHTML = '<img src="assets/img/dark/moon.svg" width="100%"">';
        document.documentElement.style.setProperty("--bgColor", "rgba(21, 21, 23, 1)")
        document.documentElement.style.setProperty("--fontColor", "#eee")
    }

}

//Cookies
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
  darkmode=getCookie("darkmode");
  if (darkmode != "") {
    darkModeFunc();
  } else {
     if (window.matchMedia("(prefers-color-scheme: dark)").matches){
         //setCookie(darkmode,true,30)
         darkmode=true
         darkModeFunc()
     }
      else{
          darkmode=false
      }
  }
}
checkCookie()
if(document.getElementById("colorMode").addEventListener){
    document.getElementById("colorMode").addEventListener("click", function(){
                                                          darkmode = !darkmode;
    darkModeFunc()})
    }

//Scroll animation
$("#scroll").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#htmlsection").offset().top
    }, 1500);
});

var date = new Date().toISOString().slice(0, 10)
console.log(date)
var corona = "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;date="+date+";areaName=england&structure={%22date%22:%22"+date+"%22,%22newCases%22:%22newCasesByPublishDate%22}";
console.log(corona);
            $.getJSON(corona, function boris_is_silly(data) {
                var dataz = data.data;
                document.getElementById("covid").innerHTML= "<h2>SARS-CoV-2</h2><h3>Daily Cases: " + data.data[0].newCases+ "</h3>";
                console.log(dataz[0].newCases);

});