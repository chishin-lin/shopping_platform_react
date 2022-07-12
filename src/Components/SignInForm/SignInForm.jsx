import { useState } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword
    } from '../../utils/firebase/Firebase';

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import './signInForm.scss';

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {
    const [ formFields , setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFromFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) =>{
        const {name,value} =event.target;
        setFormFields({...formFields,[name]:value})
    };
    const handleSubmit = async(event) => {
        event.preventDefault(); //防止瀏覽器預設提交行為
        try {
            const {user} = await signInAuthWithEmailAndPassword( email, password );
            resetFromFields();  //提交後清空表單資料
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;      //一但匹配上就不繼續執行
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default: //默認情況
                    console.log(error)
            };
        }
    };

    //彈窗驗證
    const signInWithGoogle = async()=>{
        await signInWithGooglePopup();
        // await createUserDocumentFromAuth(user); //轉移至userContext
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="passworg" required onChange={handleChange} name='password' value={password}/>
                
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}> 
                {/* 預設會觸發提交，須將type改為button */}
                    Google Sign in
                </Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;