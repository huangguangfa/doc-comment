import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("GfIcons", defineAsyncComponent(() => import("/Users/guangfa/Desktop/temp/doc-comment/doc/_components/gf-Icons/index.vue")))
  },
}
