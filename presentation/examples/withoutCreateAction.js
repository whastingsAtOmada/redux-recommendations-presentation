/** EXAMPLE: Manual action creator */

// Manually-defined action type
const OPEN_MODAL = 'myApp/OPEN_MODAL'

// Manually-defined action creator
const openModal = (modalName) => {
  return {
    type: OPEN_MODAL,
    payload: modalName
  }
}