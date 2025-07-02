<template>
    <div>
        <div>
            <h1>這是 posts/[postId] 的頁面</h1>
            <p>
                匹配到的 Post Id: <span class="text-5xl font-semibold text-blue-600">{{ postId }}</span>
            </p>
        </div>
    </div>
    <hr>
    <NuxtLink to="/posts">Back to Posts</NuxtLink>
</template>

<script setup>
const route = useRoute()
const { postId } = route.params
</script>