<template>
  <div>
    在家吃饭
    <div>
      <br/><br/>
      <div>
        <div>此时桌子上的菜有：</div>
        <br/><br/>
        <div v-for="food in foodList" :key="food.id">
          <div>菜名：{{food.name}} ，价格：{{food.price}}</div>
        </div>
      </div>
      <br/><br/>
      <el-button @click.native.once="addFood()">加个炖排骨</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foodList: [],
      menu: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.foodList = [
        {id: 1, name: '酸辣土豆丝', price: 12},
        {id: 2, name: '手撕包菜', price: 12}
      ]
      this.menu = [
        {id: 1, name: '酸辣土豆丝', price: 12},
        {id: 2, name: '手撕包菜', price: 12},
        {id: 3, name: '炖排骨', price: 48},
        {id: 4, name: '麻婆豆腐', price: 12},
        {id: 5, name: '武昌鱼', price: 12}
      ]
    },
    addFood () {
      this.foodList.push(this.menu[2])
    }
  }
}
</script>

<style>

</style>
