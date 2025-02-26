import { getTransactions, updateTransaction } from '../../api/transactions'

test('fetches transactions', async () => {
  const { data, error } = await getTransactions()

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('updates transaction', async () => {
  const transactionId = '1'
  const transactionData = { description: 'Updated Transaction' }
  const { data, error } = await updateTransaction(transactionId, transactionData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})
