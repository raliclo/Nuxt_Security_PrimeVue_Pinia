<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :size="size.value" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const size = ref({ label: 'Normal', value: 'null' });
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'null' },
    { label: 'Large', value: 'large' }
]);

</script>
