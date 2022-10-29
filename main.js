document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    // var Product_Category= getInputval('Product_Category');
    var Product_Name= getInputval('Product_Name');
    var Product_desc= getInputval('Product_desc');
    var Product_Quantity= getInputval('Product_Quantity');
    var Product_Price= getInputval('Product_Price');
  
    saveMessage(Product_Name,Product_desc,Product_Quantity,Product_Price);

}

function getInputval(id){
return document.getElementById(id);
}


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAexHjzEWlIYxHI3TWa_NdqM23fD4knzxE",
    authDomain: "supermart-722b5.firebaseapp.com",
    databaseURL: "https://supermart-722b5-default-rtdb.firebaseio.com",
    projectId: "supermart-722b5",
    storageBucket: "supermart-722b5.appspot.com",
    messagingSenderId: "288883114231",
    appId: "1:288883114231:web:0e668e99aff3d754f813f2",
    measurementId: "G-J7S6YXS0QG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');

  //save the messg
   function saveMessage(Product_Name,Product_desc,Product_Quantity,Product_Price){
    var newMessageRef =  messagesRef.push();
    newMessageRef.set({
      Product_Name:Product_Name,
      Product_desc:Product_desc,
      Product_Quantity:Product_Quantity,
      Product_Price:Product_Price


    });
   }
 


