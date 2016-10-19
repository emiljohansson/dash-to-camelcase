import test from 'ava'
import dashToCamelcase from './'

test(t => {
  const expected = 'nameOfComponent'
  const actual = dashToCamelcase('name-of-component')
  t.is(actual, expected)
})
