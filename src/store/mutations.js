export const cookFood = (state, payload) => {
  state.food.id = state.foodList.length
  state.food.name = payload.msg
  // 菜的价格由餐馆决定为28
  state.food.price = 28
  // 菜做好了，push方法进行上菜
  state.foodList.push(state.food)
  // 方法执行完，需要将state中的food清零
  state.food = {id: -1, name: '', price: -1}
}
