import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
    }

    return (
        <div className="hero w-50 my-4">

            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold font-mono pt-3">Login</h1>
                <form onSubmit={handleLogin} className="card-body mb-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline btn-primary" type="submit" value="Login" />

                    </div>
                </form>
                <p className='text-center mb-12'>First time at Life Coach ? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;