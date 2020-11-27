import camelcase from 'camelcase'
import { vendorSpecificProperties, prefixes } from './vendor-properties'

/**
 * @param {string} input - The string of with the css rules
 * @return {object} - The object with the css rules in camelcase
 */
const reactGetStyles = (input: string) => {
  let str = input

  // If the string is pased such as template string gm``
  if (typeof input === 'object' && typeof input[0] === 'string') {
    str = input[0]
  }

  const lines = str
    .split(/\n/gm)
    .filter(r => r.trim() !== '')
    .map(l => l.replace(';', ''))
  
    // console.log('lines', lines)

  let linesMap: { key: string, value: string }[] = []

  lines.forEach(line => {
    const data = line.split(':')
    const propName = camelcase(data[0].trim())

    linesMap.push({
      key: propName,
      // Check if we need to add vendor prefixes
      value: data[1].trim()
    })

    const needPrefixes = vendorSpecificProperties.find(
      prop => prop === propName
    )
    // Check if we need to add vendor prefixes
    if (needPrefixes) {
      prefixes.forEach(prefix => {
        const key = camelcase(prefix + '-' + propName, {
          pascalCase: prefix !== 'ms'
        })

        linesMap.push({
          key,
          value: data[1].trim()
        })
      })
    }
  })

  let rules = {}

  linesMap.forEach(line => {
    rules[line.key] = line.value
  })
  return rules
}

export default reactGetStyles
