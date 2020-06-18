import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        step: 1,
        faculty: '',
        coordinates: {
            lng: 0,
            lat: 0,
        }
    },
    mutations: {
        setStep(state, step) {
          state.step = step;
        },
        setFaculty (state, faculty) {
            state.faculty = faculty;
        },
        setCoordinates(state, coordinates) {
            state.coordinates = coordinates;
        }
    }
})