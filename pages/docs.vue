<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div>
        <div>
            <h1>這裡是 Docs (測試巢狀路由)</h1>
            <div>
                <NuxtLink to="/docs/doc-1">前往 Doc 1</NuxtLink>
                <br>
                <NuxtLink to="/docs/doc-2">前往 Doc 2</NuxtLink>
            </div>
        </div>
        <hr>
        <div>
            <NuxtPage />
        </div>
    </div>
</template>