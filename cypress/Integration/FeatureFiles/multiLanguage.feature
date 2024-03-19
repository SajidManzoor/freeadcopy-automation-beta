Feature: Language Localization

  Scenario: Verify Spanish Language Localization
    When the user selects Spanish from the language dropdown
    Then the application language should be set to Spanish

  Scenario: Verify French Language Localization
    When the user selects French from the language dropdown
    Then the application language should be set to French

  Scenario: Verify German Language Localization
    When the user selects German from the language dropdown
    Then the application language should be set to German

  Scenario: Verify Italian Language Localization
    When the user selects Italian from the language dropdown
    Then the application language should be set to Italian

  Scenario: Verify Portuguese Language Localization
    When the user selects Portuguese from the language dropdown
    Then the application language should be set to Portuguese

  Scenario: Verify Indonesian Language Localization
    When the user selects Indonesian from the language dropdown
    Then the application language should be set to Indonesian

  Scenario: Verify Russian Language Localization
    When the user selects Russian from the language dropdown
    Then the application language should be set to Russian

  Scenario: Verify Polish Language Localization
    When the user selects Polish from the language dropdown
    Then the application language should be set to Polish

  Scenario: Verify Ukrainian Language Localization
    When the user selects Ukrainian from the language dropdown
    Then the application language should be set to Ukrainian

  Scenario: Verify Language on Settings Page
    When User Logs in
    And opens Settings
    And User selects each language and Settings page converts to that language
