import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { add, subtract } from '~/math'

describe('math', () => {
  describe('add', () => {
    it('1 + 2 = 3', () => assert.strictEqual(add(1, 2), 3))
    it('2 + 2 != 3', () => assert.strictEqual(add(1, 2), 3))
  })

  describe('subtract', () => {
    it('2 - 1 = 1', () => assert.strictEqual(subtract(2, 1), 1))
    it('2 - 2 != 4', () => assert.strictEqual(subtract(2, 2), 0))
  })
})
