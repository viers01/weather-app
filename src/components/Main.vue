<template>
    <div class="about">
        <div class="about__wrapper about__container">
            <h2 class="about__title">
                Напишите веб-приложение, используя Vue.js, которое будет получать данные о погоде из
                открытого API и отображать их на странице. Оценка производительности и удобства
                использования приложения также будет приветствоваться.
            </h2>
            <ul class="about__list">
                <li class="about__list-item">
                    Приложение должно использовать Vue.js 2 и его основные функциональности, такие
                    как компоненты, директивы, фильтры и роутер. Также желательно использовать vuex
                    и vuetifyjs 2.
                </li>
                <li class="about__list-item">
                    Данные о погоде должны получаться из открытого API, например, OpenWeatherMap.
                </li>
                <li>
                    Приложение должно иметь минимальный дизайн и хорошо читаться на мобильных
                    устройствах
                </li>
                <li class="about__list-item">
                    Приложение должно обновлять данные о погоде каждые 10 минут без перезагрузки
                    страницы
                </li>
                <li class="about__list-item">
                    Должна быть возможность добавить несколько городов в список и отображать данные
                    о погоде для каждого из них
                </li>
                <li class="about__list-item">
                    Приложение должно иметь возможность отображать данные в разных единицах
                    измерения (градусы Цельсия, Фаренгейта, километры в час, мили в час)
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppMain',
    };
</script>

<style lang="scss" scoped>
    .about {
        &__wrapper {
            background-color: #fff;
            border-radius: 0.25rem;
            margin-top: 1rem;
            padding: 1rem;
            text-align: start;
        }

        &__container {
            max-width: 50rem;
            margin: 1rem auto 0;
        }

        &__title {
            font-size: 1.3rem;
            line-height: 1.3;
            margin-bottom: 1rem;
        }

        &__list {
            display: flex;
            flex-direction: column;
            list-style: circle;
            list-style-position: inside;
            gap: 1rem;

            &-item {
                font-size: 1.2rem;
                line-height: 1.2;
            }
        }
    }
</style>
