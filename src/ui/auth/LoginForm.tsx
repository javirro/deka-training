'use client'

import { useState } from 'react'
import { InputLWithLabel } from '../base/Input'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    if (!email || !password) {
      alert('Please fill in all fields')
      return
    }
  }
  return (
    <form className="flex flex-col w-full sm:w-[25%] gap-5 justify-center items-center p-4 mt-8">
      <InputLWithLabel type="email" label="Email" value={email} handleInputChange={(e) => setEmail(e.target.value)} required />
      <InputLWithLabel type="password" label="Password" value={password} handleInputChange={(e) => setPassword(e.target.value)} required />

      <button
        type="submit"
        disabled={!email || !password}
        onClick={handleSubmit}
        className="w-3/4 sm:w-[50%] bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
