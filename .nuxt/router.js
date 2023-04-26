import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _636654ea = () => interopDefault(import('../pages/addresses/index.vue' /* webpackChunkName: "pages/addresses/index" */))
const _c0fa6b7a = () => interopDefault(import('../pages/location/index.vue' /* webpackChunkName: "pages/location/index" */))
const _4903e7d0 = () => interopDefault(import('../pages/register-address/index.vue' /* webpackChunkName: "pages/register-address/index" */))
const _fd75c96a = () => interopDefault(import('../pages/success/index.vue' /* webpackChunkName: "pages/success/index" */))
const _3b998952 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addresses",
    component: _636654ea,
    name: "addresses"
  }, {
    path: "/location",
    component: _c0fa6b7a,
    name: "location"
  }, {
    path: "/register-address",
    component: _4903e7d0,
    name: "register-address"
  }, {
    path: "/success",
    component: _fd75c96a,
    name: "success"
  }, {
    path: "/",
    component: _3b998952,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
