var firebaseConfig = {
      apiKey: "AIzaSyCvZnWPikB9L6qdKx0r8ZD4Un8iNKK4BUM",
      authDomain: "kwitter-d3c86.firebaseapp.com",
      databaseURL: "https://kwitter-d3c86-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3c86",
      storageBucket: "kwitter-d3c86.appspot.com",
      messagingSenderId: "211409175234",
      appId: "1:211409175234:web:55d379f8bc769fa4d0315b"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
});
      document.getElementById("msg").value="";
      }

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
