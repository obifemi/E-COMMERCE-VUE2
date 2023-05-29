<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
    <form @submit.prevent="createProduct">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newProduct.name" required>
      <label for="imageUrl">Image URL:</label>
      <input type="text" id="imageUrl" v-model="newProduct.imageUrl" required>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="newProduct.price" required>
      <button type="submit">Create Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductsGrid,
  },
  data() {
    return {
      products: [],
      newProduct: {
        name: '',
        imageUrl: '',
        price: '',
      },
    };
  },
  async created() {
    const result = await axios.get('/api/products');
    const products = result.data;
    console.log(products);
    this.products = products;
  },
  methods: {
    async createProduct() {
      const result = await axios.post('/api/products', this.newProduct);
      const newProduct = result.data;
      this.products.push(newProduct);
      this.newProduct = {
        name: '',
        imageUrl: '',
        price: '',
      };
    },
  },
};
</script>