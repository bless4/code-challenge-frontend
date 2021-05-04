import * as imageActions from '../actions/image'
import * as modalActions from '../actions/modal'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('action-image', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  it('action-image-getImage', () => {
    const pageNum = '1';
    const CLIENT_ID = 'dE30n6DCz7vQP0wYMPEM9YMlUb_ORGIUAI54hgmV2uo';
    const url = `https://api.unsplash.com/photos/?page=${pageNum}&per_page=15&client_id=${CLIENT_ID}`;
    axios
      .get(
        url
      )
      .then((res) => {
        const expectedAction = [{ "payload": res.data, "type": imageActions.GET_IMAGE }, { "payload": false, "type": imageActions.SET_IS_LOADING }]
        fetchMock.getOnce(url, "")
        const store = mockStore({})
        return store.dispatch(imageActions.getImage(pageNum)).then(() => {
          expect(store.getActions()).toEqual(expectedAction)
        })
      })
      .catch((e) => {
        console.log(e.response);
      });
  })
  it('action-image-setPageNum', () => {
    const pageNum = '1'
    const expectedAction = {
      type: imageActions.SET_PAGE_NUMBER,
      payload: pageNum
    }
    expect(imageActions.setPageNum(pageNum)).toEqual(expectedAction)
  });
  it('action-image-setIsLoading', () => {
    const isLoading = true;
    const expectedAction = {
      type: imageActions.SET_IS_LOADING,
      payload: isLoading
    }
    expect(imageActions.setIsLoading(isLoading)).toEqual(expectedAction)
  });
  it('action-image-setLoadedCount', () => {
    const loadedCount = 1;
    const expectedAction = {
      type: imageActions.SET_LOADED_COUNT,
      payload: loadedCount
    }
    expect(imageActions.setLoadedCount(loadedCount)).toEqual(expectedAction)
  });
})

describe('action-modal', () => {
  it('action-modal-setShowModal', () => {
    const showModal = true;
    const expectedAction = {
      type: modalActions.SET_SHOW_MODAL,
      payload: showModal
    }
    expect(modalActions.setShowModal(showModal)).toEqual(expectedAction)
  });
  it('action-modal-setSelectedImage', () => {
    const selectedImage = 123;
    const expectedAction = {
      type: modalActions.SET_SELECTED_IMAGE,
      payload: selectedImage
    }
    expect(modalActions.setSelectedImage(selectedImage)).toEqual(expectedAction)
  });
  it('action-modal-setShowModalDetail', () => {
    const showModalDetail = true;
    const expectedAction = {
      type: modalActions.SET_SHOW_MODAL_DETAIL,
      payload: showModalDetail
    }
    expect(modalActions.setShowModalDetail(showModalDetail)).toEqual(expectedAction)
  });
})