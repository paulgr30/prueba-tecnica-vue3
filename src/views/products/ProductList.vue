<script setup>
import { ref } from 'vue'
import axios from 'axios'

import ProductForm from './ProductForm.vue'

const item = ref({})
const dataList = ref([])

const getProducts = async () => {
  const { data } = await axios.get('http://localhost/practica/laravel-api/public/api/products')
  dataList.value = data
}

const removeProduct = async (id) => {
  const resp =  confirm('¿Está seguro de eliminar este registro?')
  if(!resp ) return
  await axios.delete('http://localhost/practica/laravel-api/public/api/products/' + id)
  await getBrands()
}


const openModal = (data = {}) => {
  item.value = { ...data }
}

getProducts()
</script>

<template>
  <product-form :item="item" @record-saved="getProducts"></product-form>

  <div class="row">
    <div class="col-10">
      <h4>Listado de Productos</h4>
    </div>

    <div class="col-2 text-right">
      <button
        type="button"
        class="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="openModal"
      >
        Registrar
      </button>
    </div>
  </div>

  <table class="table">
    <tr>
      <td>Acciones</td>
      <td>Nombre</td>
      <td>Precio</td>
      <td>Stock</td>
      <td>Marca</td>
    </tr>
    <tbody class="table-group-divider">
      <tr v-for="(prod, index) in dataList" :key="index">
        <td>
          <button
            type="button"
            class="btn btn-success btn-sm mr-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="openModal(prod)"
          >
            Editar
          </button>
          <button type="button" class="btn btn-danger btn-sm ml-2" @click="removeBrand(prod.id)">
            Eliminar
          </button>
        </td>
        <td>{{ prod.name }}</td>
        <td>{{ prod.price }}</td>
        <td>{{ prod.stock }}</td>
        <td>{{ prod.product_brand.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
