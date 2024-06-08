# EsEditor

Componente que muestra un `iframe` de Editor EsJS. 
## Examples

### Basic Usage

<!--@include: ./demo/EsEditor/Basic.md-->

Source:

<<< @/components/demo/EsEditor/Basic.md

### With Preview

<!--@include: ./demo/EsEditor/WithPreview.md-->

Source:

<<< @/components/demo/EsEditor/WithPreview.md

### Hide Console

<!--@include: ./demo/EsEditor/HideConsole.md-->

Source:

<<< @/components/demo/EsEditor/HideConsole.md

### Hide Slot

<!--@include: ./demo/EsEditor/HideSlot.md-->

Source:

<<< @/components/demo/EsEditor/HideSlot.md

### Without Props

<!--@include: ./demo/EsEditor/WithoutProps.md-->

Source:

<<< @/components/demo/EsEditor/WithoutProps.md

### Hide Open Button

<!--@include: ./demo/EsEditor/HideOpenButton.md-->

Source:

<<< @/components/demo/EsEditor/HideOpenButton.md

### URL Src

<!--@include: ./demo/EsEditor/UrlSrc.md-->

Source:

<<< @/components/demo/EsEditor/UrlSrc.md

### Open URL

<!--@include: ./demo/EsEditor/OpenUrl.md-->

Source:

<<< @/components/demo/EsEditor/OpenUrl.md

## Reference

### Properties

| Name           | Type    | Default | Description                                                       |
|----------------|---------|---------|-------------------------------------------------------------------|
| hidePreview    | Boolean | `true`  | Muestra/oculta la previsualización                                |
| hideConsole    | Boolean | `false` | Muestra/oculta la consola                                         |
| hideOptions    | Boolean | `true`  | Muestra/oculta las opciones                                       |
| hideEditor     | Boolean | `false` | Muestra/oculta el editor                                          |
| hideSlot       | Boolean | `false` | Muestra/oculta el slot                                            |
| hideOpenButton | Boolean | `false` | Muestra/oculta el botón para abrir el editor en una nueva pestaña |
| src            | String  |         | URL del Editor EsJS como entrada                                  |
| openUrl        | String  |         | URL a la que se redirige al hacer clic en el botón de abrir       |

### Slots

| Name    | Parameters | Description                                                                               |
|---------|------------|-------------------------------------------------------------------------------------------|
| default |            | Éste slot debe contener código en Markdown, el cual será utilizado como código de entrada |
