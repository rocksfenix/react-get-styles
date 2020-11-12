import camelcase from 'camelcase'

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

  const linesMap = lines.map(line => {
    const data = line.split(':')

    return {
      key: camelcase(data[0].trim()),
      value: data[1].trim()
    }
  })

  let rules = {}

  linesMap.forEach(line => {
    rules[line.key] = line.value
  })
  return rules
}

export default reactGetStyles
