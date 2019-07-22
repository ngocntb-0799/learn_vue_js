<template>
    <div class="list-rendering">
        <ul>
            <li v-for="todo in listCompleteTodo">
                {{ todo.name }} - {{ todo.isComplete }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todos: [
                    {
                        name: 'to do 1',
                        isComplete: true
                    },
                    {
                        name: 'to do 2',
                        isComplete: false
                    },
                    {
                        name: 'to do 3',
                        isComplete: true
                    },
                ]
            }
        },
        computed: {
            listCompleteTodo() {
                return this.todos.filter(item => item.isComplete)
            }
        }
    }
</script>

<script>
// line chart data
    var buyerData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : [203,156,99,251,305,247]
        }
    ]
}
    var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
</script>

<style lang="scss" scoped>
</style>
