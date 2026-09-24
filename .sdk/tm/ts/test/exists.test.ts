
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ParlamentOpenDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ParlamentOpenDataSDK.test()
    equal(testsdk instanceof ParlamentOpenDataSDK, true,
      'ParlamentOpenDataSDK.test() must return a client synchronously')
  })

})
