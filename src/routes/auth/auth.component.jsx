
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthContainer} from "../auth/auth.styles.jsx"

export default function Auth(){

     return (

        <AuthContainer> 
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
    )
}