# ParlamentOpenData PHP SDK Reference

Complete API reference for the ParlamentOpenData PHP SDK.


## ParlamentOpenDataSDK

### Constructor

```php
require_once __DIR__ . '/parlament-open-data_sdk.php';

$client = new ParlamentOpenDataSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ParlamentOpenDataSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ParlamentOpenDataSDK::test();
```


### Instance Methods

#### `Business($data = null)`

Create a new `BusinessEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `Session($data = null)`

Create a new `SessionEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BusinessEntity

```php
$business = $client->business();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | ``$STRING`` | No |  |
| `council` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `state` | ``$STRING`` | No |  |
| `submission_date` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->business()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BusinessEntity`

Create a new `BusinessEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->member();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | ``$BOOLEAN`` | No |  |
| `canton` | ``$STRING`` | No |  |
| `council` | ``$STRING`` | No |  |
| `entry_date` | ``$STRING`` | No |  |
| `first_name` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `last_name` | ``$STRING`` | No |  |
| `leaving_date` | ``$STRING`` | No |  |
| `party` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->member()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SessionEntity

```php
$session = $client->session();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abbreviation` | ``$STRING`` | No |  |
| `end_date` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `start_date` | ``$STRING`` | No |  |
| `state` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->session()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SessionEntity`

Create a new `SessionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new ParlamentOpenDataSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

