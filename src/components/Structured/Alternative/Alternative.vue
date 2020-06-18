<template>
    <v-stepper v-model="step" class="Alternative__stepper">
        <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">Choose faculty</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2">Location</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 3" step="3">Panorama</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="4">Feedback</v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card class="Alternative__startCard" outlined elevation="10">
                    <ValidationObserver ref="observer" class="Alternative__startForm">
                        <form>
                            <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
                                <v-text-field
                                        v-model="name"
                                        :counter="10"
                                        :error-messages="errors"
                                        label="Name"
                                        required
                                ></v-text-field>
                            </ValidationProvider>
                            <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                                <v-text-field
                                        v-model="email"
                                        :error-messages="errors"
                                        label="E-mail"
                                        required
                                ></v-text-field>
                            </ValidationProvider>
                            <ValidationProvider v-slot="{ }" name="select" rules="required">
                                <v-select
                                        :items="items"
                                        label="Please choose faculty"
                                        outlined
                                        value="faculty"
                                        @change="onFacultyChange"
                                ></v-select>
                            </ValidationProvider>
                            <ValidationProvider v-slot="{  }" rules="required" name="checkbox">
                                <v-checkbox
                                        v-model="checkbox"
                                        value="1"
                                        label="Entrant?"
                                        type="checkbox"
                                        required
                                ></v-checkbox>
                            </ValidationProvider>
                            <v-btn @click="clear" class="Alternative__clearBtn">clear</v-btn>
                        </form>
                    </ValidationObserver>
                </v-card>

                <v-btn
                        :disabled="isDisabled"
                        class="Alternative__con"
                        color="primary"
                        @click="setStep(2)"
                >
                    Continue
                </v-btn>

            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="500px"
                >
                    <GmapMap
                            :center="centerCoordinate"
                            :zoom="15"
                            map-type-id="terrain"
                            class="Alternative__map"
                    >
                        <GmapMarker
                                :position="centerCoordinate"
                                @click="center=m.position"
                        />
                    </GmapMap>
                </v-card>
                <div class="Alternative__actions">
                    <v-btn text @click="setStep(1)">Back</v-btn>
                    <v-btn
                            color="primary"
                            @click="setStep(3)"
                    >
                        Continue
                    </v-btn>
                </div>

            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="500px"
                >
                    <GmapStreetViewPanorama
                                            class="Alternative__map"
                                            :position="centerCoordinate"
                                            visibale="true"
                                            linksControl="true"
                                            addressControl="false"
                                            panControl="true"
                                            clickToGo="false"
                                            disableDefaultUI="true"
                    ></GmapStreetViewPanorama>
                </v-card>
                <div class="Alternative__actions">
                    <v-btn text @click="setStep(2)">Back</v-btn>
                    <v-btn
                            color="primary"
                            @click="setStep(4)"
                    >
                        Continue
                    </v-btn>
                    <v-btn
                            color="primary"
                            class="Alternative__moreDetailsBtn"
                            @click="onMoreDetails"
                    >
                        More Details
                    </v-btn>
                </div>


            </v-stepper-content>

            <v-stepper-content step="4">
                <v-card class="Alternative__feedbackForm" elevation="10">
                    <v-card-title color="primary" class="Alternative__feedbackTitle">
                        <h2>Leave your feedback</h2>
                    </v-card-title>
                    <v-rating v-model="rating" size="64" class="Alternative__rating"></v-rating>
                    <v-textarea
                            class="Alternative__textarea"
                            outlined
                            name="input-7-4"
                            v-model="summary"
                            label="Summary"
                    />
                    <v-card-actions>
                        <v-btn
                                color="primary"
                                class="Alternative__submitBtn"
                                @click="saveFeedback">
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-btn text @click="setStep(3)" class="Alternative__actions">Back</v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
    import { required, email, max } from 'vee-validate/dist/rules'
    import { coordinates } from '@/mocks/coordinates';
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')

    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    extend('email', {
        ...email,
        message: 'Email must be valid',
    })

    export default {
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                items: ['IFTKN', 'Economy', 'Geography'],
                lat: 0,
                lng: 0,
                name: '',
                email: '',
                select: null,
                checkbox: false,
                rating: 0,
                summary: ''
            }
        },
        computed: {
            isDisabled() {
                const isNameEmpty = !this.name;
                const isEmailEmpty = !this.email;
                const isSelectEmpty = !this.faculty;
                return isNameEmpty || isEmailEmpty || isSelectEmpty;
            },
            step() {
              return this.$store.state.step;
            },
            faculty() {
              return this.$store.state.faculty;
            },
            centerCoordinate() {
                return this.$store.state.coordinates;
            }
        },
        methods: {
            submit () {
                this.$refs.observer.validate()
            },
            clear () {
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = null
                this.$refs.observer.reset()
            },
            onFacultyChange(faculty) {
                this.$store.commit('setFaculty', faculty);
                this.getCoordinates(faculty)
            },
            getHome() {
                this.$router.push('/')
            },
            saveFeedback() {
                const data = {
                    name: this.name,
                    email: this.email,
                    faculty: this.faculty,
                    checkbox: this.checkbox === '1',
                    rating: this.rating,
                    summary: this.summary
                }
                this.$http.post('https://universityintro-279508.firebaseio.com/data.json',data)
                this.$router.push('/')
            },
            setStep(step) {
                this.$store.commit('setStep', step);
            },
            getCoordinates(faculty) {
                this.$store.commit('setCoordinates', coordinates[faculty])
            },
            onMoreDetails() {
                this.$router.push('more-details')
            }
        }
    }
</script>

<style scoped>
    .Alternative__submitBtn {
        display: block;
        margin: auto;
        margin-top: 24px;
    }

    .Alternative__rating {
        text-align: center;
        margin: 24px auto;
    }

    .Alternative__feedbackForm {
        width: 500px;
        display: block;
        margin: 12px auto;
        height: 500px;
        padding: 12px;
    }

    .Alternative__feedbackTitle {
        text-align: center;
        text-transform: uppercase;
        color: #1976d2;
        margin: auto;
        display: block;
    }

    .Alternative__textarea textarea {
        height: 250px !important;
    }

    .Alternative__clearBtn {
        margin: auto !important;
        display: block;
    }

    .Alternative__map {
        width: 100%;
        height: 100%;
    }

    .Alternative__moreDetailsBtn {
        margin-left: 12px;
    }

    .Alternative__startCard {
        margin: auto;
        display: block;
        width: 500px;
    }

    .Alternative__startForm form {
        padding: 12px 24px;
    }

    .Alternative__con{
        display: block;
        margin-top: 100px !important;
        margin: auto;
    }

    .Alternative__actions {
        display: block;
        margin-top: 16px;
        margin: auto;
    }

    .Alternative__stepper {
        height: 100%;
        margin-top: 60px;
    }
</style>