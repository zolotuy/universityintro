<template>
    <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>
</template>

<script>
    export default {
        name: "Feedbacks",
        data () {
            return {
                headers: [
                    {
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Email', value: 'email' },
                    { text: 'Faculty', value: 'faculty' },
                    { text: 'Entrant', value: 'checkbox' },
                    { text: 'Rating', value: 'rating' },
                    { text: 'Summary', value: 'summary' },
                ],
                items: [],
            }
        },
        methods: {
            getFeedbacks (){
                this.$http.get('https://universityintro-279508.firebaseio.com/data.json')
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        const result = []
                        for (let key in data){
                            result.push(data[key])
                            console.log(data)
                        }
                        this.items = result
                    })
            }
        },
        mounted() {
            this.getFeedbacks()
        }
    }
</script>

<style scoped>
    .elevation-1 {
        margin-top: 100px;
    }
</style>