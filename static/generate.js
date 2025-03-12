// alert("loading");

// Regex patterns for validation
const validationPatterns = {
  name: /^[A-Za-z\s]{2,50}$/,
  job: /^[A-Za-z\s\-&.]{3,50}$/,
  contact: /^\+?[\d\-\s]{10,15}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  // social: /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]{2,}$/,
  language: /^[A-Za-z\s]{2,20}$/,
  education: /^[A-Za-z0-9\s,.'()-]{5,100}$/,
  experience: /^[A-Za-z0-9\s,.'()-]{10,200}$/,
  skills: /^[A-Za-z0-9\s#+.-]{2,50}$/
};

// Validation function
function validateInput(input, pattern) {
  const isValid = pattern.test(input.value);
  input.style.borderColor = isValid ? '#28a745' : '#dc3545';
  
  // Create or update validation message
  let messageDiv = input.nextElementSibling;
  if (!messageDiv || !messageDiv.classList.contains('validation-message')) {
    messageDiv = document.createElement('div');
    messageDiv.classList.add('validation-message');
    input.parentNode.insertBefore(messageDiv, input.nextSibling);
  }
  
  messageDiv.textContent = isValid ? '✓ Valid' : '⚠ Invalid format';
  messageDiv.style.color = isValid ? '#28a745' : '#dc3545';
  messageDiv.style.fontSize = '12px';
  messageDiv.style.marginTop = '2px';
  
  return isValid;
}

// Add validation to existing input fields
document.addEventListener('DOMContentLoaded', function() {
  // Add validation to initial fields
  const initialValidations = {
    'nameField': validationPatterns.name,
    'jobFiled': validationPatterns.job,
    'contactField': validationPatterns.contact,
    'gmailFiled': validationPatterns.email,
    'laField': validationPatterns.language,
    'fbField': validationPatterns.social,
    'linkedField': validationPatterns.social,
  };

  for (let [fieldId, pattern] of Object.entries(initialValidations)) {
    const element = document.getElementById(fieldId);
    if (element) {
      element.addEventListener('input', function() {
        validateInput(this, pattern);
      });
    }
  }
});

function addNewLanField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "laField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  
  // Add validation listener
  newNode.addEventListener('input', function() {
    validateInput(this, validationPatterns.language);
  });

  let aqOb = document.getElementById("la");
  let aqAddButtonOb = document.getElementById("laAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewEdField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "edField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  
  // Add validation listener
  newNode.addEventListener('input', function() {
    validateInput(this, validationPatterns.education);
  });

  let aqOb = document.getElementById("ed");
  let aqAddButtonOb = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewWEField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("placeholder", "Enter experience");
  
  // Add validation listener
  newNode.addEventListener('input', function() {
    validateInput(this, validationPatterns.experience);
  });

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "skField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  
  // Add validation listener
  newNode.addEventListener('input', function() {
    validateInput(this, validationPatterns.skills);
  });

  let aqOb = document.getElementById("sk");
  let aqAddButtonOb = document.getElementById("skAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewCertField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control", "crField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  
  // Add validation listener
  newNode.addEventListener('input', function() {
    validateInput(this, validationPatterns.education);
  });

  let aqOb = document.getElementById("cr");
  let aqAddButtonOc = document.getElementById("crAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOc);
}

function generateCV() {
  // Validate all fields before generating CV
  let isValid = true;
  
  // Validate required fields
  const requiredFields = {
    nameField: validationPatterns.name,
    jobFiled: validationPatterns.job,
    contactField: validationPatterns.contact,
    gmailFiled: validationPatterns.email
  };

  for (let fieldId in requiredFields) {
    const field = document.getElementById(fieldId);
    if (!validateInput(field, requiredFields[fieldId])) {
      isValid = false;
      field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  if (!isValid) {
    alert("Please correct the highlighted fields before generating the CV.");
    return;
  }

  // Generate CV content
  document.getElementById("nName").innerHTML =
    document.getElementById("nameField").value;

  document.getElementById("jJob").innerHTML = 
    document.getElementById("jobFiled").value;

  document.getElementById("cContact").innerHTML =
    document.getElementById("contactField").value;

  document.getElementById("gGmail").innerHTML =
    document.getElementById("gmailFiled").value;

  document.getElementById("fFacebook").href =
    document.getElementById("fbField").value;

  document.getElementById("lLinkedin").href =
    document.getElementById("linkedField").value;

  // languages
  let languages = document.getElementsByClassName("laField");
  let lanF = "";
  for (let e of languages) {
    if (e.value.trim() !== "" && validateInput(e, validationPatterns.language)) {
      lanF += `<li> <span> ${e.value} </span></li>`;
    }
  }
  document.getElementById("lan").innerHTML = lanF;

  // objective
  document.getElementById("objectiveT").innerHTML = 
    document.getElementById("objectiveField").value;

  // education
  let educationF = document.getElementsByClassName("edField");
  let resEdu = "";
  for (let e of educationF) {
    if (e.value.trim() !== "" && validateInput(e, validationPatterns.education)) {
      resEdu += `<li> <p> ${e.value} </p></li>`;
    }
  }
  document.getElementById("edu").innerHTML = resEdu;

  // work experience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    if (e.value.trim() !== "" && validateInput(e, validationPatterns.experience)) {
      str += `<li class="squar"> <h4> ${e.value} </h4></li>`;
    }
  }
  document.getElementById("weT").innerHTML = str;

  // professional skills
  let aqs = document.getElementsByClassName("skField");
  let str1 = "";
  for (let e of aqs) {
    if (e.value.trim() !== "" && validateInput(e, validationPatterns.skills)) {
      str1 += `<li class="squar"> <h4> ${e.value} </h4></li>`;
    }
  }
  if (str1.length) document.getElementById("skills").innerHTML = str1;

  // certifications
  let certs = document.getElementsByClassName("crField");
  let str12 = "";
  for (let d of certs) {
    if (d.value.trim() !== "" && validateInput(d, validationPatterns.education)) {
      str12 += `<li class="squar"> <h4> ${d.value} </h4></li>`;
    }
  }
  if (str12.length) document.getElementById("certi").innerHTML = str12;

  // Image handling
  let file = document.getElementById("imgField").files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      document.getElementById("imgTemplate").src = reader.result;
    };
  }

  // Show the CV template
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function downloadCV() {
  const downloadButton = document.getElementById('btnN');
  downloadButton.style.display = 'none';

  const cvContent = document.getElementById('cv-template');
  if (!cvContent) {
    alert('CV content not found!');
    downloadButton.style.display = 'block';
    return;
  }

  const options = {
    filename: 'resume.pdf',
    image: { type: 'png', quality: 1 },
    html2canvas: { 
      scale: 2, 
      logging: true, 
      useCORS: true, 
      allowTaint: true 
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  html2pdf()
    .from(cvContent)
    .set(options)
    .save()
    .then(() => {
      downloadButton.style.display = 'block';
    });
}

// Add CSS styles for validation
const style = document.createElement('style');
style.textContent = `
  .form-control.valid {
    border-color: #28a745 !important;
  }

  .form-control.invalid {
    border-color: #dc3545 !important;
  }

  .validation-message {
    margin-top: 4px;
    font-size: 12px;
  }
`;
document.head.appendChild(style);