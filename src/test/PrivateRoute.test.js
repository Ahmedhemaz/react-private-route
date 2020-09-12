import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
import { App } from './__mocks__/app'

test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    const { container } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    expect(container.innerHTML).toMatch('You are home')
})

test('should return to path /', () => {
    const history = createMemoryHistory()
    history.push('/about')
    const { getByRole } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    expect(history.location.pathname).toBe('/');
})


test('should return go to /profile', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    fireEvent.click(getByText(/profile/i))
    expect(history.location.pathname).toBe('/profile');
})