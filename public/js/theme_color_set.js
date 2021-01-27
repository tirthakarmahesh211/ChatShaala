 // <script>
// Get the root element
var r = document.querySelector(':root');
var theme_color = document.getElementById("theme_color");
// console.log(theme_color);
r.style.setProperty('--mainColor', theme_color.getAttribute("name"));
// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  // var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  // alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")

}
// </script> 