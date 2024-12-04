<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

const formData = new FormData()
formData.append('test', 'test')
const { data: time } = await useCsrfFetch('/api/test', {
    method: 'POST',
    body: formData
})
</script>

<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div>
        <h1>About</h1>
        <p>This page was pre-rendered on {{ time }}</p>
    </div>
    <hr>
    <span>Counter :{{ counterStore.count }}</span>
    <div>
        <button @click="counterStore.increment">
            增加
        </button>
        <button @click="counterStore.decrement">
            減少
        </button>
    </div>
</template>
