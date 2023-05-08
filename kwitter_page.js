var firebaseConfig = {
      apiKey: "AIzaSyBbMFbGKnOeV5EEw0OmZjIj1D_pXN6xr9g",
      authDomain: "kwiter-676d6.firebaseapp.com",
      databaseURL: "https://kwiter-676d6-default-rtdb.firebaseio.com",
      projectId: "kwiter-676d6",
      storageBucket: "kwiter-676d6.appspot.com",
      messagingSenderId: "1087590697981",
      appId: "1:1087590697981:web:835fd9f0350090ddb9a794"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
