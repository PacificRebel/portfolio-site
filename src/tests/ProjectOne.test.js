import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import StarredRepos from '../components/StarredRepos'
import mockResponse from '../components/__mocks__/starred_github_response.json'

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test ("shows Team-6-Game", async () => {
  render(<StarredRepos />)

  const element = await screen.findByText("Team-6-Game")

  screen.debug()
  expect(element).toBeInTheDocument()
})
