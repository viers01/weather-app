<template>
    <div class="unit-list">
        <label class="unit-list__item">
            <p>Celcius</p>
            <input
                type="radio"
                name="C"
                v-model="unitViewProxy"
                value="C"
                id="C"
            />
        </label>

        <label class="unit-list__item">
            <p>Fahrenheit</p>
            <input
                type="radio"
                name="F"
                v-model="unitViewProxy"
                value="F"
                id="F"
            />
        </label>
    </div>
</template>

<script>
    export default {
        name: 'UnitList',
        props: {
            unitView: {
                type: String,
                required: true,
            },
        },
        computed: {
            unitViewProxy: {
                get() {
                    return this.unitView;
                },
                set(value) {
                    this.$emit('update:unitView', value);
                },
            },
        },
    };
</script>
<style lang="scss" scoped>
    .unit-list {
        display: flex;
        align-items: center;
        gap: 1rem;

        &__item {
            display: flex;
            gap: 0.5rem;
        }
    }
</style>
