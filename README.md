# vue-test


Prueba Tecnica para laboratorio clinico - Duracion 3 Horas


1. Backend y Frontend Separados:
- Configura un proyecto Laravel para el backend y un proyecto Vue.js para el  frontend. Establece una arquitectura RESTful para la comunicación entre ellos.

2. Desarrollo de 2 CRUD relacionados:
- Crea los modelos ProductBrand y Product en Laravel, estableciendo la relación entre ellos (probablemente una relación de uno a muchos, donde una marca puede tener varios productos).
- Implementa las operaciones CRUD (crear, leer, actualizar, eliminar) para ambas entidades.

3. Validación desde el Backend con FormRequest:
- Utiliza Laravel FormRequest para validar los datos antes de procesarlos en el controlador. Define las reglas de validación para cada campo, incluyendo la obligatoriedad de los campos requeridos.
- Maneja los errores de validación devolviendo mensajes adecuados al frontend en caso de que ocurran.

4. Frontend sin CSS y uso de Bootstrap:
- En el frontend con Vue.js, configura las vistas para mostrar la información utilizando Bootstrap para la maquetación.
- Implementa una interfaz sencilla para listar y mostrar los datos de las tablas ProductBrand y Product.

5. Vue Router para la navegación:
- Utiliza Vue Router para manejar la navegación entre las rutas correspondientes a los CRUD de ProductBrand y Product.
- Configura las rutas y enlaces para poder navegar entre las vistas de creación, lectura, actualización y eliminación de elementos.

6. Código limpio y buenas prácticas:
- Mantén un código bien estructurado y legible.
- Usa convenciones de nombrado claras y coherentes.
- Divide el código en componentes o funciones lógicas que sean fáciles de entender y reutilizar.
- Aplica principios SOLID y otras buenas prácticas de programación.

Recuerda documentar tu código y asegurarte de que funcione correctamente antes de enviar el examen. ¡Buena suerte!









This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
