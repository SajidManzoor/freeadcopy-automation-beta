Feature: Searching filter

  Scenario: User is able to search templates by selecting the tag.
    When Login to app and click on the searchfield from header.
    When Select Email tag and type template name.
    Then Select email template from matching result and verify it.
    When Select Facebook tag and type template name.
    Then Select FB template from matching result and verify it.
    When Select YouTube tag and type template name.
    Then Select YouTube template from matching result and verify it.
    When Select Misc tag and type template name.
    Then Select Misc template from matching result and verify it.
    When Select Market Research tag and type template name.
    Then Select Market Research template from matching result and verify it.
    When Select Advertorial tag and type template name.
    Then Select Advertorial template from matching result and verify it.
