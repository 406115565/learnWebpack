<template>
    <div class="b">
        <h1>pageA页面</h1>
        <img src="../assets/img/wx.png">
        <Param :user='user'></Param>
    </div>
</template>
<script>
    import Param from './param.vue'
    export default {
        name: 'pageA',
        data() {
            return { user: '123' }
        },
        components: {
            Param
        },
        created(){
            this.$on('haha', (a) => {
                alert(a)
            })
        },
        methods: {
            
        }
    }
</script>
<style>
    .b img {
        display: block;
        width: 150px;
        height: 120px;
    }
</style>