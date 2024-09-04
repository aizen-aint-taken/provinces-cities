document.addEventListener('DOMContentLoaded' , function(){

   // console.log("dom ready");
async function allProvinces(){
   try{
      const provinces = await fetch ("https://psgc.cloud/api/provinces");
      // console.log(provinces);
      const data = await provinces.json();
      console.log(data);
    

      const provlist = document.getElementById("province-list");
      // console.log(provlist);

      provlist.innerHTML = "";

      data.forEach(province => {
         const listOfProv = document.createElement('li');
         console.log(listOfProv);
         listOfProv.textContent = province.name;
         provlist.appendChild(listOfProv);
      });
     
      }catch(error){
         console.error("Error fetching provinces:", error);
      }
   }

   document.getElementById('fetch').addEventListener('click', allProvinces)
})

