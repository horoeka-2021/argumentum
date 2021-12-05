export const SET_RADIO_STATE = 'SET_RADIO_STATE'

export function setRadioState (state) {
  console.log({ state })
  return {
    type: SET_RADIO_STATE,
    state: state
  }
}
