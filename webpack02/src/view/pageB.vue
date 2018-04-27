<template>
    <div>
        <h1>pageB页面1212312</h1>
        <p>
            <img src="https://img.alicdn.com/imgextra/i1/1714128138/TB22KYfXqzB9uJjSZFMXXXq4XXa_!!1714128138.jpg_60x60q90.jpg">
            <h3>{{$store.state.num}}</h3>
            <button @click='add'>add</button>
        </p>
    </div>

</template>
<script>
    export default {
        methods: {
            add() {
                this.$store.commit('add', 10)
            }
        }
    }
</script>