export function selectedCity(state = '', action) {
  switch (action.type) {
    case 'SELECT_CITY':
      return action.city;
    default:
      return state;
  }
}
