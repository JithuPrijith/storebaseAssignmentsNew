/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// function which triggers on onclick event
function doAction(e) {
  e.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);
  let promise = [];
  formData.forEach((city) => {
    promise.push(doApiFetch(city));                 // what i meant is that for every city it will call a function which fetch an api.
  });
  Promise.all(promise)
    .then((res) => {
        resultBoxCreation(res);
    })
    .catch((err) => console.log(err));
}

function doApiFetch(city) {
  return new Promise((resolve, reject) => {
    let apikey = "63149e314aa08f80fcda33b7f4a5d0ee";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    let promise = [];
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function resultBoxCreation(res){
    let parentDiv = document.querySelectorAll(".result");
        res.forEach((data,i) => {
            let pTag1 = document.createElement("p");
            let pTag2 = document.createElement("p");
            let pTag3 = document.createElement("p");
            pTag1.innerHTML = `City name - ${data.name}`;
            pTag2.innerHTML =`Min temp - ${data.main.temp_max}`;
            pTag3.innerHTML =`Min temp - ${data.main.temp_min}`;
            parentDiv[i].appendChild(pTag1);
            parentDiv[i].appendChild(pTag2);
            parentDiv[i].appendChild(pTag3);
        });
}





// function createPtag(){
//     let parentDiv = document.querySelectorAll(".result");
//     parentDiv.forEach((singleParent) => {
//             let pTag = document.createElement("p");
//             singleParent.appendChild(pTag);
//     });
// }