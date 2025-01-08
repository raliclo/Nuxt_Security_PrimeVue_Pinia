<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div>
        <span>{{ count }}</span>
        <br>
        <Button @click="increment">
            增加 1
        </Button>
    </div>
</template>

<script setup>
//nuxt/composables/useCounter.js
const { count, increment } = useCounter()
</script>