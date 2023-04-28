
const submitBtn = document.getElementById("Submitt");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const curr_temp = document.getElementById("curr_temp");
const hiddenData= document.getElementById("hiddenData");
const submitAction = async (event) => {
    event.preventDefault();
    if (cityName.value === "") {
        city_name.innerText = "please Enter city Name";
        hiddenData.style.display="none";
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=853e2ae6e8638b79e7aa1f25fd4466d9#`;
            const response = await fetch(url);
            const data =await response.json();
             
            const data1 = await [data];
            city_name.innerText=`${data1[0].name} ${data1[0].sys.country}`
            curr_temp.innerHTML=`${data1[0].main.temp} <sup>o</sup> C`
            hiddenData.style.display="block";
             
             
        } catch {
            hiddenData.style.display="none";
            city_name.innerText = "Please Enter Valid city Name";
        }
    }
};
submitBtn.addEventListener("click", submitAction);