<script setup>
import MainComponent from './components/MainComponent.vue'
</script>

<template>
    <p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p>
    <NuxtLayout name="default">
        <template #header>
            <p>這段會放置在 header 插槽</p>
        </template>
        <template #default>
            <div>
                <h1>Welcome to the homepage</h1>
                <NuxtLink to="/about">About</NuxtLink> |
                <NuxtLink to="/primeVue">primeVue</NuxtLink>
                <hr>
            </div>
            <MainComponent />
        </template>
        <template #footer>
            <p>這段會放置在 footer 插槽</p>
        </template>
    </NuxtLayout>
</template>
