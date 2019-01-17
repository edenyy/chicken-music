<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for='(item,index) of lunbo' :key=index><img :src='item.imageUrl' alt=""></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>

</template>
<script>
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    getwy(){
      axios.get('/api/banner')
  .then(this.getlunbo)
  .catch(function (error) {
    console.log(error);
  });
    },
    getlunbo(res){
      this.lunbo=res.data.banners
      console.log('lunbo')
    }
  },
   data() {
      return {
          lunbo:[],
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3200,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoplayDisableOnInteraction : false,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable: true,
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: false,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    created(){
      console.log('yxj')
    },
    mounted(){
      this.getwy()
    }

}
</script>
<style lang="stylus" scoped>
    .swiper-pagination >>> .swiper-pagination-bullet-active
        background #fff

 img
     width 100%
     border-radius 5px

</style>
