<template>
    <div class="my-component">
        <div>{{ message.type }}</div>
        <div>{{ message.text }}</div>
        <div><button @click="changeType">changeType</button></div>
        <div><button @click="changeText">changeText</button></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: {
                    type: 'greeting',
                    text: 'How are you?'
                }
            }
        },
        methods: {
            changeType() {
                this.message.type = 'this is new type'
            },
            changeText() {
                this.message.text = ' this is new text'
            }
        },
        computed: {
            getType() {
                return this.message.type
            },
            getText() {
                return this.message.text
            }
        },
        watch: {
            getType() {
                console.log('type changed')
            },
            getText() {
                console.log('text changed')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-component {
            color: red;
        }
</style>
