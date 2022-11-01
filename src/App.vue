<template>
  <div>
    <MyHeader background="red" title="购物车案例"></MyHeader>
    <div class="main">
      <MyGoods 
        v-for="obj in list" 
        :key="obj.id"
        :obj="obj"
      >
      </MyGoods>
    </div>    
    <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data(){
    return {
      list: []
    }
  },
  created(){
    this.$axios({
      url: "/api/cart"
    }).then(res => {
      console.log(res)
      this.list = res.data.list
    })
  },
  methods: {
    allFn(bool){
      //全选
      this.list.forEach(obj => obj.goods_state = bool)
    }
  }
}
</script>

<style scoped>
  .main {
    padding-top: 45px;
    padding-bottom: 50px;
  }
</style>
