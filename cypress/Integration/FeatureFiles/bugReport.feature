Feature: Bug report submission
    The user is able to submit bug report.

  Scenario: User is able to submit bug report.
    Given Open the website and login to the application
    And Click on the Report Bug from profile dropdown manue
    And Enter Bug detail and click on send message
    Then Check the success notification
