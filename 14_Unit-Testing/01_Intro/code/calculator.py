# calculator.py
class Calculator:
    @staticmethod
    def add(a, b):
        if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
            return 0
        return a + b

    @staticmethod
    def subtract(a, b):
        if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
            return 0
        return a - b

    @staticmethod
    def multiply(a, b):
        if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
            return 0
        return a * b

    @staticmethod
    def divide(a, b):
        if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
            return 0
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b
