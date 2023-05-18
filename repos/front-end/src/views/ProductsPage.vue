<template>
    
    <ProductsGrid :products="products" />
    
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import {products} from '../fake-data.js';
export default{
    name: 'ProductsPage',
    data() {
      return {
        products
      }
    },
    components: {
     
      ProductsGrid
    }
}
</script>

