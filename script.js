//scroll to top on reload
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
};


// Landing page 
var setlanding;

function myFunction() {
  setlanding = setTimeout(showPage, 4000);
}

function showPage() {
  /** if (localStorage.getItem("hasCodeRunBefore") === null) {
    Your code here. **/
    document.getElementById("loading-page").style.opacity = '0';

    document.getElementById("loading-page").style.display = 'none';

    //document.getElementById("full-page").style.display = "block";
    document.getElementById("full-page").style.opacity = '1';

    localStorage.setItem("hasCodeRunBefore", true);
}







function showCanada(){

  document.getElementById("horizontal-bars-2").style.display = 'none';
  
   document.getElementById("canadian-cities").style.opacity = '1';
   document.getElementById("canadian-cities").style.display = 'block';
}




function showWorld(){
  document.getElementById("horizontal-bars-2").style.display = 'block';
    
    document.getElementById("canadian-cities").style.opacity = '0';
    document.getElementById("canadian-cities").style.display = 'none';
  }
  
  
  
  
  

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

document.getElementById("day").innerHTML = d.getDate();
document.getElementById("year").innerHTML = d.getFullYear();
let day = days[d.getDay()];
document.getElementById("weekday").innerHTML = day;

let month = monthNames[d.getMonth()];
document.getElementById("month").innerHTML = month;



