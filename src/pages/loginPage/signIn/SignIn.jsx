import React from 'react'
import '../Login.css'
import { useForm } from "react-hook-form"
import { saveLocalStorage } from '../../../utils/localStorage'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ funcSignIn }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const signInInp = [
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
        }
    ]

    const onSubmit = async (data) => {
        // debugger
        try {
            const response = await fetch("http://localhost:5000/users");
            const users = await response.json();
            const user = users.find(user => user.username === data.username && user.password === data.password);
            if (user) {
                saveLocalStorage("username", { username: user.username, id: user.id })
                navigate("/")
            } else {
                alert("Invalid username or password");
            }
        }
        catch (e) { console.error(e) }
    }

        return (
            <div className="section-sign section-signin center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        signInInp.map(inp => (
                            <div className="form-group">
                                <input type={inp.inpType} className={`inp inp-${inp.inpType}`} {...register((inp.inpName), { required: true })} />
                                <label for="" className={`label label-${inp.inpType}`}>{inp.inpLabel}</label>
                                {errors[inp.inpName] && <span>This field is required</span>}
                            </div>
                        ))
                    }
                    <button type='submit' className="btn btn-sign btn-signin center" >Sign in</button>
                </form>
                <div className="txt-sign txt-signin center">
                    <p>Don't have an account?  </p>
                    <div onClick={funcSignIn}>Sign up</div>
                </div>
            </div>
        )
    }

    export default SignIn