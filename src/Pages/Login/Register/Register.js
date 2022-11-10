import React, { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, providerLogin } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <div className="hero w-50 my-4">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold font-mono pt-3">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline btn-primary" type="submit" value="Register" />

                        </div>
                        <div className='text-center'>
                            <p>or</p>
                            <button onClick={handleGoogleSignIn} className='me-3 mt-3 btn btn-outline btn-primary'> Sign in with Google </button>
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already have an account ? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;