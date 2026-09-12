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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Author of the affair",
            "type": "`$STRING`",
          },
          {
            "name": "council",
            "short": "Council handling the affair",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Detailed description of the affair",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique affair identifier",
            "type": "`$INTEGER`",
          },
          {
            "name": "state",
            "short": "Current state/status of the affair",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "submissionDate",
            "short": "Date of submission",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Affair title",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of parliamentary affair",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "state",
                      "orig": "state",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/affairs",
                "segments": [
                  {
                    "lit": "affairs",
                  },
                ],
                "select": {
                  "exist": [
                    "format",
                    "id",
                    "language",
                    "state",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.affairs`",
                },
                "parts": [
                  "affairs",
                ],
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
            "short": "Whether the councillor is currently active",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "canton",
            "short": "Canton abbreviation",
            "type": "`$STRING`",
          },
          {
            "name": "council",
            "short": "Council membership (National Council or Council of States)",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "entryDate",
            "short": "Date of entry into parliament",
            "type": "`$STRING`",
          },
          {
            "name": "firstName",
            "short": "First name",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique councillor identifier",
            "type": "`$INTEGER`",
          },
          {
            "name": "lastName",
            "short": "Last name",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "leavingDate",
            "short": "Date of leaving parliament (if applicable)",
            "type": "`$STRING`",
          },
          {
            "name": "party",
            "short": "Political party abbreviation",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Academic or professional title",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "active",
                      "orig": "active",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/councillors",
                "segments": [
                  {
                    "lit": "councillors",
                  },
                ],
                "select": {
                  "exist": [
                    "active",
                    "format",
                    "id",
                    "language",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.councillors`",
                },
                "parts": [
                  "councillors",
                ],
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
            "short": "Session abbreviation",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "endDate",
            "short": "Session end date",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique session identifier",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "short": "Session name",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "startDate",
            "short": "Session start date",
            "type": "`$STRING`",
          },
          {
            "name": "state",
            "short": "Current state of the session",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of session (e.g., ordinary, extraordinary)",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "session_id",
                      "orig": "session_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/sessions",
                "segments": [
                  {
                    "lit": "sessions",
                  },
                ],
                "select": {
                  "exist": [
                    "format",
                    "language",
                    "session_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.sessions`",
                },
                "parts": [
                  "sessions",
                ],
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
