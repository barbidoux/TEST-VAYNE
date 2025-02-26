import { linkAccount } from '../../api/accounts'

test('links account', async () => {
  const accountData = { name: 'Test Account', balance: 1000 }
  const { data, error } = await linkAccount(accountData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})
