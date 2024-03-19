Feature: Account settings

  Scenario: User is able to change user name
    Given Open the websites.
    When Login to application.
    And Click on the profile icon and navigate to settings page
    And Enter username and click on update button.

  Scenario: Scenario: User is unable to update password by entering random text in the fields.
    When Loggin to app and navigate to setting page by clicking on the profile icon
    And Navigate to password setting and enter the random text in current, new, confirm password fields.
    And Click on update password button and check toast message
