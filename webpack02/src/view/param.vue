<template>
    <div>
        <h1>par12312312312am</h1>
        <button @click='test'>click</button>
    </div>
</template>
<script>
    export default {
        props: {
            user: {
                type: String,
                default: 'haha'
            }
        },
        data() {
            return {}
        },
        methods: {

            test() {
                this.$parent.$emit('haha', 'haha')
            }
        }
    }
</script>