import React from 'react'
import {
    render,
    fireEvent,
    waitFor,
    waitForElementToBeRemoved,
    queryByTestId,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { Provider, useDispatch } from 'react-redux'
import store from '../store'
import { getImage } from '../actions/image'
import ImageGrid from '../components/ImageGrid'

test('render the app successfully with grid container', async () => {
    const { getAllByTestId } = render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    expect(getAllByTestId('img-grid').length).toBeGreaterThanOrEqual(1)
})

test('open modal after 1st image is clicked', async () => {
    const { queryByTestId, getByTestId } = render(
        <Provider store={store}>
            <ImageGrid />
        </Provider>
    )
    waitFor(
        async () => {
            await waitForElementToBeRemoved(queryByTestId('grid-loading'))
            fireEvent.click(getByTestId('grid-img-0'))
            expect(getByTestId('modal-image-container')).toBeInTheDocument()
        },
        { timeout: 6000 }
    )
})

test("open Details modal after 1st image's modal is opened", async () => {
    const { queryByTestId, getByTestId } = render(
        <Provider store={store}>
            <ImageGrid />
        </Provider>
    )
    waitFor(
        async () => {
            await waitForElementToBeRemoved(queryByTestId('grid-loading'))
            fireEvent.click(getByTestId('grid-img-0'))
            fireEvent.click(getByTestId('detail-btn'))
            expect(getByTestId('img-info')).toBeInTheDocument()
        },
        { timeout: 6000 }
    )
})
