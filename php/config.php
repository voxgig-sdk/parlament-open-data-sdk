<?php
declare(strict_types=1);

// ParlamentOpenData SDK configuration

class ParlamentOpenDataConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ParlamentOpenData",
                "slug" => "parlament-open-data",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://ws-old.parlament.ch",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "business" => [],
                    "member" => [],
                    "session" => [],
                ],
            ],
            "entity" => [
        'business' => [
          'fields' => [
            [
              'name' => 'author',
              'title' => 'Author',
              'type' => '`$STRING`',
              'short' => 'Author of the affair',
            ],
            [
              'name' => 'council',
              'title' => 'Council',
              'type' => '`$STRING`',
              'short' => 'Council handling the affair',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Detailed description of the affair',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique affair identifier',
            ],
            [
              'name' => 'state',
              'title' => 'State',
              'type' => '`$STRING`',
              'short' => 'Current state/status of the affair',
            ],
            [
              'name' => 'submissionDate',
              'title' => 'Submission Date',
              'type' => '`$STRING`',
              'short' => 'Date of submission',
              'format' => 'date',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Affair title',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Type of parliamentary affair',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'business',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/affairs',
                  'segments' => [
                    [
                      'lit' => 'affairs',
                    ],
                  ],
                  'parts' => [
                    'affairs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.affairs`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'de',
                      ],
                      [
                        'name' => 'state',
                        'orig' => 'state',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'id',
                      'language',
                      'state',
                      'type',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'member' => [
          'fields' => [
            [
              'name' => 'active',
              'title' => 'Active',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether the councillor is currently active',
            ],
            [
              'name' => 'canton',
              'title' => 'Canton',
              'type' => '`$STRING`',
              'short' => 'Canton abbreviation',
            ],
            [
              'name' => 'council',
              'title' => 'Council',
              'type' => '`$STRING`',
              'short' => 'Council membership (National Council or Council of States)',
            ],
            [
              'name' => 'entryDate',
              'title' => 'Entry Date',
              'type' => '`$STRING`',
              'short' => 'Date of entry into parliament',
              'format' => 'date',
            ],
            [
              'name' => 'firstName',
              'title' => 'First Name',
              'type' => '`$STRING`',
              'short' => 'First name',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique councillor identifier',
            ],
            [
              'name' => 'lastName',
              'title' => 'Last Name',
              'type' => '`$STRING`',
              'short' => 'Last name',
            ],
            [
              'name' => 'leavingDate',
              'title' => 'Leaving Date',
              'type' => '`$STRING`',
              'short' => 'Date of leaving parliament (if applicable)',
              'format' => 'date',
            ],
            [
              'name' => 'party',
              'title' => 'Party',
              'type' => '`$STRING`',
              'short' => 'Political party abbreviation',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Academic or professional title',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'member',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/councillors',
                  'segments' => [
                    [
                      'lit' => 'councillors',
                    ],
                  ],
                  'parts' => [
                    'councillors',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.councillors`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'active',
                        'orig' => 'active',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'de',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'active',
                      'format',
                      'id',
                      'language',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'session' => [
          'fields' => [
            [
              'name' => 'abbreviation',
              'title' => 'Abbreviation',
              'type' => '`$STRING`',
              'short' => 'Session abbreviation',
            ],
            [
              'name' => 'endDate',
              'title' => 'End Date',
              'type' => '`$STRING`',
              'short' => 'Session end date',
              'format' => 'date',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique session identifier',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Session name',
            ],
            [
              'name' => 'startDate',
              'title' => 'Start Date',
              'type' => '`$STRING`',
              'short' => 'Session start date',
              'format' => 'date',
            ],
            [
              'name' => 'state',
              'title' => 'State',
              'type' => '`$STRING`',
              'short' => 'Current state of the session',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Type of session (e.g., ordinary, extraordinary)',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'session',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/sessions',
                  'segments' => [
                    [
                      'lit' => 'sessions',
                    ],
                  ],
                  'parts' => [
                    'sessions',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.sessions`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'de',
                      ],
                      [
                        'name' => 'session_id',
                        'orig' => 'session_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'language',
                      'session_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ParlamentOpenDataFeatures::make_feature($name);
    }
}
