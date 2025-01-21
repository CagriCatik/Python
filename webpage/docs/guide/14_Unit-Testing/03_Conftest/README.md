# Using `conftest.py` in Pytest

## Overview

This tutorial will focus on the `conftest.py` file in Pytest, which allows for the creation of common functionalities shared between tests. We will provide a detailed and precise example to demonstrate its practical usage.

## Pytest Configuration with `conftest.py`

The `conftest.py` file is a special configuration file in Pytest that allows you to define fixtures, hooks, and other configuration options shared across multiple test files. Pytest automatically detects this file and uses the configurations within it.

### Sample Module

For this example, we will use a sample module with two functions:
1. `reverse_text`: Reverses a string after ensuring the input is of type string.
2. `get_api_data`: Simulates an API call to fetch data.

### Sample Module Code

Create a file named `sample_module.py` with the following content:

```python
# sample_module.py

def reverse_text(text):
    if not isinstance(text, str):
        raise TypeError("Input must be a string")
    return text[::-1]

def get_api_data():
    # Simulate a network call to fetch data
    return "original data"
```

### Creating `conftest.py`

Next, create a file named `conftest.py` in the same directory as your test files. This file will define fixtures to be used across multiple test files.

#### Step-by-Step Implementation

1. **Import Necessary Modules**:

    ```python
    # conftest.py
    import pytest
    import sample_module as sm
    ```

2. **Defining Fixtures**:

    - **Unsorted Numbers Fixture**:
    
      This fixture returns a list of unsorted integers.

      ```python
      @pytest.fixture
      def sample_numbers_unsorted():
          return [-1, 3, 2, 1, 0]
      ```

    - **API Data Disabling Fixture**:
    
      This fixture will monkey-patch the `get_api_data` function to return mock data instead of making a real network call. The `autouse=True` parameter ensures that this fixture is used automatically in all tests.

      ```python
      @pytest.fixture(autouse=True)
      def disable_api_data(monkeypatch):
          def mock_get_api_data():
              return "modified data"
          monkeypatch.setattr(sm, "get_api_data", mock_get_api_data)
      ```

### Writing Tests

Create a test file named `test_sample_module.py` to write tests for the sample module functions using the fixtures defined in `conftest.py`.

#### Step-by-Step Implementation

1. **Importing Necessary Modules**:

    ```python
    # test_sample_module.py
    import sample_module as sm
    ```

2. **Testing API Data Function**:
    
    This test verifies that the `get_api_data` function returns the mocked data.

    ```python
    def test_api_returns_data():
        actual = sm.get_api

_data()
        expected = "modified data"
        assert actual == expected, f"Expected {expected} but got {actual}"
    ```

3. **Testing Reverse Text Function**:
    
    This test checks if the `reverse_text` function correctly reverses a given string. 

    ```python
    def test_reverse_text():
        actual = sm.reverse_text("banana")
        expected = "ananab"
        assert actual == expected, f"Expected {expected} but got {actual}"
    ```

### Running the Tests

To run the tests, navigate to the directory containing your test files and execute the following command:

```bash
pytest
```

### Explanation of Results

When running the tests:
- The `test_api_returns_data` function will use the monkey-patched `get_api_data` and assert that it returns "modified data".
- The `test_reverse_text` function will check if the string "banana" is correctly reversed to "ananab".

### Detailed Breakdown

- **Fixtures**:
  Fixtures are used to provide a fixed baseline for tests, ensuring consistency and reducing redundancy. In `conftest.py`, the `disable_api_data` fixture monkey-patches the `get_api_data` function to return mock data, which avoids the need for actual network calls during testing.

- **Monkey-patching**:
  Monkey-patching involves dynamically modifying a module or class at runtime. This is particularly useful in testing scenarios where you want to replace certain functionalities with mock implementations.

- **Autouse Fixtures**:
  The `autouse=True` parameter in the fixture definition makes the fixture automatically applied to all tests, removing the need to explicitly include it in the test function parameters.

### Advantages of Using `conftest.py`

1. **Centralized Configuration**: 
   Common fixtures and configurations are centralized, reducing redundancy and making it easier to manage shared setups.

2. **Scalability**:
   As the test suite grows, `conftest.py` allows for easy addition of new fixtures and configurations without modifying individual test files.

3. **Maintainability**:
   By defining reusable fixtures, the codebase remains clean and maintainable, with fewer chances of errors due to duplicated setup code.

### Conclusion

Using `conftest.py` in Pytest provides a powerful way to manage common test setups and configurations. By following this tutorial, you can leverage `conftest.py` to create reusable and maintainable test fixtures, ensuring efficient and scalable test management for your projects. This approach is particularly beneficial for large test suites where shared functionalities are crucial for maintaining consistency and reducing redundancy.