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



  var uvi_round_one;
  function rowOne_UV() {
   
    $.ajax({
      type: 'GET',
      dataType: 'json',
      beforeSend: function(request) {
        request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
      },
      url: 'https://api.openuv.io/api/v1/uv?lat=48.85341&lng=2.3488',
      success: function(response) {
        //handle successful response
        $.each(response, function(i, result){
        

          uvi_round_one = Math.floor(result.uv_max);
        
        })
        //passing to other function.
        rowOne(uvi_round_one);
        console.log(response)
      },
      error: function(response) {
        // handle error response
        console.log('error', response);
      }
    });

   
    
}

rowOne_UV();

async function rowOne(uvi_round_one){
 
   location_name_one = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=48.85341&lng=2.3488&username=skinnyreggae'
 

   //Pull data for location info
   localresponse_one = await fetch(location_name_one);
   localdata_one = await localresponse_one.json();
 // check to see if data is being pulled 

 //Pull data for Weather Info
  // response_one = await fetch (uvi_url_one);
  // data_one = await response_one.json();
 
     
 
       // exact uvi value
    //  const uvi_one = data_one.daily[1].uvi;
       

 
 // getting exact location information 
     country_name_one = localdata_one.geonames[0].countryName;
     city_name_one = localdata_one.geonames[0].name;

    //UVI
      document.getElementById('uvi_one').textContent = uvi_round_one;
     //Location name 
     document.getElementById('city_name_one').textContent = city_name_one;
     document.getElementById('country_name_one').textContent = country_name_one;
 
 
 
     if (uvi_round_one <=1 ) {
       // setting colour
       var element = document.getElementById('one');
       element.classList.add("levelone");
       // setting icon
       document.getElementById("uvi_icon_one").src="../uv-icons/uv1.png";
       // Add advice
    
   
   
       }
       else if (uvi_round_one == 2 )
       {
       // Adding row color
       var element = document.getElementById('one');
       element.classList.add("leveltwo");
       // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv2.png";
       
       
       }  
   else if (uvi_round_one == 3 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelthree");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv3.png";
         
       }  
       else if (uvi_round_one == 4 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelfour");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv4.png";
   
      
       }  
       else if (uvi_round_one == 5 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelfive");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv5.png";
      
       }  
       else if (uvi_round_one == 6 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelsix");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv6.png";
      
       }  
       else if (uvi_round_one == 7 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelseven");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv7.png";
       
       }  
       else if (uvi_round_one == 8 )
       {
         var element = document.getElementById('one');
         element.classList.add("leveleight");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv8.png";
      
       }  
       else if (uvi_round_one == 9 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelnine");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv9.png";
      
       }  
       else if (uvi_round_one == 10 )
       {
         var element = document.getElementById('one');
         element.classList.add("levelten");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv10.png";
        
       }  
       else if (uvi_round_one >= 11 )
       {
         var element = document.getElementById('one');
         element.classList.add("leveleleven");
        
          // setting icon 
       document.getElementById("uvi_icon_one").src="../uv-icons/uv11.png";
        
       }  
       
 
 }
 rowOne();
  

 var uvi_round_two;
 function rowtwo_UV() {
  
   $.ajax({
     type: 'GET',
     dataType: 'json',
     beforeSend: function(request) {
       request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
     },
     url: 'https://api.openuv.io/api/v1/uv?lat=43.77925&lng=11.24626',
     success: function(response) {
       //handle successful response
       $.each(response, function(i, result){
        

         uvi_round_two = Math.floor(result.uv_max);
         
         console.log(uvi_round_two);
       })
       //passing to other function.
       rowTwo(uvi_round_two);
       console.log(response)
     },
     error: function(response) {
       // handle error response
       console.log('error', response);
     }
   });

  console.log(uvi_round_two);
   
}

rowtwo_UV();

async function rowTwo(uvi_round_two){

  location_name_two = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=43.779251&lng=11.24626&username=skinnyreggae'

console.log(uvi_round_two)
  //Pull data for location info
  localresponse_two = await fetch(location_name_two);
  localdata_two = await localresponse_two.json();
// check to see if data is being pulled 

//Pull data for Weather Info
 // response_two = await fetch (uvi_url_two);
 // data_two = await response_two.json();

    

      // exact uvi value
   //  const uvi_two = data_two.daily[1].uvi;
      


// getting exact location information 
    country_name_two = localdata_two.geonames[0].countryName;
    city_name_two = localdata_two.geonames[0].name;

   //UVI
     document.getElementById('uvi_two').textContent = uvi_round_two;
    //Location name 
    document.getElementById('city_name_two').textContent = city_name_two;
    document.getElementById('country_name_two').textContent = country_name_two;



    if (uvi_round_two <=1 ) {
      // setting colour
      var element = document.getElementById('two');
      element.classList.add("levelone");
      // setting icon
      document.getElementById("uvi_icon_two").src="../uv-icons/uv1.png";
      // Add advice
   
  
  
      }
      else if (uvi_round_two == 2 )
      {
      // Adding row color
      var element = document.getElementById('two');
      element.classList.add("leveltwo");
      // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv2.png";
      
      
      }  
  else if (uvi_round_two == 3 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelthree");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv3.png";
        
      }  
      else if (uvi_round_two == 4 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelfour");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv4.png";
  
     
      }  
      else if (uvi_round_two == 5 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelfive");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv5.png";
     
      }  
      else if (uvi_round_two == 6 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelsix");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv6.png";
     
      }  
      else if (uvi_round_two == 7 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelseven");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv7.png";
      
      }  
      else if (uvi_round_two == 8 )
      {
        var element = document.getElementById('two');
        element.classList.add("leveleight");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv8.png";
     
      }  
      else if (uvi_round_two == 9 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelnine");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv9.png";
     
      }  
      else if (uvi_round_two == 10 )
      {
        var element = document.getElementById('two');
        element.classList.add("levelten");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv10.png";
       
      }  
      else if (uvi_round_two >= 11 )
      {
        var element = document.getElementById('two');
        element.classList.add("leveleleven");
       
         // setting icon 
      document.getElementById("uvi_icon_two").src="../uv-icons/uv11.png";
       
      }  
      

}
rowTwo();
 

var uvi_round_three;
function rowthree_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=35.6895&lng=139.69171',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_three = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthree(uvi_round_three);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_three);
  
}

rowthree_UV();

