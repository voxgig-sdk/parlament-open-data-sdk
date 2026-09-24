"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PARLAMENT_OPEN_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PARLAMENT_OPEN_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ParlamentOpenDataSDK.test();
        const ent = testsdk.Member();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PARLAMENT_OPEN_DATA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": false, "sh": "Whether the councillor is currently active", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "canton": { "a": true, "h": "Canton", "n": "canton", "r": false, "sh": "Canton abbreviation", "t": "`$STRING`", "key$": "canton", "index$": 1 }, "council": { "a": true, "h": "Council", "n": "council", "r": false, "sh": "Council membership (National Council or Council of States)", "t": "`$STRING`", "key$": "council", "index$": 2 }, "entryDate": { "a": true, "fo": "date", "h": "Entry Date", "n": "entryDate", "r": false, "sh": "Date of entry into parliament", "t": "`$STRING`", "key$": "entryDate", "index$": 3 }, "firstName": { "a": true, "h": "First Name", "n": "firstName", "r": false, "sh": "First name", "t": "`$STRING`", "key$": "firstName", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique councillor identifier", "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "lastName": { "a": true, "h": "Last Name", "n": "lastName", "r": false, "sh": "Last name", "t": "`$STRING`", "key$": "lastName", "index$": 6 }, "leavingDate": { "a": true, "fo": "date", "h": "Leaving Date", "n": "leavingDate", "r": false, "sh": "Date of leaving parliament (if applicable)", "t": "`$STRING`", "key$": "leavingDate", "index$": 7 }, "party": { "a": true, "h": "Party", "n": "party", "r": false, "sh": "Political party abbreviation", "t": "`$STRING`", "key$": "party", "index$": 8 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Academic or professional title", "t": "`$STRING`", "key$": "title", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "member", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /councillors", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "active", "or": "active", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "de", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/councillors", "q": { "exist": ["active", "format", "id", "language"] }, "r": {}, "s": [{ "lit": "councillors" }], "t": { "req": "`reqdata`", "res": "`body.councillors`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "member", "name__orig": "member", "Name": "Member", "name_": "member", "name-": "member", "NAME": "MEMBER", "index$": 1 }, { "active": true, "entity": "member", "key$": "BasicMemberFlow", "kind": "basic", "name": "BasicMemberFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "member_ref01" } }], "index$": 0 }] }, 'Member', { "GET /councillors": { "protocol": "http", "operationId": "getCouncillors", "responses": { "200": { "description": "Successful response with councillor data", "content": { "application/json": { "schema": { "type": "object", "properties": { "councillors": { "items": { "properties": { "active": { "description": "Whether the councillor is currently active", "type": "boolean", "key$": "active" }, "canton": { "description": "Canton abbreviation", "type": "string", "key$": "canton" }, "council": { "description": "Council membership (National Council or Council of States)", "enum": ["Nationalrat", "Ständerat"], "type": "string", "key$": "council" }, "entryDate": { "description": "Date of entry into parliament", "format": "date", "type": "string", "key$": "entryDate" }, "firstName": { "description": "First name", "type": "string", "key$": "firstName" }, "id": { "description": "Unique councillor identifier", "type": "integer", "key$": "id" }, "lastName": { "description": "Last name", "type": "string", "key$": "lastName" }, "leavingDate": { "description": "Date of leaving parliament (if applicable)", "format": "date", "type": "string", "key$": "leavingDate" }, "party": { "description": "Political party abbreviation", "type": "string", "key$": "party" }, "title": { "description": "Academic or professional title", "type": "string", "key$": "title" } }, "type": "object", "x-ref": "#/components/schemas/Councillor", "index$": 0 }, "key$": "councillors", "type": "array" } } } }, "application/xml": { "schema": { "type": "object", "properties": { "councillors": { "type": "array", "items": { "type": "object", "properties": { "id": { "description": "Unique councillor identifier", "type": "integer" }, "firstName": { "description": "First name", "type": "string" }, "lastName": { "description": "Last name", "type": "string" }, "title": { "description": "Academic or professional title", "type": "string" }, "party": { "description": "Political party abbreviation", "type": "string" }, "canton": { "description": "Canton abbreviation", "type": "string" }, "council": { "description": "Council membership (National Council or Council of States)", "enum": ["Nationalrat", "Ständerat"], "type": "string" }, "active": { "description": "Whether the councillor is currently active", "type": "boolean" }, "entryDate": { "description": "Date of entry into parliament", "format": "date", "type": "string" }, "leavingDate": { "description": "Date of leaving parliament (if applicable)", "format": "date", "type": "string" } }, "x-ref": "#/components/schemas/Councillor" } } } } } } }, "400": { "description": "Bad request - Invalid parameters" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "language", "in": "query", "description": "Language code for response (de=German, fr=French, it=Italian, en=English)", "required": false, "schema": { "type": "string", "enum": ["de", "fr", "it", "en"], "default": "de" }, "index$": 0 }, { "name": "format", "in": "query", "description": "Response format", "required": false, "schema": { "type": "string", "enum": ["json", "xml"], "default": "json" }, "index$": 1 }, { "name": "id", "in": "query", "description": "Filter by specific councillor ID", "required": false, "schema": { "type": "integer" }, "index$": 2 }, { "name": "active", "in": "query", "description": "Filter by active status", "required": false, "schema": { "type": "boolean" }, "index$": 3 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let member_ref01_data = Object.values(setup.data.existing.member)[0];
        // LIST
        const member_ref01_ent = client.Member();
        const member_ref01_match = {};
        const member_ref01_list = (await member_ref01_ent.list(member_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/member/MemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ParlamentOpenDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PARLAMENT_OPEN_DATA_TEST_MEMBER_ENTID': idmap,
        'PARLAMENT_OPEN_DATA_TEST_LIVE': 'FALSE',
        'PARLAMENT_OPEN_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PARLAMENT_OPEN_DATA_TEST_MEMBER_ENTID'];
    const live = 'TRUE' === env.PARLAMENT_OPEN_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PARLAMENT_OPEN_DATA_TEST_MEMBER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ParlamentOpenDataSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=MemberEntity.test.js.map