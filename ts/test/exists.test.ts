
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ParlamentOpenDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ParlamentOpenDataSDK.test()
    equal(null !== testsdk, true)
  })

})
