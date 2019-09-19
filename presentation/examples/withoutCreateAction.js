/** EXAMPLE: Manual action creator */

const OPEN_MODAL = 'myApp/OPEN_MODAL'

const openModal = (modalName) => {
  return {
    type: OPEN_MODAL,
    payload: modalName
  }
}