async function rowthree(uvi_round_three){

 location_name_three = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=35.6895&lng=139.69171&username=skinnyreggae'


 //Pull data for location info
 localresponse_three = await fetch(location_name_three);
 localdata_three = await localresponse_three.json();


// getting exact location information 
   country_name_three = localdata_three.geonames[0].countryName;
   city_name_three = localdata_three.geonames[0].name;

  //UVI
    document.getElementById('uvi_three').textContent = uvi_round_three;
   //Location name 
   document.getElementById('city_name_three').textContent = city_name_three;
   document.getElementById('country_name_three').textContent = country_name_three;



   if (uvi_round_three <=1 ) {
     // setting colour
     var element = document.getElementById('three');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_three").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_three == 2 )
     {
     // Adding row color
     var element = document.getElementById('three');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_three == 3 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_three == 4 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_three == 5 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_three == 6 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_three == 7 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_three == 8 )
     {
       var element = document.getElementById('three');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_three == 9 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_three == 10 )
     {
       var element = document.getElementById('three');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_three >= 11 )
     {
       var element = document.getElementById('three');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_three").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthree();


var uvi_round_four;
function rowfour_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=31.63416&lng=-7.99994',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        console.log(result.uv_max)

        uvi_round_four = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfour(uvi_round_four);
      console.log(uvi_round_four);
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_four);
  
}

rowfour_UV();

async function rowfour(uvi_round_four){

 location_name_four = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=31.63416&lng=-7.99994&username=skinnyreggae'


 //Pull data for location info
 localresponse_four = await fetch(location_name_four);
 localdata_four = await localresponse_four.json();

 console.log(uvi_round_four);
// getting exact location information 
   country_name_four = localdata_four.geonames[0].countryName;
   city_name_four = localdata_four.geonames[0].name;

  //UVI
    document.getElementById('uvi_four').textContent = uvi_round_four;
   //Location name 
   document.getElementById('city_name_four').textContent = city_name_four;
   document.getElementById('country_name_four').textContent = country_name_four;



   if (uvi_round_four <=1 ) {
     // setting colour
     var element = document.getElementById('four');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_four").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_four == 2 )
     {
     // Adding row color
     var element = document.getElementById('four');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_four == 3 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_four == 4 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_four == 5 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_four == 6 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_four == 7 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_four == 8 )
     {
       var element = document.getElementById('four');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_four == 9 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_four == 10 )
     {
       var element = document.getElementById('four');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_four >= 11 )
     {
       var element = document.getElementById('four');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_four").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfour();
  

var uvi_round_five;
function rowfive_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=28.63576&lng=77.22445',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        console.log(result.uv_max)

        uvi_round_five = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfive(uvi_round_five);
      console.log(uvi_round_five);
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_five);
  
}

rowfive_UV();

async function rowfive(uvi_round_five){

 location_name_five = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=28.63576&lng=77.22445&username=skinnyreggae'


 //Pull data for location info
 localresponse_five = await fetch(location_name_five);
 localdata_five = await localresponse_five.json();

 console.log(uvi_round_five);
// getting exact location information 
   country_name_five = localdata_five.geonames[0].countryName;
   city_name_five = localdata_five.geonames[0].name;

  //UVI
    document.getElementById('uvi_five').textContent = uvi_round_five;
   //Location name 
   document.getElementById('city_name_five').textContent = city_name_five;
   document.getElementById('country_name_five').textContent = country_name_five;



   if (uvi_round_five <=1 ) {
     // setting colour
     var element = document.getElementById('five');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_five").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_five == 2 )
     {
     // Adding row color
     var element = document.getElementById('five');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_five == 3 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_five == 4 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_five == 5 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_five == 6 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_five == 7 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_five == 8 )
     {
       var element = document.getElementById('five');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_five == 9 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_five == 10 )
     {
       var element = document.getElementById('five');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_five >= 11 )
     {
       var element = document.getElementById('five');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_five").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfive();
 

var uvi_round_six;
function rowsix_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=24.14437&lng=-110.3005',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_six = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowsix(uvi_round_six);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_six);
  
}

rowsix_UV();

async function rowsix(uvi_round_six){

 location_name_six = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=24.14437&lng=-110.3005&username=skinnyreggae'


 //Pull data for location info
 localresponse_six = await fetch(location_name_six);
 localdata_six = await localresponse_six.json();


// getting exact location information 
   country_name_six = localdata_six.geonames[0].countryName;
   city_name_six = localdata_six.geonames[0].name;

  //UVI
    document.getElementById('uvi_six').textContent = uvi_round_six;
   //Location name 
   document.getElementById('city_name_six').textContent = city_name_six;
   document.getElementById('country_name_six').textContent = country_name_six;



   if (uvi_round_six <=1 ) {
     // setting colour
     var element = document.getElementById('six');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_six").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_six == 2 )
     {
     // Adding row color
     var element = document.getElementById('six');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_six == 3 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_six == 4 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_six == 5 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_six == 6 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_six == 7 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_six == 8 )
     {
       var element = document.getElementById('six');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_six == 9 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_six == 10 )
     {
       var element = document.getElementById('six');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_six >= 11 )
     {
       var element = document.getElementById('six');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_six").src="../uv-icons/uv11.png";
      
     }  
     

}
rowsix();


var uvi_round_seven;
function rowseven_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=17.99702&lng=-76.79358',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_seven = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowseven(uvi_round_seven);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_seven);
  
}

rowseven_UV();

async function rowseven(uvi_round_seven){

 location_name_seven = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=17.99702&lng=-76.79358&username=skinnyreggae'


 //Pull data for location info
 localresponse_seven = await fetch(location_name_seven);
 localdata_seven = await localresponse_seven.json();


// getting exact location information 
   country_name_seven = localdata_seven.geonames[0].countryName;
   city_name_seven = localdata_seven.geonames[0].name;

  //UVI
    document.getElementById('uvi_seven').textContent = uvi_round_seven;
   //Location name 
   document.getElementById('city_name_seven').textContent = city_name_seven;
   document.getElementById('country_name_seven').textContent = country_name_seven;



   if (uvi_round_seven <=1 ) {
     // setting colour
     var element = document.getElementById('seven');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_seven == 2 )
     {
     // Adding row color
     var element = document.getElementById('seven');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_seven == 3 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_seven == 4 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_seven == 5 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_seven == 6 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_seven == 7 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_seven == 8 )
     {
       var element = document.getElementById('seven');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_seven == 9 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_seven == 10 )
     {
       var element = document.getElementById('seven');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_seven >= 11 )
     {
       var element = document.getElementById('seven');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_seven").src="../uv-icons/uv11.png";
      
     }  
     

}
rowseven();


var uvi_round_eight;
function roweight_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=14.6042&lng=120.9822',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_eight = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      roweight(uvi_round_eight);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_eight);
  
}

roweight_UV();

async function roweight(uvi_round_eight){

 location_name_eight = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=14.6042&lng=120.9822&username=skinnyreggae'


 //Pull data for location info
 localresponse_eight = await fetch(location_name_eight);
 localdata_eight = await localresponse_eight.json();


// getting exact location information 
   country_name_eight = localdata_eight.geonames[0].countryName;
   city_name_eight = localdata_eight.geonames[0].name;

  //UVI
    document.getElementById('uvi_eight').textContent = uvi_round_eight;
   //Location name 
   document.getElementById('city_name_eight').textContent = city_name_eight;
   document.getElementById('country_name_eight').textContent = country_name_eight;



   if (uvi_round_eight <=1 ) {
     // setting colour
     var element = document.getElementById('eight');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_eight == 2 )
     {
     // Adding row color
     var element = document.getElementById('eight');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_eight == 3 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_eight == 4 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_eight == 5 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_eight == 6 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_eight == 7 )
     {
       var element = document.getElementById('eight');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_eight == 8 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_eight == 9 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_eight == 10 )
     {
       var element = document.getElementById('eight');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_eight >= 11 )
     {
       var element = document.getElementById('eight');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_eight").src="../uv-icons/uv11.png";
      
     }  
     

}
roweight();


var uvi_round_nine;
function rownine_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=6.8334&lng=80.9853',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_nine = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rownine(uvi_round_nine);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_nine);
  
}

rownine_UV();

async function rownine(uvi_round_nine){

 location_name_nine = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=6.8334&lng=80.9853&username=skinnyreggae'


 //Pull data for location info
 localresponse_nine = await fetch(location_name_nine);
 localdata_nine = await localresponse_nine.json();


// getting exact location information 
   country_name_nine = localdata_nine.geonames[0].countryName;
   city_name_nine = localdata_nine.geonames[0].name;

  //UVI
    document.getElementById('uvi_nine').textContent = uvi_round_nine;
   //Location name 
   document.getElementById('city_name_nine').textContent = city_name_nine;
   document.getElementById('country_name_nine').textContent = country_name_nine;



   if (uvi_round_nine <=1 ) {
     // setting colour
     var element = document.getElementById('nine');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_nine == 2 )
     {
     // Adding row color
     var element = document.getElementById('nine');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_nine == 3 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_nine == 4 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_nine == 5 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_nine == 6 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_nine == 7 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_nine == 8 )
     {
       var element = document.getElementById('nine');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_nine == 9 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_nine == 10 )
     {
       var element = document.getElementById('nine');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_nine >= 11 )
     {
       var element = document.getElementById('nine');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_nine").src="../uv-icons/uv11.png";
      
     }  
     

}
rownine();


var uvi_round_ten;
function rowten_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=9.07333&lng=-63.505',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_ten = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowten(uvi_round_ten);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_ten);
  
}

rowten_UV();

async function rowten(uvi_round_ten){

 location_name_ten = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=9.07333&lng=-63.505&username=skinnyreggae'


 //Pull data for location info
 localresponse_ten = await fetch(location_name_ten);
 localdata_ten = await localresponse_ten.json();


// getting exact location information 
   country_name_ten = localdata_ten.geonames[0].countryName;
   city_name_ten = localdata_ten.geonames[0].name;

  //UVI
    document.getElementById('uvi_ten').textContent = uvi_round_ten;
   //Location name 
   document.getElementById('city_name_ten').textContent = city_name_ten;
   document.getElementById('country_name_ten').textContent = country_name_ten;



   if (uvi_round_ten <=1 ) {
     // setting colour
     var element = document.getElementById('ten');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_ten == 2 )
     {
     // Adding row color
     var element = document.getElementById('ten');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_ten == 3 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_ten == 4 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_ten == 5 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_ten == 6 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_ten == 7 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_ten == 8 )
     {
       var element = document.getElementById('ten');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_ten == 9 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_ten == 10 )
     {
       var element = document.getElementById('ten');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_ten >= 11 )
     {
       var element = document.getElementById('ten');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_ten").src="../uv-icons/uv11.png";
      
     }  
     

}
rowten();

  
var uvi_round_eleven;
function roweleven_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=-33.45694&lng=-70.64827',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_eleven = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      roweleven(uvi_round_eleven);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_eleven);
  
}

