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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Author of the affair',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'council',
              'short' => 'Council handling the affair',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Detailed description of the affair',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique affair identifier',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'state',
              'short' => 'Current state/status of the affair',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'submissionDate',
              'short' => 'Date of submission',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Affair title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of parliamentary affair',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'business',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'state',
                        'orig' => 'state',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/affairs',
                  'parts' => [
                    'affairs',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.affairs`',
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
              'short' => 'Whether the councillor is currently active',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'canton',
              'short' => 'Canton abbreviation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'council',
              'short' => 'Council membership (National Council or Council of States)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'entryDate',
              'short' => 'Date of entry into parliament',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'firstName',
              'short' => 'First name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique councillor identifier',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'lastName',
              'short' => 'Last name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'leavingDate',
              'short' => 'Date of leaving parliament (if applicable)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'party',
              'short' => 'Political party abbreviation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Academic or professional title',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'member',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'active',
                        'orig' => 'active',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/councillors',
                  'parts' => [
                    'councillors',
                  ],
                  'select' => [
                    'exist' => [
                      'active',
                      'format',
                      'id',
                      'language',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.councillors`',
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
              'short' => 'Session abbreviation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endDate',
              'short' => 'Session end date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique session identifier',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Session name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'startDate',
              'short' => 'Session start date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'state',
              'short' => 'Current state of the session',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of session (e.g., ordinary, extraordinary)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'session',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'language',
                        'orig' => 'language',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'session_id',
                        'orig' => 'session_id',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/sessions',
                  'parts' => [
                    'sessions',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'language',
                      'session_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.sessions`',
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
