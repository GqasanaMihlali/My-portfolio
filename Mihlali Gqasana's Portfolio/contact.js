// Your web app's Firebase configuration
var config = {
     apiKey: "AIzaSyAU_yZv0mNcP4uzMdEqFqJ2oP8ejaPncV0",
    authDomain: "contact-form-55c6e.firebaseapp.com",
    databaseURL: "https://contact-form-55c6e.firebaseio.com",
    projectId: "contact-form-55c6e",
    storageBucket: "contact-form-55c6e.appspot.com",
    messagingSenderId: "210379607670",
    appId: "1:210379607670:web:26e3c09ee8d0e13b39d957",
    measurementId: "G-MKB8443TDW"
   };
   
   firebase.initializeApp(config);
 
 //Reference messages collection
           var messagesRef = firebase.database().ref("messages"); 
 
 // Listen for form submit 
           document.getElementById('Contact_Form').addEventListener('submit', submitForm);
 
 //Submit form
           function submitForm(e){
                e.preventDefault();
                
 //Get values
            var name = getInputVal('name');
            var email = getInputVal('email');
            var phone = getInputVal('phone');
            var message = getInputVal('message');
            
 // Save message 	
            saveMessage(name, email, phone, message);
            
//show alert
            document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds
            setTimeout(function(){ 

                 document.querySelector('alert'). getElementByClassName.display ="none";

            },3000);  
 //clear form           
            document.getElementById('Contact_Form').reset();
 
 //Function to get form values
           function getInputVal(id){
                return document.getElementById(id).value;
 
      }
 
 
 
 // Save message to firebase
           function saveMessage(name, email, phone, message){
                var newMessageRef = messagesRef.push();
                newMessageRef.set({
                     name: name,
                     email: email,
                     phone: phone,
                     message:message
 
                });
            }
         }
         
    
        