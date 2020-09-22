import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import BlogLink from './BlogLink'
import mockResponse from './__mocks__/github-response.json'

test ("shows link to blog", async () => {
  render(<BlogLink />)

  const element = await screen.findByText("https://medium.com/team-6")
  expect(element).toBeInTheDocument()
})
