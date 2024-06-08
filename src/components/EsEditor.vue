<script setup lang="ts">
import { compressToURL } from '@amoutonbrady/lz-string'
import { Icon } from '@iconify/vue'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useCode } from '../composables'
import { EDITOR_BASE_URL, EDITOR_HOST } from '../constants/constants'

const props = defineProps({
  hideSlot: {
    type: [Boolean, String],
    default: false,
  },
  hideEditor: {
    type: [Boolean, String],
    default: null,
  },
  hidePreview: {
    type: [Boolean, String],
    default: true,
  },
  hideConsole: {
    type: [Boolean, String],
    default: false,
  },
  hideOptions: {
    type: [Boolean, String],
    default: true,
  },
  hideOpenButton: {
    type: [Boolean, String],
    default: false,
  },
  layout: {
    type: String,
  },
  embed: {
    type: Boolean,
    default: true,
  },
  src: {
    type: [String, URL],
    default: EDITOR_BASE_URL,
  },
  openUrl: {
    type: String,
    default: null,
    nullable: true,
  },
})

const slot: Ref<null | HTMLElement> = ref(null)

const codeFromCodeBlock = computed(
  () => {
    return useCode().getCodeFromCodeBlock(slot.value)
  },
)

const hideEditor = computed(
  () => {
    if (props.hideEditor != undefined) {
      return props.hideEditor
    }

    return codeFromCodeBlock.value !== null
  },
)

const playgroundUrl = computed(
  () => {
    let url = new URL(EDITOR_BASE_URL)

    if (!codeFromCodeBlock.value && !props.src)
      return url

    if (props.src) {
      url = new URL(props.src.toString())
    }

    if (codeFromCodeBlock.value) {
      url.searchParams.set('code', compressToURL(codeFromCodeBlock.value))
    }

    url.searchParams.set('layout', props.layout || 'vertical')
    url.searchParams.set('hidePreview', String(props.hidePreview))
    url.searchParams.set('hideEditor', String(hideEditor.value))
    url.searchParams.set('hideConsole', String(props.hideConsole))
    url.searchParams.set('hideOptions', String(props.hideOptions))
    url.searchParams.set('embed', String(props.embed))

    return url
  },
)

const hasSlotContent = computed(() => !!slot.value?.textContent?.trim())

const running = ref(props.hideSlot)

const defaultOpenSrc = computed(
  () => {
    const srcUrl = new URL(playgroundUrl.value.toString())
    const url = new URL(props.src)

    url.protocol = 'https:'
    url.hostname = EDITOR_HOST
    url.port = ''
    url.search = ''

    if (srcUrl.searchParams.has('code'))
      url.searchParams.set('code', srcUrl.searchParams.get('code') || '')

    if (srcUrl.searchParams.has('tests'))
      url.searchParams.set('tests', srcUrl.searchParams.get('tests') || '')

    return url.toString()
  },
)

function run() {
  running.value = true
}

function stop() {
  running.value = false
}
</script>

<template>
  <div class="InlinePlayground flex flex-col my-[16px] group-hover">
    <div class="flex flex-col" :class="{ hidden: props.hideSlot || !hasSlotContent }">
      <div ref="slot">
        <slot />
      </div>

      <span class="w-full h-1" />

      <div class="relative flex flex-row justify-center items-center print:hidden">
        <div class="absolute flex flex-row justify-center z-10 -mt-5">
          <button
            :title="running ? 'Detener' : 'Ejecutar'"
            class="flex flex-row items-center space-x-1 px-2 py-0.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white"
            @click="running ? stop() : run()"
          >
            <Icon :icon="running ? 'mdi:stop' : 'mdi:play'" class="w-4 h-4" />
            <span>{{ running ? 'Detener' : 'Ejecutar' }}</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="running || !hasSlotContent" class="flex flex-col print:hidden">
      <EmbedPlayground :src="playgroundUrl" height="50vh" :show-open-button="!props.hideOpenButton" :open-src="props.openUrl || defaultOpenSrc" />
    </div>
  </div>
</template>
