import imageReducer from '../reducers/image'
import modalReducer from '../reducers/modal'

import { 
  GET_IMAGE,
  SET_PAGE_NUMBER,
  SET_IS_LOADING,
  SET_LOADED_COUNT
} from '../actions/image';

import { 
  SET_SHOW_MODAL,
  SET_SELECTED_IMAGE,
  SET_SHOW_MODAL_DETAIL,
} from '../actions/modal'

const initialStateImage = {
  image: [],
  pageNum: 0,
  isLoading: false,
  loadedCount: 0,
}
const initialStateModal = {
  curSelNum: 0,
  isOpen: false,
  isOpenDetail: false,
}

describe('reducer-image', () => {
  it('reducer-image-default', () => {
    expect(imageReducer({}, {})).toEqual({})
  })

  it('reducer-iamge-GET_IMAGE', () => {
    expect(imageReducer(initialStateImage, {type: GET_IMAGE, payload: ''})).toEqual(initialStateImage)
  })
  it('reducer-iamge-SET_PAGE_NUMBER', () => {
    expect(imageReducer(initialStateImage, {type: SET_PAGE_NUMBER, payload: initialStateImage})).toEqual(initialStateImage)
  })
  it('reducer-iamge-SET_IS_LOADING', () => {
    expect(imageReducer(initialStateImage, {type: SET_IS_LOADING, payload: false})).toEqual(initialStateImage)
  })
  it('reducer-iamge-SET_LOADED_COUNT', () => {
    expect(imageReducer(initialStateImage, {type: SET_LOADED_COUNT, payload: 0})).toEqual(initialStateImage)
  })
})
describe('reducer-modal', () => {
  it('reducer-modal-default', () => {
    expect(modalReducer({}, {})).toEqual({})
  })

  it('reducer-modal-SET_SHOW_MODAL', () => {
    expect(modalReducer(initialStateModal, {type: SET_SHOW_MODAL, payload: false})).toEqual(initialStateModal)
  })
  it('reducer-modal-SET_SELECTED_IMAGE', () => {
    expect(modalReducer(initialStateModal, {type: SET_SELECTED_IMAGE, payload: 0})).toEqual(initialStateModal)
  })
  it('reducer-modal-SET_SHOW_MODAL_DETAIL', () => {
    expect(modalReducer(initialStateModal, {type: SET_SHOW_MODAL_DETAIL, payload: false})).toEqual(initialStateModal)
  })
})