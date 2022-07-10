Feature: ProtonMail main functionality

    Scenario: 1. Logging into ProtonMail website

        Given User on the login page of ProtonMail
        When User logins with <username> and <password>
        Then User should see their mail account with <title>

        Examples:
            | username                   | password             | title                                     |
            | testinaccountforjspurposes | SuperSecretPassword! | testinaccountforjspurposes@protonmail.com |
            # | jsccucumbertest            | SuperSecretPassword  | jsccucumbertest@protonmail.com            |


    Scenario: 2. Creating a new letter

        When User clicks on 'New message' button
        And User fills 'To' field with "testinaccountforjspurposes@protonmail.com"
        And User fills 'Subject' with "Test letter"
        And User fills 'Message Area' with "Text example"
        Then Letter is filled properly with "testinaccountforjspurposes@protonmail.com" and "Test letter" fields

    Scenario: 3. The Letter should be present in Draft folder
        When User waits some time
        Then The letter will be saved automatically
        When User opens Draft folder
        Then The letter will be present inside the folder with correct "Test letter" subject

# Scenario: 4. Email of receiver matches defined email format
#     When User opens the last letter from Draft
#     Then Receiver should have properly defined email format

# Scenario: 5. Letter can be sent from Draft folder
#     When User clicks Send button
#     Then The Letter will be sent
#     When User open Draft folder
#     Then The letter shouldn't present inside the folder

# Scenario: 6. Letter should present in Sent folder afret sending
#     When User opens Sent folder
#     Then The letter will be present inside

# Scenario: 7. We can delete all letters from Sent
#     When User selects all letters
#     And Clicks Delete buttons
#     And Confirms deletion
#     Then No more letters should be present inside Sent folder

# Scenario: 8. We can sign out
#     When User open user menu
#     And Click on Sign Out button
#     Then User will be signed out







