

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ParlamentOpenDataSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('BusinessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PARLAMENT_OPEN_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('PARLAMENT_OPEN_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ParlamentOpenDataSDK.test()
    const ent = testsdk.Business()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PARLAMENT_OPEN_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'business.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"short":"Author of the affair","type":"`$STRING`","index$":0},{"active":true,"name":"council","req":false,"short":"Council handling the affair","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"short":"Detailed description of the affair","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique affair identifier","type":"`$INTEGER`","index$":3},{"active":true,"name":"state","req":false,"short":"Current state/status of the affair","type":"`$STRING`","index$":4},{"active":true,"format":"date","name":"submissionDate","req":false,"short":"Date of submission","type":"`$STRING`","index$":5},{"active":true,"name":"title","req":false,"short":"Affair title","type":"`$STRING`","index$":6},{"active":true,"name":"type","req":false,"short":"Type of parliamentary affair","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"business","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"id","orig":"id","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":"de","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"state","orig":"state","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /affairs","json":"{\"operationId\":\"getAffairs\",\"parameters\":[{\"description\":\"Language code for response (de=German, fr=French, it=Italian, en=English)\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"fr\",\"it\",\"en\"],\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Filter by specific affair ID\",\"in\":\"query\",\"name\":\"id\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter by affair state/status\",\"in\":\"query\",\"name\":\"state\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by affair type\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"affairs\":{\"items\":{\"properties\":{\"author\":{\"description\":\"Author of the affair\",\"type\":\"string\"},\"council\":{\"description\":\"Council handling the affair\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the affair\",\"type\":\"string\"},\"id\":{\"description\":\"Unique affair identifier\",\"type\":\"integer\"},\"state\":{\"description\":\"Current state/status of the affair\",\"type\":\"string\"},\"submissionDate\":{\"description\":\"Date of submission\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Affair title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of parliamentary affair\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"application/xml\":{\"schema\":{\"properties\":{\"affairs\":{\"items\":{\"properties\":{\"author\":{\"description\":\"Author of the affair\",\"type\":\"string\"},\"council\":{\"description\":\"Council handling the affair\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the affair\",\"type\":\"string\"},\"id\":{\"description\":\"Unique affair identifier\",\"type\":\"integer\"},\"state\":{\"description\":\"Current state/status of the affair\",\"type\":\"string\"},\"submissionDate\":{\"description\":\"Date of submission\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Affair title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of parliamentary affair\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with affairs data\"},\"400\":{\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/affairs","segments":[{"lit":"affairs"}],"select":{"exist":["format","id","language","state","type"]},"transform":{"req":"`reqdata`","res":"`body.affairs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"business","name__orig":"business","Name":"Business","name_":"business","name-":"business","NAME":"BUSINESS","index$":0}, {"active":true,"entity":"business","key$":"BasicBusinessFlow","kind":"basic","name":"BasicBusinessFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"business_ref01"}}],"index$":0}]}, 'Business')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let business_ref01_data = Object.values(setup.data.existing.business)[0] as any

    // LIST
    const business_ref01_ent = client.Business()
    const business_ref01_match: any = {}

    const business_ref01_list = (await business_ref01_ent.list(business_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/business/BusinessTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ParlamentOpenDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['business01','business02','business03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PARLAMENT_OPEN_DATA_TEST_BUSINESS_ENTID': idmap,
    'PARLAMENT_OPEN_DATA_TEST_LIVE': 'FALSE',
    'PARLAMENT_OPEN_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PARLAMENT_OPEN_DATA_TEST_BUSINESS_ENTID']

  const live = 'TRUE' === env.PARLAMENT_OPEN_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PARLAMENT_OPEN_DATA_TEST_BUSINESS_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ParlamentOpenDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PARLAMENT_OPEN_DATA_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
