
import { createInertiaApp } from '@inertiajs/svelte'
import axios from 'axios';


createInertiaApp({
  resolve: name => import(`./Pages/${name}.svelte`),
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})

