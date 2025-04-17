import { createRouter, createWebHistory } from 'vue-router'
import PhoneInputView from '../views/PhoneInputView.vue'
import CodeVerificationView from '../views/CodeVerificationView.vue'
import PasswordSetupView from '../views/PasswordSetupView.vue'
import IndexView from '../views/IndexView.vue'  // Asegúrate de tener este componente creado

const routes = [
  { path: '/', component: IndexView },  // Ruta principal que mostrará las 3 opciones
  { path: '/phoneinput', component: PhoneInputView },  // Ruta para PhoneInputView
  { path: '/verify', component: CodeVerificationView },
  { path: '/password', component: PasswordSetupView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
