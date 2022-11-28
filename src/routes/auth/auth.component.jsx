
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "../auth/auth.styles.scss"

export default function Auth(){

     return (

        <div className="auth-container"> 
        
            <SignInForm />
            <SignUpForm />
        </div>
    )
}