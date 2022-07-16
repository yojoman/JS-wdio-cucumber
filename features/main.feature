Feature: ProtonMail main functionality

    Scenario: 1. Logging into ProtonMail website
        Given I am on the login page of ProtonMail
        When I login with "testinaccountforjspurposes" and "SuperSecretPassword!" data
        Then I expect to see my mail account with "testinaccountforjspurposes@protonmail.com" title

    Scenario: 2. Creating a new letter
        When I click on New message button
        And I fill To field with "testinaccountforjspurposes@protonmail.com"
        And I fill Subject with "Test letter"
        And I fill Message Area with "Text example"
        Then I expect Letter is filled properly with "testinaccountforjspurposes@protonmail.com" and "Test letter" fields

    Scenario: 3. Drafted letter is present inside Drafts folder
        When I wait 3 seconds
        Then I expect Letter is saved automatically
        When I open Drafts folder
        Then I expect Letter is present inside the folder with correct "Test letter" subject

    Scenario: 4. Email of receiver is correct
        When I open the last letter from Drafts
        Then I expect Letter contains correct "testinaccountforjspurposes@protonmail.com" and "Test letter" fields
        And I expect Email "testinaccountforjspurposes@protonmail.com" matches defined format

    Scenario: 5. Letters can be sent from Draft folder
        When I click on Send button
        Then I expect Letter is sent
        When I open Drafts folder again
        Then I expect Letter isn't present inside the folder

    Scenario: 6. Sent letter is present inside Sent folder after sending
        When I open Sent folder
        Then I expect to see Letter with "Test letter" subject

    Scenario: 7. Deletion all letters from Sent
        When I select all letters
        And I click on Delete button
        And I confirm deletion
        Then I expect to see no more letters are present inside Sent folder

    Scenario: 8. Signing out
        When I open user menu
        And I click on Sign Out button
        Then I expect to be signed out and see "Proton Account" title