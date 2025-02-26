import { getCategories, createCategory, updateCategory, deleteCategory } from '../../api/categories'

test('fetches categories', async () => {
  const { data, error } = await getCategories()

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('creates category', async () => {
  const categoryData = { name: 'Test Category' }
  const { data, error } = await createCategory(categoryData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('updates category', async () => {
  const categoryId = '1'
  const categoryData = { name: 'Updated Category' }
  const { data, error } = await updateCategory(categoryId, categoryData)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})

test('deletes category', async () => {
  const categoryId = '1'
  const { data, error } = await deleteCategory(categoryId)

  expect(error).toBeNull()
  expect(data).toBeDefined()
})
