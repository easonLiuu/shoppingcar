<template>
    <div class="my-goods-item">
      <div class="left">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="obj.id"
          v-model="obj.goods_state"
          >
          <!--
             这里的id关联比较重要 
          -->
          <label class="custom-control-label" :for="obj.id">
            <img :src="obj.goods_img" alt="">
          </label>
        </div>
      </div>
      <div class="right">
        <div class="top">{{ obj.goods_name }}</div>
        <div class="bottom">
          <span class="price">¥ {{ obj.goods_price }}</span>
          <span>
              <MyCount :obj="obj"></MyCount>
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MyCount from './MyCount.vue';
  export default {
    props: {
        obj: Object
    },
    components: {
        MyCount
    }
  }
  </script>
  
  <style lang="less" scoped>
  .my-goods-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    .left {
      img {
        width: 120px;
        height: 120px;
        margin-right: 8px;
        border-radius: 10px;
      }
      .custom-control-label::before,
      .custom-control-label::after {
        top: 50px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top{
          font-size: 14px;
          font-weight: 700;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        align-items: center;
        .price {
          color: red;
          font-weight: bold;
        }
      }
    }
  }
  
  </style>