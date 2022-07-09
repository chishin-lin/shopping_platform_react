import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
    } from '../../utils/firebase/Firebase';

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import './signUpForm.scss';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const [ formFields , setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } =formFields;

    const resetFromFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) =>{
        const {name,value} =event.target;
        setFormFields({...formFields,[name]:value})
    };
    const handleSubmit = async(event) => {
        event.preventDefault(); //防止瀏覽器預設提交行為
        if(password !== confirmPassword){ //密碼及確認密碼不符
            alert('Password do not match!!');
            return;//並跳出
        };

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,displayName);
            await createUserDocumentFromAuth(user,{displayName});
            resetFromFields();  //提交後清空表單資料
        } catch (error) {
            if(error.code ==='auth/email-already-in-use'){
                alert('Cannot create user, The email is already in use!')
            }else{
                console.log('User creation encuntered an error',error);
            }
            
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have ann account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Display Name' type="text" required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="passworg" required onChange={handleChange} name='password' value={password}/>
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUpForm;