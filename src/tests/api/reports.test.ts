import { getSpendingData } from '../../api/reports'

test('fetches spending data', async () => {
  const { data, error } = await getSpendingData()

  expect(error).toBeNull()
  expect(data).toBeDefined()
})
