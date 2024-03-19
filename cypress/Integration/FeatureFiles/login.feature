Feature: Login process
    The user is only able to log in with registered credentials, and an error message is displaying for 
    unregistered credentials.

  Scenario: User is able to login with registered email.
    Given open the website and navigate to LoginPage.
    When Enter email and password
    When Click on signin button
    Then logged in successfully

  Scenario: User unable to login with unregistered email.
    Given open the website and navigate to LoginPage.
    When Enter unregistered email and password.
    And Click on the signin button
    Then Error message is displayed
