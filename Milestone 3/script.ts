// get refrences to the form and disply area 
const FORM = document.getElementById('Resume-form') as HTMLFormElement;
const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission
FORM.addEventListener('submit',(event: Event)=> {
    event.preventDefault(); // prevent page Reload

    // Collect input values
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const Education = (document.getElementById('Education')as HTMLInputElement).value
    const Experiance = (document.getElementById('Experiance')as HTMLInputElement).value
    const Skills = (document.getElementById('Skills')as HTMLInputElement).value
    // generate the resume contant dynamically
    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3>personal Information</h3>
    <p><b>Name</b>${name}</p>
     <p><b>email</b>${email}</p>
      <p><b>phone</b>${phone}</p>

      <h3>Education</h3>
      <p>${Education}</p>

       <h3>Experiance</h3>
      <p>${Experiance}</p>

       <h3>Skills</h3>
      <p>${Skills}</p>
    `;

    // generated resume display element
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumehtml;
    } else
    console.error('the resume display element is missing');
})
