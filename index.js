const namaMahasiswaInput = document.getElementById("namaMahasiswa"); // Corrected variable name
const nrpInput = document.getElementById("nrp"); // Matched variable name
const mataKuliahInput = document.getElementById("mataKuliah"); // Matched variable name
const namaDosenInput = document.getElementById("namaDosen"); // Corrected variable names
const buttonSubmit = document.getElementById("btn");
const form = document.getElementById("submit");
const namaMahasiswaError = document.getElementsByClassName("namaMahasiswaError")[0];
const nrpError = document.getElementsByClassName("nrpError")[0];
const mataKuliahError = document.getElementsByClassName("mataKuliahError")[0];
const namaDosenError = document.getElementsByClassName("namaDosenError")[0];


//define and declare and empty errors object
let error = {};

/* This is a JavaScript event listener. It is a way to listen for an event. In this case, it is
listening for the form to be submitted. */
form.addEventListener("submit", function (e) {
  e.preventDefault();
//function to validate the form fields before submitting
  checkEmpty();
});

// validate empty fields and set error object
function checkEmpty() {
  //loop and remove all key and value fields in the errors object
  for (let key in error) {
    delete error[key];
  }
  //set all in firstname, lastname, email spans to display none
  namaMahasiswaError.style.display = "none";
  nrpError.style.display = "none";
  mataKuliahError.style.display = "none";
  namaDosenError.style.display = "none";

  //remove all the error class "border-red-500 classes"
  namaMahasiswaInput.classList.remove("border-red-500");
  nrpInput.classList.remove("border-red-500");
  mataKuliahInput.classList.remove("border-red-500");
  namaDosenInput.classList.remove("border-red-500");

//remove white spaces from every input Field
  const namaMahasiswaValue = namaMahasiswaInput.value.trim();
  const nrpValue = nrpInput.value.trim();
  const mataKuliahValue = mataKuliahInput.value.trim();
  const namaDosenValue = namaDosenInput.value.trim();

  //check if all inputs are empty then add new new error keys to the defined error object
  if (namaMahasiswaValue === "") {
    error.namaMahasiswa = "Nama Mahasiswa harus diisi";
  }
  if (nrpValue === "") {
    error.nrp = "NRP harus diisi";
  }
  if (mataKuliahValue === "") {
    error.mataKuliah= "Mata Kuliah harus diisi";
  }
  if (namaDosenValue === "") {
    error.namaDosen= "Nama Dosen harus diisi";
  }
  
  //validate the inputs firstName and lastName
  if (namaMahasiswaValue !== "") {
    if (!namaMahasiswaValue.match(/[a-zA-Z0-9]+( [a-zA-Z0-9]+){0,4}$/)) {
      error.namaMahasiswa= "Nama Mahasiswa harus diisi dengan huruf";
    }
  }

  if (nrpValue !== "") {
    if (!nrpValue.match(/^[0-9]+$/)) {
      error.nrp = "NRP harus diisi dengan angka";
    }
  }

  if (mataKuliahValue !== "") {
    if (!mataKuliahValue.match(/[a-zA-Z0-9]+( [a-zA-Z0-9]+){0,4}$/)) {
      error.mataKuliah = "Mata Kuliah harus diisi dengan huruf";
    }
  }

  if (namaDosenValue!== "") {
    if (!namaDosenValue.match(/[a-zA-Z0-9]+( [a-zA-Z0-9]+){0,4}$/)) {
      error.mataKuliah = "Nama Dosen harus diisi dengan huruf";
    }
  }

  //if we have error add the error to the error message
  if (Object.keys(error).length > 0) {
    displayError();
  } else {
    //submit the form with a delay of 2 seconds
    //change the button innerText to submitting and add no-cursor class and disabled attribute to it
    buttonSubmit.value = "Submitting...";
    buttonSubmit.setAttribute("disabled", "disabled");
  }
}

//display errors respectivey to the span html classes
function displayError() {
  //set all errors to their respectivey and also changing hidden error containers to be a block.
  if (error.namaMahasiswa) {
    namaMahasiswaInput.classList.add("border-red-500");
    namaMahasiswaError.style.display = "block";
    namaMahasiswaError.innerHTML = error.namaMahasiswa;
  }
  if (error.nrp) {
    nrpInput.classList.add("border-red-500");
    nrpError.style.display = "block";
    nrpError.innerHTML = error.nrp;
  }
  if (error.mataKuliah) {
    //loop over the classes and add other classes
    mataKuliahInput.classList.add("border-red-500");
    mataKuliahError.style.display = "block";
    mataKuliahError.innerHTML = error.nrp;
  }
  
  if (error.namaDosen) {
    //loop over the classes and add other classes
    namaDosenInput.classList.add("border-red-500");
    namaDosenError.style.display = "block";
    namaDosenError.innerHTML = error.namaDosen;
  }
}

//submitting the form
function submitForm() {
    // Show the success message
    const successMessage = document.getElementById("success-message");
    successMessage.classList.remove("hidden");
  
    // Hide the form
    form.style.display = "none";
  
    // Reset the login buttonSubmit
  
    // After 2 seconds is over, change the input type button innerText and remove the disabled attribute.
    buttonSubmit.value = "Submit";
    buttonSubmit.removeAttribute("disabled");
  
    // Reset the form and clear all fields
    form.reset();
  }