import React from 'react'
import '../Login.css'

const SignUp = ({ funcSignIn }) => {
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
    return (
        <form className="section-sign section-signin center">
            <form>
                {
                    signInInp.map(inp => (
                        <div className="form-group">
                            <input type={inp.inpType} className={`inp inp-${inp.inpType}`} />
                            <label for="" className={`label label-${inp.inpType}`}>{inp.inpLabel}</label>
                        </div>
                    ))
                }
            </form>
            <div className="txt-sign txt-signin center">
                <p>Don't have an account?  </p>
                <button  onClick={funcSignIn}>Sign up</button>
            </div>
            <button className="btn btn-sign btn-signin center" >Sign in</button>
        </form>
    )
}

export default SignUp