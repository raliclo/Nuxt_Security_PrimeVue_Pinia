<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div ref="myDiv">Hello World</div>
    <div>{{ state.count }}</div>
    <Button @click="increment">ADD</Button>
    <div>
        <label>輸入</label>
        <InputText v-model="message" placeholder="輸入訊息" />
        <p>您輸入的訊息是：{{ message }}</p>
    </div>
    <h3 class="static" :class="classObj"></h3>
    <br />
    <Button @click="changeShape">點我變形</Button>
    {{ classObj }}
    <ChildProps myPropsData="預設值一" />
    <ChildEmit @send-number="handler" />
</template>

<script setup>
const myDiv = ref(null);
const state = reactive({
    count: 0,
    message: 'Hello Vue 3'
});

const increment = () => {
    state.count++;
}
onMounted(() => {
    console.log(myDiv.value); // 獲取 DOM 元素
    myDiv.value.style.color = 'red';
});

const message = ref('');

const shapeType = ref("square");

const classObj = computed(() => ({
    square: shapeType.value === "square",
    circle: shapeType.value === "circle",
}));

function changeShape() {
    shapeType.value = shapeType.value === "square" ? "circle" : "square";
}

const handler = function (data) {
    alert(`子組件傳來的資料：` + data);
};
</script>

<style>
.static {
    width: 200px;
    height: 200px;
    border: 2px solid black;
}

.square {
    background-color: rgb(227, 223, 255);
}

.circle {
    background-color: rgb(173, 165, 227);
    border-radius: 50%;
}
</style>
<!--  equivalent to OptionAPI as following, without using return
<script>
export default {
    setup() {
        const myDiv = ref(null);
        const state = reactive({
            count: 0,
            message: 'Hello Vue 3'
        });

        function increment() {
            state.count++;
        }
        onMounted(() => {
            console.log(myDiv.value); // 獲取 DOM 元素
            myDiv.value.style.color = 'red';
        });

        return {
            myDiv, state,
            increment
        };
    }
};
</script> -->