<template>
  <div>
    在餐馆吃饭
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
      <el-button @click.native.once="addFood('炖排骨')">加个炖排骨</el-button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['foodList'])
  },
  methods: {
    addFood(food){
      this.$store.dispatch('addFood', '炖排骨')
    }
  }
}
</script>

<style scoped>

</style>
