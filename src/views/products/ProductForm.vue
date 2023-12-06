<script setup>
import { computed, ref } from 'vue'
import axios from 'axios'

// Eventos
const emit = defineEmits(['record-saved'])

// Propiedades
const props = defineProps({
  item: { type: Object, required: true }
})

// Variables
const prodData = ref({})
const brandList = ref([])

// Computadas
const prod = computed({
  get() {
    return props.item
  },
  set(newValue) {
    prodData.value = newValue
  }
})

// Metodos
const getBrands = async () => {
  const { data } = await axios.get('http://localhost/practica/laravel-api/public/api/brands')
  brandList.value = data
}

const save = async () => {
  console.log(prod.value);
  prod.value.id
    ? await axios.put(
        'http://localhost/practica/laravel-api/public/api/products/' + prod.value.id,
        prod.value
      )
    : await axios.post('http://localhost/practica/laravel-api/public/api/products', prod.value)
  emit('record-saved')
}

getBrands()

const brand = ref({})
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fs-5" id="exampleModalLabel">Producto</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="save">
            <div class="row">
              <div class="col-6">
                <label class="form-label">Nombre</label>
                <input type="text" v-model="prod.name" class="form-control" />
              </div>

              <div class="col-6">
                <label class="form-label">Marca</label>
                <select v-model="prod.product_brand_id" class="form-control">
                  <option v-for="(brand, index) in brandList" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <label class="form-label">Precio</label>
                <input type="number" v-model="prod.price" class="form-control" />
              </div>

              <div class="col-6">
                <label class="form-label">Stock</label>
                <input type="number" v-model="prod.stock" class="form-control" />
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-dismiss="modal"
            @click="save"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
