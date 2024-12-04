<template>
    <div>
        <p>這是預設的布局，全部頁面都會使用到</p>
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </div>
</template>