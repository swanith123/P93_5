var firebaseConfig = {
    apiKey: "AIzaSyCWra7eikGnsk31UGiwRoTAnPU9MhUg38g",
    authDomain: "kwitterproject-20058.firebaseapp.com",
    databaseURL: "https://kwitterproject-20058-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-20058",
    storageBucket: "kwitterproject-20058.appspot.com",
    messagingSenderId: "574664286840",
    appId: "1:574664286840:web:b891ec618dc4e68c96438d",
    measurementId: "G-NHCJFD080G"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUsername(){
    username = document.getElementById("usernameInput").value; 
    localStorage.setItem("usernameInput", username);
    window.location = "kwitter_page.html";
}