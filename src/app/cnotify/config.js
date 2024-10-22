import CNotifySDK from '@eruka-tech/cnotify-sdk';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyC7yvsjkzEKUaclB4G4n0jl-9ij-4S7tI4',
  authDomain: 'cnotify-nextjs-example.firebaseapp.com',
  projectId: 'cnotify-nextjs-example',
  storageBucket: 'cnotify-nextjs-example.appspot.com',
  messagingSenderId: '973947531891',
  appId: '1:973947531891:web:72ebb259823dbd8222f006',
  measurementId: 'G-4XE0MTS39Y',
};

// Initialize CNotify SDK
export const cnotify = CNotifySDK.getInstance(
  { apiKey: '43f5a43b-9003-4c8f-bf5c-4a8a210b99b2' },
  {
    testing: true,
    firebaseConfig: firebaseConfig,
  }
);
