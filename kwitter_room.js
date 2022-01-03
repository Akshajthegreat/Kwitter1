
// Your web app's Firebase configuration
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
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

     function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"making the room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";


     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name-"+Room_names);
      roomrow="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=roomrow;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
