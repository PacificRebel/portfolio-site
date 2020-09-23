import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import GitHubCall from '../components/GitHubCall'
import mockResponse from '../components/__mocks__/github-response.json'

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test ("shows my name", async () => {
  render(<GitHubCall />)

  const element = await screen.findByText("Lemony Snicket")
  expect(element).toBeInTheDocument()
})
