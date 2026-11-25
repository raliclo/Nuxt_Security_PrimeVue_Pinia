<script setup lang="ts">
const { csrf } = useCsrf();
const { $csrfFetch } = useNuxtApp();
const result = ref<string>('');

async function onClick() {
    const res = await $csrfFetch("/api/test", {
        method: "POST",
        body: {
            message: "CSRF protected request",
        },
    });
    result.value = JSON.stringify(res);
}
</script>

<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div class="my-4">
        <p>CSRF Token: {{ csrf }}</p>
    </div>

    <div>
        <Button @click="onClick">Submit by API ($csrfFetch)</Button>
    </div>

    <div v-if="result" class="mt-4">
        Response: {{ result }}
    </div>
</template>
