const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const button = document.getElementById('button')

const errorName = document.getElementById('error-name')
const errorEmail = document.getElementById('error-email')
const errorSubject = document.getElementById('error-subject')
const errorMessage = document.getElementById('error-message')

var dataTable = document.getElementById('data-table');
var tbody = dataTable.getElementsByTagName('tbody')[0];

nameInput.addEventListener('blur', function(){
    if (nameInput.value ==='' || nameInput.value == null){
        errorName.innerText = "Please enter a valid name";
        button.disabled = true;
    }
    else{
    errorName.innerText = "";
    button.disabled = false;
    }
    });

emailInput.addEventListener('blur', function(){
    var email = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email) || emailInput.value ==='' || emailInput.value == null){
       errorEmail.innerText = "Please enter a valid email address";
       button.disabled = true;
    }
    else{
    errorEmail.innerText = "";
    button.disabled = false;
    }
   });

 subjectInput.addEventListener('blur', function(){
 if (subjectInput.value ==='' || subjectInput.value == null){
     errorSubject.innerText = "Please enter your subject";
     button.disabled = true;
  }
  else{
  errorSubject.innerText = "";
  button.disabled = false;
   }
  });

   messageInput.addEventListener('blur', function(){
    var message = messageInput.value;
    if (message.length < 10 || messageInput.value ==='' || messageInput.value == null){
       errorMessage.innerText = "Please enter a message";
       button.disabled = true;
    }
    else{
    errorMessage.innerText = "";
    button.disabled = false;
    }
   });

   fetch('test.txt')
   .then(function(response) {
     return response.text();
   })
   .then(function(txtData) {
     var lines = txtData.split('\n');
 
     lines.forEach(function(line) {
       var rowData = line.split('\t'); 
 
       
       var row = document.createElement('tr');
 
       
       rowData.forEach(function(value) {
         var cell = document.createElement('td');
         cell.textContent = value;
         row.appendChild(cell);
       });
 
       tbody.appendChild(row);
     });
   })