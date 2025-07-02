<script setup lang="ts">
// Pinia Store
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

</script>

<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div>
        <h1>About</h1>
    </div>
    <hr>
    <span>Pinia Counter Store:{{ counterStore.count }}</span>
    <div>
        <button @click="counterStore.increment">
            增加
        </button>
        <button @click="counterStore.decrement">
            減少
        </button>
    </div>
</template>