roweleven_UV();

async function roweleven(uvi_round_eleven){

 location_name_eleven = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-33.45694&lng=-70.64827&username=skinnyreggae'


 //Pull data for location info
 localresponse_eleven = await fetch(location_name_eleven);
 localdata_eleven = await localresponse_eleven.json();


// getting exact location information 
   country_name_eleven = localdata_eleven.geonames[0].countryName;
   city_name_eleven = localdata_eleven.geonames[0].name;

  //UVI
    document.getElementById('uvi_eleven').textContent = uvi_round_eleven;
   //Location name 
   document.getElementById('city_name_eleven').textContent = city_name_eleven;
   document.getElementById('country_name_eleven').textContent = country_name_eleven;



   if (uvi_round_eleven <=1 ) {
     // setting colour
     var element = document.getElementById('eleven');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_eleven == 2 )
     {
     // Adding row color
     var element = document.getElementById('eleven');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_eleven == 3 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_eleven == 4 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_eleven == 5 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_eleven == 6 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_eleven == 7 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_eleven == 8 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_eleven == 9 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_eleven == 10 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_eleven >= 11 )
     {
       var element = document.getElementById('eleven');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_eleven").src="../uv-icons/uv11.png";
      
     }  
     

}
roweleven();

  
var uvi_round_twelve;
function rowtwelve_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=25.04776&lng=121.53185',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twelve = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwelve(uvi_round_twelve);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twelve);
  
}

rowtwelve_UV();

