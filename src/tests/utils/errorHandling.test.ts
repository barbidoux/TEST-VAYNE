import { handleError } from '../../utils/errorHandling'

test('handles error', () => {
  const error = new Error('Test error')
  handleError(error)

  // Add assertions for error handling
})
