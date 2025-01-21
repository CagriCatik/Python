class Recipe:
    def __init__(self, ingredients):
        self.ingredients = ingredients
    
    def __or__(self, other):
        combined_ingredients = self.ingredients + other.ingredients
        return Recipe(combined_ingredients)

# Example usage:
recipe1 = Recipe(["flour", "sugar", "eggs"])
recipe2 = Recipe(["milk", "butter", "vanilla"])
combined_recipe = recipe1 | recipe2

print(combined_recipe.ingredients)  # Output: ['flour', 'sugar', 'eggs', 'milk', 'butter', 'vanilla']
