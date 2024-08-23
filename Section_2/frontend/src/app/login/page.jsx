
'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'Yup'

const LoginSchema = Yup.object().shape(
    {
        email : Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),

        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/,'Password must contain at least one lowercase letter')
        .matches(/[a-z]/,'Password must contain at least one uppercase letter')
        .matches(/\d/,'Password must contain at least one number')
        .required('Password is requires')


        

        
    }
)




const Login = () => {

    // step 1: formik initialization 

    const loginForm=useFormik({
        initialValues:{
            email : '',
            password : ''

        },
        onSubmit:(values,{resetForm})=>
        {
            console.log(values)
            resetForm()
        }

    })

    
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=" border-2 w-1/3  shadow-lg rounded-lg p-8 bg-white">
                <h3 className="text-center font-bold text-2xl my-5"> LOGIN FORM </h3>
                
                {/* Data Handling Then Submit */}
                <form onSubmit={loginForm.handleSubmit}>
                    <label htmlFor=""> Email address</label>
                    {/* step-3 */}
                    <input
                        className="w-full p-1 border-2 border-gray-300 rounded-md mb-5"
                        type="email"
                        placeholder="email"
                        id='email'
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                    />
                    <label htmlFor=""> Password</label>
                    <input
                        className="w-full p-1 border-2 border-gray-300 rounded-md mb-0"
                        type="password"
                        placeholder="password"
                        id='password'
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                    />
                    <button className="bg-blue-500 py-2 px-4 text-white rounded-md block w-full mt-5">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login