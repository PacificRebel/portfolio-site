import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import RepoLink from '../components/RepoLink'
import mockResponse from '../components/__mocks__/github-response.json'

test ("shows link to github", async () => {
  render(<RepoLink />)

  const element = await screen.findByText("GitHub repos")
  expect(element).toBeInTheDocument()
})
