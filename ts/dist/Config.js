"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ParlamentOpenData',
        slug: "parlament-open-data",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://ws-old.parlament.ch",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            business: {},
            member: {},
            session: {},
        }
    };
    entity = {
        "business": {
            "fields": [
                {
                    "name": "author",
                    "title": "Author",
                    "type": "`$STRING`",
                    "short": "Author of the affair"
                },
                {
                    "name": "council",
                    "title": "Council",
                    "type": "`$STRING`",
                    "short": "Council handling the affair"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Detailed description of the affair"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique affair identifier"
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "short": "Current state/status of the affair"
                },
                {
                    "name": "submissionDate",
                    "title": "Submission Date",
                    "type": "`$STRING`",
                    "short": "Date of submission",
                    "format": "date"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Affair title"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "short": "Type of parliamentary affair"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "business",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/affairs",
                            "segments": [
                                {
                                    "lit": "affairs"
                                }
                            ],
                            "parts": [
                                "affairs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.affairs`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "de"
                                    },
                                    {
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format",
                                    "id",
                                    "language",
                                    "state",
                                    "type"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "member": {
            "fields": [
                {
                    "name": "active",
                    "title": "Active",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the councillor is currently active"
                },
                {
                    "name": "canton",
                    "title": "Canton",
                    "type": "`$STRING`",
                    "short": "Canton abbreviation"
                },
                {
                    "name": "council",
                    "title": "Council",
                    "type": "`$STRING`",
                    "short": "Council membership (National Council or Council of States)"
                },
                {
                    "name": "entryDate",
                    "title": "Entry Date",
                    "type": "`$STRING`",
                    "short": "Date of entry into parliament",
                    "format": "date"
                },
                {
                    "name": "firstName",
                    "title": "First Name",
                    "type": "`$STRING`",
                    "short": "First name"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique councillor identifier"
                },
                {
                    "name": "lastName",
                    "title": "Last Name",
                    "type": "`$STRING`",
                    "short": "Last name"
                },
                {
                    "name": "leavingDate",
                    "title": "Leaving Date",
                    "type": "`$STRING`",
                    "short": "Date of leaving parliament (if applicable)",
                    "format": "date"
                },
                {
                    "name": "party",
                    "title": "Party",
                    "type": "`$STRING`",
                    "short": "Political party abbreviation"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Academic or professional title"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "member",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/councillors",
                            "segments": [
                                {
                                    "lit": "councillors"
                                }
                            ],
                            "parts": [
                                "councillors"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.councillors`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "active",
                                        "orig": "active",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "de"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "active",
                                    "format",
                                    "id",
                                    "language"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "session": {
            "fields": [
                {
                    "name": "abbreviation",
                    "title": "Abbreviation",
                    "type": "`$STRING`",
                    "short": "Session abbreviation"
                },
                {
                    "name": "endDate",
                    "title": "End Date",
                    "type": "`$STRING`",
                    "short": "Session end date",
                    "format": "date"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique session identifier"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Session name"
                },
                {
                    "name": "startDate",
                    "title": "Start Date",
                    "type": "`$STRING`",
                    "short": "Session start date",
                    "format": "date"
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "short": "Current state of the session"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "short": "Type of session (e.g., ordinary, extraordinary)"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "session",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/sessions",
                            "segments": [
                                {
                                    "lit": "sessions"
                                }
                            ],
                            "parts": [
                                "sessions"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.sessions`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "de"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format",
                                    "language",
                                    "session_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map