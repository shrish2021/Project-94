var firebaseConfig = {
    apiKey: "AIzaSyDzmiVM1UsHtRd5OudCw02vOa4bGrJr10M",
    authDomain: "project-94-b3501.firebaseapp.com",
    databaseURL: "https://project-94-b3501-default-rtdb.firebaseio.com",
    projectId: "project-94-b3501",
    storageBucket: "project-94-b3501.appspot.com",
    messagingSenderId: "1063180428862",
    appId: "1:1063180428862:web:2965aa8ce91c594365136f"
  };
  firebase.initializeApp(firebaseConfig);

function addRoom() {
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({
        produce: "roomName"
    })
}