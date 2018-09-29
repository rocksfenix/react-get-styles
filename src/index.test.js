/* globals test, expect */
import gs from './index'

test('Should return the styles object', () => {
  const box = `
  width: 100%;
  padding: .5em;
  cursor: pointer;
  transition: .2s ease-out;
`
  const styles = gs(box)
  expect(styles.width).toEqual('100%')
  expect(styles.padding).toEqual('.5em')
  expect(styles.transition).toEqual('.2s ease-out')
})

test('Should return the styles object with camelcase', () => {
  const box = `
  border-radius: 3px;
  flex-direction: column;
`
  const styles = gs(box)
  expect(styles.borderRadius).toEqual('3px')
  expect(styles.flexDirection).toEqual('column')
})

test('Get styles passing a template string ES6', () => {
  const box = gs`
    border-radius: 3px;
    flex-direction: column;
    box-shadow: 3px 1px 10px rgba(0,0,0,0.3);
  `
  expect(box.borderRadius).toEqual('3px')
  expect(box.flexDirection).toEqual('column')
  expect(box.boxShadow).toEqual('3px 1px 10px rgba(0,0,0,0.3)')
})
