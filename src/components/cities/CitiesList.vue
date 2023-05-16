<template>
    <div class="cities">
        <div class="cities__wrapper">
            <!-- @TODO вынести в компонент -->
            <header class="cities__header">
                <h4>Add city</h4>
                <div class="cities__header-form">
                    <unit-list :unit-view.sync="unitView" />
                    <form
                        class="form"
                        @submit.prevent="submit"
                    >
                    <!-- @TODO дадата подсказки -->
                        <app-input
                            v-model="enteredCityProxy"
                            label="City name"
                        />
                        <button
                            type="submit"
                            class="form__button"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </header>
            <section class="cities__list">
                <div
                    v-if="!citiesData.length"
                    class="cities__list-plug"
                >
                    <p>No selected cities</p>
                </div>
                <city-item
                    v-for="item in citiesData"
                    :key="item.id"
                    :city="item"
                    :temperature="item.main.temp"
                    :unit-type="unitView"
                    @clickRemove="removeCity(item)"
                />
            </section>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
    import CityItem from './CityItem.vue';
    import AppInput from '@/components/common/AppInput.vue';
    import UnitList from '@/components/cities/UnitList.vue';

    export default {
        name: 'CitiesList',
        components: {
            CityItem,
            UnitList,
            AppInput,
        },
        data() {
            return {
                unitView: 'C',
                cityName: '',
                intervalFetch: null,
            };
        },
        computed: {
            ...mapState('city', ['selectCities', 'enteredCity', 'citiesData']),
            ...mapGetters('city', ['getSelectIds']),
            enteredCityProxy: {
                get() {
                    return this.enteredCity;
                },
                set(value) {
                    this.setEnteredCity(value);
                },
            },
        },
        created() {
            const selectFromCookies = this.$cookies.get('SELECTED_CITIES') ?? null;
            console.log(this.citiesData);
            if (selectFromCookies && !this.citiesData.length) {
                this.loadCitiesFromIds(selectFromCookies);
                this.loadCitiesData();

                this.intervalFetch = setInterval(() => {
                    this.refreshCitiesData();
                }, 600000);
            }
        },
        methods: {
            ...mapActions('city', [
                'loadCityData',
                'loadCitiesData',
                'refreshCitiesData',
                'loadCitiesFromIds',
            ]),
            ...mapMutations('city', ['setEnteredCity', 'deleteSelectCity']),
            async submit() {
                await this.loadCityData();
                this.$cookies.set('SELECTED_CITIES', [...this.getSelectIds]);

                if (!this.intervalFetch) {
                    this.intervalFetch = setInterval(() => {
                        this.refreshCitiesData();
                    }, 600000);
                }
            },
            removeCity(city) {
                this.deleteSelectCity(city);
                const selectCookiesArr = this.$cookies.get('SELECTED_CITIES');
                const index = selectCookiesArr.indexOf(city.id);

                if (index !== -1) {
                    selectCookiesArr.splice(index, 1);
                    this.$cookies.set('SELECTED_CITIES', [...selectCookiesArr]);
                }
            },
        },
    };
</script>
<style lang="scss" scoped>
    .cities {
        &__wrapper {
            padding: 1rem 0;
        }
        &__header {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 1rem;
            gap: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #fff;

            &-form {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }
        }

        &__list {
            background-color: #fff;
            border-radius: 0.5rem;
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
            gap: 1rem;
            min-height: 9rem;

            &-plug {
                margin: 0 auto;
            }
        }
    }

    .form {
        display: flex;
        width: 100%;

        &__button {
            border: none;
            height: 2.25rem;
            padding: 0.5rem 1rem;
            background-color: #3d85d8;
            color: #fff;
            font-size: 1rem;
            transition: background-color 0.3s;
            min-width: 5rem;
            cursor: pointer;

            @media screen and (min-width: 768px) {
                &:hover {
                    background-color: #3575bf;
                }
            }
        }

        &__input {
            padding: 0.3rem 1rem;
        }
    }
</style>
