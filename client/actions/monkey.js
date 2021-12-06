export const MONKEY_ACTION = 'MONKEY_ACTION'

export function monkeyAction (monkey) {
  console.log('monkeyAction')
  return {
    type: MONKEY_ACTION,
    monkey
  }
}
