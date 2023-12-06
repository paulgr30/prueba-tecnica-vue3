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
const brandData = ref({})
//const myModal = new bootstrap.Modal('#exampleModal')

// Computadas
const brand = computed({
  get() {
    return props.item
  },
  set(newValue) {
    brandData.value = newValue
  }
})

// Metodos
const save = async () => {
  brand.value.id
    ? await axios.put(
        'http://localhost/practica/laravel-api/public/api/brands/' + brand.value.id,
        brand.value
      )
    : await axios.post('http://localhost/practica/laravel-api/public/api/brands', brand.value)
  emit('record-saved')
}
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
          <h5 class="modal-title fs-5" id="exampleModalLabel">Marca</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="save">
            <label class="form-label">Nombre</label>
            <input type="text" v-model="brand.name" class="form-control" />
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
