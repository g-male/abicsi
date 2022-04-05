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




async function dailytest(){
daily_uvi_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=17.99702&lon=-76.79358&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'



daily_uvi_response = await fetch (daily_uvi_url);
daily_uvi_data = await daily_uvi_response.json();

daily_uvi_value = daily_uvi_data.daily[1].uvi;

}
dailytest();

  var uvi_round_one;
  function rowOne_UV() {
   
    $.ajax({
      type: 'GET',
      dataType: 'json',
      beforeSend: function(request) {
        request.setRequestHeader('x-access-token', '347a6ce4a59336d586ed8516c4d4a434');
      },
      url: 'https://api.openuv.io/api/v1/uv?lat=48.85341&lng=2.3488',
      success: function(response) {
        //handle successful response
        $.each(response, function(i, result){
          console.log(result.uv_max)

          uvi_round_1 = Math.round(result.uv_max);

          console.log(uvi_round_1);
        })
        //passing to other function.
        rowOne(uvi_round_1);
        console.log(response)
      },
      error: function(response) {
        // handle error response
        console.log('error', response);
      }
    });

   console.log(uvi_round_one);
    
}

rowOne_UV();

async function rowOne(uvi_round_one){
  // uvi_url_one = 'https://api.openweathermap.org/data/2.5/onecall?lat=48.85341&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
   location_name_one = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=48.85341&lng=2.3488&username=skinnyreggae'
 
console.log(uvi_round_one)
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
  


  async function rowTwo(){
    uvi_url_two = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.77925&lon=11.24626&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_two = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=43.77925&lng=11.24626&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_two = await fetch (uvi_url_two);
    data_two = await response_two.json();
  
    //Pull data for location info
    localresponse_two = await fetch(location_name_two);
    localdata_two = await localresponse_two.json();
  // check to see if data is being pulled 
  
  
  console.log(data_two)
 
  
  //getting co-ordinates 
       const latitude_two= data_two.lat;
        
        const longitude_two = data_two.lon;
       const uvi_two = data_two.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_two = localdata_two.geonames[0].countryName;
      city_name_two = localdata_two.geonames[0].name;
  
      
      const uvi_round_two = Math.round(uvi_two);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_two').textContent = uvi_round_two;
      //Location name 
      document.getElementById('city_name_two').textContent = city_name_two;
      document.getElementById('country_name_two').textContent = country_name_two;
     
      //SET ROW COLOUR 
   
      if (uvi_round_two <=1 ) {
        // setting colour
        var element = document.getElementById('two');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_two").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-two');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_two == 2 )
        {
        // Adding row color
        var element = document.getElementById('two');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-two');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_two == 3 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-two');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_two == 4 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-two');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_two == 5 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-two');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_two == 6 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-two');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_two == 7 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-two');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_two == 8 )
        {
          var element = document.getElementById('two');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-two');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_two == 9 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-two');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_two == 10 )
        {
          var element = document.getElementById('two');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-two');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_two >= 11 )
        {
          var element = document.getElementById('two');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_two").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-two');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  }
  rowTwo();
  
  async function rowThree(){
    uvi_url_three= 'https://api.openweathermap.org/data/2.5/onecall?lat=35.6895&lon=139.69171&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_three= 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=35.6895&lng=139.69171&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_three = await fetch (uvi_url_three);
    data_three = await response_three.json();
  
    //Pull data for location info
    localresponse_three = await fetch(location_name_three);
    localdata_three = await localresponse_three.json();
  
    // check to see if data is being pulled 
  

       
  
  //getting co-ordinates 
       const latitude_three= data_three.lat;
        
        const longitude_three = data_three.lon;
       const uvi_three = data_three.daily[1].uvi;
        
      
 
  // getting exact location information 
      country_name_three = localdata_three.geonames[0].countryName;
      city_name_three = localdata_three.geonames[0].name;
  
    
     
   
      
       const uvi_round_three = Math.round(uvi_three);
  
      //display on html 
     //UVI
       document.getElementById('uvi_three').textContent = uvi_round_three;
      //Location name 
      document.getElementById('city_name_three').textContent = city_name_three;
      document.getElementById('country_name_three').textContent = country_name_three;
  
  
      //SET ROW COLOUR 
     
      if (uvi_round_three <=1 ) {
        // setting colour
        var element = document.getElementById('three');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_three").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-three');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_three == 2 )
        {
        // Adding row color
        var element = document.getElementById('three');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-three');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_three == 3 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-three');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_three == 4 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-three');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_three == 5 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-three');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_three == 6 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-three');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_three == 7 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-three');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_three == 8 )
        {
          var element = document.getElementById('three');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-three');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_three == 9 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-three');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_three == 10 )
        {
          var element = document.getElementById('three');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-three');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_three >= 11 )
        {
          var element = document.getElementById('three');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_three").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-three');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  }
  rowThree();
  
  async function rowFour(){
    uvi_url_four = 'https://api.openweathermap.org/data/2.5/onecall?lat=31.63416&lon=-7.99994&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_four = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=31.63416&lng=-7.99994&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_four = await fetch (uvi_url_four);
    data_four = await response_four.json();
  
    //Pull data for location info
    localresponse_four = await fetch(location_name_four);
    localdata_four = await localresponse_four.json();
  // check to see if data is being pulled 
  
   
  
  //getting co-ordinates 
       const latitude_four = data_four.lat;
        
        const longitude_four = data_four.lon;
       const uvi_four = data_four.daily[1].uvi;
        
  
  
  // getting exact location information 
      country_name_four = localdata_four.geonames[0].countryName;
      city_name_four = localdata_four.geonames[0].name;
  
    
     
       
      const uvi_round_four = Math.round(uvi_four);
      //display on html 
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
        var uvadvice = document.getElementById('advice-four');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_four == 2 )
        {
        // Adding row color
        var element = document.getElementById('four');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-four');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_four == 3 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-four');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_four == 4 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-four');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_four == 5 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-four');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_four == 6 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-four');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_four == 7 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-four');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_four == 8 )
        {
          var element = document.getElementById('four');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-four');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_four == 9 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-four');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_four == 10 )
        {
          var element = document.getElementById('four');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-four');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_four >= 11 )
        {
          var element = document.getElementById('four');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_four").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-four');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  }
  rowFour();
  
  
  async function rowFive(){
    uvi_url_five = 'https://api.openweathermap.org/data/2.5/onecall?lat=28.63576&lon=77.22445&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_five = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=28.63576&lng=77.22445&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_five = await fetch (uvi_url_five);
    data_five = await response_five.json();
  
    //Pull data for location info
    localresponse_five = await fetch(location_name_five);
    localdata_five = await localresponse_five.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_five = data_five.lat;
        
        const longitude_five = data_five.lon;
       const uvi_five = data_five.daily[1].uvi;
   
  
  // getting exact location information 
      country_name_five = localdata_five.geonames[0].countryName;
      city_name_five = localdata_five.geonames[0].name;
  
    
    
       
      const uvi_round_five = Math.round(uvi_five);
      //display on html 
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
        var uvadvice = document.getElementById('advice-five');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_five == 2 )
        {
        // Adding row color
        var element = document.getElementById('five');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-five');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_five == 3 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-five');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_five == 4 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-five');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_five == 5 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-five');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_five == 6 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-five');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_five == 7 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-five');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_five == 8 )
        {
          var element = document.getElementById('five');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-five');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_five == 9 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-five');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_five == 10 )
        {
          var element = document.getElementById('five');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-five');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_five >= 11 )
        {
          var element = document.getElementById('five');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_five").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-five');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  
  }
  rowFive();
  
  async function rowSix(){
    uvi_url_six = 'https://api.openweathermap.org/data/2.5/onecall?lat=24.14437&lon=-110.3005&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_six = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=24.14437&lng=-110.3005&radius=30&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_six = await fetch (uvi_url_six);
    data_six = await response_six.json();
  
    //Pull data for location info
    localresponse_six = await fetch(location_name_six);
    localdata_six = await localresponse_six.json();
  // check to see if data is being pulled 
  
  
  console.log(data_six)
  
  //getting co-ordinates 
       const latitude_six= data_six.lat;
        
        const longitude_six = data_six.lon;
       const uvi_six = data_six.daily[1].uvi;
        
       
  
  // getting exact location information  
  // exception for UNITED STATES country name = adminName city name = .name
      country_name_six = localdata_six.geonames[0].countryName;
      city_name_six = localdata_six.geonames[0].name;
  
   
     // ROUNDING  THE UVI NUMBER
      const uvi_round_six = Math.round(uvi_six);
    

     
      //display on html 
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
        var uvadvice = document.getElementById('advice-six');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_six == 2 )
        {
        // Adding row color
        var element = document.getElementById('six');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-six');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_six == 3 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-six');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_six == 4 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-six');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_six == 5 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-six');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_six == 6 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-six');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_six == 7 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-six');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_six == 8 )
        {
          var element = document.getElementById('six');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-six');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_six == 9 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-six');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_six == 10 )
        {
          var element = document.getElementById('six');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-six');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_six >= 11 )
        {
          var element = document.getElementById('six');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_six").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-six');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  
  }
  rowSix();
  
  
  async function rowSeven(){
    uvi_url_seven = 'https://api.openweathermap.org/data/2.5/onecall?lat=17.99702&lon=-76.79358&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_seven = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=17.99702&lng= -76.79358&radius=30&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_seven = await fetch (uvi_url_seven);
    data_seven = await response_seven.json();
  
    //Pull data for location info
    localresponse_seven = await fetch(location_name_seven);
    localdata_seven = await localresponse_seven.json();
  // check to see if data is being pulled 
  
  
       
  
  //getting co-ordinates 
       const latitude_seven= data_seven.lat;
        
        const longitude_seven = data_seven.lon;
       const uvi_seven = data_seven.daily[1].uvi;
        
     // ROUNDING  THE UVI NUMBER
     const uvi_round_seven = Math.round(uvi_seven);
  
  // getting exact location information  
  // exception for UNITED STATES country name = adminName city name = .name
      country_name_seven = localdata_seven.geonames[0].countryName;
      city_name_seven = localdata_seven.geonames[0].name;
  
    
      
       
    
      //display on html 
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
        var uvadvice = document.getElementById('advice-seven');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_seven == 2 )
        {
        // Adding row color
        var element = document.getElementById('seven');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-seven');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_seven == 3 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-seven');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_seven == 4 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-seven');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_seven == 5 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-seven');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_seven == 6 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-seven');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_seven == 7 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_seven == 8 )
        {
          var element = document.getElementById('seven');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_seven == 9 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_seven == 10 )
        {
          var element = document.getElementById('seven');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_seven >= 11 )
        {
          var element = document.getElementById('seven');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_seven").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  
  
  }
  rowSeven();
  
  
  async function rowEight(){
    uvi_url_eight = 'https://api.openweathermap.org/data/2.5/onecall?lat=14.6042&lon=120.9822&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_eight = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=14.6042&lng=120.9822&radius=30&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_eight = await fetch (uvi_url_eight);
    data_eight = await response_eight.json();
  
    //Pull data for location info
    localresponse_eight = await fetch(location_name_eight);
    localdata_eight = await localresponse_eight.json();
  
    // check to see if data is being pulled 
  
  
       
  
  //getting co-ordinates 
       const latitude_eight= data_eight.lat;
        
        const longitude_eight = data_eight.lon;
       const uvi_eight = data_eight.daily[1].uvi;
        
    
  
  // getting exact location information  
  // exception for UNITED STATES country name = adminName city name = .name
      country_name_eight = localdata_eight.geonames[0].countryName;
      city_name_eight = localdata_eight.geonames[0].name;
  
    
      
       
   // ROUNDING  THE UVI NUMBER
   const uvi_round_eight = Math.round(uvi_eight);
  
 
      //display on html 
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
        var uvadvice = document.getElementById('advice-eight');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_eight == 2 )
        {
        // Adding row color
        var element = document.getElementById('eight');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-eight');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_eight == 3 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-eight');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_eight == 4 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-eight');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_eight == 5 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-eight');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_eight == 6 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-eight');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_eight == 7 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eight == 8 )
        {
          var element = document.getElementById('eight');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eight == 9 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eight == 10 )
        {
          var element = document.getElementById('eight');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eight >= 11 )
        {
          var element = document.getElementById('eight');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_eight").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  
  
  }
  rowEight();
  
  
  async function rowNine(){
    uvi_url_nine = 'https://api.openweathermap.org/data/2.5/onecall?lat=6.8334&lon=80.9853&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_nine = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=6.8334&lng=80.9853&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_nine = await fetch (uvi_url_nine);
    data_nine = await response_nine.json();
  
    //Pull data for location info
    localresponse_nine = await fetch(location_name_nine);
    localdata_nine = await localresponse_nine.json();
  // check to see if data is being pulled 
  
  
 
  
  //getting co-ordinates 
       const latitude_nine= data_nine.lat;
        
        const longitude_nine = data_nine.lon;
       const uvi_nine = data_nine.daily[1].uvi;
        
    
  
  // getting exact location information  
  // exception for UNITED STATES country name = adminName city name = .name
      country_name_nine = localdata_nine.geonames[0].countryName;
      city_name_nine = localdata_nine.geonames[0].name;
  
     
   // ROUNDING  THE UVI NUMBER
   const uvi_round_nine = Math.round(uvi_nine);
    
      //display on html 
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
        var uvadvice = document.getElementById('advice-nine');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_nine == 2 )
        {
        // Adding row color
        var element = document.getElementById('nine');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-nine');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_nine == 3 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-nine');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_nine == 4 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-nine');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_nine == 5 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-nine');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_nine == 6 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-nine');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_nine == 7 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_nine == 8 )
        {
          var element = document.getElementById('nine');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_nine == 9 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_nine == 10 )
        {
          var element = document.getElementById('nine');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_nine >= 11 )
        {
          var element = document.getElementById('nine');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_nine").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  
  
  }
  rowNine();
  
  async function rowTen(){
    uvi_url_ten = 'https://api.openweathermap.org/data/2.5/onecall?lat=9.07333&lon=-63.505&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_ten= 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=9.07333&lng=-63.505&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_ten = await fetch (uvi_url_ten);
    data_ten = await response_ten.json();
  
    //Pull data for location info
    localresponse_ten = await fetch(location_name_ten);
    localdata_ten = await localresponse_ten.json();
  // check to see if data is being pulled 
  
  
       
  
  //getting co-ordinates 
       const latitude_ten= data_ten.lat;
        
        const longitude_ten = data_ten.lon;
       const uvi_ten = data_ten.daily[1].uvi;
        
   
  
  // getting exact location information  
  // exception for UNITED STATES country name = adminName city name = .name
      country_name_ten = localdata_ten.geonames[0].countryName;
      city_name_ten = localdata_ten.geonames[0].name;
  
    
 
        // ROUNDING  THE UVI NUMBER
      const uvi_round_ten = Math.round(uvi_ten);
    

     
      //display on html 
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
        var uvadvice = document.getElementById('advice-ten');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_ten == 2 )
        {
        // Adding row color
        var element = document.getElementById('ten');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-ten');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_ten == 3 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-ten');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_ten == 4 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-ten');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_ten == 5 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-ten');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_ten == 6 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-ten');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_ten == 7 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-ten');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_ten == 8 )
        {
          var element = document.getElementById('ten');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-ten');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_ten == 9 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-ten');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_ten == 10 )
        {
          var element = document.getElementById('ten');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-ten');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_ten >= 11 )
        {
          var element = document.getElementById('ten');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_ten").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-ten');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
  
  
  }
  rowTen();

  async function rowEleven(){
    uvi_url_eleven = 'https://api.openweathermap.org/data/2.5/onecall?lat=-33.45694&lon=-70.64827&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_eleven= 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-33.45694&lng=-70.64827&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_eleven = await fetch (uvi_url_eleven);
    data_eleven = await response_eleven.json();
  
    //Pull data for location info
    localresponse_eleven = await fetch(location_name_eleven);
    localdata_eleven = await localresponse_eleven.json();
  // check to see if data is being pulled 
  
  
       
  
  //getting co-ordinates 
       const latitude_eleven= data_eleven.lat;
        
        const longitude_eleven = data_eleven.lon;
       const uvi_eleven = data_eleven.daily[1].uvi;
  
  
  // getting exact location information  
  // exception for UNITED STATES country name = adminName city name = .name
      country_name_eleven = localdata_eleven.geonames[0].countryName;
      city_name_eleven = localdata_eleven.geonames[0].name;
    
  
     
        // ROUNDING  THE UVI NUMBER
      const uvi_round_eleven = Math.round(uvi_eleven);
    

      //display on html 
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
        var uvadvice = document.getElementById('advice-eleven');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
        
    
    
        }
        else if (uvi_round_eleven == 2 )
        {
        // Adding row color
        var element = document.getElementById('eleven');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-eleven');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
            
        
        
        }  
    else if (uvi_round_eleven == 3 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-eleven');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
            
        
        
        }  
        else if (uvi_round_eleven == 4 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-eleven');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_eleven == 5 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-eleven');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
          
        }  
        else if (uvi_round_eleven == 6 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-eleven');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_eleven == 7 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eleven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eleven == 8 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eleven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eleven == 9 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eleven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eleven == 10 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eleven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
           
        }  
        else if (uvi_round_eleven >= 11 )
        {
          var element = document.getElementById('eleven');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_eleven").src="../uv-icons/uv11.png";
           // Add advice
          
        }  
  
  
  }
  rowEleven();

  async function rowtwelve(){
    uvi_url_twelve = 'https://api.openweathermap.org/data/2.5/onecall?lat=25.04776&lon=121.53185&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twelve = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=25.04776&lng=121.53185&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twelve = await fetch (uvi_url_twelve);
    data_twelve = await response_twelve.json();
  
    //Pull data for location info
    localresponse_twelve = await fetch(location_name_twelve);
    localdata_twelve = await localresponse_twelve.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twelve= data_twelve.lat;
        
        const longitude_twelve = data_twelve.lon;
       const uvi_twelve = data_twelve.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twelve = localdata_twelve.geonames[0].countryName;
      city_name_twelve = localdata_twelve.geonames[0].name;
  
    
      const uvi_round_twelve = Math.round(uvi_twelve);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twelve').textContent = uvi_round_twelve;
      //Location name 
      document.getElementById('city_name_twelve').textContent = city_name_twelve;
      document.getElementById('country_name_twelve').textContent = country_name_twelve;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twelve <=1 ) {
        // setting colour
        var element = document.getElementById('twelve');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twelve');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twelve == 2 )
        {
        // Adding row color
        var element = document.getElementById('twelve');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twelve');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twelve == 3 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twelve');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twelve == 4 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twelve');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twelve == 5 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twelve');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twelve == 6 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twelve');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twelve == 7 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twelve');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twelve == 8 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twelve');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twelve == 9 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twelve');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twelve == 10 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twelve');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twelve >= 11 )
        {
          var element = document.getElementById('twelve');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twelve").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twelve');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwelve();

  
  async function rowthirteen(){
    uvi_url_thirteen = 'https://api.openweathermap.org/data/2.5/onecall?lat=15.35472&lon=44.20667&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=15.35472&lng=44.20667&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirteen = await fetch (uvi_url_thirteen);
    data_thirteen = await response_thirteen.json();
  
    //Pull data for location info
    localresponse_thirteen = await fetch(location_name_thirteen);
    localdata_thirteen = await localresponse_thirteen.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirteen= data_thirteen.lat;
        
        const longitude_thirteen = data_thirteen.lon;
       const uvi_thirteen = data_thirteen.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirteen = localdata_thirteen.geonames[0].countryName;
      city_name_thirteen = localdata_thirteen.geonames[0].name;
  
    
      const uvi_round_thirteen = Math.round(uvi_thirteen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirteen').textContent = uvi_round_thirteen;
      //Location name 
      document.getElementById('city_name_thirteen').textContent = city_name_thirteen;
      document.getElementById('country_name_thirteen').textContent = country_name_thirteen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirteen <=1 ) {
        // setting colour
        var element = document.getElementById('thirteen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirteen").src="../uv-icons/uv1.png";
      
    
    
        }
        else if (uvi_round_thirteen == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirteen');
        element.classList.add("levelthirteen");
        
        
        
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

  
  async function rowfourteen(){
    uvi_url_fourteen = 'https://api.openweathermap.org/data/2.5/onecall?lat=-22.90642&lon=-43.18223&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_fourteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-22.90642&lng=-43.18223&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_fourteen = await fetch (uvi_url_fourteen);
    data_fourteen = await response_fourteen.json();
  
    //Pull data for location info
    localresponse_fourteen = await fetch(location_name_fourteen);
    localdata_fourteen = await localresponse_fourteen.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_fourteen= data_fourteen.lat;
        
        const longitude_fourteen = data_fourteen.lon;
       const uvi_fourteen = data_fourteen.daily[1].uvi;
        
       console.log(data_fourteen)
  
  // getting exact location information 
      country_name_fourteen = localdata_fourteen.geonames[0].countryName;
      city_name_fourteen = localdata_fourteen.geonames[0].name;
  
     
      const uvi_round_fourteen = Math.round(uvi_fourteen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_fourteen').textContent = uvi_round_fourteen;
      //Location name 
      document.getElementById('city_name_fourteen').textContent = city_name_fourteen;
      document.getElementById('country_name_fourteen').textContent = country_name_fourteen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_fourteen <=1 ) {
        // setting colour
        var element = document.getElementById('fourteen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-fourteen');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_fourteen == 2 )
        {
        // Adding row color
        var element = document.getElementById('fourteen');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fourteen');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_fourteen == 3 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fourteen');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_fourteen == 4 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-fourteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_fourteen == 5 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fourteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_fourteen == 6 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fourteen');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fourteen == 7 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fourteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_fourteen == 8 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fourteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fourteen == 9 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fourteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_fourteen == 10 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fourteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_fourteen >= 11 )
        {
          var element = document.getElementById('fourteen');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_fourteen").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fourteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowfourteen();

  
  async function rowfifteen(){
    uvi_url_fifteen = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.566&lon=126.9784&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_fifteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=37.566&lng=126.9784&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_fifteen = await fetch (uvi_url_fifteen);
    data_fifteen = await response_fifteen.json();
  
    //Pull data for location info
    localresponse_fifteen = await fetch(location_name_fifteen);
    localdata_fifteen = await localresponse_fifteen.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_fifteen= data_fifteen.lat;
        
        const longitude_fifteen = data_fifteen.lon;
       const uvi_fifteen = data_fifteen.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_fifteen = localdata_fifteen.geonames[0].countryName;
      city_name_fifteen = localdata_fifteen.geonames[0].name;
  
    
      const uvi_round_fifteen = Math.round(uvi_fifteen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_fifteen').textContent = uvi_round_fifteen;
      //Location name 
      document.getElementById('city_name_fifteen').textContent = city_name_fifteen;
      document.getElementById('country_name_fifteen').textContent = country_name_fifteen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_fifteen <=1 ) {
        // setting colour
        var element = document.getElementById('fifteen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-fifteen');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_fifteen == 2 )
        {
        // Adding row color
        var element = document.getElementById('fifteen');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fifteen');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_fifteen == 3 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fifteen');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_fifteen == 4 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-fifteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_fifteen == 5 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fifteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_fifteen == 6 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fifteen');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fifteen == 7 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fifteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_fifteen == 8 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fifteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fifteen == 9 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fifteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_fifteen == 10 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fifteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_fifteen >= 11 )
        {
          var element = document.getElementById('fifteen');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_fifteen").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fifteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowfifteen();

  
  async function rowsixteen(){
    uvi_url_sixteen = 'https://api.openweathermap.org/data/2.5/onecall?lat=1.28967&lon=103.85007&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_sixteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=1.28967&lng=103.85007&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_sixteen = await fetch (uvi_url_sixteen);
    data_sixteen = await response_sixteen.json();
  
    //Pull data for location info
    localresponse_sixteen = await fetch(location_name_sixteen);
    localdata_sixteen = await localresponse_sixteen.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_sixteen= data_sixteen.lat;
        
        const longitude_sixteen = data_sixteen.lon;
       const uvi_sixteen = data_sixteen.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_sixteen = localdata_sixteen.geonames[0].countryName;
      city_name_sixteen = localdata_sixteen.geonames[0].name;
  
     
      const uvi_round_sixteen = Math.round(uvi_sixteen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_sixteen').textContent = uvi_round_sixteen;
      //Location name 
      document.getElementById('city_name_sixteen').textContent = city_name_sixteen;
      document.getElementById('country_name_sixteen').textContent = country_name_sixteen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_sixteen <=1 ) {
        // setting colour
        var element = document.getElementById('sixteen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-sixteen');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_sixteen == 2 )
        {
        // Adding row color
        var element = document.getElementById('sixteen');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-sixteen');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_sixteen == 3 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-sixteen');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_sixteen == 4 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-sixteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_sixteen == 5 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-sixteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_sixteen == 6 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-sixteen');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_sixteen == 7 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-sixteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_sixteen == 8 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-sixteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_sixteen == 9 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-sixteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_sixteen == 10 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-sixteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_sixteen >= 11 )
        {
          var element = document.getElementById('sixteen');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_sixteen").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-sixteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowsixteen();

  
  async function rowseventeen(){
    uvi_url_seventeen = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.50853&lon=-0.12574&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_seventeen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=51.50853&lng=-0.12574&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_seventeen = await fetch (uvi_url_seventeen);
    data_seventeen = await response_seventeen.json();
  
    //Pull data for location info
    localresponse_seventeen = await fetch(location_name_seventeen);
    localdata_seventeen = await localresponse_seventeen.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_seventeen= data_seventeen.lat;
        
        const longitude_seventeen = data_seventeen.lon;
       const uvi_seventeen = data_seventeen.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_seventeen = localdata_seventeen.geonames[0].countryName;
      city_name_seventeen = localdata_seventeen.geonames[0].name;
  
     
      const uvi_round_seventeen = Math.round(uvi_seventeen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_seventeen').textContent = uvi_round_seventeen;
      //Location name 
      document.getElementById('city_name_seventeen').textContent = city_name_seventeen;
      document.getElementById('country_name_seventeen').textContent = country_name_seventeen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_seventeen <=1 ) {
        // setting colour
        var element = document.getElementById('seventeen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-seventeen');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_seventeen == 2 )
        {
        // Adding row color
        var element = document.getElementById('seventeen');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-seventeen');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_seventeen == 3 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-seventeen');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_seventeen == 4 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-seventeen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_seventeen == 5 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-seventeen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_seventeen == 6 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-seventeen');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_seventeen == 7 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seventeen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_seventeen == 8 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seventeen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_seventeen == 9 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seventeen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_seventeen == 10 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seventeen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_seventeen >= 11 )
        {
          var element = document.getElementById('seventeen');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_seventeen").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-seventeen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowseventeen();

  
  async function roweighteen(){
    uvi_url_eighteen = 'https://api.openweathermap.org/data/2.5/onecall?lat=22.27832&lon=114.17469&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_eighteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=22.27832&lng=114.17469&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_eighteen = await fetch (uvi_url_eighteen);
    data_eighteen = await response_eighteen.json();
  
    //Pull data for location info
    localresponse_eighteen = await fetch(location_name_eighteen);
    localdata_eighteen = await localresponse_eighteen.json();
  // check to see if data is being pulled 
  
  
 
  
  //getting co-ordinates 
       const latitude_eighteen= data_eighteen.lat;
        
        const longitude_eighteen = data_eighteen.lon;
       const uvi_eighteen = data_eighteen.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_eighteen = localdata_eighteen.geonames[0].countryName;
      city_name_eighteen = localdata_eighteen.geonames[0].name;
  
   
      const uvi_round_eighteen = Math.round(uvi_eighteen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_eighteen').textContent = uvi_round_eighteen;
      //Location name 
      document.getElementById('city_name_eighteen').textContent = city_name_eighteen;
      document.getElementById('country_name_eighteen').textContent = country_name_eighteen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_eighteen <=1 ) {
        // setting colour
        var element = document.getElementById('eighteen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-eighteen');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_eighteen == 2 )
        {
        // Adding row color
        var element = document.getElementById('eighteen');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-eighteen');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_eighteen == 3 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-eighteen');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_eighteen == 4 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-eighteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_eighteen == 5 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-eighteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_eighteen == 6 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-eighteen');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_eighteen == 7 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eighteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_eighteen == 8 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eighteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_eighteen == 9 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eighteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_eighteen == 10 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eighteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_eighteen >= 11 )
        {
          var element = document.getElementById('eighteen');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_eighteen").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-eighteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  roweighteen();

  
  async function rownineteen(){
    uvi_url_nineteen = 'https://api.openweathermap.org/data/2.5/onecall?lat=-26.202272&lon=28.04363&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_nineteen = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-26.20227&lng=28.04363&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_nineteen = await fetch (uvi_url_nineteen);
    data_nineteen = await response_nineteen.json();
  
    //Pull data for location info
    localresponse_nineteen = await fetch(location_name_nineteen);
    localdata_nineteen = await localresponse_nineteen.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_nineteen= data_nineteen.lat;
        
        const longitude_nineteen = data_nineteen.lon;
       const uvi_nineteen = data_nineteen.daily[1].uvi;
        
      
  
  // getting exact location information 
      country_name_nineteen = localdata_nineteen.geonames[0].countryName;
      city_name_nineteen = localdata_nineteen.geonames[0].name;
  
   
      const uvi_round_nineteen = Math.round(uvi_nineteen);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_nineteen').textContent = uvi_round_nineteen;
      //Location name 
      document.getElementById('city_name_nineteen').textContent = city_name_nineteen;
      document.getElementById('country_name_nineteen').textContent = country_name_nineteen;
     
      //SET ROW COLOUR 
   
      if (uvi_round_nineteen <=1 ) {
        // setting colour
        var element = document.getElementById('nineteen');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-nineteen');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_nineteen == 2 )
        {
        // Adding row color
        var element = document.getElementById('nineteen');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-nineteen');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_nineteen == 3 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-nineteen');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_nineteen == 4 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-nineteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_nineteen == 5 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-nineteen');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_nineteen == 6 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-nineteen');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_nineteen == 7 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nineteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_nineteen == 8 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nineteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_nineteen == 9 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nineteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_nineteen == 10 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nineteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_nineteen >= 11 )
        {
          var element = document.getElementById('nineteen');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_nineteen").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-nineteen');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rownineteen();


  async function rowtwenty(){
    uvi_url_twenty = 'https://api.openweathermap.org/data/2.5/onecall?lat=24.8608&lon=67.0104&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twenty = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=24.8608&lng=67.0104&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twenty = await fetch (uvi_url_twenty);
    data_twenty = await response_twenty.json();
  
    //Pull data for location info
    localresponse_twenty = await fetch(location_name_twenty);
    localdata_twenty = await localresponse_twenty.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twenty= data_twenty.lat;
        
        const longitude_twenty = data_twenty.lon;
       const uvi_twenty = data_twenty.daily[1].uvi;
        
     
       console.log(data_twenty)
  // getting exact location information 
      country_name_twenty = localdata_twenty.geonames[0].countryName;
      city_name_twenty = localdata_twenty.geonames[0].name;
  
      
      const uvi_round_twenty = Math.round(uvi_twenty);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twenty').textContent = uvi_round_twenty;
      //Location name 
      document.getElementById('city_name_twenty').textContent = city_name_twenty;
      document.getElementById('country_name_twenty').textContent = country_name_twenty;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twenty <=1 ) {
        // setting colour
        var element = document.getElementById('twenty');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twenty');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twenty == 2 )
        {
        // Adding row color
        var element = document.getElementById('twenty');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twenty');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twenty == 3 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twenty');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twenty == 4 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twenty');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twenty == 5 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twenty');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twenty == 6 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twenty');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twenty == 7 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twenty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twenty == 8 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twenty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twenty == 9 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twenty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twenty == 10 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twenty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twenty >= 11 )
        {
          var element = document.getElementById('twenty');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twenty").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twenty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwenty();


  async function rowtwentyone(){
    uvi_url_twentyone = 'https://api.openweathermap.org/data/2.5/onecall?lat=-12.04318&lon=-77.02824&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentyone = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-12.04318&lng=-77.02824&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentyone = await fetch (uvi_url_twentyone);
    data_twentyone = await response_twentyone.json();
  
    //Pull data for location info
    localresponse_twentyone = await fetch(location_name_twentyone);
    localdata_twentyone = await localresponse_twentyone.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentyone= data_twentyone.lat;
        
        const longitude_twentyone = data_twentyone.lon;
       const uvi_twentyone = data_twentyone.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentyone = localdata_twentyone.geonames[0].countryName;
      city_name_twentyone = localdata_twentyone.geonames[0].name;
  
  
      const uvi_round_twentyone = Math.round(uvi_twentyone);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentyone').textContent = uvi_round_twentyone;
      //Location name 
      document.getElementById('city_name_twentyone').textContent = city_name_twentyone;
      document.getElementById('country_name_twentyone').textContent = country_name_twentyone;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentyone <=1 ) {
        // setting colour
        var element = document.getElementById('twentyone');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentyone');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentyone == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentyone');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyone');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentyone == 3 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyone');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentyone == 4 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentyone');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentyone == 5 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyone');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentyone == 6 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyone');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyone == 7 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentyone == 8 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyone == 9 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentyone == 10 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentyone >= 11 )
        {
          var element = document.getElementById('twentyone');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyone").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentyone();


  async function rowtwentytwo(){
    uvi_url_twentytwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=-33.86785&lon=151.20732&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentytwo = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=-33.86785&lng=151.20732&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentytwo = await fetch (uvi_url_twentytwo);
    data_twentytwo = await response_twentytwo.json();
  
    //Pull data for location info
    localresponse_twentytwo = await fetch(location_name_twentytwo);
    localdata_twentytwo = await localresponse_twentytwo.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentytwo= data_twentytwo.lat;
        
        const longitude_twentytwo = data_twentytwo.lon;
       const uvi_twentytwo = data_twentytwo.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentytwo = localdata_twentytwo.geonames[0].countryName;
      city_name_twentytwo = localdata_twentytwo.geonames[0].name;
  
  
      const uvi_round_twentytwo = Math.round(uvi_twentytwo);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentytwo').textContent = uvi_round_twentytwo;
      //Location name 
      document.getElementById('city_name_twentytwo').textContent = city_name_twentytwo;
      document.getElementById('country_name_twentytwo').textContent = country_name_twentytwo;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentytwo <=1 ) {
        // setting colour
        var element = document.getElementById('twentytwo');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentytwo');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentytwo == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentytwo');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentytwo');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentytwo == 3 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentytwo');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentytwo == 4 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentytwo');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentytwo == 5 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentytwo');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentytwo == 6 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentytwo');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentytwo == 7 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentytwo == 8 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentytwo == 9 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentytwo == 10 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentytwo >= 11 )
        {
          var element = document.getElementById('twentytwo');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentytwo").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentytwo();

  
  async function rowtwentythree(){
    uvi_url_twentythree = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.70011&lon=-79.4163&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentythree = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=43.70011&lng=-79.4163&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentythree = await fetch (uvi_url_twentythree);
    data_twentythree = await response_twentythree.json();
  
    //Pull data for location info
    localresponse_twentythree = await fetch(location_name_twentythree);
    localdata_twentythree = await localresponse_twentythree.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentythree= data_twentythree.lat;
        
        const longitude_twentythree = data_twentythree.lon;
       const uvi_twentythree = data_twentythree.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentythree = localdata_twentythree.geonames[0].countryName;
      city_name_twentythree = localdata_twentythree.geonames[0].name;
 
      const uvi_round_twentythree = Math.round(uvi_twentythree);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentythree').textContent = uvi_round_twentythree;
      //Location name 
      document.getElementById('city_name_twentythree').textContent = city_name_twentythree;
      document.getElementById('country_name_twentythree').textContent = country_name_twentythree;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentythree <=1 ) {
        // setting colour
        var element = document.getElementById('twentythree');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentythree');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentythree == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentythree');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentythree');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentythree == 3 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentythree');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentythree == 4 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentythree');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentythree == 5 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentythree');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentythree == 6 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentythree');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentythree == 7 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentythree == 8 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentythree == 9 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentythree == 10 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentythree >= 11 )
        {
          var element = document.getElementById('twentythree');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentythree").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentythree();

  
  async function rowtwentyfour(){
    uvi_url_twentyfour = 'https://api.openweathermap.org/data/2.5/onecall?lat=19.42847&lon=-99.12766&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentyfour = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=19.42847&lng=-99.12766&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentyfour = await fetch (uvi_url_twentyfour);
    data_twentyfour = await response_twentyfour.json();
  
    //Pull data for location info
    localresponse_twentyfour = await fetch(location_name_twentyfour);
    localdata_twentyfour = await localresponse_twentyfour.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentyfour= data_twentyfour.lat;
        
        const longitude_twentyfour = data_twentyfour.lon;
       const uvi_twentyfour = data_twentyfour.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentyfour = localdata_twentyfour.geonames[0].countryName;
      city_name_twentyfour = localdata_twentyfour.geonames[0].name;
  
     
      const uvi_round_twentyfour = Math.round(uvi_twentyfour);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentyfour').textContent = uvi_round_twentyfour;
      //Location name 
      document.getElementById('city_name_twentyfour').textContent = city_name_twentyfour;
      document.getElementById('country_name_twentyfour').textContent = country_name_twentyfour;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentyfour <=1 ) {
        // setting colour
        var element = document.getElementById('twentyfour');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentyfour');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentyfour == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentyfour');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyfour');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentyfour == 3 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyfour');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentyfour == 4 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentyfour');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentyfour == 5 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyfour');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentyfour == 6 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyfour');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyfour == 7 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentyfour == 8 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyfour == 9 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentyfour == 10 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentyfour >= 11 )
        {
          var element = document.getElementById('twentyfour');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfour").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentyfour();

  
  async function rowtwentyfive(){
    uvi_url_twentyfive = 'https://api.openweathermap.org/data/2.5/onecall?lat=6.45407&lon=3.39467&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentyfive = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=6.45407&lng=3.39467&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentyfive = await fetch (uvi_url_twentyfive);
    data_twentyfive = await response_twentyfive.json();
  
    //Pull data for location info
    localresponse_twentyfive = await fetch(location_name_twentyfive);
    localdata_twentyfive = await localresponse_twentyfive.json();
  // check to see if data is being pulled 
  
  
  console.log(data_twentyfive)
  
  //getting co-ordinates 
       const latitude_twentyfive= data_twentyfive.lat;
        
        const longitude_twentyfive = data_twentyfive.lon;
       const uvi_twentyfive = data_twentyfive.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentyfive = localdata_twentyfive.geonames[0].countryName;
      city_name_twentyfive = localdata_twentyfive.geonames[0].name;
  
      
      const uvi_round_twentyfive = Math.round(uvi_twentyfive);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentyfive').textContent = uvi_round_twentyfive;
      //Location name 
      document.getElementById('city_name_twentyfive').textContent = city_name_twentyfive;
      document.getElementById('country_name_twentyfive').textContent = country_name_twentyfive;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentyfive <=1 ) {
        // setting colour
        var element = document.getElementById('twentyfive');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentyfive');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentyfive == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentyfive');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyfive');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentyfive == 3 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyfive');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentyfive == 4 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentyfive');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentyfive == 5 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyfive');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentyfive == 6 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyfive');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyfive == 7 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentyfive == 8 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyfive == 9 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentyfive == 10 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentyfive >= 11 )
        {
          var element = document.getElementById('twentyfive');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyfive").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentyfive();

  
  async function rowtwentysix(){
    uvi_url_twentysix = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.71427&lon=-74.00597&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentysix = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=40.71427&lng=-74.00597&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentysix = await fetch (uvi_url_twentysix);
    data_twentysix = await response_twentysix.json();
  
    //Pull data for location info
    localresponse_twentysix = await fetch(location_name_twentysix);
    localdata_twentysix = await localresponse_twentysix.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentysix= data_twentysix.lat;
        
        const longitude_twentysix = data_twentysix.lon;
       const uvi_twentysix = data_twentysix.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentysix = localdata_twentysix.geonames[0].countryName;
      city_name_twentysix = localdata_twentysix.geonames[0].name;
  
   
      const uvi_round_twentysix = Math.round(uvi_twentysix);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentysix').textContent = uvi_round_twentysix;
      //Location name 
      document.getElementById('city_name_twentysix').textContent = city_name_twentysix;
      document.getElementById('country_name_twentysix').textContent = country_name_twentysix;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentysix <=1 ) {
        // setting colour
        var element = document.getElementById('twentysix');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentysix');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentysix == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentysix');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentysix');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentysix == 3 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentysix');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentysix == 4 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentysix');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentysix == 5 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentysix');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentysix == 6 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentysix');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentysix == 7 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentysix == 8 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentysix == 9 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentysix == 10 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentysix >= 11 )
        {
          var element = document.getElementById('twentysix');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentysix").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentysix();

  
  async function rowtwentyseven(){
    uvi_url_twentyseven = 'https://api.openweathermap.org/data/2.5/onecall?lat=28.26689&lon=83.96851&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentyseven = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=28.26689&lng=83.96851&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentyseven = await fetch (uvi_url_twentyseven);
    data_twentyseven = await response_twentyseven.json();
  
    //Pull data for location info
    localresponse_twentyseven = await fetch(location_name_twentyseven);
    localdata_twentyseven = await localresponse_twentyseven.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentyseven= data_twentyseven.lat;
        
        const longitude_twentyseven = data_twentyseven.lon;
       const uvi_twentyseven = data_twentyseven.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentyseven = localdata_twentyseven.geonames[0].countryName;
      city_name_twentyseven = localdata_twentyseven.geonames[0].name;
  

      const uvi_round_twentyseven = Math.round(uvi_twentyseven);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentyseven').textContent = uvi_round_twentyseven;
      //Location name 
      document.getElementById('city_name_twentyseven').textContent = city_name_twentyseven;
      document.getElementById('country_name_twentyseven').textContent = country_name_twentyseven;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentyseven <=1 ) {
        // setting colour
        var element = document.getElementById('twentyseven');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentyseven');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentyseven == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentyseven');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyseven');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentyseven == 3 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyseven');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentyseven == 4 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentyseven');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentyseven == 5 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyseven');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentyseven == 6 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyseven');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyseven == 7 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyseven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentyseven == 8 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyseven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyseven == 9 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyseven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentyseven == 10 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyseven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentyseven >= 11 )
        {
          var element = document.getElementById('twentyseven');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyseven").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyseven');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentyseven();

  
  async function rowtwentyeight(){
    uvi_url_twentyeight = 'https://api.openweathermap.org/data/2.5/onecall?lat=15.33805&lon=38.93184&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentyeight = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=15.33805&lng=38.93184&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentyeight = await fetch (uvi_url_twentyeight);
    data_twentyeight = await response_twentyeight.json();
  
    //Pull data for location info
    localresponse_twentyeight = await fetch(location_name_twentyeight);
    localdata_twentyeight = await localresponse_twentyeight.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentyeight= data_twentyeight.lat;
        
        const longitude_twentyeight = data_twentyeight.lon;
       const uvi_twentyeight = data_twentyeight.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentyeight = localdata_twentyeight.geonames[0].countryName;
      city_name_twentyeight = localdata_twentyeight.geonames[0].name;
  
 
      const uvi_round_twentyeight = Math.round(uvi_twentyeight);
       
      console.log(data_twentyeight)
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentyeight').textContent = uvi_round_twentyeight;
      //Location name 
      document.getElementById('city_name_twentyeight').textContent = city_name_twentyeight;
      document.getElementById('country_name_twentyeight').textContent = country_name_twentyeight;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentyeight <=1 ) {
        // setting colour
        var element = document.getElementById('twentyeight');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentyeight');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentyeight == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentyeight');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyeight');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentyeight == 3 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentyeight');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentyeight == 4 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentyeight');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentyeight == 5 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyeight');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentyeight == 6 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentyeight');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyeight == 7 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentyeight == 8 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentyeight == 9 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentyeight == 10 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentyeight >= 11 )
        {
          var element = document.getElementById('twentyeight');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentyeight").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentyeight();

  
  async function rowtwentynine(){
    uvi_url_twentynine = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.52437&lon=13.41053&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_twentynine = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=52.52437&lng=13.41053&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_twentynine = await fetch (uvi_url_twentynine);
    data_twentynine = await response_twentynine.json();
  
    //Pull data for location info
    localresponse_twentynine = await fetch(location_name_twentynine);
    localdata_twentynine = await localresponse_twentynine.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_twentynine= data_twentynine.lat;
        
        const longitude_twentynine = data_twentynine.lon;
       const uvi_twentynine = data_twentynine.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_twentynine = localdata_twentynine.geonames[0].countryName;
      city_name_twentynine = localdata_twentynine.geonames[0].name;
  
    
      const uvi_round_twentynine = Math.round(uvi_twentynine);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_twentynine').textContent = uvi_round_twentynine;
      //Location name 
      document.getElementById('city_name_twentynine').textContent = city_name_twentynine;
      document.getElementById('country_name_twentynine').textContent = country_name_twentynine;
     
      //SET ROW COLOUR 
   
      if (uvi_round_twentynine <=1 ) {
        // setting colour
        var element = document.getElementById('twentynine');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-twentynine');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_twentynine == 2 )
        {
        // Adding row color
        var element = document.getElementById('twentynine');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentynine');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_twentynine == 3 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-twentynine');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_twentynine == 4 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-twentynine');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_twentynine == 5 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentynine');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_twentynine == 6 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-twentynine');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentynine == 7 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_twentynine == 8 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_twentynine == 9 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_twentynine == 10 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_twentynine >= 11 )
        {
          var element = document.getElementById('twentynine');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_twentynine").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-twentynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowtwentynine();


  async function rowthirty(){
    uvi_url_thirty = 'https://api.openweathermap.org/data/2.5/onecall?lat=5.55602&lon=-0.1969&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirty = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=5.55602&lng=-0.1969&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirty = await fetch (uvi_url_thirty);
    data_thirty = await response_thirty.json();
  
    //Pull data for location info
    localresponse_thirty = await fetch(location_name_thirty);
    localdata_thirty = await localresponse_thirty.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirty= data_thirty.lat;
        
        const longitude_thirty = data_thirty.lon;
       const uvi_thirty = data_thirty.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirty = localdata_thirty.geonames[0].countryName;
      city_name_thirty = localdata_thirty.geonames[0].name;
  
     
      const uvi_round_thirty = Math.round(uvi_thirty);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirty').textContent = uvi_round_thirty;
      //Location name 
      document.getElementById('city_name_thirty').textContent = city_name_thirty;
      document.getElementById('country_name_thirty').textContent = country_name_thirty;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirty <=1 ) {
        // setting colour
        var element = document.getElementById('thirty');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirty');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirty == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirty');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirty');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirty == 3 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirty');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirty == 4 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirty');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirty == 5 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirty');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirty == 6 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirty');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirty == 7 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirty == 8 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirty == 9 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirty == 10 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirty >= 11 )
        {
          var element = document.getElementById('thirty');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirty").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirty();

  
  async function rowthirtyone(){
    uvi_url_thirtyone = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.37403&lon=4.88969&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtyone = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=52.37403&lng=4.88969&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtyone = await fetch (uvi_url_thirtyone);
    data_thirtyone = await response_thirtyone.json();
  
    //Pull data for location info
    localresponse_thirtyone = await fetch(location_name_thirtyone);
    localdata_thirtyone = await localresponse_thirtyone.json();
  // check to see if data is being pulled 
  
  
  console.log(data_thirtyone)
  
  //getting co-ordinates 
       const latitude_thirtyone= data_thirtyone.lat;
        
        const longitude_thirtyone = data_thirtyone.lon;
       const uvi_thirtyone = data_thirtyone.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtyone = localdata_thirtyone.geonames[0].countryName;
      city_name_thirtyone = localdata_thirtyone.geonames[0].name;
  
     
      const uvi_round_thirtyone = Math.round(uvi_thirtyone);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtyone').textContent = uvi_round_thirtyone;
      //Location name 
      document.getElementById('city_name_thirtyone').textContent = city_name_thirtyone;
      document.getElementById('country_name_thirtyone').textContent = country_name_thirtyone;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtyone <=1 ) {
        // setting colour
        var element = document.getElementById('thirtyone');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtyone');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtyone == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtyone');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyone');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtyone == 3 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyone');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtyone == 4 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyone');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtyone == 5 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyone');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtyone == 6 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyone');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyone == 7 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtyone == 8 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyone == 9 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtyone == 10 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtyone >= 11 )
        {
          var element = document.getElementById('thirtyone');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyone").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtyone();

  
  async function rowthirtytwo(){
    uvi_url_thirtytwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.56494&lon=-52.70931&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtytwo = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=47.56494&lng=-52.70931&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtytwo = await fetch (uvi_url_thirtytwo);
    data_thirtytwo = await response_thirtytwo.json();
  
    //Pull data for location info
    localresponse_thirtytwo = await fetch(location_name_thirtytwo);
    localdata_thirtytwo = await localresponse_thirtytwo.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtytwo= data_thirtytwo.lat;
        
        const longitude_thirtytwo = data_thirtytwo.lon;
       const uvi_thirtytwo = data_thirtytwo.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtytwo = localdata_thirtytwo.geonames[0].countryName;
      city_name_thirtytwo = localdata_thirtytwo.geonames[0].name;
  

      const uvi_round_thirtytwo = Math.round(uvi_thirtytwo);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtytwo').textContent = uvi_round_thirtytwo;
      //Location name 
      document.getElementById('city_name_thirtytwo').textContent = city_name_thirtytwo;
      document.getElementById('country_name_thirtytwo').textContent = country_name_thirtytwo;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtytwo <=1 ) {
        // setting colour
        var element = document.getElementById('thirtytwo');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtytwo');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtytwo == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtytwo');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtytwo');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtytwo == 3 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtytwo');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtytwo == 4 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtytwo');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtytwo == 5 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtytwo');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtytwo == 6 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtytwo');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtytwo == 7 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtytwo == 8 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtytwo == 9 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtytwo == 10 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtytwo >= 11 )
        {
          var element = document.getElementById('thirtytwo');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtytwo").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtytwo();

    
  async function rowthirtythree(){
    uvi_url_thirtythree = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.05011&lon=-114.08529&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtythree = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=51.05011&lng=-114.08529&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtythree = await fetch (uvi_url_thirtythree);
    data_thirtythree = await response_thirtythree.json();
  
    //Pull data for location info
    localresponse_thirtythree = await fetch(location_name_thirtythree);
    localdata_thirtythree = await localresponse_thirtythree.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtythree= data_thirtythree.lat;
        
        const longitude_thirtythree = data_thirtythree.lon;
       const uvi_thirtythree = data_thirtythree.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtythree = localdata_thirtythree.geonames[0].countryName;
      city_name_thirtythree = localdata_thirtythree.geonames[0].name;
  
      
      const uvi_round_thirtythree = Math.round(uvi_thirtythree);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtythree').textContent = uvi_round_thirtythree;
      //Location name 
      document.getElementById('city_name_thirtythree').textContent = city_name_thirtythree;
      document.getElementById('country_name_thirtythree').textContent = country_name_thirtythree;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtythree <=1 ) {
        // setting colour
        var element = document.getElementById('thirtythree');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtythree');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtythree == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtythree');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtythree');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtythree == 3 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtythree');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtythree == 4 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtythree');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtythree == 5 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtythree');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtythree == 6 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtythree');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtythree == 7 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtythree == 8 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtythree == 9 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtythree == 10 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtythree >= 11 )
        {
          var element = document.getElementById('thirtythree');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtythree").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtythree();

   
  async function rowthirtyfour(){
    uvi_url_thirtyfour = 'https://api.openweathermap.org/data/2.5/onecall?lat=62.453972&lon=-114.371788&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtyfour = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=62.453972&lng=-114.371788&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtyfour = await fetch (uvi_url_thirtyfour);
    data_thirtyfour = await response_thirtyfour.json();
  
    //Pull data for location info
    localresponse_thirtyfour = await fetch(location_name_thirtyfour);
    localdata_thirtyfour = await localresponse_thirtyfour.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtyfour= data_thirtyfour.lat;
        
        const longitude_thirtyfour = data_thirtyfour.lon;
       const uvi_thirtyfour = data_thirtyfour.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtyfour = localdata_thirtyfour.geonames[0].countryName;
      city_name_thirtyfour = localdata_thirtyfour.geonames[0].name;
  
     
      const uvi_round_thirtyfour = Math.round(uvi_thirtyfour);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtyfour').textContent = uvi_round_thirtyfour;
      //Location name 
      document.getElementById('city_name_thirtyfour').textContent = city_name_thirtyfour;
      document.getElementById('country_name_thirtyfour').textContent = country_name_thirtyfour;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtyfour <=1 ) {
        // setting colour
        var element = document.getElementById('thirtyfour');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtyfour');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtyfour == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtyfour');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyfour');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtyfour == 3 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyfour');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtyfour == 4 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyfour');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtyfour == 5 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyfour');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtyfour == 6 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyfour');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyfour == 7 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtyfour == 8 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyfour == 9 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtyfour == 10 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtyfour >= 11 )
        {
          var element = document.getElementById('thirtyfour');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfour").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtyfour();

  
  async function rowthirtyfive(){
    uvi_url_thirtyfive = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.13238&lon=-106.66892&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtyfive = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=52.13238&lng=-106.66892&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtyfive = await fetch (uvi_url_thirtyfive);
    data_thirtyfive = await response_thirtyfive.json();
  
    //Pull data for location info
    localresponse_thirtyfive = await fetch(location_name_thirtyfive);
    localdata_thirtyfive = await localresponse_thirtyfive.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtyfive= data_thirtyfive.lat;
        
        const longitude_thirtyfive = data_thirtyfive.lon;
       const uvi_thirtyfive = data_thirtyfive.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtyfive = localdata_thirtyfive.geonames[0].countryName;
      city_name_thirtyfive = localdata_thirtyfive.geonames[0].name;
  
     
      const uvi_round_thirtyfive = Math.round(uvi_thirtyfive);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtyfive').textContent = uvi_round_thirtyfive;
      //Location name 
      document.getElementById('city_name_thirtyfive').textContent = city_name_thirtyfive;
      document.getElementById('country_name_thirtyfive').textContent = country_name_thirtyfive;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtyfive <=1 ) {
        // setting colour
        var element = document.getElementById('thirtyfive');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtyfive');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtyfive == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtyfive');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyfive');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtyfive == 3 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyfive');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtyfive == 4 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyfive');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtyfive == 5 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyfive');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtyfive == 6 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyfive');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyfive == 7 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtyfive == 8 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyfive == 9 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtyfive == 10 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtyfive >= 11 )
        {
          var element = document.getElementById('thirtyfive');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyfive").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyfive');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtyfive();

  
  async function rowthirtysix(){
    uvi_url_thirtysix = 'https://api.openweathermap.org/data/2.5/onecall?lat=63.74697&lon=-68.51727&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtysix = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=63.74697&lng=-68.51727&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtysix = await fetch (uvi_url_thirtysix);
    data_thirtysix = await response_thirtysix.json();
  
    //Pull data for location info
    localresponse_thirtysix = await fetch(location_name_thirtysix);
    localdata_thirtysix = await localresponse_thirtysix.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtysix= data_thirtysix.lat;
        
        const longitude_thirtysix = data_thirtysix.lon;
       const uvi_thirtysix = data_thirtysix.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtysix = localdata_thirtysix.geonames[0].countryName;
      city_name_thirtysix = localdata_thirtysix.geonames[0].name;
  
     
      const uvi_round_thirtysix = Math.round(uvi_thirtysix);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtysix').textContent = uvi_round_thirtysix;
      //Location name 
      document.getElementById('city_name_thirtysix').textContent = city_name_thirtysix;
      document.getElementById('country_name_thirtysix').textContent = country_name_thirtysix;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtysix <=1 ) {
        // setting colour
        var element = document.getElementById('thirtysix');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtysix');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtysix == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtysix');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtysix');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtysix == 3 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtysix');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtysix == 4 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtysix');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtysix == 5 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtysix');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtysix == 6 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtysix');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtysix == 7 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtysix == 8 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtysix == 9 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtysix == 10 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtysix >= 11 )
        {
          var element = document.getElementById('thirtysix');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtysix").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtysix');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtysix();

  
  async function rowthirtyeight(){
    uvi_url_thirtyeight = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.23459&lon=-63.1256&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtyeight = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=46.23459&lng=-63.1256&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtyeight = await fetch (uvi_url_thirtyeight);
    data_thirtyeight = await response_thirtyeight.json();
  
    //Pull data for location info
    localresponse_thirtyeight = await fetch(location_name_thirtyeight);
    localdata_thirtyeight = await localresponse_thirtyeight.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtyeight= data_thirtyeight.lat;
        
        const longitude_thirtyeight = data_thirtyeight.lon;
       const uvi_thirtyeight = data_thirtyeight.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtyeight = localdata_thirtyeight.geonames[0].countryName;
      city_name_thirtyeight = localdata_thirtyeight.geonames[0].name;
  
      
      const uvi_round_thirtyeight = Math.round(uvi_thirtyeight);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtyeight').textContent = uvi_round_thirtyeight;
      //Location name 
      document.getElementById('city_name_thirtyeight').textContent = city_name_thirtyeight;
      document.getElementById('country_name_thirtyeight').textContent = country_name_thirtyeight;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtyeight <=1 ) {
        // setting colour
        var element = document.getElementById('thirtyeight');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtyeight');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtyeight == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtyeight');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyeight');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtyeight == 3 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtyeight');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtyeight == 4 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyeight');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtyeight == 5 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyeight');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtyeight == 6 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtyeight');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyeight == 7 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtyeight == 8 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtyeight == 9 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtyeight == 10 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtyeight >= 11 )
        {
          var element = document.getElementById('thirtyeight');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtyeight").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtyeight');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtyeight();

  
  async function rowthirtynine(){
    uvi_url_thirtynine = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.24966&lon=-123.11934&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_thirtynine = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=49.24966&lng=-123.11934&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_thirtynine = await fetch (uvi_url_thirtynine);
    data_thirtynine = await response_thirtynine.json();
  
    //Pull data for location info
    localresponse_thirtynine = await fetch(location_name_thirtynine);
    localdata_thirtynine = await localresponse_thirtynine.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_thirtynine= data_thirtynine.lat;
        
        const longitude_thirtynine = data_thirtynine.lon;
        
       const uvi_thirtynine = data_thirtynine.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_thirtynine = localdata_thirtynine.geonames[0].countryName;
      city_name_thirtynine = localdata_thirtynine.geonames[0].name;
  
      
      const uvi_round_thirtynine = Math.round(uvi_thirtynine);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_thirtynine').textContent = uvi_round_thirtynine;
      //Location name 
      document.getElementById('city_name_thirtynine').textContent = city_name_thirtynine;
      document.getElementById('country_name_thirtynine').textContent = country_name_thirtynine;
     
      //SET ROW COLOUR 
   
      if (uvi_round_thirtynine <=1 ) {
        // setting colour
        var element = document.getElementById('thirtynine');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-thirtynine');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_thirtynine == 2 )
        {
        // Adding row color
        var element = document.getElementById('thirtynine');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtynine');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_thirtynine == 3 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-thirtynine');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_thirtynine == 4 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-thirtynine');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_thirtynine == 5 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtynine');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_thirtynine == 6 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-thirtynine');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtynine == 7 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_thirtynine == 8 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_thirtynine == 9 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_thirtynine == 10 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_thirtynine >= 11 )
        {
          var element = document.getElementById('thirtynine');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_thirtynine").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-thirtynine');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowthirtynine();

  
  async function rowforty(){
    uvi_url_forty = 'https://api.openweathermap.org/data/2.5/onecall?lat=60.71611&lon=-135.05375&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_forty = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=60.71611&lng=-135.05375&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_forty = await fetch (uvi_url_forty);
    data_forty = await response_forty.json();
  
    //Pull data for location info
    localresponse_forty = await fetch(location_name_forty);
    localdata_forty = await localresponse_forty.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_forty= data_forty.lat;
        
        const longitude_forty = data_forty.lon;
       const uvi_forty = data_forty.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_forty = localdata_forty.geonames[0].countryName;
      city_name_forty = localdata_forty.geonames[0].name;
  
      
      const uvi_round_forty = Math.round(uvi_forty);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_forty').textContent = uvi_round_forty;
      //Location name 
      document.getElementById('city_name_forty').textContent = city_name_forty;
      document.getElementById('country_name_forty').textContent = country_name_forty;
     
      //SET ROW COLOUR 
   
      if (uvi_round_forty <=1 ) {
        // setting colour
        var element = document.getElementById('forty');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-forty');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_forty == 2 )
        {
        // Adding row color
        var element = document.getElementById('forty');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-forty');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_forty == 3 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-forty');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_forty == 4 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-forty');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_forty == 5 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-forty');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_forty == 6 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-forty');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_forty == 7 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-forty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_forty == 8 )
        {
          var element = document.getElementById('forty');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-forty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_forty == 9 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-forty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_forty == 10 )
        {
          var element = document.getElementById('forty');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-forty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_forty >= 11 )
        {
          var element = document.getElementById('forty');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_forty").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-forty');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowforty();

  
  async function rowfortyone(){
    uvi_url_fortyone = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.8844&lon=-97.14704&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_fortyone = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=49.8844&lng=-97.14704&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_fortyone = await fetch (uvi_url_fortyone);
    data_fortyone = await response_fortyone.json();
  
    //Pull data for location info
    localresponse_fortyone = await fetch(location_name_fortyone);
    localdata_fortyone = await localresponse_fortyone.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_fortyone= data_fortyone.lat;
        
        const longitude_fortyone = data_fortyone.lon;
       const uvi_fortyone = data_fortyone.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_fortyone = localdata_fortyone.geonames[0].countryName;
      city_name_fortyone = localdata_fortyone.geonames[0].name;
  
     
      const uvi_round_fortyone = Math.round(uvi_fortyone);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_fortyone').textContent = uvi_round_fortyone;
      //Location name 
      document.getElementById('city_name_fortyone').textContent = city_name_fortyone;
      document.getElementById('country_name_fortyone').textContent = country_name_fortyone;
     
      //SET ROW COLOUR 
   
      if (uvi_round_fortyone <=1 ) {
        // setting colour
        var element = document.getElementById('fortyone');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-fortyone');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_fortyone == 2 )
        {
        // Adding row color
        var element = document.getElementById('fortyone');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortyone');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_fortyone == 3 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortyone');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_fortyone == 4 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-fortyone');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_fortyone == 5 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortyone');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_fortyone == 6 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortyone');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortyone == 7 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_fortyone == 8 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortyone == 9 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_fortyone == 10 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_fortyone >= 11 )
        {
          var element = document.getElementById('fortyone');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyone").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyone');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowfortyone();

  
  async function rowfortytwo(){
    uvi_url_fortytwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.09454&lon=-64.7965&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_fortytwo = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=46.09454&lng=-64.7965&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_fortytwo = await fetch (uvi_url_fortytwo);
    data_fortytwo = await response_fortytwo.json();
  
    //Pull data for location info
    localresponse_fortytwo = await fetch(location_name_fortytwo);
    localdata_fortytwo = await localresponse_fortytwo.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_fortytwo= data_fortytwo.lat;
        
        const longitude_fortytwo = data_fortytwo.lon;
       const uvi_fortytwo = data_fortytwo.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_fortytwo = localdata_fortytwo.geonames[0].countryName;
      city_name_fortytwo = localdata_fortytwo.geonames[0].name;
  
     
      const uvi_round_fortytwo = Math.round(uvi_fortytwo);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_fortytwo').textContent = uvi_round_fortytwo;
      //Location name 
      document.getElementById('city_name_fortytwo').textContent = city_name_fortytwo;
      document.getElementById('country_name_fortytwo').textContent = country_name_fortytwo;
     
      //SET ROW COLOUR 
   
      if (uvi_round_fortytwo <=1 ) {
        // setting colour
        var element = document.getElementById('fortytwo');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-fortytwo');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_fortytwo == 2 )
        {
        // Adding row color
        var element = document.getElementById('fortytwo');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortytwo');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_fortytwo == 3 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortytwo');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_fortytwo == 4 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-fortytwo');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_fortytwo == 5 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortytwo');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_fortytwo == 6 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortytwo');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortytwo == 7 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_fortytwo == 8 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortytwo == 9 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_fortytwo == 10 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_fortytwo >= 11 )
        {
          var element = document.getElementById('fortytwo');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortytwo").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortytwo');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowfortytwo();

  
  async function rowfortythree(){
    uvi_url_fortythree = 'https://api.openweathermap.org/data/2.5/onecall?lat=44.6464&lon=-63.57291&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_fortythree = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=44.6464&lng=-63.57291&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_fortythree = await fetch (uvi_url_fortythree);
    data_fortythree = await response_fortythree.json();
  
    //Pull data for location info
    localresponse_fortythree = await fetch(location_name_fortythree);
    localdata_fortythree = await localresponse_fortythree.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_fortythree= data_fortythree.lat;
        
        const longitude_fortythree = data_fortythree.lon;
       const uvi_fortythree = data_fortythree.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_fortythree = localdata_fortythree.geonames[0].countryName;
      city_name_fortythree = localdata_fortythree.geonames[0].name;
  
      
      const uvi_round_fortythree = Math.round(uvi_fortythree);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_fortythree').textContent = uvi_round_fortythree;
      //Location name 
      document.getElementById('city_name_fortythree').textContent = city_name_fortythree;
      document.getElementById('country_name_fortythree').textContent = country_name_fortythree;
     
      //SET ROW COLOUR 
   
      if (uvi_round_fortythree <=1 ) {
        // setting colour
        var element = document.getElementById('fortythree');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-fortythree');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_fortythree == 2 )
        {
        // Adding row color
        var element = document.getElementById('fortythree');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortythree');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_fortythree == 3 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortythree');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_fortythree == 4 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-fortythree');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_fortythree == 5 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortythree');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_fortythree == 6 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortythree');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortythree == 7 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_fortythree == 8 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortythree == 9 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_fortythree == 10 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_fortythree >= 11 )
        {
          var element = document.getElementById('fortythree');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortythree").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortythree');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowfortythree();

  
  async function rowfortyfour(){
    uvi_url_fortyfour = 'https://api.openweathermap.org/data/2.5/onecall?lat=45.50884&lon=-73.58781&exclude=current,minutely,hourly,alerts&appid=d6d6e0cb2aa3c48b68dc152c9e3bb260'
    location_name_fortyfour = 'https://secure.geonames.org/findNearbyPlaceNameJSON?lat=45.50884&lng=-73.58781&username=skinnyreggae'
  
  //Pull data for Weather Info
    response_fortyfour = await fetch (uvi_url_fortyfour);
    data_fortyfour = await response_fortyfour.json();
  
    //Pull data for location info
    localresponse_fortyfour = await fetch(location_name_fortyfour);
    localdata_fortyfour = await localresponse_fortyfour.json();
  // check to see if data is being pulled 
  
  
  
  
  //getting co-ordinates 
       const latitude_fortyfour= data_fortyfour.lat;
        
        const longitude_fortyfour = data_fortyfour.lon;
       const uvi_fortyfour = data_fortyfour.daily[1].uvi;
        
     
  
  // getting exact location information 
      country_name_fortyfour = localdata_fortyfour.geonames[0].countryName;
      city_name_fortyfour = localdata_fortyfour.geonames[0].name;
  
    
      const uvi_round_fortyfour = Math.round(uvi_fortyfour);
       
     
      //display on html 
     //UVI
       document.getElementById('uvi_fortyfour').textContent = uvi_round_fortyfour;
      //Location name 
      document.getElementById('city_name_fortyfour').textContent = city_name_fortyfour;
      document.getElementById('country_name_fortyfour').textContent = country_name_fortyfour;
     
      //SET ROW COLOUR 
   
      if (uvi_round_fortyfour <=1 ) {
        // setting colour
        var element = document.getElementById('fortyfour');
        element.classList.add("levelone");
        // setting icon
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv1.png";
        // Add advice
        var uvadvice = document.getElementById('advice-fortyfour');
        var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
      
    
    
        }
        else if (uvi_round_fortyfour == 2 )
        {
        // Adding row color
        var element = document.getElementById('fortyfour');
        element.classList.add("leveltwo");
        // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv2.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortyfour');
            var addadvice = document.createTextNode("Wear Sunglasses on bright days. Apply SPF 30+ sunscreen ");
          
        
        }  
    else if (uvi_round_fortyfour == 3 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelthree");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv3.png";
            // Add advice
            var uvadvice = document.getElementById('advice-fortyfour');
            var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
      
        
        }  
        else if (uvi_round_fortyfour == 4 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelfour");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv4.png";
    
          // Add advice
          var uvadvice = document.getElementById('advice-fortyfour');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
  
        }  
        else if (uvi_round_fortyfour == 5 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelfive");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv5.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortyfour');
          var addadvice = document.createTextNode("Wear Sunglasses, a wide brim hat, and protective clothing. Apply SPF 30+ sunscreen. Stay in Shade near mid day when sun is strongest. ");
       
        }  
        else if (uvi_round_fortyfour == 6 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelsix");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv6.png";
          // Add advice
          var uvadvice = document.getElementById('advice-fortyfour');
          var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortyfour == 7 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelseven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv7.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
       
        }  
        else if (uvi_round_fortyfour == 8 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("leveleight");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv8.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
         
        }  
        else if (uvi_round_fortyfour == 9 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelnine");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv9.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
          
        }  
        else if (uvi_round_fortyfour == 10 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("levelten");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv10.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
   
        }  
        else if (uvi_round_fortyfour >= 11 )
        {
          var element = document.getElementById('fortyfour');
          element.classList.add("leveleleven");
         
           // setting icon 
        document.getElementById("uvi_icon_fortyfour").src="../uv-icons/uv11.png";
           // Add advice
           var uvadvice = document.getElementById('advice-fortyfour');
           var addadvice = document.createTextNode("Wear sunglasses, a wide brim hat and protective clothing. Apply SPF 30+ sunscreen. Reduce time in the sun between 10:00 and 16:00");
        
        }  
  
  }
  rowfortyfour();