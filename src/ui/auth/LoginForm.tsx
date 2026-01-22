'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { InputLWithLabel } from '../base/Input'
import { loginAction } from '@/app/auth/actions'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    try {
      const result = await loginAction(email, password)

      if (result.success) {
        // Redirect to home or dashboard
        router.push('/')
        router.refresh()
      } else {
        setError(result.error || 'Login failed')
      }
    } catch (error) {
      console.error('Error during form submission:', error)
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-[25%] gap-5 justify-center items-center p-4 mt-8">
      <InputLWithLabel type="email" label="Email" value={email} handleInputChange={(e) => setEmail(e.target.value)} required />
      <InputLWithLabel type="password" label="Password" value={password} handleInputChange={(e) => setPassword(e.target.value)} required />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={!email || !password || loading}
        className="w-3/4 sm:w-[50%] bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}

export default LoginForm
