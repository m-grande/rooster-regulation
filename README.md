# Rooster Test Suite

This repository contains a test suite for the functions defined in the `Rooster` module. The functions include:

- `announceDawn()`: Returns the rooster's call at dawn.
- `timeAtDawn(hour)`: Returns the hour passed as a string.

## Dependencies

Ensure you have Mocha and the Node.js assertion library installed in your project. You can do this by running:


## Running Tests

To run the tests, make sure you are in the project directory and execute the following command:


This will run the test suite using Mocha.

## Test Description

The file `test.js` contains tests for the `announceDawn()` and `timeAtDawn(hour)` functions.

- The test for `announceDawn()` verifies that the function correctly returns the rooster's call at dawn.

- The test for `timeAtDawn(hour)` verifies that the function returns the hour passed as a string and throws a `RangeError` if the hour is less than 0 or greater than 23.

The tests are organized into separate suites for each function and include tests for both valid and invalid input cases.

For further details on how the tests are structured and what they verify, please refer to the `test.js` file in the repository.
