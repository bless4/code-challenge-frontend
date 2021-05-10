import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { Provider } from 'react-redux'
import store from '../store'

test('render the app successfully', async () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    expect(getByTestId('app')).toBeInTheDocument()
})

test('render the app successfully with header', async () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    expect(getByTestId('app-header')).toBeInTheDocument()
})
