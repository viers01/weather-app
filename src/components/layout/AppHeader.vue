<template>
    <header class="header">
        <div class="base-container header__wrapper">
            <nav>
                <ul class="header__nav">
                    <li>
                        <router-link
                            :to="{ name: 'Main' }"
                            class="header__link"
                            >Main page</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            :to="{ name: 'CitiesList' }"
                            class="header__link"
                            >Cities List</router-link
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
    };
</script>

<style lang="scss" scoped>
    .header {
        position: sticky;
        top: 0;
        box-shadow: 0 0.25rem 0.25rem -0.25rem rgba(34, 60, 80, 0.2);
        background-color: #fff;
        z-index: 1;

        &__nav {
            display: flex;
            gap: 2rem;
        }

        &__wrapper {
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;

            @media screen and (min-width: 768px) {
                height: 4rem;
            }
        }

        &__link {
            font-size: 1.5rem;
            color: #2c3e50;
            text-decoration: none;
            font-weight: 500;

            &:hover {
                color: #3d85d8;
            }
        }
    }
</style>
