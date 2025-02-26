import { getBudgets, createBudget, updateBudget, deleteBudget } from '../../api/budgets'

test('fetches budgets', async () => {
  const { data, error } = await getBudgets()

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('creates budget', async () => {
  const budgetData = { category_id: '1', amount: 1000, start_date: '2023-01-01', end_date: '2023-01-31' }
  const { data, error } = await createBudget(budgetData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('updates budget', async () => {
  const budgetId = '1'
  const budgetData = { amount: 1500 }
  const { data, error } = await updateBudget(budgetId, budgetData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('deletes budget', async () => {
  const budgetId = '1'
  const { data, error } = await deleteBudget(budgetId)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})
