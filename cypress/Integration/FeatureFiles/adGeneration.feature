Feature: Ad Generation process
    The user can generate ads by selecting a category from the template page or from the newest template section of the dashboard.


  Scenario: User is able to generate ad with email template
    When Login to app and Click on the template from side bar
    And Select email template
    And Fill the fields
    Then Click on Generate Ad button and verify the ad


  Scenario: User is able to generate ad with Facebook template
    When Login to app and select template from side bar
    And Select facebook template generated ad and verify the ad


  Scenario: User is able to generate ad with YouTube template
    When Login to app and Click on the template from side bar
    And click on youtube category and select template.
    And Fill the fields
    Then Click on Generate Ad button and verify the ad


  Scenario: User is able to generate ad with "Market Research" template
    When Login to the app and Click on the template from side bar
    And click on Market Research category and select template
    And Fill the fields
    Then Click on the Generate Ad button and verify the ad


  Scenario: User is able to generate ad with "Misc" template
    When Login to the app and Click on the template from the side bar
    And click on Misc category, select template and fill the field
    Then Click on Generate Ad button and verify the ad.


  Scenario: User is able to generate ad with "Advertorial" template
    When Login to the app and navigate to the template page
    And click on Advertorial Ads category and select template
    And Fill the fields.
    Then Click on Generate Ad button and verify ad.


  Scenario: User is able to generate ad from Newest templates
    When Login to the app and navigate to newest templates
    Then Select the templates from newest template section, generated ad and vrify the ads


  Scenario: User is able to preview and edit ad
    And Login to app and Click on the MyAds from side bar
    And Select ad from list and ad is displayed
    And Click on edit icon
    Then Click on save button and ad is updated successfully

