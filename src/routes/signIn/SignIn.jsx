import { 
        signInWithGooglePopup,
        createUserDocumentFromAuth 
    } from "../../utils/firebase/Firebase";

const SignIn = () => {
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in Google</button>
        </div>
    )
};

export default SignIn;