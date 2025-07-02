<template>
    <p>
        <label for="inputNumber">
            請輸入一個數字：
            <InputText id="inputNumber" v-model="inputNumber" />
        </label>
    </p>
    <Button type="button" @click="send">幫我傳過去</Button>
</template>

<script setup>

const inputNumber = ref("");
const emit = defineEmits({
    sendNumber: (value) => {
        const numberValue = Number(value);
        if (!isNaN(numberValue)) {
            return true; // 校驗成功
        } else {
            alert("請輸入有效的數字！！！");
            return false; // 校驗失敗
        }
    },
});

const send = function () {
    emit("sendNumber", inputNumber.value); // 發送事件
};
</script>