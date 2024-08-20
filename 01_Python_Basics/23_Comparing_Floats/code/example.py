import math

def compare_floats(a, b, rel_tol=1e-09, abs_tol=0.0):
    """
    Compare two floating-point numbers using relative and absolute tolerance.

    Parameters:
    a (float): First floating-point number.
    b (float): Second floating-point number.
    rel_tol (float): The relative tolerance – it is the maximum allowed difference between a and b, 
                     relative to the larger absolute value of a or b. Default is 1e-09.
    abs_tol (float): The minimum absolute tolerance level – useful for comparisons near zero. Default is 0.0.

    Returns:
    bool: True if the values are considered close, False otherwise.
    """
    return math.isclose(a, b, rel_tol=rel_tol, abs_tol=abs_tol)

def demonstrate_float_comparisons():
    """
    Demonstrate the use of floating-point comparisons using math.isclose.
    """

    # Example 1: Basic comparison with relative tolerance
    print("Example 1: Basic comparison with relative tolerance")
    a = 0.999
    b = 1.0
    result = compare_floats(a, b, rel_tol=0.01)
    print(f"Are {a} and {b} close? {result}\n")

    # Example 2: Comparison near zero with absolute tolerance
    print("Example 2: Comparison near zero with absolute tolerance")
    a = 0.00001
    b = 0.00002
    result = compare_floats(a, b, abs_tol=0.0001)
    print(f"Are {a} and {b} close? {result}\n")

    # Example 3: Combining relative and absolute tolerance
    print("Example 3: Combining relative and absolute tolerance")
    a = 0.00001
    b = 0.00002
    result = compare_floats(a, b, rel_tol=0.01, abs_tol=0.0001)
    print(f"Are {a} and {b} close? {result}\n")

    # Example 4: Comparing 0.1 + 0.2 with 0.3
    print("Example 4: Comparing 0.1 + 0.2 with 0.3")
    sum_result = 0.1 + 0.2
    is_equal = compare_floats(sum_result, 0.3, rel_tol=0.001)
    print(f"Is 0.1 + 0.2 close to 0.3? {is_equal}\n")

def main():
    """
    Main function to execute the float comparison demonstrations.
    """
    demonstrate_float_comparisons()

if __name__ == "__main__":
    main()

