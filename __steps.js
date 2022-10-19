
/* 
----------------------
    INITIAL SETUP
    ------------------
1. visit: console.firebase.google.com
2. create a new firebase project
3. visit doc (go to docs): Build > Authentication > web > Getting started
4. Register web app > firebase project home > click web > give name and register
5. Install firebase for your project: npm install firebase
6. DANGEROUS: get firebase config and put it in firebase.init.js
7. Export app from firebase.init.js
----------------------
    SETUP THE PROVIDER
----------------------
8. create auth using getAuth from 'firebase/auth' and pass app form firebase.init.js just like 'getAuth(app)'
9. create a google auth provider do not forget to use new GoogleAuthProvider();
10. go to firebase > Build > Authentication > Sign In method
11. Enable google sign in method
12. Create a button for google sign in method with a click handler.
13. Inside the event handler, call signInWithPopup with auth and provider parameteer.
14. after signInWithPopup .then result , error.
------------------------
    DISPLAY DATA
------------------------


------------------------------
    ADD A NEW SIGN IN METHOD
    ---------------------------

1. Enable the sign in method
2. Create github, twitter, fb etc. > create app
3. get client id and secret from app
*/