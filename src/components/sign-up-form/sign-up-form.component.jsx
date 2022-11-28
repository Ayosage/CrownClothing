import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "../sign-up-form/sign-up-form.styles.scss"
import Button from "../button/button.component"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
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
    const handleSubmit = async (e) => {
        e.preventDefault();
      


        if (password !== confirmPassword) {
            alert("passwords dont match") 
            return};
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            
            await createUserDocumentFromAuth(user, {displayName} )
           
            resetFormFields()
          
        } catch(error) {
            console.log(error.code)
            if(error.code === "auth/email-already-in-use"){
                alert("Email in use")
            } else{
                console.log(error)
            }
           
        }
       
    }
    return (
        <div className="sign-up-container">
                <h2>Dont Have An Account?</h2>
                <span >Sign up with your email and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput
                        label="Display Name" 
                        inputOptions = {
                           { type: "text",
                            onChange: handleChange,
                            name:"displayName",
                            value: displayName,
                            required: true }
                        }
                       
                        />
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
                        <FormInput
                        label="Confirm Password" 
                        inputOptions = {
                           { type: "password",
                            onChange: handleChange,
                            name:"confirmPassword",
                            value: confirmPassword,
                            required: true }
                        }
                       
                        />
                    <Button  type="submit"> Sign Up</Button>

                </form>
        </div>
    )
}

export default SignUpForm