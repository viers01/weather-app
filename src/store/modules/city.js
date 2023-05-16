import { factories } from '@/plugins/api';

const state = () => ({
    enteredCity: '',
    citiesData: [],
    loading: false,
});

// getters
const getters = {
    getSelectIds(state) {
        return state.citiesData.map((item) => item.id);
    },
};

// actions
const actions = {
    async loadCitiesData({ commit, state }) {
        state.citiesData.forEach(async ({ id }) => {
            const { data } = await factories.city.getCityWeather({ id });
            commit('pushCityToList', data);
        });
    },
    async refreshCitiesData({ commit, state }) {
        state.citiesData.forEach(async ({ id }) => {
            const { data } = await factories.city.getCityWeather({ id });
            commit('refreshCityData', data);
        });
    },
    async loadCitiesFromIds({ commit }, payload) {
        payload.forEach(async (id) => {
            const { data } = await factories.city.getCityWeather({ id });
            commit('pushCityToList', data);
        });
    },

    async loadCityData({ commit, state }) {
        if (
            state.citiesData.find(
                (item) => item.name.toLowerCase() === state.enteredCity.toLowerCase()
            )
        )
            return;

        try {
            commit('setLoadingState', true);
            const { data } = await factories.city.getCityWeather({ q: state.enteredCity });
            if (data) {
                commit('pushCityToList', data);
                commit('clearEnteredCity');
            }
        } catch (error) {
            console.log(error);
        } finally {
            commit('clearEnteredCity');
            commit('setLoadingState', false);
        }
    },
};

// mutations
const mutations = {
    setEnteredCity(state, payload) {
        state.enteredCity = payload;
    },
    clearEnteredCity(state) {
        state.enteredCity = '';
    },
    setLoadingState(state, payload) {
        state.loading = payload;
    },
    pushCityToList(state, payload) {
        state.citiesData.push(payload);
    },
    deleteSelectCity(state, payload) {
        const index = state.citiesData.indexOf(payload);

        if (index !== -1) {
            state.citiesData.splice(index, 1);
        }
    },
    refreshCityData(state, { city, data }) {
        for (let i = 0; i < state.citiesData.length; i++) {
            if (state.citiesData[i].name === city) {
                state.citiesData[i] = data;
            }
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
