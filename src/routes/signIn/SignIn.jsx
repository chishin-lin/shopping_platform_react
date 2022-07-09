// import { useEffect } from "react"; //Redirect的api
import { getRedirectResult } from "firebase/auth"; //Redirect的api
import { 
    // auth,//getRedirectResult的結果
    // signInWithGoogleRedirect,
        signInWithGooglePopup,
        createUserDocumentFromAuth 
    } from "../../utils/firebase/Firebase";

import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const SignIn = () => {
    // useEffect(
    //     (async() => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response)
    //         // if(response){}
    //     })(),[])
    
    //彈窗驗證
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };
    //重定向驗證
    // const logGoogleRedirect = async()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     // console.log(user);
    //     // const userDocRef = await createUserDocumentFromAuth(user);
    //     // console.log(userDocRef);
    // }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in Google Popup</button>
            {/* <button onClick={logGoogleRedirect}>Sign in Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
};

export default SignIn;