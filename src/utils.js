export function extractAttributes (el) {
  const map = el.hasAttributes() ? el.attributes : []
  const attrs = {}
  for (let i = 0; i < map.length; i++) {
    const attr = map[i]
    if (attr.value) {
      attrs[attr.name] = attr.value === '' ? true : attr.value
    }
  }
  let klass, style
  if (attrs.class) {
    klass = attrs.class
    delete attrs.class
  }
  if (attrs.style) {
    style = attrs.style
    delete attrs.style
  }
  const data = {
    attrs,
    class: klass,
    style,
  }
  return data
}

export function freeze (item) {
  if (Array.isArray(item) || typeof item === 'object') {
    return Object.freeze(item)
  }
  return item
}

export function combinePassengers (transports) {
  let passengers = []
  for (const transport of transports) {
    passengers = passengers.concat(transport.passengers)
  }
  return passengers
}
