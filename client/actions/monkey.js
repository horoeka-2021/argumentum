export const MONKEY_ACTION = 'MONKEY_ACTION'

export function monkeyAction (monkey) {
  return {
    type: MONKEY_ACTION,
    monkey
  }
}
