import { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser } from '../../api/users'

test('registers user', async () => {
  const userData = { email: 'test@example.com', password: 'password123' }
  const { data, error } = await registerUser(userData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('logs in user', async () => {
  const userData = { email: 'test@example.com', password: 'password123' }
  const { data, error } = await loginUser(userData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('fetches user profile', async () => {
  const { data, error } = await getUserProfile()

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('updates user profile', async () => {
  const userData = { name: 'Test User', currency: 'USD' }
  const { data, error } = await updateUserProfile(userData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('deletes user', async () => {
  const { data, error } = await deleteUser()

  expect(error).toBeNull()
  expect(data).toBeDefined()
})
