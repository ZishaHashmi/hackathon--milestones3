// get refrences to the form and disply area 
var form = document.getElementById('Resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page Reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('Education').value;
    var Experiance = document.getElementById('Experiance').value;
    var Skills = document.getElementById('Skills').value;
    // generate the resume contant dynamically
    var resumehtml = "\n    <h2><b>Resume</b></h2>\n    <h3>personal Information</h3>\n    <p><b>Name</b>".concat(name, "</p>\n     <p><b>email</b>").concat(email, "</p>\n      <p><b>phone</b>").concat(phone, "</p>\n\n      <h3>Education</h3>\n      <p>").concat(Education, "</p>\n\n       <h3>Experiance</h3>\n      <p>").concat(Experiance, "</p>\n\n       <h3>Skills</h3>\n      <p>").concat(Skills, "</p>\n    ");
    // generated resume display element
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else
        console.error('the resume display element is missing');
});
