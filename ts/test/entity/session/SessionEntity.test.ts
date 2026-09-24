

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PARLAMENT_OPEN_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('PARLAMENT_OPEN_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ParlamentOpenDataSDK.test()
    const ent = testsdk.Session()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PARLAMENT_OPEN_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"abbreviation":{"a":true,"h":"Abbreviation","n":"abbreviation","r":false,"sh":"Session abbreviation","t":"`$STRING`","key$":"abbreviation","index$":0},"endDate":{"a":true,"fo":"date","h":"End Date","n":"endDate","r":false,"sh":"Session end date","t":"`$STRING`","key$":"endDate","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique session identifier","t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Session name","t":"`$STRING`","key$":"name","index$":3},"startDate":{"a":true,"fo":"date","h":"Start Date","n":"startDate","r":false,"sh":"Session start date","t":"`$STRING`","key$":"startDate","index$":4},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"Current state of the session","t":"`$STRING`","key$":"state","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of session (e.g., ordinary, extraordinary)","t":"`$STRING`","key$":"type","index$":6}},"id":{"field":"id","name":"id"},"name":"session","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /sessions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"de","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/sessions","q":{"exist":["format","language","session_id"]},"r":{},"s":[{"lit":"sessions"}],"t":{"req":"`reqdata`","res":"`body.sessions`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"session","name__orig":"session","Name":"Session","name_":"session","name-":"session","NAME":"SESSION","index$":2}, {"active":true,"entity":"session","key$":"BasicSessionFlow","kind":"basic","name":"BasicSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"session_ref01"}}],"index$":0}]}, 'Session', {"GET /sessions":{"protocol":"http","operationId":"getSessions","responses":{"200":{"description":"Successful response with session data","content":{"application/json":{"schema":{"type":"object","properties":{"sessions":{"items":{"properties":{"abbreviation":{"description":"Session abbreviation","type":"string","key$":"abbreviation"},"endDate":{"description":"Session end date","format":"date","type":"string","key$":"endDate"},"id":{"description":"Unique session identifier","type":"integer","key$":"id"},"name":{"description":"Session name","type":"string","key$":"name"},"startDate":{"description":"Session start date","format":"date","type":"string","key$":"startDate"},"state":{"description":"Current state of the session","type":"string","key$":"state"},"type":{"description":"Type of session (e.g., ordinary, extraordinary)","type":"string","key$":"type"}},"type":"object","x-ref":"#/components/schemas/Session","index$":0},"key$":"sessions","type":"array"}}}},"application/xml":{"schema":{"type":"object","properties":{"sessions":{"type":"array","items":{"type":"object","properties":{"id":{"description":"Unique session identifier","type":"integer"},"name":{"description":"Session name","type":"string"},"abbreviation":{"description":"Session abbreviation","type":"string"},"startDate":{"description":"Session start date","format":"date","type":"string"},"endDate":{"description":"Session end date","format":"date","type":"string"},"type":{"description":"Type of session (e.g., ordinary, extraordinary)","type":"string"},"state":{"description":"Current state of the session","type":"string"}},"x-ref":"#/components/schemas/Session"}}}}}}},"400":{"description":"Bad request - Invalid parameters"},"500":{"description":"Internal server error"}},"parameters":[{"name":"language","in":"query","description":"Language code for response (de=German, fr=French, it=Italian, en=English)","required":false,"schema":{"type":"string","enum":["de","fr","it","en"],"default":"de"},"index$":0},{"name":"format","in":"query","description":"Response format","required":false,"schema":{"type":"string","enum":["json","xml"],"default":"json"},"index$":1},{"name":"sessionId","in":"query","description":"Filter by specific session ID","required":false,"schema":{"type":"integer"},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let session_ref01_data = Object.values(setup.data.existing.session)[0] as any

    // LIST
    const session_ref01_ent = client.Session()
    const session_ref01_match: any = {}

    const session_ref01_list = (await session_ref01_ent.list(session_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/session/SessionTestData.json')

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
    ['session01','session02','session03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PARLAMENT_OPEN_DATA_TEST_SESSION_ENTID': idmap,
    'PARLAMENT_OPEN_DATA_TEST_LIVE': 'FALSE',
    'PARLAMENT_OPEN_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PARLAMENT_OPEN_DATA_TEST_SESSION_ENTID']

  const live = 'TRUE' === env.PARLAMENT_OPEN_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PARLAMENT_OPEN_DATA_TEST_SESSION_ENTID']
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
  
