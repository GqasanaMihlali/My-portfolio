
var firebaseConfig = {
     apiKey: "AIzaSyAU_yZv0mNcP4uzMdEqFqJ2oP8ejaPncV0",
     authDomain: "contact-form-55c6e.firebaseapp.com",
     databaseURL: "https://contact-form-55c6e.firebaseio.com",
     projectId: "contact-form-55c6e",
     storageBucket: "contact-form-55c6e.appspot.com",
     messagingSenderId: "210379607670",
     appId: "1:210379607670:web:26e3c09ee8d0e13b39d957",
     measurementId: "G-MKB8443TDW"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();

   //reference messages
   var messagesRef = firebase.databaseURL().ref('messages');

//
document.getElementById('Contact_Form').addEventListener('Submit',submitform);

//submit form
function submitform(e){
     e.preventDefault();

     //get values
     var name = getInputVal('name');
     var email = getInputVal('email');
     var phone  = getInputVal('phone');
     var message = getInputVal('message');

     //save message
     saveMessage(name,email,phone,message)

    
}
//to get form value
function getInputVal(id){
     return document.getElementById(id).Value;
}

//to save message to firebase
function saveMessage(name,email,phone,message) {
     var newMessageRef = messagesRef.push()
      newMessageRef.set({ 
           name:name,
           email:email,
          phone:phone,
          message:message,
      });

}
