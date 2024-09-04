document.addEventListener('DOMContentLoaded' , function(){

    // console.log("dom ready");
    async function allCities(){
    try{
       const cities = await fetch ("https://psgc.cloud/api/regions/0200000000/cities-municipalities");
       // console.log(cities);
       const data = await cities.json();
       console.log(data);
     
    
       const provlist = document.getElementById("province-list");
       // console.log(provlist);
    
       provlist.innerHTML = "";
    
       data.forEach(city => {
          const listOfCities = document.createElement('li');
          console.log(listOfCities);
          listOfCities.textContent = city.name;
          provlist.appendChild(listOfCities);
       });
      
       }catch(error){
          console.error("Error fetching provinces:", error);
       }
    }
    
    document.getElementById('fetch').addEventListener('click', allCities);
    })