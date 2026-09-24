# ParlamentOpenData SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ParlamentOpenData",
            "slug": "parlament-open-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://ws-old.parlament.ch",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "business": {},
                "member": {},
                "session": {},
            },
        },
        "entity": {
      "business": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "short": "Author of the affair",
          },
          {
            "name": "council",
            "title": "Council",
            "type": "`$STRING`",
            "short": "Council handling the affair",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the affair",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique affair identifier",
          },
          {
            "name": "state",
            "title": "State",
            "type": "`$STRING`",
            "short": "Current state/status of the affair",
          },
          {
            "name": "submissionDate",
            "title": "Submission Date",
            "type": "`$STRING`",
            "short": "Date of submission",
            "format": "date",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Affair title",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of parliamentary affair",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "affairs",
                  },
                ],
                "parts": [
                  "affairs",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.affairs`",
                },
                "args": {
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                    {
                      "name": "state",
                      "orig": "state",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                    "id",
                    "language",
                    "state",
                    "type",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "member": {
        "fields": [
          {
            "name": "active",
            "title": "Active",
            "type": "`$BOOLEAN`",
            "short": "Whether the councillor is currently active",
          },
          {
            "name": "canton",
            "title": "Canton",
            "type": "`$STRING`",
            "short": "Canton abbreviation",
          },
          {
            "name": "council",
            "title": "Council",
            "type": "`$STRING`",
            "short": "Council membership (National Council or Council of States)",
          },
          {
            "name": "entryDate",
            "title": "Entry Date",
            "type": "`$STRING`",
            "short": "Date of entry into parliament",
            "format": "date",
          },
          {
            "name": "firstName",
            "title": "First Name",
            "type": "`$STRING`",
            "short": "First name",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique councillor identifier",
          },
          {
            "name": "lastName",
            "title": "Last Name",
            "type": "`$STRING`",
            "short": "Last name",
          },
          {
            "name": "leavingDate",
            "title": "Leaving Date",
            "type": "`$STRING`",
            "short": "Date of leaving parliament (if applicable)",
            "format": "date",
          },
          {
            "name": "party",
            "title": "Party",
            "type": "`$STRING`",
            "short": "Political party abbreviation",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Academic or professional title",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "councillors",
                  },
                ],
                "parts": [
                  "councillors",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.councillors`",
                },
                "args": {
                  "query": [
                    {
                      "name": "active",
                      "orig": "active",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "active",
                    "format",
                    "id",
                    "language",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "session": {
        "fields": [
          {
            "name": "abbreviation",
            "title": "Abbreviation",
            "type": "`$STRING`",
            "short": "Session abbreviation",
          },
          {
            "name": "endDate",
            "title": "End Date",
            "type": "`$STRING`",
            "short": "Session end date",
            "format": "date",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique session identifier",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Session name",
          },
          {
            "name": "startDate",
            "title": "Start Date",
            "type": "`$STRING`",
            "short": "Session start date",
            "format": "date",
          },
          {
            "name": "state",
            "title": "State",
            "type": "`$STRING`",
            "short": "Current state of the session",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of session (e.g., ordinary, extraordinary)",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "sessions",
                  },
                ],
                "parts": [
                  "sessions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.sessions`",
                },
                "args": {
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                    {
                      "name": "session_id",
                      "orig": "session_id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                    "language",
                    "session_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
