// import { useEffect } from "react"; //Redirect的api
// import { getRedirectResult } from "firebase/auth"; //Redirect的api
// import { 
//     // auth,//getRedirectResult的結果
//     // signInWithGoogleRedirect,
//         signInWithGooglePopup,
//         createUserDocumentFromAuth 
//     } from "../../utils/firebase/Firebase";

import SignInForm from "../../Components/SignInForm/SignInForm";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

import './authentication.scss'

const Authentication = () => {
    // useEffect(
    //     (async() => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response)
    //         // if(response){}
    //     })(),[])
    
    //彈窗驗證 已移至SignInForm 的組件
    // const logGoogleUser = async()=>{
    //     const {user} = await signInWithGooglePopup();
    //     console.log(user);
    //     const userDocRef = await createUserDocumentFromAuth(user);
    //     console.log(userDocRef);
    // };

    //重定向驗證
    // const logGoogleRedirect = async()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     // console.log(user);
    //     // const userDocRef = await createUserDocumentFromAuth(user);
    //     // console.log(userDocRef);
    // }

    return(
        <div className="authentication-container">
            {/* <button onClick= {logGoogleUser} >Sign in Google Popup</button> 彈窗驗證 已移至SignInForm 的組件 */}
            {/* <button onClick={logGoogleRedirect}>Sign in Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
};

export default Authentication;