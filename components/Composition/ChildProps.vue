<template>
    <div>Prop Data: {{ myPropsData }}</div>
    <h3>子組件在這邊可以接到：{{ defaultProps }}</h3>
    <Button @click="messageUpdate">子function傳父</Button>
    <br>
</template>

<script setup>
// --1--
const props = defineProps({
    myPropsData: {
        type: String, // 使用 camelCase 命名方式
        validator(value) {
            // 驗證的值必須是這兩個字串之一
            return ["預設值一", "預設值二"].includes(value);
        },
    }
});

// --2--
let toggleRef = ref(true);
const defaultProps = ref(props.myPropsData);
function messageUpdate() {
    if (toggleRef.value) {
        defaultProps.value = "從父組件定義的資料被修改了！";
    } else {
        defaultProps.value = props.myPropsData
    }
    toggleRef.value = !toggleRef.value
}
</script>