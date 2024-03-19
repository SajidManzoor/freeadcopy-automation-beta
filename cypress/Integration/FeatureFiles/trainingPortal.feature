Feature: Training Portal

  Scenario: User is able to play the training video from learning page.
    When Login app.
    And Click on learning from the sidebar.
    Then Click on video and check video detail.

  Scenario: User is able to add videos in favorites.
    When Login to app and Click on learning from the sidebar.
    And Click on video and click on favorite icon.
    Then Check the video is added on the favorites page
