# ParlamentOpenData SDK

Machine-readable data on Swiss parliamentary activities — sessions, members, businesses, and votes

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Parlament Open Data

The Parlament Open Data API exposes data about the [Swiss Federal Assembly](https://www.parlament.ch), covering parliamentary business, members of the National Council and Council of States, sessions and votes. It is hosted by the parliamentary services at `ws-old.parlament.ch`.

What you get from the API:
- Parliamentary affairs (`business`) with types, states and keywords
- Members of parliament (`member`) with current and historical records
- Parliamentary sessions and associated proceedings (`session`)
- Supporting structures (committees, councils, factions, parties, cantons, legislative periods) and votes

Responses can be requested as JSON, XML or XSD via a `format` query parameter. Paging is controlled with `pageNumber`, and content language is selectable with `lang=de|fr|it|en`. CORS is not enabled, so browser-based clients typically need a server-side proxy.

## Try it

**TypeScript**
```bash
npm install parlament-open-data
```

**Python**
```bash
pip install parlament-open-data-sdk
```

**PHP**
```bash
composer require voxgig/parlament-open-data-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/parlament-open-data-sdk/go
```

**Ruby**
```bash
gem install parlament-open-data-sdk
```

**Lua**
```bash
luarocks install parlament-open-data-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ParlamentOpenDataSDK } from 'parlament-open-data'

const client = new ParlamentOpenDataSDK({})

// List all businesss
const businesss = await client.Business().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o parlament-open-data-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "parlament-open-data": {
      "command": "/abs/path/to/parlament-open-data-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Business** | Parliamentary affairs and business items handled by the Federal Assembly, including their types, states and associated keywords. | `/affairs` |
| **Member** | Members of the Swiss Parliament (Councillors) with current and historical biographical and mandate data. | `/councillors` |
| **Session** | Sessions of the Federal Assembly, grouping the proceedings and votes that took place within a given sitting period. | `/sessions` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from parlamentopendata_sdk import ParlamentOpenDataSDK

client = ParlamentOpenDataSDK({})

# List all businesss
businesss, err = client.Business(None).list(None, None)
```

### PHP

```php
<?php
require_once 'parlamentopendata_sdk.php';

$client = new ParlamentOpenDataSDK([]);

// List all businesss
[$businesss, $err] = $client->Business(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/parlament-open-data-sdk/go"

client := sdk.NewParlamentOpenDataSDK(map[string]any{})

// List all businesss
businesss, err := client.Business(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "ParlamentOpenData_sdk"

client = ParlamentOpenDataSDK.new({})

# List all businesss
businesss, err = client.Business(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("parlament-open-data_sdk")

local client = sdk.new({})

-- List all businesss
local businesss, err = client:Business(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ParlamentOpenDataSDK.test()
const result = await client.Business().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ParlamentOpenDataSDK.test(None, None)
result, err = client.Business(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ParlamentOpenDataSDK::test(null, null);
[$result, $err] = $client->Business(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Business(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ParlamentOpenDataSDK.test(nil, nil)
result, err = client.Business(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Business(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Parlament Open Data

- Upstream: [https://ws-old.parlament.ch](https://ws-old.parlament.ch)

- Published as open data by the Swiss Federal Assembly (Parlamentsdienste).
- Refer to the official Swiss Parliament site for current terms and any attribution requirements.
- Confirm acceptable use before redistribution; details are not embedded in the API response itself.

---

Generated from the Parlament Open Data OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
