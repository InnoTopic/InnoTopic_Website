import { groupByKeepingOrder } from './utils';

describe('groupByKeepingOrder', () => {
  it('works', () => {
    // expect(true).toBe(false)
    const kv = {
      a: {id: 'a', cat: 'catZ'},
      b: {id: 'b', cat: 'catX'},
      c: {id: 'c', cat: 'catA'},
      d: {id: 'd', cat: 'catZ'},
      e: {id: 'e', cat: 'catB'},
      f: {id: 'f', cat: 'catC'},
      g: {id: 'g', cat: 'catA'},
    }
    let actual = groupByKeepingOrder(kv, 'cat');
    console.log('groupByKeepingOrder', actual)
    expect(actual).toEqual({
      catZ: [ { id: 'a', cat: 'catZ' }, { id: 'd', cat: 'catZ' } ],
      catX: [ { id: 'b', cat: 'catX' } ],
      catA: [ { id: 'c', cat: 'catA' }, { id: 'g', cat: 'catA' } ],
      catB: [ { id: 'e', cat: 'catB' } ],
      catC: [ { id: 'f', cat: 'catC' } ]
    })
  })
})
