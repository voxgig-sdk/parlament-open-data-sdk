
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ParlamentOpenData',
        slug: "parlament-open-data",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://ws-old.parlament.ch",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      business: {
      },

      member: {
      },

      session: {
      },

    }
  }


  entity = {
    "business": {
      "fields": [
        {
          "name": "author",
          "short": "Author of the affair",
          "type": "`$STRING`"
        },
        {
          "name": "council",
          "short": "Council handling the affair",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Detailed description of the affair",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique affair identifier",
          "type": "`$INTEGER`"
        },
        {
          "name": "state",
          "short": "Current state/status of the affair",
          "type": "`$STRING`"
        },
        {
          "name": "submissionDate",
          "short": "Date of submission",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Affair title",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of parliamentary affair",
          "type": "`$STRING`"
        }
      ],
      "name": "business",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "state",
                    "orig": "state",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/affairs",
              "parts": [
                "affairs"
              ],
              "select": {
                "exist": [
                  "format",
                  "id",
                  "language",
                  "state",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.affairs`"
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
          "short": "Whether the councillor is currently active",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "canton",
          "short": "Canton abbreviation",
          "type": "`$STRING`"
        },
        {
          "name": "council",
          "short": "Council membership (National Council or Council of States)",
          "type": "`$STRING`"
        },
        {
          "name": "entryDate",
          "short": "Date of entry into parliament",
          "type": "`$STRING`"
        },
        {
          "name": "firstName",
          "short": "First name",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique councillor identifier",
          "type": "`$INTEGER`"
        },
        {
          "name": "lastName",
          "short": "Last name",
          "type": "`$STRING`"
        },
        {
          "name": "leavingDate",
          "short": "Date of leaving parliament (if applicable)",
          "type": "`$STRING`"
        },
        {
          "name": "party",
          "short": "Political party abbreviation",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Academic or professional title",
          "type": "`$STRING`"
        }
      ],
      "name": "member",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "active",
                    "orig": "active",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/councillors",
              "parts": [
                "councillors"
              ],
              "select": {
                "exist": [
                  "active",
                  "format",
                  "id",
                  "language"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.councillors`"
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
          "short": "Session abbreviation",
          "type": "`$STRING`"
        },
        {
          "name": "endDate",
          "short": "Session end date",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique session identifier",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Session name",
          "type": "`$STRING`"
        },
        {
          "name": "startDate",
          "short": "Session start date",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "short": "Current state of the session",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of session (e.g., ordinary, extraordinary)",
          "type": "`$STRING`"
        }
      ],
      "name": "session",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "session_id",
                    "orig": "session_id",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/sessions",
              "parts": [
                "sessions"
              ],
              "select": {
                "exist": [
                  "format",
                  "language",
                  "session_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.sessions`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

