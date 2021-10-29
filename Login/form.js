  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDi9y5hYA5f8_ANJVYSUv7w68UqDukR70A",
    authDomain: "login-page-b6fdb.firebaseapp.com",
    projectId: "login-page-b6fdb",
    storageBucket: "login-page-b6fdb.appspot.com",
    messagingSenderId: "973882672057",
    appId: "1:973882672057:web:9a7cdc6bb40f4feaee2c68",
    measurementId: "G-C9PB4MLS0E"
  };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// // let's code 
// var datab  = firebase.database().ref('data');
// function UserRegister(){
// var email = document.getElementById('eemail').value;
// var password = document.getElementById('lpassword').value;
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
// }).catch(function (error){
//     var errorcode = error.code;
//     var errormsg = error.message;
// });
// }
// const auth = firebase.auth();
// function SignIn(){
//     // var email = document.getElementById('eemail').value;
//     // var password = document.getElementById('lpassword').value;
//     // const promise = auth.signInWithEmailAndPassword(email,password);
//     // promise.catch( e => alert(e.msg));
//     // window.open("https://www.google.com","_self");
//     location.replace("http://localhost/Courserf/")
// }
// document.getElementById('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     var userInfo = datab.push();
//     userInfo.set({
//         name: getId('fname'),
//         email : getId('eemail'),
//         password : getId('lpassword')
//     });
//     alert("Successfully Signed Up");
//     console.log("sent");
//     document.getElementById('form').reset();
    
// });
// function  getId(id){
//     return document.getElementById(id).value;
// }