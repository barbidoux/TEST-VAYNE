import React, { useState } from 'react'
import { useSupabase } from '../context/SupabaseContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { supabase } = useSupabase()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error

      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: user.id,
            username,
            first_name: firstName,
            last_name: lastName,
          },
        ])

      if (profileError) throw profileError

      navigate('/login')
    } catch (error) {
      console.error('Error registering:', error.message)
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
