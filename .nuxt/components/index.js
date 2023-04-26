export { default as Home } from '../../components/home.vue'
export { default as Addresses } from '../../components/addresses/Addresses.vue'
export { default as GoogleMap } from '../../components/googleMap/map.vue'
export { default as LayoutFooter } from '../../components/layout/Footer.vue'
export { default as LayoutHeader } from '../../components/layout/Header.vue'
export { default as Location } from '../../components/location/Location.vue'
export { default as RegisterAddress } from '../../components/register-addresses/RegisterAddress.vue'
export { default as Success } from '../../components/success/success.vue'
export { default as AddressesMixins } from '../../components/addresses/_mixins/AddressesMixins.js'
export { default as AddressesVariables } from '../../components/addresses/_mixins/AddressesVariables.js'
export { default as LocationMixins } from '../../components/location/_mixins/LocationMixins.js'
export { default as LocationVariables } from '../../components/location/_mixins/LocationVariables.js'
export { default as RegisterMixins } from '../../components/register-addresses/_mixins/RegisterMixins.js'
export { default as RegisterVariables } from '../../components/register-addresses/_mixins/RegisterVariables.js'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
