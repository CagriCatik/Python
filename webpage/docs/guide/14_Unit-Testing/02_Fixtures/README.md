# Using Fixtures in Pytest for Unit Testing

## Introduction

In this tutorial, we will explore the concept of fixtures in Pytest and their application in unit testing. Properly structured tests are crucial for ensuring the reliability and maintainability of your codebase. We will begin by setting up a sample project, creating test functions, and then delve into how fixtures can streamline the process of writing tests.

## Project Setup

To start, we need to organize our project structure. It's a best practice to have a dedicated `tests` folder where you can place all your test files. For this tutorial, we'll create a sample module named `sample_module.py` and a corresponding test file named `test_sample_module.py`.

### Sample Module

First, create a file named `sample_module.py` with the following content:

```python
def sort_numbers(numbers: list[int]) -> list[int]:
    """Sorts a list of integers."""
    numbers.sort()
    return numbers

def reverse_numbers(numbers: list[int]) -> list[int]:
    """Reverses a list of integers."""
    numbers.reverse()
    return numbers
```

This module contains two functions: `sort_numbers` and `reverse_numbers`. These will be the functions we aim to test.

### Test Module Without Fixtures

Next, create a file named `test_sample_module.py` in a `tests` directory:

```python
import pytest
import sample_module

def test_sort_numbers():
    numbers = [9, 5, -1, -10, 10]
    actual = sample_module.sort_numbers(numbers)
    expected = [-10, -1, 5, 9, 10]
    assert actual == expected

def test_reverse_numbers():
    numbers = [9, 5, -1, -10, 10]
    actual = sample_module.reverse_numbers(numbers)
    expected = [10, -10, -1, 5, 9]
    assert actual == expected
```

These tests are straightforward but repetitive. Both tests use the same initial data setup. In a larger codebase, repeating such setups can lead to redundancy and maintenance difficulties.

## Introduction to Fixtures

Fixtures in Pytest help you to set up some initial conditions for your tests. They can be used to create reusable setups that multiple tests can share. This reduces redundancy and ensures consistency across tests.

### Creating Fixtures

Let's refactor the above tests to use fixtures. Modify `test_sample_module.py` as follows:

```python
import pytest
import sample_module

@pytest.fixture
def sample_numbers_unsorted():
    """Fixture to provide unsorted list of numbers."""
    return [9, 5, -1, -10, 10]

def test_sort_numbers(sample_numbers_unsorted):
    actual = sample_module.sort_numbers(sample_numbers_unsorted.copy())
    expected = [-10, -1, 5, 9, 10]
    assert actual == expected

def test_reverse_numbers(sample_numbers_unsorted):
    actual = sample_module.reverse_numbers(sample_numbers_unsorted.copy())
    expected = [10, -10, -1, 5, 9]
    assert actual == expected
```

### Explanation

1. **Fixture Definition**:
    - `@pytest.fixture`: This decorator defines a fixture. The function `sample_numbers_unsorted` will return the list `[9, 5, -1, -10, 10]`.
    - This fixture can be used in multiple test functions, ensuring they all use the same initial data setup.

2. **Using Fixtures in Tests**:
    - The fixture is included as a parameter in the test functions (`test_sort_numbers` and `test_reverse_numbers`).
    - The `.copy()` method ensures that each test gets its own copy of the list, avoiding side effects between tests.

## Running the Tests

To run the tests, navigate to your project directory in the terminal and execute the following command:

```bash
pytest
```

Pytest will automatically discover all files matching the pattern `test_*.py` and execute the tests within them. You should see output indicating that both tests passed.

## Conclusion

Using fixtures in Pytest significantly enhances the organization and maintainability of your tests. They allow you to define reusable setups, ensuring consistency and reducing redundancy. In this tutorial, we have covered the basics of creating and using fixtures, and applied them to simple test cases. As your projects grow in complexity, fixtures will become an invaluable tool in your testing toolkit.