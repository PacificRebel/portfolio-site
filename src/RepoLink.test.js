import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import RepoLink from './RepoLink'
import mockResponse from './__mocks__/github-response.json'

test ("shows link to github", async () => {
  render(<RepoLink />)

  const element = await screen.findByText("https://api.github.com/users/PacificRebel/repos")
  expect(element).toBeInTheDocument()
})
