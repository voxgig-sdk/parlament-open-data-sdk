

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


describe('MemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PARLAMENT_OPEN_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('PARLAMENT_OPEN_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ParlamentOpenDataSDK.test()
    const ent = testsdk.Member()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PARLAMENT_OPEN_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"short":"Whether the councillor is currently active","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"canton","req":false,"short":"Canton abbreviation","type":"`$STRING`","index$":1},{"active":true,"name":"council","req":false,"short":"Council membership (National Council or Council of States)","type":"`$STRING`","index$":2},{"active":true,"format":"date","name":"entryDate","req":false,"short":"Date of entry into parliament","type":"`$STRING`","index$":3},{"active":true,"name":"firstName","req":false,"short":"First name","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"short":"Unique councillor identifier","type":"`$INTEGER`","index$":5},{"active":true,"name":"lastName","req":false,"short":"Last name","type":"`$STRING`","index$":6},{"active":true,"format":"date","name":"leavingDate","req":false,"short":"Date of leaving parliament (if applicable)","type":"`$STRING`","index$":7},{"active":true,"name":"party","req":false,"short":"Political party abbreviation","type":"`$STRING`","index$":8},{"active":true,"name":"title","req":false,"short":"Academic or professional title","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"member","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"id","orig":"id","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"de","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /councillors","json":"{\"operationId\":\"getCouncillors\",\"parameters\":[{\"description\":\"Language code for response (de=German, fr=French, it=Italian, en=English)\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"fr\",\"it\",\"en\"],\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Filter by specific councillor ID\",\"in\":\"query\",\"name\":\"id\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter by active status\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"councillors\":{\"items\":{\"properties\":{\"active\":{\"description\":\"Whether the councillor is currently active\",\"type\":\"boolean\"},\"canton\":{\"description\":\"Canton abbreviation\",\"type\":\"string\"},\"council\":{\"description\":\"Council membership (National Council or Council of States)\",\"enum\":[\"Nationalrat\",\"Ständerat\"],\"type\":\"string\"},\"entryDate\":{\"description\":\"Date of entry into parliament\",\"format\":\"date\",\"type\":\"string\"},\"firstName\":{\"description\":\"First name\",\"type\":\"string\"},\"id\":{\"description\":\"Unique councillor identifier\",\"type\":\"integer\"},\"lastName\":{\"description\":\"Last name\",\"type\":\"string\"},\"leavingDate\":{\"description\":\"Date of leaving parliament (if applicable)\",\"format\":\"date\",\"type\":\"string\"},\"party\":{\"description\":\"Political party abbreviation\",\"type\":\"string\"},\"title\":{\"description\":\"Academic or professional title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"application/xml\":{\"schema\":{\"properties\":{\"councillors\":{\"items\":{\"properties\":{\"active\":{\"description\":\"Whether the councillor is currently active\",\"type\":\"boolean\"},\"canton\":{\"description\":\"Canton abbreviation\",\"type\":\"string\"},\"council\":{\"description\":\"Council membership (National Council or Council of States)\",\"enum\":[\"Nationalrat\",\"Ständerat\"],\"type\":\"string\"},\"entryDate\":{\"description\":\"Date of entry into parliament\",\"format\":\"date\",\"type\":\"string\"},\"firstName\":{\"description\":\"First name\",\"type\":\"string\"},\"id\":{\"description\":\"Unique councillor identifier\",\"type\":\"integer\"},\"lastName\":{\"description\":\"Last name\",\"type\":\"string\"},\"leavingDate\":{\"description\":\"Date of leaving parliament (if applicable)\",\"format\":\"date\",\"type\":\"string\"},\"party\":{\"description\":\"Political party abbreviation\",\"type\":\"string\"},\"title\":{\"description\":\"Academic or professional title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with councillor data\"},\"400\":{\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/councillors","segments":[{"lit":"councillors"}],"select":{"exist":["active","format","id","language"]},"transform":{"req":"`reqdata`","res":"`body.councillors`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"member","name__orig":"member","Name":"Member","name_":"member","name-":"member","NAME":"MEMBER","index$":1}, {"active":true,"entity":"member","key$":"BasicMemberFlow","kind":"basic","name":"BasicMemberFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"member_ref01"}}],"index$":0}]}, 'Member')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let member_ref01_data = Object.values(setup.data.existing.member)[0] as any

    // LIST
    const member_ref01_ent = client.Member()
    const member_ref01_match: any = {}

    const member_ref01_list = (await member_ref01_ent.list(member_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/member/MemberTestData.json')

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
    ['member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PARLAMENT_OPEN_DATA_TEST_MEMBER_ENTID': idmap,
    'PARLAMENT_OPEN_DATA_TEST_LIVE': 'FALSE',
    'PARLAMENT_OPEN_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PARLAMENT_OPEN_DATA_TEST_MEMBER_ENTID']

  const live = 'TRUE' === env.PARLAMENT_OPEN_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PARLAMENT_OPEN_DATA_TEST_MEMBER_ENTID']
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
  
