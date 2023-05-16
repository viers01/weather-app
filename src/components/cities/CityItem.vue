<template>
    <div class="city-item">
        <h3 class="city-item__title">{{ city.name | capitalize }}</h3>
        <p class="city-item__temp">
            Temperature: {{ getActualTemperature }} {{ unitType | units }}
        </p>
        <!-- any other information -->
        <button
            class="city-item__remove"
            @click="$emit('clickRemove')"
        >
            remove
        </button>
    </div>
</template>
<script>
    import { capitalize, units } from '@/utils/filters';

    export default {
        name: 'CityItem',
        props: {
            city: {
                type: Object,
                default: () => ({}),
            },
            temperature: {
                type: Number,
                default: 0,
            },
            unitType: {
                type: String,
                default: 'C',
            },
        },
        filters: {
            capitalize,
            units
        },
        computed: {
            // возможно, вынести в конфиг
            getActualTemperature() {
                if (this.unitType === 'C') {
                    return Math.round(((this.temperature - 32) * 5) / 9);
                }

                return Math.round(this.temperature);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .city-item {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 5rem;
        gap: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 0.25rem 0.5rem rgba(37, 89, 165, 0.12), 0 0.1875rem 0.0626rem rgba(37, 89, 165, 0.04);
        animation: fadeIn 0.3s forwards cubic-bezier(0.39, 0.57, 0.56, 1);

        &__title {
            font-size: 1.5rem;
            font-weight: 500;
        }

        &__remove {
            border: none;
            padding: 0.5rem 0;
            transition: opacity 0.3s;

            &:hover {
                opacity: 0.7;
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-2rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
