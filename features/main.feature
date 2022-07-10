Feature: ProtonMail main functionality

    Scenario: 1. Logging into ProtonMail website

        Given User on the login page of ProtonMail
        When User logins with "testinaccountforjspurposes" and "SuperSecretPassword!" data
        Then User should see their mail account with "testinaccountforjspurposes@protonmail.com" title

    Scenario: 2. Creating a new letter

        When User clicks on 'New message' button
        And User fills 'To' field with "testinaccountforjspurposes@protonmail.com"
        And User fills 'Subject' with "Test letter"
        And User fills 'Message Area' with "Text example"
        Then Letter is filled properly with "testinaccountforjspurposes@protonmail.com" and "Test letter" fields

    Scenario: 3. The Letter should be present in Draft folder
        When User waits some time
        Then The letter should be saved automatically
        When User opens 'Drafts' folder
        Then The letter should be present inside the folder with correct "Test letter" subject

    Scenario: 4. Email of receiver matches defined email format
        When User opens the last letter from Drafts
        Then Email fields should contain correct "testinaccountforjspurposes@protonmail.com" and "Test letter" fields
    
    Scenario: 5. Letters can be sent from Draft folder
        When User clicks 'Send' button
        Then The letter should be sent
        When User open 'Drafts' folder
        Then The letter shouldn't be present inside the folder

    Scenario: 6. Sent letter should be present inside Sent folder after sending
        When User opens 'Sent' folder
        Then The letter with "Test letter" subject should be present

    Scenario: 7. User is able to delete all letters from Sent
        When User selects all letters
        And Clicks 'Delete' button
        And Confirms deletion
        Then No more letters should be present inside 'Sent' folder

    Scenario: 8. User is able to sign out
        When User opens user menu
        And Click on 'Sign Out' button
        Then User should be signed out and see "Proton Account" title







