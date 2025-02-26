import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    fetchUser()
  }, [])

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Name: {user.user_metadata.name}</p>
          <p>Currency: {user.user_metadata.currency}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Profile
