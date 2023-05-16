<template>
    <div class="did-floating-label-content">
        <input
            class="did-floating-input"
            type="text"
            required
            placeholder=" "
            v-model="proxyValue"
        />
        <label class="did-floating-label">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        name: 'AppInput',
        props: {
            value: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: '',
            },
        },
        computed: {
            proxyValue: {
                get() {
                    return this.value;
                },

                set(value) {
                    this.$emit('input', value);
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .did-floating-label-content {
        position: relative;
        width: 100%;
    }
    .did-floating-label {
        color: #1e4d8290;
        font-size: 1rem;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 1rem;
        top: 0.625rem;
        padding: 0 0.3125rem;
        background: #fff;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    .did-floating-input {
        font-size: 1rem;
        display: block;
        width: 100%;
        height: 2.25rem;
        padding: 0 1.25rem;
        background: #fff;
        color: #323840;
        border: 0.0625rem solid #3d85d8;
        -webkit-border-radius: none;
        -moz-border-radius: none;
        border-radius: none;
        box-sizing: border-box;
        
        &:focus {
            outline: none;
            ~ .did-floating-label {
                top: -0.5rem;
                font-size: 0.8rem;
            }
        }
    }

    .did-floating-input:not(:placeholder-shown) ~ .did-floating-label {
        top: -0.5rem;
        font-size: 0.8rem;
    }
    .did-floating-select:not([value='']):valid ~ .did-floating-label {
        top: -0.5rem;
        font-size: 0.8rem;
    }
</style>
