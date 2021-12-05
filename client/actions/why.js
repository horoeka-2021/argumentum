export const SET_WHY = 'SET_WHY'

export default function setWhy (why) {
  console.log({ why })
  return {
    type: SET_WHY,
    why
  }
}
