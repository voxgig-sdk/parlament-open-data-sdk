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
(0, node_test_1.describe)('BusinessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PARLAMENT_OPEN_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PARLAMENT_OPEN_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ParlamentOpenDataSDK.test();
        const ent = testsdk.Business();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PARLAMENT_OPEN_DATA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'business.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "Author of the affair", "t": "`$STRING`", "key$": "author", "index$": 0 }, "council": { "a": true, "h": "Council", "n": "council", "r": false, "sh": "Council handling the affair", "t": "`$STRING`", "key$": "council", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Detailed description of the affair", "t": "`$STRING`", "key$": "description", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique affair identifier", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "Current state/status of the affair", "t": "`$STRING`", "key$": "state", "index$": 4 }, "submissionDate": { "a": true, "fo": "date", "h": "Submission Date", "n": "submissionDate", "r": false, "sh": "Date of submission", "t": "`$STRING`", "key$": "submissionDate", "index$": 5 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Affair title", "t": "`$STRING`", "key$": "title", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type of parliamentary affair", "t": "`$STRING`", "key$": "type", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "business", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /affairs", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "de", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/affairs", "q": { "exist": ["format", "id", "language", "state", "type"] }, "r": {}, "s": [{ "lit": "affairs" }], "t": { "req": "`reqdata`", "res": "`body.affairs`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "business", "name__orig": "business", "Name": "Business", "name_": "business", "name-": "business", "NAME": "BUSINESS", "index$": 0 }, { "active": true, "entity": "business", "key$": "BasicBusinessFlow", "kind": "basic", "name": "BasicBusinessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "business_ref01" } }], "index$": 0 }] }, 'Business', { "GET /affairs": { "protocol": "http", "operationId": "getAffairs", "responses": { "200": { "description": "Successful response with affairs data", "content": { "application/json": { "schema": { "type": "object", "properties": { "affairs": { "items": { "properties": { "author": { "description": "Author of the affair", "type": "string", "key$": "author" }, "council": { "description": "Council handling the affair", "type": "string", "key$": "council" }, "description": { "description": "Detailed description of the affair", "type": "string", "key$": "description" }, "id": { "description": "Unique affair identifier", "type": "integer", "key$": "id" }, "state": { "description": "Current state/status of the affair", "type": "string", "key$": "state" }, "submissionDate": { "description": "Date of submission", "format": "date", "type": "string", "key$": "submissionDate" }, "title": { "description": "Affair title", "type": "string", "key$": "title" }, "type": { "description": "Type of parliamentary affair", "type": "string", "key$": "type" } }, "type": "object", "x-ref": "#/components/schemas/Affair", "index$": 0 }, "key$": "affairs", "type": "array" } } } }, "application/xml": { "schema": { "type": "object", "properties": { "affairs": { "type": "array", "items": { "type": "object", "properties": { "id": { "description": "Unique affair identifier", "type": "integer" }, "title": { "description": "Affair title", "type": "string" }, "type": { "description": "Type of parliamentary affair", "type": "string" }, "state": { "description": "Current state/status of the affair", "type": "string" }, "submissionDate": { "description": "Date of submission", "format": "date", "type": "string" }, "council": { "description": "Council handling the affair", "type": "string" }, "author": { "description": "Author of the affair", "type": "string" }, "description": { "description": "Detailed description of the affair", "type": "string" } }, "x-ref": "#/components/schemas/Affair" } } } } } } }, "400": { "description": "Bad request - Invalid parameters" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "language", "in": "query", "description": "Language code for response (de=German, fr=French, it=Italian, en=English)", "required": false, "schema": { "type": "string", "enum": ["de", "fr", "it", "en"], "default": "de" }, "index$": 0 }, { "name": "format", "in": "query", "description": "Response format", "required": false, "schema": { "type": "string", "enum": ["json", "xml"], "default": "json" }, "index$": 1 }, { "name": "id", "in": "query", "description": "Filter by specific affair ID", "required": false, "schema": { "type": "integer" }, "index$": 2 }, { "name": "state", "in": "query", "description": "Filter by affair state/status", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "type", "in": "query", "description": "Filter by affair type", "required": false, "schema": { "type": "string" }, "index$": 4 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let business_ref01_data = Object.values(setup.data.existing.business)[0];
        // LIST
        const business_ref01_ent = client.Business();
        const business_ref01_match = {};
        const business_ref01_list = (await business_ref01_ent.list(business_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/business/BusinessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ParlamentOpenDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['business01', 'business02', 'business03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PARLAMENT_OPEN_DATA_TEST_BUSINESS_ENTID': idmap,
        'PARLAMENT_OPEN_DATA_TEST_LIVE': 'FALSE',
        'PARLAMENT_OPEN_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PARLAMENT_OPEN_DATA_TEST_BUSINESS_ENTID'];
    const live = 'TRUE' === env.PARLAMENT_OPEN_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PARLAMENT_OPEN_DATA_TEST_BUSINESS_ENTID'];
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
//# sourceMappingURL=BusinessEntity.test.js.map