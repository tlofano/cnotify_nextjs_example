// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyC7yvsjkzEKUaclB4G4n0jl-9ij-4S7tI4',
  authDomain: 'cnotify-nextjs-example.firebaseapp.com',
  projectId: 'cnotify-nextjs-example',
  storageBucket: 'cnotify-nextjs-example.appspot.com',
  messagingSenderId: '973947531891',
  appId: '1:973947531891:web:72ebb259823dbd8222f006',
  measurementId: 'G-4XE0MTS39Y',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
