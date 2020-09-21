import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import GitHubCall from './GitHubCall'
import mockResponse from './__mocks__/github-response.json'

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test ("shows my name", async () => {
  render(<GitHubCall />)

  const element = await waitForElement(() => screen.getByText("Lemony Snicket"))
  expect(element).toBeInTheDocument()
})
