Feature: Login into ProtonMail website

    Scenario: 1. As a user, I'm able log into ProtonMail website

        Given I am on the login page of ProtonMail
        When I login with <username> and <password>
        Then I should see my mail account with <title>

        Examples:
            | username                   | password             | title                                     |
            | testinaccountforjspurposes | SuperSecretPassword! | testinaccountforjspurposes@protonmail.com |
            | tomsmith                   | tomsmith             | tomsmith@protonmail.com                   |


# Scenario: 2. As a user, I'm able to create a new letter

#     Given
#     When
#     Then
