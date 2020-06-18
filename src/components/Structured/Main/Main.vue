<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="text-center">
<!--                        <img class="logo" src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">-->
                        <v-card outlined class="Main__card" elevation="10">
                            <v-card-title>
                                <h2>Welcome to CHNU quiz</h2>
                            </v-card-title>
                            <img class="logo" src="https://promin.cv.ua/uploads/posts/2020-03/thumbs/1585649720_chnu-1024x561.jpg">
                            <v-card-text>
                                <v-textarea readonly value="Chernivtsi National University is a public university in the City of Chernivtsi in Western Ukraine. One of the leading Ukrainian institutions for higher education, it was founded in 1875 as the Franz-Josephs-Universität Czernowitz when Chernivtsi (Czernowitz) was the capital of the Duchy of Bukovina, a Cisleithanian crown land of Austria-Hungary. Today the university is based at the Residence of Bukovinian and Dalmatian Metropolitans building complex, a UNESCO World Heritage Site since 2011"/>
                            </v-card-text>
                            <v-btn color="primary" @click="onClickHandler">Get started</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Main.vue",
        methods: {
            onClickHandler() {
                this.$router.push('get-started')
            }
        }
    }
</script>

<style>
    .Main__card {
        width: 400px;
        height: 560px;
        margin: auto;
    }

    .logo {
        display: block;
        margin: auto;
        margin-bottom: 16px;
        width: 100%;
    }
</style>