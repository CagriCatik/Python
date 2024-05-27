# test_calculator.py
import pytest
from calculator import Calculator

class TestCalculator:
    def test_add_integers(self):
        assert Calculator.add(1, 2) == 3

    def test_add_floats(self):
        assert Calculator.add(1.5, 2.5) == 4.0

    def test_add_invalid_input(self):
        assert Calculator.add(1, 'a') == 0

    def test_subtract_integers(self):
        assert Calculator.subtract(5, 3) == 2

    def test_subtract_floats(self):
        assert Calculator.subtract(5.5, 2.5) == 3.0

    def test_subtract_invalid_input(self):
        assert Calculator.subtract(5, 'a') == 0

    def test_multiply_integers(self):
        assert Calculator.multiply(2, 3) == 6

    def test_multiply_floats(self):
        assert Calculator.multiply(2.5, 4.0) == 10.0

    def test_multiply_invalid_input(self):
        assert Calculator.multiply(2, 'a') == 0

    def test_divide_integers(self):
        assert Calculator.divide(6, 3) == 2

    def test_divide_floats(self):
        assert Calculator.divide(7.5, 2.5) == 3.0

    def test_divide_invalid_input(self):
        assert Calculator.divide(6, 'a') == 0

    def test_divide_by_zero(self):
        with pytest.raises(ValueError, match="Cannot divide by zero"):
            Calculator.divide(6, 0)

if __name__ == "__main__":
    pytest.main()
