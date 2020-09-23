import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import BlogLink from '../components/BlogLink'
import mockResponse from '../components/__mocks__/github-response.json'

test ("shows link to blog", async () => {
  render(<BlogLink />)

  const element = await screen.findByText("Blogs")
  expect(element).toBeInTheDocument()
})
