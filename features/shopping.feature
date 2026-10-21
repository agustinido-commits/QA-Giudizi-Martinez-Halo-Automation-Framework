Feature: SauceDemo shopping

  Scenario: Login with valid credentials
    Given I am on the SauceDemo login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the inventory page


  Scenario: Complete a purchase successfully
    Given I am on the SauceDemo login page
    When I log in with username "standard_user" and password "secret_sauce"
    And I add the backpack to the shopping cart
    Then the cart should contain 1 item
    And the backpack should be visible in the cart
    When I proceed to checkout
    And I enter checkout information
    And I confirm the order
    Then I should see the order confirmation