let inputDate = document.querySelector('#date-picker');
let button = document.querySelector('#search-button');

let strippedDate = new Date(date.value).toISOString.substring(0,10); 

// // Event listerns require function references, not function calls.
// button.addEventListener("click", stripDate);
// // button.param = "";

// function getData(evt) {
//     let request_url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + evt.currentTarget.param;
//     console.log(request_url);
//     fetch(request_url)
//         .then(response => {
//             if (response.status !== 200) {
//                 console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             } else {
//                 response.json().then(data => {
//                     console.log(data);
//                     console.log(data.url);
//                     const name = data.title
//                     const date_taken = data.date
//                     const copyright = data.copyright
//                     const description = data.explanation
//                     const picture_url = data.url
//                     // document.getElementById("name").innerHTML = "Name: " + name;
//                     // document.getElementById("date-taken").innerHTML = "Date Taken: " + date_taken;
//                     // document.getElementById("copyright").innerHTML = "Copyright: " + copyright;
//                     // document.getElementById("description").innerHTML = "Image Description: " + description;
//                     // document.getElementById("picture").src = picture_url;
//                 });
//             }
//          })
//         .catch(error => {
//             console.log('Error fetching: ', error);
//         })
//}