var uvi_one;
async function rowone_UV(){
  uvi_url_one = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Paris&days=1'

 
//Pull data for Weather Info
  response_one = await fetch (uvi_url_one);
  data_one = await response_one.json();


// check to see if data is being pulled
console.log(data_one)


//DAILY UV MAX VALUE
 const uvi_one = data_one.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_one = data_one.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_one = data_one.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_one').textContent = uvi_one;
   //Location name 
     document.getElementById('city_name_one').textContent = city_name_one;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_one').textContent = country_name_one;


 if (uvi_one <=1 ) {
   // setting colour
   var element = document.getElementById('one');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_one").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_one == 2 )
   {
   // Adding row color
   var element = document.getElementById('one');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_one == 3 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_one == 4 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_one == 5 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_one == 6 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_one == 7 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_one == 8 )
   {
     var element = document.getElementById('one');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_one == 9 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_one == 10 )
   {
     var element = document.getElementById('one');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_one >= 11 )
   {
     var element = document.getElementById('one');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_one").src="../uv-icons/uv11.png";
    
   }  
   

}

rowone_UV();





var uvi_two;
async function rowtwo_UV(){
  uvi_url_two = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=florence&days=1'

 
//Pull data for Weather Info
  response_two = await fetch (uvi_url_two);
  data_two = await response_two.json();


// check to see if data is being pulled
console.log(data_two)


//DAILY UV MAX VALUE
 const uvi_two = data_two.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_two = data_two.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_two = data_two.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_two').textContent = uvi_two;
   //Location name 
     document.getElementById('city_name_two').textContent = city_name_two;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_two').textContent = country_name_two;


 if (uvi_two <=1 ) {
   // setting colour
   var element = document.getElementById('two');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_two").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_two == 2 )
   {
   // Adding row color
   var element = document.getElementById('two');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_two == 3 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_two == 4 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_two == 5 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_two == 6 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_two == 7 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_two == 8 )
   {
     var element = document.getElementById('two');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_two == 9 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_two == 10 )
   {
     var element = document.getElementById('two');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_two >= 11 )
   {
     var element = document.getElementById('two');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_two").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwo_UV();


 
  
 
var uvi_three;
async function rowthree_UV(){
  uvi_url_three = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=tokyo&days=1'

 
//Pull data for Weather Info
  response_three = await fetch (uvi_url_three);
  data_three = await response_three.json();


// check to see if data is being pulled
console.log(data_three)


//DAILY UV MAX VALUE
 const uvi_three = data_three.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_three = data_three.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_three = data_three.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_three').textContent = uvi_three;
   //Location name 
     document.getElementById('city_name_three').textContent = city_name_three;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_three').textContent = country_name_three;


 if (uvi_three <=1 ) {
   // setting colour
   var element = document.getElementById('three');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_three").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_three == 2 )
   {
   // Adding row color
   var element = document.getElementById('three');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_three == 3 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_three == 4 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_three == 5 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_three == 6 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_three == 7 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_three == 8 )
   {
     var element = document.getElementById('three');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_three == 9 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_three == 10 )
   {
     var element = document.getElementById('three');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_three >= 11 )
   {
     var element = document.getElementById('three');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_three").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthree_UV();



var uvi_four;
async function rowfour_UV(){
  uvi_url_four = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Marrakesh&days=1'
 
//Pull data for Weather Info
  response_four = await fetch (uvi_url_four);
  data_four = await response_four.json();


// check to see if data is being pulled
console.log(data_four)


//DAILY UV MAX VALUE
 const uvi_four = data_four.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_four = data_four.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_four = data_four.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_four').textContent = uvi_four;
   //Location name 
     document.getElementById('city_name_four').textContent = city_name_four;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_four').textContent = country_name_four;


 if (uvi_four <=1 ) {
   // setting colour
   var element = document.getElementById('four');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_four").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_four == 2 )
   {
   // Adding row color
   var element = document.getElementById('four');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_four == 3 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_four == 4 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_four == 5 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_four == 6 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_four == 7 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_four == 8 )
   {
     var element = document.getElementById('four');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_four == 9 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_four == 10 )
   {
     var element = document.getElementById('four');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_four >= 11 )
   {
     var element = document.getElementById('four');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_four").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfour_UV();

var uvi_five;
async function rowfive_UV(){
  uvi_url_five = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=new_delhi&days=1'
 
//Pull data for Weather Info
  response_five = await fetch (uvi_url_five);
  data_five = await response_five.json();


// check to see if data is being pulled
console.log(data_five)


//DAILY UV MAX VALUE
 const uvi_five = data_five.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_five = data_five.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_five = data_five.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_five').textContent = uvi_five;
   //Location name 
     document.getElementById('city_name_five').textContent = city_name_five;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_five').textContent = country_name_five;


 if (uvi_five <=1 ) {
   // setting colour
   var element = document.getElementById('five');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_five").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_five == 2 )
   {
   // Adding row color
   var element = document.getElementById('five');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_five == 3 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_five == 4 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_five == 5 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_five == 6 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_five == 7 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_five == 8 )
   {
     var element = document.getElementById('five');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_five == 9 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_five == 10 )
   {
     var element = document.getElementById('five');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_five >= 11 )
   {
     var element = document.getElementById('five');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_five").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfive_UV();


var uvi_six;
async function rowsix_UV(){
  uvi_url_six = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=la_paz_mexico&days=1'
    
//Pull data for Weather Info
  response_six = await fetch (uvi_url_six);
  data_six = await response_six.json();


// check to see if data is being pulled
console.log(data_six)


//DAILY UV MAX VALUE
 const uvi_six = data_six.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_six = data_six.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_six = data_six.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_six').textContent = uvi_six;
   //Location name 
     document.getElementById('city_name_six').textContent = city_name_six;

 //COUNTRY NAME IF NEEDED
  document.getElementById('country_name_six').textContent = country_name_six;


 if (uvi_six <=1 ) {
   // setting colour
   var element = document.getElementById('six');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_six").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_six == 2 )
   {
   // Adding row color
   var element = document.getElementById('six');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_six == 3 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_six == 4 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_six == 5 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_six == 6 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_six == 7 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_six == 8 )
   {
     var element = document.getElementById('six');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_six == 9 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_six == 10 )
   {
     var element = document.getElementById('six');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_six >= 11 )
   {
     var element = document.getElementById('six');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_six").src="../uv-icons/uv11.png";
    
   }  
   

}

rowsix_UV();

 

var uvi_seven;
async function rowseven_UV(){
  uvi_url_seven = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=kingston&days=1'
    
//Pull data for Weather Info
  response_seven = await fetch (uvi_url_seven);
  data_seven = await response_seven.json();


// check to see if data is being pulled
console.log(data_seven)


//DAILY UV MAX VALUE
 const uvi_seven = data_seven.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_seven = data_seven.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_seven = data_seven.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_seven').textContent = uvi_seven;
   //Location name 
     document.getElementById('city_name_seven').textContent = city_name_seven;

 //COUNTRY NAME IF NEEDED
  document.getElementById('country_name_seven').textContent = country_name_seven;


 if (uvi_seven <=1 ) {
   // setting colour
   var element = document.getElementById('seven');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_seven == 2 )
   {
   // Adding row color
   var element = document.getElementById('seven');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_seven == 3 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_seven == 4 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_seven == 5 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_seven == 6 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_seven == 7 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_seven == 8 )
   {
     var element = document.getElementById('seven');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_seven == 9 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_seven == 10 )
   {
     var element = document.getElementById('seven');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_seven >= 11 )
   {
     var element = document.getElementById('seven');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_seven").src="../uv-icons/uv11.png";
    
   }  
   

}

rowseven_UV();

 
var uvi_eight;
async function roweight_UV(){
  uvi_url_eight = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=manila&days=1'
    
//Pull data for Weather Info
  response_eight = await fetch (uvi_url_eight);
  data_eight = await response_eight.json();


// check to see if data is being pulled
console.log(data_eight)


//DAILY UV MAX VALUE
 const uvi_eight = data_eight.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_eight = data_eight.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_eight = data_eight.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_eight').textContent = uvi_eight;
   //Location name 
     document.getElementById('city_name_eight').textContent = city_name_eight;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_eight').textContent = country_name_eight;


 if (uvi_eight <=1 ) {
   // setting colour
   var element = document.getElementById('eight');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_eight == 2 )
   {
   // Adding row color
   var element = document.getElementById('eight');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_eight == 3 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_eight == 4 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_eight == 5 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_eight == 6 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_eight == 7 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_eight == 8 )
   {
     var element = document.getElementById('eight');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_eight == 9 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_eight == 10 )
   {
     var element = document.getElementById('eight');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_eight >= 11 )
   {
     var element = document.getElementById('eight');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_eight").src="../uv-icons/uv11.png";
    
   }  
   

}

roweight_UV();


var uvi_nine;
async function rownine_UV(){
  uvi_url_nine = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=6.8334,80.985&days=1'
    
//Pull data for Weather Info
  response_nine = await fetch (uvi_url_nine);
  data_nine = await response_nine.json();


// check to see if data is being pulled
console.log(data_nine)


//DAILY UV MAX VALUE
 const uvi_nine = data_nine.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_nine = data_nine.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 //const country_name_nine = data_nine.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_nine').textContent = uvi_nine;
   //Location name 
     document.getElementById('city_name_nine').textContent = city_name_nine;

 //COUNTRY NAME IF NEEDED
 // document.getElementById('country_name_nine').textContent = country_name_nine;


 if (uvi_nine <=1 ) {
   // setting colour
   var element = document.getElementById('nine');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_nine == 2 )
   {
   // Adding row color
   var element = document.getElementById('nine');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_nine == 3 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_nine == 4 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_nine == 5 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_nine == 6 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_nine == 7 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_nine == 8 )
   {
     var element = document.getElementById('nine');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_nine == 9 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_nine == 10 )
   {
     var element = document.getElementById('nine');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_nine >= 11 )
   {
     var element = document.getElementById('nine');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_nine").src="../uv-icons/uv11.png";
    
   }  
   

}

rownine_UV();


var uvi_ten;
async function rowten_UV(){
  uvi_url_ten = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Caracas&days=1'
    
//Pull data for Weather Info
  response_ten = await fetch (uvi_url_ten);
  data_ten = await response_ten.json();


// check to see if data is being pulled
console.log(data_ten)


//DAILY UV MAX VALUE
 const uvi_ten = data_ten.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_ten = data_ten.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_ten = data_ten.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_ten').textContent = uvi_ten;
   //Location name 
     document.getElementById('city_name_ten').textContent = city_name_ten;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_ten').textContent = country_name_ten;


 if (uvi_ten <=1 ) {
   // setting colour
   var element = document.getElementById('ten');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_ten == 2 )
   {
   // Adding row color
   var element = document.getElementById('ten');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_ten == 3 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_ten == 4 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_ten == 5 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_ten == 6 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_ten == 7 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_ten == 8 )
   {
     var element = document.getElementById('ten');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_ten == 9 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_ten == 10 )
   {
     var element = document.getElementById('ten');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_ten >= 11 )
   {
     var element = document.getElementById('ten');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_ten").src="../uv-icons/uv11.png";
    
   }  
   

}

rowten_UV();


var uvi_eleven;
async function roweleven_UV(){
  uvi_url_eleven = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=santiago_chile&days=1'
    
//Pull data for Weather Info
  response_eleven = await fetch (uvi_url_eleven);
  data_eleven = await response_eleven.json();


// check to see if data is being pulled
console.log(data_eleven)


//DAILY UV MAX VALUE
 const uvi_eleven = data_eleven.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_eleven = data_eleven.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_eleven = data_eleven.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_eleven').textContent = uvi_eleven;
   //Location name 
     document.getElementById('city_name_eleven').textContent = city_name_eleven;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_eleven').textContent = country_name_eleven;


 if (uvi_eleven <=1 ) {
   // setting colour
   var element = document.getElementById('eleven');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_eleven == 2 )
   {
   // Adding row color
   var element = document.getElementById('eleven');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_eleven == 3 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_eleven == 4 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_eleven == 5 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_eleven == 6 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_eleven == 7 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_eleven == 8 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_eleven == 9 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_eleven == 10 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_eleven >= 11 )
   {
     var element = document.getElementById('eleven');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_eleven").src="../uv-icons/uv11.png";
    
   }  
   

}

roweleven_UV();


var uvi_twelve;
async function rowtwelve_UV(){
  uvi_url_twelve = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=taipei&days=1'
    
//Pull data for Weather Info
  response_twelve = await fetch (uvi_url_twelve);
  data_twelve = await response_twelve.json();


// check to see if data is being pulled
console.log(data_twelve)


//DAILY UV MAX VALUE
 const uvi_twelve = data_twelve.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twelve = data_twelve.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twelve = data_twelve.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twelve').textContent = uvi_twelve;
   //Location name 
     document.getElementById('city_name_twelve').textContent = city_name_twelve;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twelve').textContent = country_name_twelve;


 if (uvi_twelve <=1 ) {
   // setting colour
   var element = document.getElementById('twelve');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twelve == 2 )
   {
   // Adding row color
   var element = document.getElementById('twelve');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twelve == 3 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twelve == 4 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twelve == 5 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twelve == 6 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twelve == 7 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twelve == 8 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twelve == 9 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twelve == 10 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twelve >= 11 )
   {
     var element = document.getElementById('twelve');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twelve").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwelve_UV();

  
var uvi_thirteen;
async function rowthirteen_UV(){
  uvi_url_thirteen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Sanaa&days=1'
    
//Pull data for Weather Info
  response_thirteen = await fetch (uvi_url_thirteen);
  data_thirteen = await response_thirteen.json();


// check to see if data is being pulled
console.log(data_thirteen)


//DAILY UV MAX VALUE
 const uvi_thirteen = data_thirteen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirteen = data_thirteen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirteen = data_thirteen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirteen').textContent = uvi_thirteen;
   //Location name 
     document.getElementById('city_name_thirteen').textContent = city_name_thirteen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirteen').textContent = country_name_thirteen;


 if (uvi_thirteen <=1 ) {
   // setting colour
   var element = document.getElementById('thirteen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirteen == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirteen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirteen == 3 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirteen == 4 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirteen == 5 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirteen == 6 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirteen == 7 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirteen == 8 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirteen == 9 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirteen == 10 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirteen >= 11 )
   {
     var element = document.getElementById('thirteen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirteen_UV();

 
var uvi_fourteen;
async function rowfourteen_UV(){
  uvi_url_fourteen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Rio_de_Janeiro&days=1'
    
//Pull data for Weather Info
  response_fourteen = await fetch (uvi_url_fourteen);
  data_fourteen = await response_fourteen.json();


// check to see if data is being pulled
console.log(data_fourteen)


//DAILY UV MAX VALUE
 const uvi_fourteen = data_fourteen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_fourteen = data_fourteen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_fourteen = data_fourteen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_fourteen').textContent = uvi_fourteen;
   //Location name 
     document.getElementById('city_name_fourteen').textContent = city_name_fourteen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_fourteen').textContent = country_name_fourteen;


 if (uvi_fourteen <=1 ) {
   // setting colour
   var element = document.getElementById('fourteen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_fourteen == 2 )
   {
   // Adding row color
   var element = document.getElementById('fourteen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_fourteen == 3 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_fourteen == 4 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_fourteen == 5 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_fourteen == 6 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_fourteen == 7 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_fourteen == 8 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_fourteen == 9 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_fourteen == 10 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_fourteen >= 11 )
   {
     var element = document.getElementById('fourteen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfourteen_UV();

  

 
var uvi_fifteen;
async function rowfifteen_UV(){
  uvi_url_fifteen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Seoul&days=1'
    
//Pull data for Weather Info
  response_fifteen = await fetch (uvi_url_fifteen);
  data_fifteen = await response_fifteen.json();


// check to see if data is being pulled
console.log(data_fifteen)


//DAILY UV MAX VALUE
 const uvi_fifteen = data_fifteen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_fifteen = data_fifteen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_fifteen = data_fifteen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_fifteen').textContent = uvi_fifteen;
   //Location name 
     document.getElementById('city_name_fifteen').textContent = city_name_fifteen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_fifteen').textContent = country_name_fifteen;


 if (uvi_fifteen <=1 ) {
   // setting colour
   var element = document.getElementById('fifteen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_fifteen == 2 )
   {
   // Adding row color
   var element = document.getElementById('fifteen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_fifteen == 3 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_fifteen == 4 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_fifteen == 5 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_fifteen == 6 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_fifteen == 7 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_fifteen == 8 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_fifteen == 9 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_fifteen == 10 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_fifteen >= 11 )
   {
     var element = document.getElementById('fifteen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfifteen_UV();

 
 

var uvi_sixteen;
async function rowsixteen_UV(){
  uvi_url_sixteen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Singapore&days=1'
    
//Pull data for Weather Info
  response_sixteen = await fetch (uvi_url_sixteen);
  data_sixteen = await response_sixteen.json();


// check to see if data is being pulled
console.log(data_sixteen)


//DAILY UV MAX VALUE
 const uvi_sixteen = data_sixteen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_sixteen = data_sixteen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_sixteen = data_sixteen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_sixteen').textContent = uvi_sixteen;
   //Location name 
     document.getElementById('city_name_sixteen').textContent = city_name_sixteen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_sixteen').textContent = country_name_sixteen;


 if (uvi_sixteen <=1 ) {
   // setting colour
   var element = document.getElementById('sixteen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_sixteen == 2 )
   {
   // Adding row color
   var element = document.getElementById('sixteen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_sixteen == 3 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_sixteen == 4 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_sixteen == 5 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_sixteen == 6 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_sixteen == 7 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_sixteen == 8 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_sixteen == 9 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_sixteen == 10 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_sixteen >= 11 )
   {
     var element = document.getElementById('sixteen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv11.png";
    
   }  
   

}

rowsixteen_UV();



var uvi_seventeen;
async function rowseventeen_UV(){
  uvi_url_seventeen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=london&days=1'
    
//Pull data for Weather Info
  response_seventeen = await fetch (uvi_url_seventeen);
  data_seventeen = await response_seventeen.json();


// check to see if data is being pulled
console.log(data_seventeen)


//DAILY UV MAX VALUE
 const uvi_seventeen = data_seventeen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_seventeen = data_seventeen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_seventeen = data_seventeen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_seventeen').textContent = uvi_seventeen;
   //Location name 
     document.getElementById('city_name_seventeen').textContent = city_name_seventeen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_seventeen').textContent = country_name_seventeen;


 if (uvi_seventeen <=1 ) {
   // setting colour
   var element = document.getElementById('seventeen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_seventeen == 2 )
   {
   // Adding row color
   var element = document.getElementById('seventeen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_seventeen == 3 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_seventeen == 4 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_seventeen == 5 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_seventeen == 6 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_seventeen == 7 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_seventeen == 8 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_seventeen == 9 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_seventeen == 10 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_seventeen >= 11 )
   {
     var element = document.getElementById('seventeen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv11.png";
    
   }  
   

}

rowseventeen_UV();
 

var uvi_eighteen;
async function roweighteen_UV(){
  uvi_url_eighteen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=hong_kong&days=1'
    
//Pull data for Weather Info
  response_eighteen = await fetch (uvi_url_eighteen);
  data_eighteen = await response_eighteen.json();


// check to see if data is being pulled
console.log(data_eighteen)


//DAILY UV MAX VALUE
 const uvi_eighteen = data_eighteen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_eighteen = data_eighteen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_eighteen = data_eighteen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_eighteen').textContent = uvi_eighteen;
   //Location name 
     document.getElementById('city_name_eighteen').textContent = city_name_eighteen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_eighteen').textContent = country_name_eighteen;


 if (uvi_eighteen <=1 ) {
   // setting colour
   var element = document.getElementById('eighteen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_eighteen == 2 )
   {
   // Adding row color
   var element = document.getElementById('eighteen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_eighteen == 3 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_eighteen == 4 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_eighteen == 5 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_eighteen == 6 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_eighteen == 7 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_eighteen == 8 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_eighteen == 9 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_eighteen == 10 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_eighteen >= 11 )
   {
     var element = document.getElementById('eighteen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv11.png";
    
   }  
   

}

roweighteen_UV();
 

var uvi_nineteen;
async function rownineteen_UV(){
  uvi_url_nineteen = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Johannesburg&days=1'
    
//Pull data for Weather Info
  response_nineteen = await fetch (uvi_url_nineteen);
  data_nineteen = await response_nineteen.json();


// check to see if data is being pulled
console.log(data_nineteen)


//DAILY UV MAX VALUE
 const uvi_nineteen = data_nineteen.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_nineteen = data_nineteen.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_nineteen = data_nineteen.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_nineteen').textContent = uvi_nineteen;
   //Location name 
     document.getElementById('city_name_nineteen').textContent = city_name_nineteen;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_nineteen').textContent = country_name_nineteen;


 if (uvi_nineteen <=1 ) {
   // setting colour
   var element = document.getElementById('nineteen');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_nineteen == 2 )
   {
   // Adding row color
   var element = document.getElementById('nineteen');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_nineteen == 3 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_nineteen == 4 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_nineteen == 5 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_nineteen == 6 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_nineteen == 7 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_nineteen == 8 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_nineteen == 9 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_nineteen == 10 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_nineteen >= 11 )
   {
     var element = document.getElementById('nineteen');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv11.png";
    
   }  
   

}

rownineteen_UV();
 


var uvi_twenty;
async function rowtwenty_UV(){
  uvi_url_twenty = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Karachi&days=1'
    
//Pull data for Weather Info
  response_twenty = await fetch (uvi_url_twenty);
  data_twenty = await response_twenty.json();


// check to see if data is being pulled
console.log(data_twenty)


//DAILY UV MAX VALUE
 const uvi_twenty = data_twenty.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twenty = data_twenty.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twenty = data_twenty.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twenty').textContent = uvi_twenty;
   //Location name 
     document.getElementById('city_name_twenty').textContent = city_name_twenty;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twenty').textContent = country_name_twenty;


 if (uvi_twenty <=1 ) {
   // setting colour
   var element = document.getElementById('twenty');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twenty == 2 )
   {
   // Adding row color
   var element = document.getElementById('twenty');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twenty == 3 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twenty == 4 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twenty == 5 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twenty == 6 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twenty == 7 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twenty == 8 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twenty == 9 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twenty == 10 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twenty >= 11 )
   {
     var element = document.getElementById('twenty');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twenty").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwenty_UV();
 


var uvi_twentyone;
async function rowtwentyone_UV(){
  uvi_url_twentyone = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=lima_peru&days=1'
    
//Pull data for Weather Info
  response_twentyone = await fetch (uvi_url_twentyone);
  data_twentyone = await response_twentyone.json();


// check to see if data is being pulled
console.log(data_twentyone)


//DAILY UV MAX VALUE
 const uvi_twentyone = data_twentyone.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentyone = data_twentyone.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentyone = data_twentyone.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentyone').textContent = uvi_twentyone;
   //Location name 
     document.getElementById('city_name_twentyone').textContent = city_name_twentyone;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentyone').textContent = country_name_twentyone;


 if (uvi_twentyone <=1 ) {
   // setting colour
   var element = document.getElementById('twentyone');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentyone == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentyone');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentyone == 3 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentyone == 4 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentyone == 5 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentyone == 6 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentyone == 7 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentyone == 8 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentyone == 9 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentyone == 10 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentyone >= 11 )
   {
     var element = document.getElementById('twentyone');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentyone_UV();
 
 

  
  
var uvi_twentytwo;
async function rowtwentytwo_UV(){
  uvi_url_twentytwo = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=sydney_australia&days=1'
    
//Pull data for Weather Info
  response_twentytwo = await fetch (uvi_url_twentytwo);
  data_twentytwo = await response_twentytwo.json();


// check to see if data is being pulled
console.log(data_twentytwo)


//DAILY UV MAX VALUE
 const uvi_twentytwo = data_twentytwo.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentytwo = data_twentytwo.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentytwo = data_twentytwo.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentytwo').textContent = uvi_twentytwo;
   //Location name 
     document.getElementById('city_name_twentytwo').textContent = city_name_twentytwo;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentytwo').textContent = country_name_twentytwo;


 if (uvi_twentytwo <=1 ) {
   // setting colour
   var element = document.getElementById('twentytwo');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentytwo == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentytwo');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentytwo == 3 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentytwo == 4 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentytwo == 5 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentytwo == 6 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentytwo == 7 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentytwo == 8 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentytwo == 9 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentytwo == 10 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentytwo >= 11 )
   {
     var element = document.getElementById('twentytwo');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentytwo_UV();
 
 
//CANADIAN FORCAST TORONTO
var uvi_twentythree;
async function rowtwentythree_UV(){
  uvi_url_twentythree = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=toronto&days=1'
    
//Pull data for Weather Info
  response_twentythree = await fetch (uvi_url_twentythree);
  data_twentythree = await response_twentythree.json();


// check to see if data is being pulled
console.log(data_twentythree)


//DAILY UV MAX VALUE
 const uvi_twentythree = data_twentythree.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentythree = data_twentythree.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentythree = data_twentythree.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentythree').textContent = uvi_twentythree;
   //Location name 
     document.getElementById('city_name_twentythree').textContent = city_name_twentythree;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentythree').textContent = country_name_twentythree;


 if (uvi_twentythree <=1 ) {
   // setting colour
   var element = document.getElementById('twentythree');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentythree == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentythree');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentythree == 3 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentythree == 4 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentythree == 5 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentythree == 6 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentythree == 7 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentythree == 8 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentythree == 9 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentythree == 10 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentythree >= 11 )
   {
     var element = document.getElementById('twentythree');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentythree_UV();
 
 


var uvi_twentyfour;
async function rowtwentyfour_UV(){
  uvi_url_twentyfour = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=mexico_city&days=1'
    
//Pull data for Weather Info
  response_twentyfour = await fetch (uvi_url_twentyfour);
  data_twentyfour = await response_twentyfour.json();


// check to see if data is being pulled
console.log(data_twentyfour)


//DAILY UV MAX VALUE
 const uvi_twentyfour = data_twentyfour.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentyfour = data_twentyfour.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentyfour = data_twentyfour.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentyfour').textContent = uvi_twentyfour;
   //Location name 
     document.getElementById('city_name_twentyfour').textContent = city_name_twentyfour;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentyfour').textContent = country_name_twentyfour;


 if (uvi_twentyfour <=1 ) {
   // setting colour
   var element = document.getElementById('twentyfour');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentyfour == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentyfour');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentyfour == 3 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentyfour == 4 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentyfour == 5 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentyfour == 6 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentyfour == 7 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentyfour == 8 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentyfour == 9 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentyfour == 10 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentyfour >= 11 )
   {
     var element = document.getElementById('twentyfour');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentyfour_UV();
 
 


var uvi_twentyfive;
async function rowtwentyfive_UV(){
  uvi_url_twentyfive = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=lagos_nigeria&days=1'
    
//Pull data for Weather Info
  response_twentyfive = await fetch (uvi_url_twentyfive);
  data_twentyfive = await response_twentyfive.json();


// check to see if data is being pulled
console.log(data_twentyfive)


//DAILY UV MAX VALUE
 const uvi_twentyfive = data_twentyfive.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentyfive = data_twentyfive.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentyfive = data_twentyfive.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentyfive').textContent = uvi_twentyfive;
   //Location name 
     document.getElementById('city_name_twentyfive').textContent = city_name_twentyfive;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentyfive').textContent = country_name_twentyfive;


 if (uvi_twentyfive <=1 ) {
   // setting colour
   var element = document.getElementById('twentyfive');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentyfive == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentyfive');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentyfive == 3 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentyfive == 4 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentyfive == 5 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentyfive == 6 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentyfive == 7 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentyfive == 8 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentyfive == 9 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentyfive == 10 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentyfive >= 11 )
   {
     var element = document.getElementById('twentyfive');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentyfive_UV();
 
 
 
var uvi_twentysix;
async function rowtwentysix_UV(){
  uvi_url_twentysix = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=new_york&days=1'
    
//Pull data for Weather Info
  response_twentysix = await fetch (uvi_url_twentysix);
  data_twentysix = await response_twentysix.json();


// check to see if data is being pulled
console.log(data_twentysix)


//DAILY UV MAX VALUE
 const uvi_twentysix = data_twentysix.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentysix = data_twentysix.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentysix = data_twentysix.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentysix').textContent = uvi_twentysix;
   //Location name 
     document.getElementById('city_name_twentysix').textContent = city_name_twentysix;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentysix').textContent = country_name_twentysix;


 if (uvi_twentysix <=1 ) {
   // setting colour
   var element = document.getElementById('twentysix');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentysix == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentysix');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentysix == 3 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentysix == 4 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentysix == 5 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentysix == 6 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentysix == 7 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentysix == 8 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentysix == 9 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentysix == 10 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentysix >= 11 )
   {
     var element = document.getElementById('twentysix');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentysix_UV();
 
 
 

var uvi_twentyseven;
async function rowtwentyseven_UV(){
  uvi_url_twentyseven = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Pokhara&days=1'
    
//Pull data for Weather Info
  response_twentyseven = await fetch (uvi_url_twentyseven);
  data_twentyseven = await response_twentyseven.json();


// check to see if data is being pulled
console.log(data_twentyseven)


//DAILY UV MAX VALUE
 const uvi_twentyseven = data_twentyseven.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentyseven = data_twentyseven.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentyseven = data_twentyseven.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentyseven').textContent = uvi_twentyseven;
   //Location name 
     document.getElementById('city_name_twentyseven').textContent = city_name_twentyseven;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentyseven').textContent = country_name_twentyseven;


 if (uvi_twentyseven <=1 ) {
   // setting colour
   var element = document.getElementById('twentyseven');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentyseven == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentyseven');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentyseven == 3 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentyseven == 4 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentyseven == 5 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentyseven == 6 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentyseven == 7 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentyseven == 8 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentyseven == 9 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentyseven == 10 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentyseven >= 11 )
   {
     var element = document.getElementById('twentyseven');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentyseven_UV();
 
 
 
 

var uvi_twentyeight;
async function rowtwentyeight_UV(){
  uvi_url_twentyeight = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Asmara&days=1'
    
//Pull data for Weather Info
  response_twentyeight = await fetch (uvi_url_twentyeight);
  data_twentyeight = await response_twentyeight.json();


// check to see if data is being pulled
console.log(data_twentyeight)


//DAILY UV MAX VALUE
 const uvi_twentyeight = data_twentyeight.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentyeight = data_twentyeight.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentyeight = data_twentyeight.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentyeight').textContent = uvi_twentyeight;
   //Location name 
     document.getElementById('city_name_twentyeight').textContent = city_name_twentyeight;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentyeight').textContent = country_name_twentyeight;


 if (uvi_twentyeight <=1 ) {
   // setting colour
   var element = document.getElementById('twentyeight');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentyeight == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentyeight');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentyeight == 3 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentyeight == 4 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentyeight == 5 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentyeight == 6 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentyeight == 7 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentyeight == 8 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentyeight == 9 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentyeight == 10 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentyeight >= 11 )
   {
     var element = document.getElementById('twentyeight');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentyeight_UV();
 
 
 
var uvi_twentynine;
async function rowtwentynine_UV(){
  uvi_url_twentynine = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=berlin&days=1'
    
//Pull data for Weather Info
  response_twentynine = await fetch (uvi_url_twentynine);
  data_twentynine = await response_twentynine.json();


// check to see if data is being pulled
console.log(data_twentynine)


//DAILY UV MAX VALUE
 const uvi_twentynine = data_twentynine.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_twentynine = data_twentynine.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_twentynine = data_twentynine.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_twentynine').textContent = uvi_twentynine;
   //Location name 
     document.getElementById('city_name_twentynine').textContent = city_name_twentynine;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_twentynine').textContent = country_name_twentynine;


 if (uvi_twentynine <=1 ) {
   // setting colour
   var element = document.getElementById('twentynine');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_twentynine == 2 )
   {
   // Adding row color
   var element = document.getElementById('twentynine');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_twentynine == 3 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_twentynine == 4 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_twentynine == 5 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_twentynine == 6 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_twentynine == 7 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_twentynine == 8 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_twentynine == 9 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_twentynine == 10 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_twentynine >= 11 )
   {
     var element = document.getElementById('twentynine');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv11.png";
    
   }  
   

}

rowtwentynine_UV();
 
 


var uvi_thirty;
async function rowthirty_UV(){
  uvi_url_thirty = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=accra&days=1'
    
//Pull data for Weather Info
  response_thirty = await fetch (uvi_url_thirty);
  data_thirty = await response_thirty.json();


// check to see if data is being pulled
console.log(data_thirty)


//DAILY UV MAX VALUE
 const uvi_thirty = data_thirty.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirty = data_thirty.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirty = data_thirty.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirty').textContent = uvi_thirty;
   //Location name 
     document.getElementById('city_name_thirty').textContent = city_name_thirty;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirty').textContent = country_name_thirty;


 if (uvi_thirty <=1 ) {
   // setting colour
   var element = document.getElementById('thirty');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirty == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirty');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirty == 3 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirty == 4 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirty == 5 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirty == 6 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirty == 7 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirty == 8 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirty == 9 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirty == 10 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirty >= 11 )
   {
     var element = document.getElementById('thirty');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirty").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirty_UV();
 


var uvi_thirtyone;
async function rowthirtyone_UV(){
  uvi_url_thirtyone = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Amsterdam&days=1'
    
//Pull data for Weather Info
  response_thirtyone = await fetch (uvi_url_thirtyone);
  data_thirtyone = await response_thirtyone.json();


// check to see if data is being pulled
console.log(data_thirtyone)


//DAILY UV MAX VALUE
 const uvi_thirtyone = data_thirtyone.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtyone = data_thirtyone.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtyone = data_thirtyone.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtyone').textContent = uvi_thirtyone;
   //Location name 
     document.getElementById('city_name_thirtyone').textContent = city_name_thirtyone;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtyone').textContent = country_name_thirtyone;


 if (uvi_thirtyone <=1 ) {
   // setting colour
   var element = document.getElementById('thirtyone');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtyone == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtyone');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtyone == 3 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtyone == 4 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtyone == 5 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtyone == 6 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtyone == 7 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtyone == 8 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtyone == 9 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtyone == 10 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtyone >= 11 )
   {
     var element = document.getElementById('thirtyone');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtyone_UV();
 


var uvi_thirtytwo;
async function rowthirtytwo_UV(){
  uvi_url_thirtytwo = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=47.56494,-52.70931&days=1'
    
//Pull data for Weather Info
  response_thirtytwo = await fetch (uvi_url_thirtytwo);
  data_thirtytwo = await response_thirtytwo.json();


// check to see if data is being pulled
console.log(data_thirtytwo)


//DAILY UV MAX VALUE
 const uvi_thirtytwo = data_thirtytwo.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtytwo = data_thirtytwo.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtytwo = data_thirtytwo.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtytwo').textContent = uvi_thirtytwo;
   //Location name 
     document.getElementById('city_name_thirtytwo').textContent = city_name_thirtytwo;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtytwo').textContent = country_name_thirtytwo;


 if (uvi_thirtytwo <=1 ) {
   // setting colour
   var element = document.getElementById('thirtytwo');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtytwo == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtytwo');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtytwo == 3 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtytwo == 4 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtytwo == 5 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtytwo == 6 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtytwo == 7 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtytwo == 8 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtytwo == 9 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtytwo == 10 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtytwo >= 11 )
   {
     var element = document.getElementById('thirtytwo');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtytwo_UV();
 
 

var uvi_thirtythree;
async function rowthirtythree_UV(){
  uvi_url_thirtythree = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=calgary&days=1'
    
//Pull data for Weather Info
  response_thirtythree = await fetch (uvi_url_thirtythree);
  data_thirtythree = await response_thirtythree.json();


// check to see if data is being pulled
console.log(data_thirtythree)


//DAILY UV MAX VALUE
 const uvi_thirtythree = data_thirtythree.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtythree = data_thirtythree.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtythree = data_thirtythree.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtythree').textContent = uvi_thirtythree;
   //Location name 
     document.getElementById('city_name_thirtythree').textContent = city_name_thirtythree;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtythree').textContent = country_name_thirtythree;


 if (uvi_thirtythree <=1 ) {
   // setting colour
   var element = document.getElementById('thirtythree');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtythree == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtythree');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtythree == 3 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtythree == 4 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtythree == 5 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtythree == 6 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtythree == 7 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtythree == 8 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtythree == 9 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtythree == 10 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtythree >= 11 )
   {
     var element = document.getElementById('thirtythree');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtythree_UV();
 
 
 

var uvi_thirtyfour;
async function rowthirtyfour_UV(){
  uvi_url_thirtyfour = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=yellowknife&days=1'
    
//Pull data for Weather Info
  response_thirtyfour = await fetch (uvi_url_thirtyfour);
  data_thirtyfour = await response_thirtyfour.json();


// check to see if data is being pulled
console.log(data_thirtyfour)


//DAILY UV MAX VALUE
 const uvi_thirtyfour = data_thirtyfour.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtyfour = data_thirtyfour.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtyfour = data_thirtyfour.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtyfour').textContent = uvi_thirtyfour;
   //Location name 
     document.getElementById('city_name_thirtyfour').textContent = city_name_thirtyfour;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtyfour').textContent = country_name_thirtyfour;


 if (uvi_thirtyfour <=1 ) {
   // setting colour
   var element = document.getElementById('thirtyfour');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtyfour == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtyfour');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtyfour == 3 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtyfour == 4 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtyfour == 5 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtyfour == 6 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtyfour == 7 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtyfour == 8 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtyfour == 9 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtyfour == 10 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtyfour >= 11 )
   {
     var element = document.getElementById('thirtyfour');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtyfour_UV();
 
 
 

  

var uvi_thirtyfive;
async function rowthirtyfive_UV(){
  uvi_url_thirtyfive = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Saskatoon&days=1'
    
//Pull data for Weather Info
  response_thirtyfive = await fetch (uvi_url_thirtyfive);
  data_thirtyfive = await response_thirtyfive.json();


// check to see if data is being pulled
console.log(data_thirtyfive)


//DAILY UV MAX VALUE
 const uvi_thirtyfive = data_thirtyfive.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtyfive = data_thirtyfive.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtyfive = data_thirtyfive.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtyfive').textContent = uvi_thirtyfive;
   //Location name 
     document.getElementById('city_name_thirtyfive').textContent = city_name_thirtyfive;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtyfive').textContent = country_name_thirtyfive;


 if (uvi_thirtyfive <=1 ) {
   // setting colour
   var element = document.getElementById('thirtyfive');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtyfive == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtyfive');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtyfive == 3 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtyfive == 4 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtyfive == 5 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtyfive == 6 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtyfive == 7 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtyfive == 8 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtyfive == 9 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtyfive == 10 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtyfive >= 11 )
   {
     var element = document.getElementById('thirtyfive');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtyfive_UV();
 
 
 

var uvi_thirtysix;
async function rowthirtysix_UV(){
  uvi_url_thirtysix = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Iqaluit&days=1'
    
//Pull data for Weather Info
  response_thirtysix = await fetch (uvi_url_thirtysix);
  data_thirtysix = await response_thirtysix.json();


// check to see if data is being pulled
console.log(data_thirtysix)


//DAILY UV MAX VALUE
 const uvi_thirtysix = data_thirtysix.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtysix = data_thirtysix.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtysix = data_thirtysix.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtysix').textContent = uvi_thirtysix;
   //Location name 
     document.getElementById('city_name_thirtysix').textContent = city_name_thirtysix;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtysix').textContent = country_name_thirtysix;


 if (uvi_thirtysix <=1 ) {
   // setting colour
   var element = document.getElementById('thirtysix');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtysix == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtysix');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtysix == 3 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtysix == 4 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtysix == 5 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtysix == 6 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtysix == 7 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtysix == 8 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtysix == 9 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtysix == 10 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtysix >= 11 )
   {
     var element = document.getElementById('thirtysix');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtysix_UV();
 
 
var uvi_thirtyeight;
async function rowthirtyeight_UV(){
  uvi_url_thirtyeight = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=Charlottetown&days=1'
    
//Pull data for Weather Info
  response_thirtyeight = await fetch (uvi_url_thirtyeight);
  data_thirtyeight = await response_thirtyeight.json();


// check to see if data is being pulled
console.log(data_thirtyeight)


//DAILY UV MAX VALUE
 const uvi_thirtyeight = data_thirtyeight.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtyeight = data_thirtyeight.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtyeight = data_thirtyeight.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtyeight').textContent = uvi_thirtyeight;
   //Location name 
     document.getElementById('city_name_thirtyeight').textContent = city_name_thirtyeight;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtyeight').textContent = country_name_thirtyeight;


 if (uvi_thirtyeight <=1 ) {
   // setting colour
   var element = document.getElementById('thirtyeight');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtyeight == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtyeight');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtyeight == 3 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtyeight == 4 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtyeight == 5 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtyeight == 6 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtyeight == 7 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtyeight == 8 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtyeight == 9 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtyeight == 10 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtyeight >= 11 )
   {
     var element = document.getElementById('thirtyeight');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtyeight_UV();
 
 
var uvi_thirtynine;
async function rowthirtynine_UV(){
  uvi_url_thirtynine = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=vancouver&days=1'
    
//Pull data for Weather Info
  response_thirtynine = await fetch (uvi_url_thirtynine);
  data_thirtynine = await response_thirtynine.json();


// check to see if data is being pulled
console.log(data_thirtynine)


//DAILY UV MAX VALUE
 const uvi_thirtynine = data_thirtynine.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_thirtynine = data_thirtynine.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_thirtynine = data_thirtynine.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_thirtynine').textContent = uvi_thirtynine;
   //Location name 
     document.getElementById('city_name_thirtynine').textContent = city_name_thirtynine;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_thirtynine').textContent = country_name_thirtynine;


 if (uvi_thirtynine <=1 ) {
   // setting colour
   var element = document.getElementById('thirtynine');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_thirtynine == 2 )
   {
   // Adding row color
   var element = document.getElementById('thirtynine');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_thirtynine == 3 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_thirtynine == 4 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_thirtynine == 5 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_thirtynine == 6 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_thirtynine == 7 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_thirtynine == 8 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_thirtynine == 9 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_thirtynine == 10 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_thirtynine >= 11 )
   {
     var element = document.getElementById('thirtynine');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv11.png";
    
   }  
   

}

rowthirtynine_UV();
 
 
var uvi_forty;
async function rowforty_UV(){
  uvi_url_forty = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=60.71611,-135.05375&days=1'
    
//Pull data for Weather Info
  response_forty = await fetch (uvi_url_forty);
  data_forty = await response_forty.json();


// check to see if data is being pulled
console.log(data_forty)


//DAILY UV MAX VALUE
 const uvi_forty = data_forty.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_forty = data_forty.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_forty = data_forty.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_forty').textContent = uvi_forty;
   //Location name 
     document.getElementById('city_name_forty').textContent = city_name_forty;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_forty').textContent = country_name_forty;


 if (uvi_forty <=1 ) {
   // setting colour
   var element = document.getElementById('forty');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_forty == 2 )
   {
   // Adding row color
   var element = document.getElementById('forty');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_forty == 3 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_forty == 4 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_forty == 5 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_forty == 6 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_forty == 7 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_forty == 8 )
   {
     var element = document.getElementById('forty');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_forty == 9 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_forty == 10 )
   {
     var element = document.getElementById('forty');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_forty >= 11 )
   {
     var element = document.getElementById('forty');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_forty").src="../uv-icons/uv11.png";
    
   }  
   

}

rowforty_UV();
 
 
  
var uvi_fortyone;
async function rowfortyone_UV(){
  uvi_url_fortyone = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=winnipeg&days=1'
    
//Pull data for Weather Info
  response_fortyone = await fetch (uvi_url_fortyone);
  data_fortyone = await response_fortyone.json();


// check to see if data is being pulled
console.log(data_fortyone)


//DAILY UV MAX VALUE
 const uvi_fortyone = data_fortyone.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_fortyone = data_fortyone.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_fortyone = data_fortyone.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_fortyone').textContent = uvi_fortyone;
   //Location name 
     document.getElementById('city_name_fortyone').textContent = city_name_fortyone;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_fortyone').textContent = country_name_fortyone;


 if (uvi_fortyone <=1 ) {
   // setting colour
   var element = document.getElementById('fortyone');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_fortyone == 2 )
   {
   // Adding row color
   var element = document.getElementById('fortyone');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_fortyone == 3 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_fortyone == 4 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_fortyone == 5 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_fortyone == 6 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_fortyone == 7 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_fortyone == 8 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_fortyone == 9 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_fortyone == 10 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_fortyone >= 11 )
   {
     var element = document.getElementById('fortyone');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfortyone_UV();
 
 
 
var uvi_fortytwo;
async function rowfortytwo_UV(){
  uvi_url_fortytwo = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=moncton_New_Brunswick&days=1'
    
//Pull data for Weather Info
  response_fortytwo = await fetch (uvi_url_fortytwo);
  data_fortytwo = await response_fortytwo.json();


// check to see if data is being pulled
console.log(data_fortytwo)


//DAILY UV MAX VALUE
 const uvi_fortytwo = data_fortytwo.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_fortytwo = data_fortytwo.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_fortytwo = data_fortytwo.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_fortytwo').textContent = uvi_fortytwo;
   //Location name 
     document.getElementById('city_name_fortytwo').textContent = city_name_fortytwo;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_fortytwo').textContent = country_name_fortytwo;


 if (uvi_fortytwo <=1 ) {
   // setting colour
   var element = document.getElementById('fortytwo');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_fortytwo == 2 )
   {
   // Adding row color
   var element = document.getElementById('fortytwo');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_fortytwo == 3 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_fortytwo == 4 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_fortytwo == 5 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_fortytwo == 6 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_fortytwo == 7 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_fortytwo == 8 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_fortytwo == 9 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_fortytwo == 10 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_fortytwo >= 11 )
   {
     var element = document.getElementById('fortytwo');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfortytwo_UV();
 
 
var uvi_fortythree;
async function rowfortythree_UV(){
  uvi_url_fortythree = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=halifax&days=1'
    
//Pull data for Weather Info
  response_fortythree = await fetch (uvi_url_fortythree);
  data_fortythree = await response_fortythree.json();


// check to see if data is being pulled
console.log(data_fortythree)


//DAILY UV MAX VALUE
 const uvi_fortythree = data_fortythree.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_fortythree = data_fortythree.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_fortythree = data_fortythree.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_fortythree').textContent = uvi_fortythree;
   //Location name 
     document.getElementById('city_name_fortythree').textContent = city_name_fortythree;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_fortythree').textContent = country_name_fortythree;


 if (uvi_fortythree <=1 ) {
   // setting colour
   var element = document.getElementById('fortythree');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_fortythree == 2 )
   {
   // Adding row color
   var element = document.getElementById('fortythree');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_fortythree == 3 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_fortythree == 4 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_fortythree == 5 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_fortythree == 6 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_fortythree == 7 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_fortythree == 8 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_fortythree == 9 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_fortythree == 10 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_fortythree >= 11 )
   {
     var element = document.getElementById('fortythree');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfortythree_UV();
 
 
 
var uvi_fortyfour;
async function rowfortyfour_UV(){
  uvi_url_fortyfour = 'https://api.weatherapi.com/v1/forecast.json?key=326a2ebd97a64436aca145753222905&q=montreal&days=1'
    
//Pull data for Weather Info
  response_fortyfour = await fetch (uvi_url_fortyfour);
  data_fortyfour = await response_fortyfour.json();


// check to see if data is being pulled
console.log(data_fortyfour)


//DAILY UV MAX VALUE
 const uvi_fortyfour = data_fortyfour.forecast.forecastday[0].day.uv;
 
 
 //LOCATION INFO VALUE
const city_name_fortyfour = data_fortyfour.location.name;
 //COUNTRY NAME  VALUE IF NEEDED
 const country_name_fortyfour = data_fortyfour.location.country;

// **** DISPLAYING ON HTML *****
   //UVI
     document.getElementById('uvi_fortyfour').textContent = uvi_fortyfour;
   //Location name 
     document.getElementById('city_name_fortyfour').textContent = city_name_fortyfour;

 //COUNTRY NAME IF NEEDED
 document.getElementById('country_name_fortyfour').textContent = country_name_fortyfour;


 if (uvi_fortyfour <=1 ) {
   // setting colour
   var element = document.getElementById('fortyfour');
   element.classList.add("levelone");
   // setting icon
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv1.png";
   // Add advice



   }
   else if (uvi_fortyfour == 2 )
   {
   // Adding row color
   var element = document.getElementById('fortyfour');
   element.classList.add("leveltwo");
   // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv2.png";
   
   
   }  
else if (uvi_fortyfour == 3 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelthree");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv3.png";
     
   }  
   else if (uvi_fortyfour == 4 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelfour");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv4.png";

  
   }  
   else if (uvi_fortyfour == 5 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelfive");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv5.png";
  
   }  
   else if (uvi_fortyfour == 6 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelsix");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv6.png";
  
   }  
   else if (uvi_fortyfour == 7 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelseven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv7.png";
   
   }  
   else if (uvi_fortyfour == 8 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("leveleight");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv8.png";
  
   }  
   else if (uvi_fortyfour == 9 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelnine");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv9.png";
  
   }  
   else if (uvi_fortyfour == 10 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("levelten");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv10.png";
    
   }  
   else if (uvi_fortyfour >= 11 )
   {
     var element = document.getElementById('fortyfour');
     element.classList.add("leveleleven");
    
      // setting icon 
   document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv11.png";
    
   }  
   

}

rowfortyfour_UV();
 
 
  
 
  
  
  