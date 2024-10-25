import React from 'react'

const SignIn = ({ funcSignUp }) => {
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
            inpName: 'password',
            inpType: 'password',
            inpLabel: 'Confirm password'
        }
    ]
    return (
        <section className="section-sign section-signup center">
            <form>
                {
                    signUpInp.map(inp => (
                        <div className="form-group">
                            <input type={inp.inpType} className={`inp inp-${inp.inpType}`} />
                            <label for="" className={`label label-${inp.inpType}`}>{inp.inpLabel}</label>
                        </div>
                    ))
                }
            </form>
            <div className="txt-sign txt-signup center">
                <p>Already have an account?</p>
                <button onClick={funcSignUp}>Sign in</button>
            </div>
            <button className="btn btn-sign btn-signup center" >Sign up</button>
        </section>
    )
}

export default SignIn