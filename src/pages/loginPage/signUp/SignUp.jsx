import React from 'react'
import { useForm } from 'react-hook-form'
import { saveLocalStorage } from '../../../utils/localStorage'

const SignUp = ({ funcSignUp }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const signUpInp = [
        {
            id: 1,
            inpName: 'username',
            inpType: 'text',
            inpLabel: "Username"
        },
        {
            id: 2,
            inpName: 'password',
            inpType: 'password',
            inpLabel: "Password"
        },
        {
            id: 3,
            inpName: 'confirmPassword',
            inpType: 'password',
            inpLabel: 'Confirm password'
        }
    ]
    const onSubmit = async (data) => {
        // debugger
        console.log(data);
        
        try {
            if (data.password !== data.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            const response = await fetch("http://localhost:5000/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: data.username, password: data.password })
            });
            const result = await response.json();
            funcSignUp()
        }
        catch (e) { console.error(e) }
    }
    return (
        <section className="section-sign section-signup center">
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    signUpInp.map(inp => (
                        <div className="form-group" key={inp.id}>
                            <input type={inp.inpType} className={`inp inp-${inp.inpType}`} {...register((inp.inpName), { required: true })} />
                            <label className={`label label-${inp.inpType} ${watch(inp.inpName) ? 'active' : ''}`}>{inp.inpLabel}</label>
                            {errors[inp.inpName] && <span>This field is required</span>}
                        </div>
                    ))
                }
                <button type='submit' className="btn btn-sign btn-signup center" >Sign up</button>
            </form>
            <div className="txt-sign txt-signup center">
                <p>Already have an account?</p>
                <div onClick={funcSignUp} style={{cursor: "pointer"}}>Sign in</div>
            </div>
        </section>
    )
}

export default SignUp