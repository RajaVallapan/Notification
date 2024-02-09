importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAEVzgrWTO5UkEy24QF6vxF0PKBpAOFq8c",
    authDomain: "notification-dc92b.firebaseapp.com",
    projectId: "notification-dc92b",
    storageBucket: "notification-dc92b.appspot.com",
    messagingSenderId: "904691354539",
    appId: "1:904691354539:web:c2d66dadd8fb8b597ca0ee",
    measurementId: "G-SGZHH4KP7Z"
});
const messaging = firebase.messaging();