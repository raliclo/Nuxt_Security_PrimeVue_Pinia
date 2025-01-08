<script setup>
const show = ref(false)
</script>

<template>
    <p class="pb-4 text-2xl text-red-600">這裡是最外層 app.vue</p>
    <NuxtLayout name="default">
        <template #header>
            <p>這段會放置在 header 插槽</p>
        </template>
        <template #default>
            <div>
                <h1>Welcome to the homepage</h1>
                <NuxtLink to="/about">About</NuxtLink>
                | <NuxtLink to="/primeVue">PrimeVue</NuxtLink>
                | <NuxtLink to="/posts">Posts</NuxtLink>
                | <NuxtLink to="/docs">Docs</NuxtLink>
                | <NuxtLink to="/composable">Composable</NuxtLink>
                | <NuxtLink to="/csrf">CSRF</NuxtLink>
                | <NuxtLink to="/tailwindcss">TailwindCSS</NuxtLink>
                <hr>
            </div>
            ClientOnly Component
            <ClientOnly>
                <div>
                    <input id="show-button" v-model="show" name="show-button" type="checkbox" />
                    <label for="show-button">顯示MainComponent(Lazy Loading)</label>
                    <hr>
                    <LazyMainComponent v-if="show" />
                </div>
            </ClientOnly>
        </template>
        <template #footer>
            <p>這段會放置在 footer 插槽</p>
        </template>
    </NuxtLayout>
</template>
