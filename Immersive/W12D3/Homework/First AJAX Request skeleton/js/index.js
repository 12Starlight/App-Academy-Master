console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?' + 
    'q=new%20york,US&appid=4d51480b8ea6df785981affcb63ac815',
  success(data) {
    console.log("We have beautiful amazing sunny weather here in New York");
    console.log(data);
  },
  error() {
    console.error("Oooops something went wrong.");
  },
});
// Add another console log here, outside your AJAX request
console.log("The AJAX request was processed.");