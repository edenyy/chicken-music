<template>
<div>
    <h1>歌单</h1>
</div>
</template>
<script>
import axios from 'axios'
export default {
    methods:{
        getlist(){
            axios.get('/api/top/playlist')
            .then(console.log(res))
            .err(function(err){
                console.log(err)
            })
        }
    },
    mounted(){
        this.getlist()
    }
}
</script>
<style lang="stylus" scoped>
h1
 color #fff
</style>