async function rowtwelve(uvi_round_twelve){

 location_name_twelve = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=25.04776&lng=121.53185&username=skinnyreggae'


 //Pull data for location info
 localresponse_twelve = await fetch(location_name_twelve);
 localdata_twelve = await localresponse_twelve.json();


// getting exact location information 
   country_name_twelve = localdata_twelve.geonames[0].countryName;
   city_name_twelve = localdata_twelve.geonames[0].name;

  //UVI
    document.getElementById('uvi_twelve').textContent = uvi_round_twelve;
   //Location name 
   document.getElementById('city_name_twelve').textContent = city_name_twelve;
   document.getElementById('country_name_twelve').textContent = country_name_twelve;



   if (uvi_round_twelve <=1 ) {
     // setting colour
     var element = document.getElementById('twelve');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twelve == 2 )
     {
     // Adding row color
     var element = document.getElementById('twelve');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twelve == 3 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twelve == 4 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twelve == 5 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twelve == 6 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twelve == 7 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twelve == 8 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twelve == 9 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twelve == 10 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twelve >= 11 )
     {
       var element = document.getElementById('twelve');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twelve").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwelve();



var uvi_round_thirteen;
function rowthirteen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=15.35472&lng=44.20667',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirteen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirteen(uvi_round_thirteen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirteen);
  
}

rowthirteen_UV();

async function rowthirteen(uvi_round_thirteen){

 location_name_thirteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=15.35472&lng=44.20667&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirteen = await fetch(location_name_thirteen);
 localdata_thirteen = await localresponse_thirteen.json();


// getting exact location information 
   country_name_thirteen = localdata_thirteen.geonames[0].countryName;
   city_name_thirteen = localdata_thirteen.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirteen').textContent = uvi_round_thirteen;
   //Location name 
   document.getElementById('city_name_thirteen').textContent = city_name_thirteen;
   document.getElementById('country_name_thirteen').textContent = country_name_thirteen;



   if (uvi_round_thirteen <=1 ) {
     // setting colour
     var element = document.getElementById('thirteen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirteen == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirteen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirteen == 3 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirteen == 4 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirteen == 5 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirteen == 6 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirteen == 7 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirteen == 8 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirteen == 9 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirteen == 10 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirteen >= 11 )
     {
       var element = document.getElementById('thirteen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirteen();
  

var uvi_round_fourteen;
function rowfourteen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=-22.90642&lng=-43.18223',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_fourteen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfourteen(uvi_round_fourteen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_fourteen);
  
}

rowfourteen_UV();

async function rowfourteen(uvi_round_fourteen){

 location_name_fourteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-22.90642&lng=-43.18223&username=skinnyreggae'


 //Pull data for location info
 localresponse_fourteen = await fetch(location_name_fourteen);
 localdata_fourteen = await localresponse_fourteen.json();


// getting exact location information 
   country_name_fourteen = localdata_fourteen.geonames[0].countryName;
   city_name_fourteen = localdata_fourteen.geonames[0].name;

  //UVI
    document.getElementById('uvi_fourteen').textContent = uvi_round_fourteen;
   //Location name 
   document.getElementById('city_name_fourteen').textContent = city_name_fourteen;
   document.getElementById('country_name_fourteen').textContent = country_name_fourteen;



   if (uvi_round_fourteen <=1 ) {
     // setting colour
     var element = document.getElementById('fourteen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_fourteen == 2 )
     {
     // Adding row color
     var element = document.getElementById('fourteen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_fourteen == 3 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_fourteen == 4 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_fourteen == 5 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_fourteen == 6 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_fourteen == 7 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_fourteen == 8 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_fourteen == 9 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_fourteen == 10 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_fourteen >= 11 )
     {
       var element = document.getElementById('fourteen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfourteen();
  

var uvi_round_fifteen;
function rowfifteen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=37.566&lng=126.9784',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_fifteen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfifteen(uvi_round_fifteen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_fifteen);
  
}

rowfifteen_UV();

async function rowfifteen(uvi_round_fifteen){

 location_name_fifteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=37.566&lng=126.9784&username=skinnyreggae'


 //Pull data for location info
 localresponse_fifteen = await fetch(location_name_fifteen);
 localdata_fifteen = await localresponse_fifteen.json();


// getting exact location information 
   country_name_fifteen = localdata_fifteen.geonames[0].countryName;
   city_name_fifteen = localdata_fifteen.geonames[0].name;

  //UVI
    document.getElementById('uvi_fifteen').textContent = uvi_round_fifteen;
   //Location name 
   document.getElementById('city_name_fifteen').textContent = city_name_fifteen;
   document.getElementById('country_name_fifteen').textContent = country_name_fifteen;



   if (uvi_round_fifteen <=1 ) {
     // setting colour
     var element = document.getElementById('fifteen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_fifteen == 2 )
     {
     // Adding row color
     var element = document.getElementById('fifteen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_fifteen == 3 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_fifteen == 4 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_fifteen == 5 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_fifteen == 6 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_fifteen == 7 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_fifteen == 8 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_fifteen == 9 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_fifteen == 10 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_fifteen >= 11 )
     {
       var element = document.getElementById('fifteen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfifteen();
  
  
  
var uvi_round_sixteen;
function rowsixteen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=1.28967&lng=103.85007',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_sixteen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowsixteen(uvi_round_sixteen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_sixteen);
  
}

rowsixteen_UV();

async function rowsixteen(uvi_round_sixteen){

 location_name_sixteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=1.28967&lng=103.85007&username=skinnyreggae'


 //Pull data for location info
 localresponse_sixteen = await fetch(location_name_sixteen);
 localdata_sixteen = await localresponse_sixteen.json();


// getting exact location information 
   country_name_sixteen = localdata_sixteen.geonames[0].countryName;
   city_name_sixteen = localdata_sixteen.geonames[0].name;

  //UVI
    document.getElementById('uvi_sixteen').textContent = uvi_round_sixteen;
   //Location name 
   document.getElementById('city_name_sixteen').textContent = city_name_sixteen;
   document.getElementById('country_name_sixteen').textContent = country_name_sixteen;



   if (uvi_round_sixteen <=1 ) {
     // setting colour
     var element = document.getElementById('sixteen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_sixteen == 2 )
     {
     // Adding row color
     var element = document.getElementById('sixteen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_sixteen == 3 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_sixteen == 4 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_sixteen == 5 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_sixteen == 6 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_sixteen == 7 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_sixteen == 8 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_sixteen == 9 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_sixteen == 10 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_sixteen >= 11 )
     {
       var element = document.getElementById('sixteen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv11.png";
      
     }  
     

}
rowsixteen();
  
  
var uvi_round_seventeen;
function rowseventeen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=51.50853&lng=-0.12574',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_seventeen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowseventeen(uvi_round_seventeen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_seventeen);
  
}

rowseventeen_UV();

async function rowseventeen(uvi_round_seventeen){

 location_name_seventeen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=51.50853&lng=-0.12574&username=skinnyreggae'


 //Pull data for location info
 localresponse_seventeen = await fetch(location_name_seventeen);
 localdata_seventeen = await localresponse_seventeen.json();


// getting exact location information 
   country_name_seventeen = localdata_seventeen.geonames[0].countryName;
   city_name_seventeen = localdata_seventeen.geonames[0].name;

  //UVI
    document.getElementById('uvi_seventeen').textContent = uvi_round_seventeen;
   //Location name 
   document.getElementById('city_name_seventeen').textContent = city_name_seventeen;
   document.getElementById('country_name_seventeen').textContent = country_name_seventeen;



   if (uvi_round_seventeen <=1 ) {
     // setting colour
     var element = document.getElementById('seventeen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_seventeen == 2 )
     {
     // Adding row color
     var element = document.getElementById('seventeen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_seventeen == 3 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_seventeen == 4 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_seventeen == 5 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_seventeen == 6 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_seventeen == 7 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_seventeen == 8 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_seventeen == 9 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_seventeen == 10 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_seventeen >= 11 )
     {
       var element = document.getElementById('seventeen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv11.png";
      
     }  
     

}
rowseventeen();
  

var uvi_round_eighteen;
function roweighteen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=22.27832&lng=114.17469',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_eighteen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      roweighteen(uvi_round_eighteen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_eighteen);
  
}

roweighteen_UV();

async function roweighteen(uvi_round_eighteen){

 location_name_eighteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=22.27832&lng=114.17469&username=skinnyreggae'


 //Pull data for location info
 localresponse_eighteen = await fetch(location_name_eighteen);
 localdata_eighteen = await localresponse_eighteen.json();


// getting exact location information 
   country_name_eighteen = localdata_eighteen.geonames[0].countryName;
   city_name_eighteen = localdata_eighteen.geonames[0].name;

  //UVI
    document.getElementById('uvi_eighteen').textContent = uvi_round_eighteen;
   //Location name 
   document.getElementById('city_name_eighteen').textContent = city_name_eighteen;
   document.getElementById('country_name_eighteen').textContent = country_name_eighteen;



   if (uvi_round_eighteen <=1 ) {
     // setting colour
     var element = document.getElementById('eighteen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_eighteen == 2 )
     {
     // Adding row color
     var element = document.getElementById('eighteen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_eighteen == 3 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_eighteen == 4 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_eighteen == 5 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_eighteen == 6 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_eighteen == 7 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_eighteen == 8 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_eighteen == 9 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_eighteen == 10 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_eighteen >= 11 )
     {
       var element = document.getElementById('eighteen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv11.png";
      
     }  
     

}
roweighteen();
  

var uvi_round_nineteen;
function rownineteen_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=-26.20227&lng=28.04363',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_nineteen = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rownineteen(uvi_round_nineteen);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_nineteen);
  
}

rownineteen_UV();

async function rownineteen(uvi_round_nineteen){

 location_name_nineteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-26.20227&lng=28.04363&username=skinnyreggae'


 //Pull data for location info
 localresponse_nineteen = await fetch(location_name_nineteen);
 localdata_nineteen = await localresponse_nineteen.json();


// getting exact location information 
   country_name_nineteen = localdata_nineteen.geonames[0].countryName;
   city_name_nineteen = localdata_nineteen.geonames[0].name;

  //UVI
    document.getElementById('uvi_nineteen').textContent = uvi_round_nineteen;
   //Location name 
   document.getElementById('city_name_nineteen').textContent = city_name_nineteen;
   document.getElementById('country_name_nineteen').textContent = country_name_nineteen;



   if (uvi_round_nineteen <=1 ) {
     // setting colour
     var element = document.getElementById('nineteen');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_nineteen == 2 )
     {
     // Adding row color
     var element = document.getElementById('nineteen');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_nineteen == 3 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_nineteen == 4 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_nineteen == 5 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_nineteen == 6 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_nineteen == 7 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_nineteen == 8 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_nineteen == 9 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_nineteen == 10 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_nineteen >= 11 )
     {
       var element = document.getElementById('nineteen');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv11.png";
      
     }  
     

}
rownineteen();
  
  

var uvi_round_twenty;
function rowtwenty_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=24.8608&lng=67.0104',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twenty = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwenty(uvi_round_twenty);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twenty);
  
}

rowtwenty_UV();

async function rowtwenty(uvi_round_twenty){

 location_name_twenty = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=24.8608&lng=67.0104&username=skinnyreggae'


 //Pull data for location info
 localresponse_twenty = await fetch(location_name_twenty);
 localdata_twenty = await localresponse_twenty.json();


// getting exact location information 
   country_name_twenty = localdata_twenty.geonames[0].countryName;
   city_name_twenty = localdata_twenty.geonames[0].name;

  //UVI
    document.getElementById('uvi_twenty').textContent = uvi_round_twenty;
   //Location name 
   document.getElementById('city_name_twenty').textContent = city_name_twenty;
   document.getElementById('country_name_twenty').textContent = country_name_twenty;



   if (uvi_round_twenty <=1 ) {
     // setting colour
     var element = document.getElementById('twenty');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twenty == 2 )
     {
     // Adding row color
     var element = document.getElementById('twenty');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twenty == 3 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twenty == 4 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twenty == 5 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twenty == 6 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twenty == 7 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twenty == 8 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twenty == 9 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twenty == 10 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twenty >= 11 )
     {
       var element = document.getElementById('twenty');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twenty").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwenty();
  
  
  
var uvi_round_twentyone;
function rowtwentyone_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=-12.04318&lng=-77.02824',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentyone = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentyone(uvi_round_twentyone);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentyone);
  
}

rowtwentyone_UV();

async function rowtwentyone(uvi_round_twentyone){

 location_name_twentyone = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-12.04318&lng=-77.02824&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentyone = await fetch(location_name_twentyone);
 localdata_twentyone = await localresponse_twentyone.json();


// getting exact location information 
   country_name_twentyone = localdata_twentyone.geonames[0].countryName;
   city_name_twentyone = localdata_twentyone.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentyone').textContent = uvi_round_twentyone;
   //Location name 
   document.getElementById('city_name_twentyone').textContent = city_name_twentyone;
   document.getElementById('country_name_twentyone').textContent = country_name_twentyone;



   if (uvi_round_twentyone <=1 ) {
     // setting colour
     var element = document.getElementById('twentyone');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentyone == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentyone');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentyone == 3 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentyone == 4 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentyone == 5 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentyone == 6 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentyone == 7 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentyone == 8 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentyone == 9 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentyone == 10 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentyone >= 11 )
     {
       var element = document.getElementById('twentyone');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentyone();
  

  
var uvi_round_twentytwo;
function rowtwentytwo_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=-33.86785&lng=151.20732',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentytwo = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentytwo(uvi_round_twentytwo);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentytwo);
  
}

rowtwentytwo_UV();

async function rowtwentytwo(uvi_round_twentytwo){

 location_name_twentytwo = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-33.86785&lng=151.20732&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentytwo = await fetch(location_name_twentytwo);
 localdata_twentytwo = await localresponse_twentytwo.json();


// getting exact location information 
   country_name_twentytwo = localdata_twentytwo.geonames[0].countryName;
   city_name_twentytwo = localdata_twentytwo.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentytwo').textContent = uvi_round_twentytwo;
   //Location name 
   document.getElementById('city_name_twentytwo').textContent = city_name_twentytwo;
   document.getElementById('country_name_twentytwo').textContent = country_name_twentytwo;



   if (uvi_round_twentytwo <=1 ) {
     // setting colour
     var element = document.getElementById('twentytwo');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentytwo == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentytwo');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentytwo == 3 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentytwo == 4 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentytwo == 5 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentytwo == 6 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentytwo == 7 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentytwo == 8 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentytwo == 9 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentytwo == 10 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentytwo >= 11 )
     {
       var element = document.getElementById('twentytwo');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentytwo();
  
  
var uvi_round_twentythree;
function rowtwentythree_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=43.70011&lng=-79.4163',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentythree = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentythree(uvi_round_twentythree);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentythree);
  
}

rowtwentythree_UV();

async function rowtwentythree(uvi_round_twentythree){

 location_name_twentythree = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=43.70011&lng=-79.4163&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentythree = await fetch(location_name_twentythree);
 localdata_twentythree = await localresponse_twentythree.json();


// getting exact location information 
   country_name_twentythree = localdata_twentythree.geonames[0].countryName;
   city_name_twentythree = localdata_twentythree.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentythree').textContent = uvi_round_twentythree;
   //Location name 
   document.getElementById('city_name_twentythree').textContent = city_name_twentythree;
   document.getElementById('country_name_twentythree').textContent = country_name_twentythree;



   if (uvi_round_twentythree <=1 ) {
     // setting colour
     var element = document.getElementById('twentythree');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentythree == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentythree');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentythree == 3 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentythree == 4 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentythree == 5 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentythree == 6 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentythree == 7 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentythree == 8 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentythree == 9 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentythree == 10 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentythree >= 11 )
     {
       var element = document.getElementById('twentythree');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentythree();
  

var uvi_round_twentyfour;
function rowtwentyfour_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=19.42847&lng=-99.12766',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentyfour = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentyfour(uvi_round_twentyfour);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentyfour);
  
}

rowtwentyfour_UV();

async function rowtwentyfour(uvi_round_twentyfour){

 location_name_twentyfour = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=19.42847&lng=-99.12766&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentyfour = await fetch(location_name_twentyfour);
 localdata_twentyfour = await localresponse_twentyfour.json();


// getting exact location information 
   country_name_twentyfour = localdata_twentyfour.geonames[0].countryName;
   city_name_twentyfour = localdata_twentyfour.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentyfour').textContent = uvi_round_twentyfour;
   //Location name 
   document.getElementById('city_name_twentyfour').textContent = city_name_twentyfour;
   document.getElementById('country_name_twentyfour').textContent = country_name_twentyfour;



   if (uvi_round_twentyfour <=1 ) {
     // setting colour
     var element = document.getElementById('twentyfour');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentyfour == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentyfour');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentyfour == 3 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentyfour == 4 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentyfour == 5 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentyfour == 6 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentyfour == 7 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentyfour == 8 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentyfour == 9 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentyfour == 10 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentyfour >= 11 )
     {
       var element = document.getElementById('twentyfour');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentyfour();
  
  

var uvi_round_twentyfive;
function rowtwentyfive_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=6.45407&lng=3.39467',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentyfive = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentyfive(uvi_round_twentyfive);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentyfive);
  
}

rowtwentyfive_UV();

async function rowtwentyfive(uvi_round_twentyfive){

 location_name_twentyfive = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=6.45407&lng=3.39467&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentyfive = await fetch(location_name_twentyfive);
 localdata_twentyfive = await localresponse_twentyfive.json();


// getting exact location information 
   country_name_twentyfive = localdata_twentyfive.geonames[0].countryName;
   city_name_twentyfive = localdata_twentyfive.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentyfive').textContent = uvi_round_twentyfive;
   //Location name 
   document.getElementById('city_name_twentyfive').textContent = city_name_twentyfive;
   document.getElementById('country_name_twentyfive').textContent = country_name_twentyfive;



   if (uvi_round_twentyfive <=1 ) {
     // setting colour
     var element = document.getElementById('twentyfive');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentyfive == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentyfive');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentyfive == 3 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentyfive == 4 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentyfive == 5 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentyfive == 6 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentyfive == 7 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentyfive == 8 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentyfive == 9 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentyfive == 10 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentyfive >= 11 )
     {
       var element = document.getElementById('twentyfive');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentyfive();
  
  
var uvi_round_twentysix;
function rowtwentysix_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=40.71427&lng=-74.00597',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentysix = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentysix(uvi_round_twentysix);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentysix);
  
}

rowtwentysix_UV();

async function rowtwentysix(uvi_round_twentysix){

 location_name_twentysix = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=40.71427&lng=-74.00597&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentysix = await fetch(location_name_twentysix);
 localdata_twentysix = await localresponse_twentysix.json();


// getting exact location information 
   country_name_twentysix = localdata_twentysix.geonames[0].countryName;
   city_name_twentysix = localdata_twentysix.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentysix').textContent = uvi_round_twentysix;
   //Location name 
   document.getElementById('city_name_twentysix').textContent = city_name_twentysix;
   document.getElementById('country_name_twentysix').textContent = country_name_twentysix;



   if (uvi_round_twentysix <=1 ) {
     // setting colour
     var element = document.getElementById('twentysix');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentysix == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentysix');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentysix == 3 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentysix == 4 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentysix == 5 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentysix == 6 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentysix == 7 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentysix == 8 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentysix == 9 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentysix == 10 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentysix >= 11 )
     {
       var element = document.getElementById('twentysix');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentysix();
  

var uvi_round_twentyseven;
function rowtwentyseven_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=28.26689&lng=83.96851',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentyseven = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentyseven(uvi_round_twentyseven);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentyseven);
  
}

rowtwentyseven_UV();

async function rowtwentyseven(uvi_round_twentyseven){

 location_name_twentyseven = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=28.26689&lng=83.96851&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentyseven = await fetch(location_name_twentyseven);
 localdata_twentyseven = await localresponse_twentyseven.json();


// getting exact location information 
   country_name_twentyseven = localdata_twentyseven.geonames[0].countryName;
   city_name_twentyseven = localdata_twentyseven.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentyseven').textContent = uvi_round_twentyseven;
   //Location name 
   document.getElementById('city_name_twentyseven').textContent = city_name_twentyseven;
   document.getElementById('country_name_twentyseven').textContent = country_name_twentyseven;



   if (uvi_round_twentyseven <=1 ) {
     // setting colour
     var element = document.getElementById('twentyseven');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentyseven == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentyseven');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentyseven == 3 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentyseven == 4 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentyseven == 5 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentyseven == 6 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentyseven == 7 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentyseven == 8 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentyseven == 9 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentyseven == 10 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentyseven >= 11 )
     {
       var element = document.getElementById('twentyseven');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentyseven();
  

  
  

  
var uvi_round_twentyeight;
function rowtwentyeight_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=15.33805&lng=38.93184',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentyeight = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentyeight(uvi_round_twentyeight);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentyeight);
  
}

rowtwentyeight_UV();

async function rowtwentyeight(uvi_round_twentyeight){

 location_name_twentyeight = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=15.33805&lng=38.93184&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentyeight = await fetch(location_name_twentyeight);
 localdata_twentyeight = await localresponse_twentyeight.json();


// getting exact location information 
   country_name_twentyeight = localdata_twentyeight.geonames[0].countryName;
   city_name_twentyeight = localdata_twentyeight.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentyeight').textContent = uvi_round_twentyeight;
   //Location name 
   document.getElementById('city_name_twentyeight').textContent = city_name_twentyeight;
   document.getElementById('country_name_twentyeight').textContent = country_name_twentyeight;



   if (uvi_round_twentyeight <=1 ) {
     // setting colour
     var element = document.getElementById('twentyeight');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentyeight == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentyeight');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentyeight == 3 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentyeight == 4 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentyeight == 5 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentyeight == 6 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentyeight == 7 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentyeight == 8 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentyeight == 9 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentyeight == 10 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentyeight >= 11 )
     {
       var element = document.getElementById('twentyeight');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentyeight();
  

  
  
var uvi_round_twentynine;
function rowtwentynine_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=52.52437&lng=13.41053',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_twentynine = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowtwentynine(uvi_round_twentynine);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_twentynine);
  
}

rowtwentynine_UV();

async function rowtwentynine(uvi_round_twentynine){

 location_name_twentynine = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=52.52437&lng=13.41053&username=skinnyreggae'


 //Pull data for location info
 localresponse_twentynine = await fetch(location_name_twentynine);
 localdata_twentynine = await localresponse_twentynine.json();


// getting exact location information 
   country_name_twentynine = localdata_twentynine.geonames[0].countryName;
   city_name_twentynine = localdata_twentynine.geonames[0].name;

  //UVI
    document.getElementById('uvi_twentynine').textContent = uvi_round_twentynine;
   //Location name 
   document.getElementById('city_name_twentynine').textContent = city_name_twentynine;
   document.getElementById('country_name_twentynine').textContent = country_name_twentynine;



   if (uvi_round_twentynine <=1 ) {
     // setting colour
     var element = document.getElementById('twentynine');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_twentynine == 2 )
     {
     // Adding row color
     var element = document.getElementById('twentynine');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_twentynine == 3 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_twentynine == 4 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_twentynine == 5 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_twentynine == 6 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_twentynine == 7 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_twentynine == 8 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_twentynine == 9 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_twentynine == 10 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_twentynine >= 11 )
     {
       var element = document.getElementById('twentynine');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv11.png";
      
     }  
     

}
rowtwentynine();
  
var uvi_round_thirty;
function rowthirty_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=5.55602&lng=-0.1969',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirty = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirty(uvi_round_thirty);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirty);
  
}

rowthirty_UV();

async function rowthirty(uvi_round_thirty){

 location_name_thirty = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=5.55602&lng=-0.1969&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirty = await fetch(location_name_thirty);
 localdata_thirty = await localresponse_thirty.json();


// getting exact location information 
   country_name_thirty = localdata_thirty.geonames[0].countryName;
   city_name_thirty = localdata_thirty.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirty').textContent = uvi_round_thirty;
   //Location name 
   document.getElementById('city_name_thirty').textContent = city_name_thirty;
   document.getElementById('country_name_thirty').textContent = country_name_thirty;



   if (uvi_round_thirty <=1 ) {
     // setting colour
     var element = document.getElementById('thirty');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirty == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirty');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirty == 3 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirty == 4 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirty == 5 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirty == 6 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirty == 7 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirty == 8 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirty == 9 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirty == 10 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirty >= 11 )
     {
       var element = document.getElementById('thirty');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirty").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirty();
  


var uvi_round_thirtyone;
function rowthirtyone_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=52.37403&lng=4.88969',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtyone = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtyone(uvi_round_thirtyone);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtyone);
  
}

rowthirtyone_UV();

async function rowthirtyone(uvi_round_thirtyone){

 location_name_thirtyone = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=52.37403&lng=4.88969&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtyone = await fetch(location_name_thirtyone);
 localdata_thirtyone = await localresponse_thirtyone.json();


// getting exact location information 
   country_name_thirtyone = localdata_thirtyone.geonames[0].countryName;
   city_name_thirtyone = localdata_thirtyone.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtyone').textContent = uvi_round_thirtyone;
   //Location name 
   document.getElementById('city_name_thirtyone').textContent = city_name_thirtyone;
   document.getElementById('country_name_thirtyone').textContent = country_name_thirtyone;



   if (uvi_round_thirtyone <=1 ) {
     // setting colour
     var element = document.getElementById('thirtyone');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtyone == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtyone');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtyone == 3 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtyone == 4 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtyone == 5 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtyone == 6 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtyone == 7 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtyone == 8 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtyone == 9 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtyone == 10 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtyone >= 11 )
     {
       var element = document.getElementById('thirtyone');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtyone();
  

var uvi_round_thirtytwo;
function rowthirtytwo_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=47.56494&lng=-52.70931',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtytwo = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtytwo(uvi_round_thirtytwo);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtytwo);
  
}

rowthirtytwo_UV();

async function rowthirtytwo(uvi_round_thirtytwo){

 location_name_thirtytwo = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=47.56494&lng=-52.70931&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtytwo = await fetch(location_name_thirtytwo);
 localdata_thirtytwo = await localresponse_thirtytwo.json();


// getting exact location information 
   country_name_thirtytwo = localdata_thirtytwo.geonames[0].countryName;
   city_name_thirtytwo = localdata_thirtytwo.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtytwo').textContent = uvi_round_thirtytwo;
   //Location name 
   document.getElementById('city_name_thirtytwo').textContent = city_name_thirtytwo;
   document.getElementById('country_name_thirtytwo').textContent = country_name_thirtytwo;



   if (uvi_round_thirtytwo <=1 ) {
     // setting colour
     var element = document.getElementById('thirtytwo');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtytwo == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtytwo');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtytwo == 3 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtytwo == 4 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtytwo == 5 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtytwo == 6 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtytwo == 7 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtytwo == 8 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtytwo == 9 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtytwo == 10 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtytwo >= 11 )
     {
       var element = document.getElementById('thirtytwo');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtytwo();
  
    
var uvi_round_thirtythree;
function rowthirtythree_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=51.05011&lng=-114.08529',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtythree = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtythree(uvi_round_thirtythree);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtythree);
  
}

rowthirtythree_UV();

async function rowthirtythree(uvi_round_thirtythree){

 location_name_thirtythree = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=51.05011&lng=-114.08529&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtythree = await fetch(location_name_thirtythree);
 localdata_thirtythree = await localresponse_thirtythree.json();


// getting exact location information 
   country_name_thirtythree = localdata_thirtythree.geonames[0].countryName;
   city_name_thirtythree = localdata_thirtythree.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtythree').textContent = uvi_round_thirtythree;
   //Location name 
   document.getElementById('city_name_thirtythree').textContent = city_name_thirtythree;
   document.getElementById('country_name_thirtythree').textContent = country_name_thirtythree;



   if (uvi_round_thirtythree <=1 ) {
     // setting colour
     var element = document.getElementById('thirtythree');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtythree == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtythree');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtythree == 3 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtythree == 4 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtythree == 5 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtythree == 6 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtythree == 7 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtythree == 8 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtythree == 9 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtythree == 10 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtythree >= 11 )
     {
       var element = document.getElementById('thirtythree');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtythree();

 
var uvi_round_thirtyfour;
function rowthirtyfour_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=62.453972&lng=-114.371788',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtyfour = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtyfour(uvi_round_thirtyfour);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtyfour);
  
}

rowthirtyfour_UV();

async function rowthirtyfour(uvi_round_thirtyfour){

 location_name_thirtyfour = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=62.453972&lng=-114.371788&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtyfour = await fetch(location_name_thirtyfour);
 localdata_thirtyfour = await localresponse_thirtyfour.json();


// getting exact location information 
   country_name_thirtyfour = localdata_thirtyfour.geonames[0].countryName;
   city_name_thirtyfour = localdata_thirtyfour.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtyfour').textContent = uvi_round_thirtyfour;
   //Location name 
   document.getElementById('city_name_thirtyfour').textContent = city_name_thirtyfour;
   document.getElementById('country_name_thirtyfour').textContent = country_name_thirtyfour;



   if (uvi_round_thirtyfour <=1 ) {
     // setting colour
     var element = document.getElementById('thirtyfour');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtyfour == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtyfour');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtyfour == 3 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtyfour == 4 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtyfour == 5 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtyfour == 6 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtyfour == 7 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtyfour == 8 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtyfour == 9 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtyfour == 10 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtyfour >= 11 )
     {
       var element = document.getElementById('thirtyfour');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtyfour();

   
var uvi_round_thirtyfive;
function rowthirtyfive_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=52.13238&lng=-106.66892',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtyfive = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtyfive(uvi_round_thirtyfive);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtyfive);
  
}

rowthirtyfive_UV();

async function rowthirtyfive(uvi_round_thirtyfive){

 location_name_thirtyfive = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=52.13238&lng=-106.66892&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtyfive = await fetch(location_name_thirtyfive);
 localdata_thirtyfive = await localresponse_thirtyfive.json();


// getting exact location information 
   country_name_thirtyfive = localdata_thirtyfive.geonames[0].countryName;
   city_name_thirtyfive = localdata_thirtyfive.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtyfive').textContent = uvi_round_thirtyfive;
   //Location name 
   document.getElementById('city_name_thirtyfive').textContent = city_name_thirtyfive;
   document.getElementById('country_name_thirtyfive').textContent = country_name_thirtyfive;



   if (uvi_round_thirtyfive <=1 ) {
     // setting colour
     var element = document.getElementById('thirtyfive');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtyfive == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtyfive');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtyfive == 3 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtyfive == 4 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtyfive == 5 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtyfive == 6 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtyfive == 7 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtyfive == 8 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtyfive == 9 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtyfive == 10 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtyfive >= 11 )
     {
       var element = document.getElementById('thirtyfive');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtyfive();

     
var uvi_round_thirtysix;
function rowthirtysix_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=63.74697&lng=-68.51727',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtysix = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtysix(uvi_round_thirtysix);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtysix);
  
}

rowthirtysix_UV();

async function rowthirtysix(uvi_round_thirtysix){

 location_name_thirtysix = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=63.74697&lng=-68.51727&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtysix = await fetch(location_name_thirtysix);
 localdata_thirtysix = await localresponse_thirtysix.json();


// getting exact location information 
   country_name_thirtysix = localdata_thirtysix.geonames[0].countryName;
   city_name_thirtysix = localdata_thirtysix.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtysix').textContent = uvi_round_thirtysix;
   //Location name 
   document.getElementById('city_name_thirtysix').textContent = city_name_thirtysix;
   document.getElementById('country_name_thirtysix').textContent = country_name_thirtysix;



   if (uvi_round_thirtysix <=1 ) {
     // setting colour
     var element = document.getElementById('thirtysix');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtysix == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtysix');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtysix == 3 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtysix == 4 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtysix == 5 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtysix == 6 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtysix == 7 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtysix == 8 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtysix == 9 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtysix == 10 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtysix >= 11 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtysix();

     
var uvi_round_thirtysix;
function rowthirtysix_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=63.74697&lng=-68.51727',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtysix = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtysix(uvi_round_thirtysix);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtysix);
  
}

rowthirtysix_UV();

async function rowthirtysix(uvi_round_thirtysix){

 location_name_thirtysix = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=63.74697&lng=-68.51727&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtysix = await fetch(location_name_thirtysix);
 localdata_thirtysix = await localresponse_thirtysix.json();


// getting exact location information 
   country_name_thirtysix = localdata_thirtysix.geonames[0].countryName;
   city_name_thirtysix = localdata_thirtysix.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtysix').textContent = uvi_round_thirtysix;
   //Location name 
   document.getElementById('city_name_thirtysix').textContent = city_name_thirtysix;
   document.getElementById('country_name_thirtysix').textContent = country_name_thirtysix;



   if (uvi_round_thirtysix <=1 ) {
     // setting colour
     var element = document.getElementById('thirtysix');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtysix == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtysix');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtysix == 3 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtysix == 4 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtysix == 5 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtysix == 6 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtysix == 7 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtysix == 8 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtysix == 9 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtysix == 10 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtysix >= 11 )
     {
       var element = document.getElementById('thirtysix');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtysix();
   
var uvi_round_thirtyeight;
function rowthirtyeight_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=46.23459&lng=-63.1256',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtyeight = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtyeight(uvi_round_thirtyeight);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtyeight);
  
}

rowthirtyeight_UV();

async function rowthirtyeight(uvi_round_thirtyeight){

 location_name_thirtyeight = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=46.23459&lng=-63.1256&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtyeight = await fetch(location_name_thirtyeight);
 localdata_thirtyeight = await localresponse_thirtyeight.json();


// getting exact location information 
   country_name_thirtyeight = localdata_thirtyeight.geonames[0].countryName;
   city_name_thirtyeight = localdata_thirtyeight.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtyeight').textContent = uvi_round_thirtyeight;
   //Location name 
   document.getElementById('city_name_thirtyeight').textContent = city_name_thirtyeight;
   document.getElementById('country_name_thirtyeight').textContent = country_name_thirtyeight;



   if (uvi_round_thirtyeight <=1 ) {
     // setting colour
     var element = document.getElementById('thirtyeight');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtyeight == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtyeight');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtyeight == 3 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtyeight == 4 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtyeight == 5 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtyeight == 6 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtyeight == 7 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtyeight == 8 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtyeight == 9 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtyeight == 10 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtyeight >= 11 )
     {
       var element = document.getElementById('thirtyeight');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtyeight();

   
var uvi_round_thirtynine;
function rowthirtynine_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=49.24966&lng=-123.11934',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_thirtynine = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowthirtynine(uvi_round_thirtynine);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_thirtynine);
  
}

rowthirtynine_UV();

async function rowthirtynine(uvi_round_thirtynine){

 location_name_thirtynine = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=49.24966&lng=-123.11934&username=skinnyreggae'


 //Pull data for location info
 localresponse_thirtynine = await fetch(location_name_thirtynine);
 localdata_thirtynine = await localresponse_thirtynine.json();


// getting exact location information 
   country_name_thirtynine = localdata_thirtynine.geonames[0].countryName;
   city_name_thirtynine = localdata_thirtynine.geonames[0].name;

  //UVI
    document.getElementById('uvi_thirtynine').textContent = uvi_round_thirtynine;
   //Location name 
   document.getElementById('city_name_thirtynine').textContent = city_name_thirtynine;
   document.getElementById('country_name_thirtynine').textContent = country_name_thirtynine;



   if (uvi_round_thirtynine <=1 ) {
     // setting colour
     var element = document.getElementById('thirtynine');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_thirtynine == 2 )
     {
     // Adding row color
     var element = document.getElementById('thirtynine');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_thirtynine == 3 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_thirtynine == 4 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_thirtynine == 5 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_thirtynine == 6 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_thirtynine == 7 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_thirtynine == 8 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_thirtynine == 9 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_thirtynine == 10 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_thirtynine >= 11 )
     {
       var element = document.getElementById('thirtynine');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv11.png";
      
     }  
     

}
rowthirtynine();

  
var uvi_round_forty;
function rowforty_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=60.71611&lng=-135.05375',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_forty = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowforty(uvi_round_forty);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_forty);
  
}

rowforty_UV();

async function rowforty(uvi_round_forty){

 location_name_forty = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=60.71611&lng=-135.05375&username=skinnyreggae'


 //Pull data for location info
 localresponse_forty = await fetch(location_name_forty);
 localdata_forty = await localresponse_forty.json();


// getting exact location information 
   country_name_forty = localdata_forty.geonames[0].countryName;
   city_name_forty = localdata_forty.geonames[0].name;

  //UVI
    document.getElementById('uvi_forty').textContent = uvi_round_forty;
   //Location name 
   document.getElementById('city_name_forty').textContent = city_name_forty;
   document.getElementById('country_name_forty').textContent = country_name_forty;



   if (uvi_round_forty <=1 ) {
     // setting colour
     var element = document.getElementById('forty');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_forty == 2 )
     {
     // Adding row color
     var element = document.getElementById('forty');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_forty == 3 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_forty == 4 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_forty == 5 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_forty == 6 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_forty == 7 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_forty == 8 )
     {
       var element = document.getElementById('forty');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_forty == 9 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_forty == 10 )
     {
       var element = document.getElementById('forty');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_forty >= 11 )
     {
       var element = document.getElementById('forty');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_forty").src="../uv-icons/uv11.png";
      
     }  
     

}
rowforty();

  
  
   
var uvi_round_fortyone;
function rowfortyone_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=49.8844&lng=-97.14704',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_fortyone = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfortyone(uvi_round_fortyone);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_fortyone);
  
}

rowfortyone_UV();

async function rowfortyone(uvi_round_fortyone){

 location_name_fortyone = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=49.8844&lng=-97.14704&username=skinnyreggae'


 //Pull data for location info
 localresponse_fortyone = await fetch(location_name_fortyone);
 localdata_fortyone = await localresponse_fortyone.json();


// getting exact location information 
   country_name_fortyone = localdata_fortyone.geonames[0].countryName;
   city_name_fortyone = localdata_fortyone.geonames[0].name;

  //UVI
    document.getElementById('uvi_fortyone').textContent = uvi_round_fortyone;
   //Location name 
   document.getElementById('city_name_fortyone').textContent = city_name_fortyone;
   document.getElementById('country_name_fortyone').textContent = country_name_fortyone;



   if (uvi_round_fortyone <=1 ) {
     // setting colour
     var element = document.getElementById('fortyone');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_fortyone == 2 )
     {
     // Adding row color
     var element = document.getElementById('fortyone');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_fortyone == 3 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_fortyone == 4 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_fortyone == 5 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_fortyone == 6 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_fortyone == 7 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_fortyone == 8 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_fortyone == 9 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_fortyone == 10 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_fortyone >= 11 )
     {
       var element = document.getElementById('fortyone');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfortyone();

  
  
   
var uvi_round_fortytwo;
function rowfortytwo_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=46.09454&lng=-64.7965',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_fortytwo = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfortytwo(uvi_round_fortytwo);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_fortytwo);
  
}

rowfortytwo_UV();

async function rowfortytwo(uvi_round_fortytwo){

 location_name_fortytwo = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=46.09454&lng=-64.7965&username=skinnyreggae'


 //Pull data for location info
 localresponse_fortytwo = await fetch(location_name_fortytwo);
 localdata_fortytwo = await localresponse_fortytwo.json();


// getting exact location information 
   country_name_fortytwo = localdata_fortytwo.geonames[0].countryName;
   city_name_fortytwo = localdata_fortytwo.geonames[0].name;

  //UVI
    document.getElementById('uvi_fortytwo').textContent = uvi_round_fortytwo;
   //Location name 
   document.getElementById('city_name_fortytwo').textContent = city_name_fortytwo;
   document.getElementById('country_name_fortytwo').textContent = country_name_fortytwo;



   if (uvi_round_fortytwo <=1 ) {
     // setting colour
     var element = document.getElementById('fortytwo');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_fortytwo == 2 )
     {
     // Adding row color
     var element = document.getElementById('fortytwo');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_fortytwo == 3 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_fortytwo == 4 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_fortytwo == 5 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_fortytwo == 6 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_fortytwo == 7 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_fortytwo == 8 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_fortytwo == 9 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_fortytwo == 10 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_fortytwo >= 11 )
     {
       var element = document.getElementById('fortytwo');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfortytwo();

  
  
  
   
var uvi_round_fortythree;
function rowfortythree_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=44.6464&lng=-63.57291',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_fortythree = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfortythree(uvi_round_fortythree);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_fortythree);
  
}

rowfortythree_UV();

async function rowfortythree(uvi_round_fortythree){

 location_name_fortythree = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=44.6464&lng=-63.57291&username=skinnyreggae'


 //Pull data for location info
 localresponse_fortythree = await fetch(location_name_fortythree);
 localdata_fortythree = await localresponse_fortythree.json();


// getting exact location information 
   country_name_fortythree = localdata_fortythree.geonames[0].countryName;
   city_name_fortythree = localdata_fortythree.geonames[0].name;

  //UVI
    document.getElementById('uvi_fortythree').textContent = uvi_round_fortythree;
   //Location name 
   document.getElementById('city_name_fortythree').textContent = city_name_fortythree;
   document.getElementById('country_name_fortythree').textContent = country_name_fortythree;



   if (uvi_round_fortythree <=1 ) {
     // setting colour
     var element = document.getElementById('fortythree');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_fortythree == 2 )
     {
     // Adding row color
     var element = document.getElementById('fortythree');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_fortythree == 3 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_fortythree == 4 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_fortythree == 5 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_fortythree == 6 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_fortythree == 7 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_fortythree == 8 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_fortythree == 9 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_fortythree == 10 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_fortythree >= 11 )
     {
       var element = document.getElementById('fortythree');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfortythree();

  
  
   
var uvi_round_fortyfour;
function rowfortyfour_UV() {
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '10c2e934f685eba55e2e65feceaae935');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=45.50884&lng=-73.58781',
    success: function(response) {
      //handle successful response
      $.each(response, function(i, result){
        

        uvi_round_fortyfour = Math.floor(result.uv_max);
        
        
      })
      //passing to other function.
      rowfortyfour(uvi_round_fortyfour);
      
    },
    error: function(response) {
      // handle error response
      console.log('error', response);
    }
  });

 console.log(uvi_round_fortyfour);
  
}

rowfortyfour_UV();

async function rowfortyfour(uvi_round_fortyfour){

 location_name_fortyfour = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=45.50884&lng=-73.58781&username=skinnyreggae'


 //Pull data for location info
 localresponse_fortyfour = await fetch(location_name_fortyfour);
 localdata_fortyfour = await localresponse_fortyfour.json();


// getting exact location information 
   country_name_fortyfour = localdata_fortyfour.geonames[0].countryName;
   city_name_fortyfour = localdata_fortyfour.geonames[0].name;

  //UVI
    document.getElementById('uvi_fortyfour').textContent = uvi_round_fortyfour;
   //Location name 
   document.getElementById('city_name_fortyfour').textContent = city_name_fortyfour;
   document.getElementById('country_name_fortyfour').textContent = country_name_fortyfour;



   if (uvi_round_fortyfour <=1 ) {
     // setting colour
     var element = document.getElementById('fortyfour');
     element.classList.add("levelone");
     // setting icon
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv1.png";
     // Add advice
  
 
 
     }
     else if (uvi_round_fortyfour == 2 )
     {
     // Adding row color
     var element = document.getElementById('fortyfour');
     element.classList.add("leveltwo");
     // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv2.png";
     
     
     }  
 else if (uvi_round_fortyfour == 3 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelthree");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv3.png";
       
     }  
     else if (uvi_round_fortyfour == 4 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelfour");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv4.png";
 
    
     }  
     else if (uvi_round_fortyfour == 5 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelfive");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv5.png";
    
     }  
     else if (uvi_round_fortyfour == 6 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelsix");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv6.png";
    
     }  
     else if (uvi_round_fortyfour == 7 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelseven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv7.png";
     
     }  
     else if (uvi_round_fortyfour == 8 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("leveleight");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv8.png";
    
     }  
     else if (uvi_round_fortyfour == 9 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelnine");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv9.png";
    
     }  
     else if (uvi_round_fortyfour == 10 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("levelten");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv10.png";
      
     }  
     else if (uvi_round_fortyfour >= 11 )
     {
       var element = document.getElementById('fortyfour');
       element.classList.add("leveleleven");
      
        // setting icon 
     document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv11.png";
      
     }  
     

}
rowfortyfour();

  
  
  
  
  
  