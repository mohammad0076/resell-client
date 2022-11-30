import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useToken from '../../hook/useToken';
import { AuthContext } from '../Au/Authprovider';
const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupE, setSignupE] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate('/');
    }
    const handLogin = data => {
        console.log(data)
        setSignupE('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('congratulations')

                const userInfo = {
                    displayName: data.name,
                    option: data.options,



                }


                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.options)

                    })
                    .catch(error => console.log(error));


            })
            .catch(error => {
                console.log(error)
                setSignupE(error.message)
            });
    }


    const saveUser = (name, email, option) => {
        const user = { name, email, option };
        fetch('https://oobbss-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success('user created')

                    setCreatedUserEmail(email)
                }


            })


    }
    // const getUserToken = email => {
    //     fetch(`https://oobbss-server.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acccessToken) {
    //                 navigate('/');
    //                 localStorage.setItem('acccessToken', data.acccessToken)

    //             }
    //         })


    // }
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handlegoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user.displayName);
                navigate('/')
                    // const userInfo = {
                    //     displayName: user.displayName,
                    //     options: "Buyer",
                    //     email: user.email
                    // }
                    // // https://oobbss-server.vercel.app/users
                    // fetch('https://oobbss-server.vercel.app/users', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json'

                    //     },
                    //     body: JSON.stringify(userInfo)


                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         console.log(data)
                    //         if (data.acknowledged) {
                    //             toast.success('user created as a Buyer')


                    //         }
                    //     })

                    //     const userInfo = {
                    //         displayName: data.name,
                    //         photoURL: data.options,



                    //     }


                    //     updateUser(userInfo)
                    //         .then(() => {
                    //             navigate('/')
                    //         })
                    //         .catch(error => console.log(error));
                    // })
                    .catch(error => console.error(error))
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5'>
                <h1 className='text-2xl text-center'>SignUp</h1>
                <form onSubmit={handleSubmit(handLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Name</span>
                        </label>
                        <input type='text'{...register("name")} className="input input-bordered w-full max-w-xs" />


                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">

                            <span className="label-text-alt">Account Role</span>
                        </label>
                        <select type='options'{...register("options", { required: "options is required" })} className="select w-full max-w-xs">

                            <option>Buyer</option>
                            <option>Seller</option>

                        </select>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Email</span>
                        </label>
                        <input type='email'{...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Password</span>
                        </label>
                        <input {...register("password", { required: 'password is rewuifred', pattern: { value: /^[A-Za-z]+$/, message: 'password must be strong' }, minLength: { value: 6, message: 'password must be in 6 char' } })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                        <label className="label">


                        </label>
                        {
                            signupE && <p>{signupE}</p>
                        }

                    </div>






                    <input className='input input-bordered w-full max-w-xs btn-accent' type="Submit" value='Sign Up' />

                </form>
                <p>Already Have a account <Link className='text-primary' to='/login'>Create New Account</Link></p>
                <div className="divider w-full max-w-xs  ">OR</div>
                <button onClick={handlegoogle} className='btn btn-outline w-full max-w-xs text-bold'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;