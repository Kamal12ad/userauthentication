import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';


function EmailVerificationPage() {
  const [code, setCode] = useState('')
  const navigate = useNavigate();

  const { error , isLoading ,verifyEmail} = useAuthStore()


  // handleChange
  const handleInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCode(value);
    }
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await verifyEmail(code)
      toast.success("Email verify success")
      navigate("/")
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='form'>
      <form className='w-100' onSubmit={handleSubmit}>
        <input 
        type="text" 
        maxLength={6}
        value={code} 
        onInput={handleInput}
        className='form-control w-100 mb-3' 
        placeholder='Enter verification code'
         />
         {error && <p className='text-danger'>{error}</p>}
        <button className='btn btn-primary w-100 mb-3' >Verify Email</button>
      </form>
    </div>
  )
}

export default EmailVerificationPage
