# Getting Started

`pnpm install @es-js/docs-components`

## Setup

In your `vite.config.ts`, you shall configure to dedupe `vue`:

```ts
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
  },
});
```

In your `main.ts`, you shall import the components and CSS:

```ts
import EsJSDocsComponents from '@es-js/docs-components'
import '@es-js/docs-components/dist/style.css';

// ...

app.use(EsJSDocsComponents) // Install it globally.
```

Or import components from this library in your own component:

```html
<script setup lang="ts">
  import { EsEditor, EsEjecutar } from '@es-js/docs-components';
</script>
```
