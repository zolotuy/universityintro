<template>
    <div>
        <div class="MoreDetails">
            <v-card
                    v-for="item in items"
                    :key="item.title"
                    class="MoreDetails__card mx-auto"
                    max-width="400"
            >
                <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="item.img"
                >
                    <v-card-title>{{item.title}}</v-card-title>
                </v-img>

                <v-card-text class="text--primary">
                    {{item.description}}
                </v-card-text>
            </v-card>
        </div>
        <v-btn class="MoreDetails__backBtn" color="primary" @click="onBackHandler">Back</v-btn>
    </div>
</template>

<script>
    import { faculties } from '@/mocks/faculties'

    export default {
        name: "MoreDetails.vue",
        computed: {
            items() {
              return faculties[this.faculty];
            },
            faculty() {
                return this.$store.state.faculty;
            }
        },
        methods: {
            onBackHandler() {
                this.$router.push('/get-started')
            }
        }
    }
</script>

<style scoped>
    .MoreDetails {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 92px;
    }

    .MoreDetails__card {
        display: block;
        width: 300px;
        margin-bottom: 12px;
    }

    .MoreDetails__backBtn {
        display: block;
        margin: auto;
    }
</style>