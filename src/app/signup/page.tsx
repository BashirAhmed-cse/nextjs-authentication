"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';

const Signup = () => {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",

  })
  
  const onSignup = async ()=>{

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-full py-2'>
      <h1>Signup</h1>
      <hr/>
      <label htmlFor="username">username</label>
      <input
      className='mt-2 border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
       id="usrname"
       type="text"
       value={user.username}
       onChange={(e)=> setUser({...user, username: e.target.value})}
       placeholder='username'
      />
      <hr/>
      <label htmlFor="username">email</label>
      <input
      className='mt-2 border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
       id="usrname"
       type="text"
       value={user.email}
       onChange={(e)=> setUser({...user, email: e.target.value})}
       placeholder='email'
      />
      <hr/>
      <label htmlFor="username">password</label>
      <input
      className='mt-2 border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
       id="usrname"
       type="password"
       value={user.password}
       onChange={(e)=> setUser({...user, password: e.target.value})}
       placeholder='password'
      />
       <button 
        onClick={onSignup}
       className="mt-3 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        signup here
        </button>
        <Link href="/login">visite login page</Link>
    </div>
  )
}

export default Signup
