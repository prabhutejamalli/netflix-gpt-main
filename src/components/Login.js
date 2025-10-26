// import { useState, useRef } from "react";
// import Header from "./Header";
// import { checkValidData } from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { BG_URL, USER_AVATAR } from "../utils/constants";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const dispatch = useDispatch();

//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
//     const message = checkValidData(email.current.value, password.current.value);
//     setErrorMessage(message);
//     if (message) return;

//     if (!isSignInForm) {
//       // Sign Up Logic
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           updateProfile(user, {
//             displayName: name.current.value,
//             photoURL: USER_AVATAR,
//           })
//             .then(() => {
//               const { uid, email, displayName, photoURL } = auth.currentUser;
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   photoURL: photoURL,
//                 })
//               );
//             })
//             .catch((error) => {
//               setErrorMessage(error.message);
//             });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     } else {
//       // Sign In Logic
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     }
//   };

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };
//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img className="h-screen object-cover" src={BG_URL} alt="logo" />
//       </div>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
//       >
//         <h1 className="font-bold text-3xl py-4">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>

//         {!isSignInForm && (
//           <input
//             ref={name}
//             type="text"
//             placeholder="Full Name"
//             className="p-4 my-4 w-full bg-gray-700"
//           />
//         )}
//         <input
//           ref={email}
//           type="text"
//           placeholder="Email Address"
//           className="p-4 my-4 w-full bg-gray-700"
//         />
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="p-4 my-4 w-full bg-gray-700"
//         />
//         <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
//         <button
//           className="p-4 my-6 bg-red-700 w-full rounded-lg"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
//           {isSignInForm
//             ? "New to Netflix? Sign Up Now"
//             : "Already registered? Sign In Now."}
//         </p>
//       </form>
//     </div>
//   );
// };
// export default Login;
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>

      {/* Centered Form */}
      <div className="flex items-center justify-center flex-grow px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full sm:w-8/12 md:w-5/12 lg:w-3/12 p-8 sm:p-10 bg-black bg-opacity-80 text-white rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4 text-center">
            {isSignInForm ? "Prabhu Teja" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-3 w-full bg-gray-700 rounded"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-3 w-full bg-gray-700 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-3 w-full bg-gray-700 rounded"
          />

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 font-bold text-sm py-2">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            className="p-4 my-6 bg-red-700 hover:bg-red-800 w-full rounded-lg transition duration-200 font-semibold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle between Sign In / Sign Up */}
          <p
            className="py-2 text-center cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
