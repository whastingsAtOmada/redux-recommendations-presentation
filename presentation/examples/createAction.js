/** EXAMPLE: createAction from redux-starter-kit */

import { createAction } from 'redux-starter-kit'

// Takes action type string as argument
const openModal = createAction('myApp/OPEN_MODAL')

// Type stored on action creator's `type` property
console.log('Action type: ', openModal.type)
// Argument passed becomes payload
const action = openModal('contactForm')
console.log('Action object: ', action)