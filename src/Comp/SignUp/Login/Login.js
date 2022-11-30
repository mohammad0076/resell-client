import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Au/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../../hook/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginE, setLoginE] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const { signinWithEmailPass, } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    if (token) {
        navigate(from, { replace: true });
    }
    const handlegoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                const userInfo = {
                    displayName: user.displayName,
                    options: "Buyer",
                    email: user.email
                }
                // https://oobbss-server.vercel.app/users
                fetch('https://oobbss-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'

                    },
                    body: JSON.stringify(userInfo)


                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success('user created as a Buyer')


                        }
                    })
            })
            .catch(error => console.error(error))
    }


    const handleLogin = data => {
        console.log(data)
        setLoginE('')                       //clearing all the ;ogin errors
        signinWithEmailPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email)
                // navigate(from, { replace: true });
                const userInfo = {
                    displayName: data.name,
                    options: data.options,
                    email: data.email

                }
                // https://oobbss-server.vercel.app/users
                fetch('https://oobbss-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'

                    },
                    body: JSON.stringify(userInfo)


                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {



                        }
                    })
            })
            .catch(error => {
                console.error(error)

                setLoginE(error.message)    //setting the errors
            });

    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5'>
                <h1 className='text-2xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Password</span>
                        </label>
                        <input {...register("password", { required: 'password is rewuifred', minLength: { value: 6, message: 'password must be in 6 char' } })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            {loginE && <p>{loginE}</p>}
                            <span className="label-text-alt">Forget Password?</span>
                        </label>

                    </div>






                    <input className='input input-bordered w-full max-w-xs btn-accent' type="Submit" />

                </form>
                <p>New to OOBBSS <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                <div className="divider w-full max-w-xs  ">OR</div>
                <button onClick={handlegoogle} className='btn btn-outline w-full max-w-xs text-bold'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;