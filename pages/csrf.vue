<script setup lang="ts">
import { Button } from 'primevue';

const token = useCSRFToken();
function onClick() {
    $fetch("/api/test", {
        method: "POST",
        body: {
            _csrf: token.value,
        },
    });
}
</script>

<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div>
        <form method="POST" action="/api/test">
            <input name="_csrf" type="hidden" :value="token" />
            <input type="submit" value="Submit by Form" />
        </form>
    </div>

    <div>
        <Button @click="onClick">Submit by API</Button>
    </div>
</template>
