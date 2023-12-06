<script setup>
import { ref } from 'vue'
import axios from 'axios'

import BrandForm from './BrandForm.vue'

const item = ref({})
const dataList = ref([])

const getBrands = async () => {
  const { data } = await axios.get('http://localhost/practica/laravel-api/public/api/brands')
  dataList.value = data
}

const removeBrand = async (id) => {
  const resp =  confirm('¿Está seguro de eliminar este registro?')
  if(!resp ) return
  await axios.delete('http://localhost/practica/laravel-api/public/api/brands/' + id)
  await getBrands()
}


const openModal = (data = {}) => {
  item.value = { ...data }
}

getBrands()
</script>

<template>
  <brand-form :item="item" @record-saved="getBrands"></brand-form>

  <div class="row">
    <div class="col-10">
      <h4>Listado de Marcas</h4>
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
    </tr>
    <tbody class="table-group-divider">
      <tr v-for="(brand, index) in dataList" :key="index">
        <td>
          <button
            type="button"
            class="btn btn-success btn-sm mr-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="openModal(brand)"
          >
            Editar
          </button>
          <button type="button" class="btn btn-danger btn-sm ml-2" @click="removeBrand(brand.id)">
            Eliminar
          </button>
        </td>
        <td>{{ brand.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
