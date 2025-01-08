<template>
    <div>
        <div>
            <h1>這是 posts/[postId]/comments/[commentId] 的頁面</h1>
            <p>
                匹配到的 Post Id: <span>{{ postId }}</span>
            </p>
            <p>
                匹配到的 Comment Id:
                <span class="text-5xl font-semibold text-purple-400">{{ commentId }}</span>
            </p>
        </div>
    </div>
    <hr>
    <NuxtLink to="/posts">Back to Posts</NuxtLink>
</template>

<script setup>
const route = useRoute()
const { postId, commentId } = route.params
</script>