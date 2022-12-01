import { useState,  } from "react";
import {signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "../sign-in-form/sign-in-form.styles.scss"

const defaultFormFields = {
 
    email: "",
    password: "",
   
}

export default function SignInForm(){

       
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password} = formFields

  

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const SignInWithGoogle = async () => {
        console.log("google popup")
        await signInWithGooglePopup();
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit")
      
        try{
            console.log("response")
            const {user} = await signInUserWithEmailAndPassword(email, password)
            
            
            
        
            resetFormFields()
          
        } catch(error) {
            switch(error.code){
                case "auth/wrong-password":
                     alert("Incorrect Password")
                     break;
                case "auth/user-not-found":
                    alert("No user associated with this email")
                    break;
                default: 
                    console.log(error)
            } 
            

         
          
           
        }
       
    }



    return(
        <div className="sign-up-container">
            <h2>Already Have An Account?</h2>
            <span >Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput 
                label="Email" 
                inputOptions = {
                    { type: "email",
                    onChange: handleChange,
                    name:"email",
                    value: email,
                    required: true }
                        }
            />

            <FormInput 
                label="Password" 
                inputOptions = {
                    { type: "password",
                    onChange: handleChange,
                    name:"password",
                    value: password,
                    required: true }
                        }
            />

            <div className="buttons-container"> 
            <Button type="submit">Sign in</Button>
            <Button type="button" buttonType="google" onClick={SignInWithGoogle}>Google Sign In</Button>
            </div>
           
            </form>
            
        </div>
    )
}