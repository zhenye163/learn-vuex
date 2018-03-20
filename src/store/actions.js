export const addFood = ({commit}, payload) => {
  commit({
    type: 'cookFood',
    // payload告诉我们点的菜是什么
    msg: payload
  })
}
