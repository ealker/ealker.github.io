$('#search-button').on("click", function() {
    var selectedDate = $('#date-picker').val()
    console.log(selectedDate);
    getData(selectedDate); 
});

function getData(selectedDate) {
    let request_url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + selectedDate;
    console.log(request_url);
    fetch(request_url)
        .then(response => {
            if (response.status != 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            } else {
                response.json().then(data => {
                    console.log(data);
                    console.log(data.url);
                    let name = data.title
                    let date_taken = data.date
                    let copyright = data.copyright
                    let description = data.explanation
                    let picture_url = data.url
                    document.getElementById("name").innerHTML = "Name: " + name;
                    document.getElementById("date-taken").innerHTML = "Date Taken: " + date_taken;
                    document.getElementById("copyright").innerHTML = "Copyright: " + copyright;
                    document.getElementById("description").innerHTML = "Image Description: " + description;
                    document.getElementById("picture").src = picture_url;
                });
            }
         })
        .catch(error => {
            console.log('Error fetching: ', error);
        })
}