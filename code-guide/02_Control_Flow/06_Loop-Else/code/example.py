def for_loop_with_else():
    print("For loop without break:")
    for i in range(3):
        print(f"Iteration {i}")
    else:
        print("Success - Loop completed all iterations")

    print("\nFor loop with break:")
    for i in range(3):
        print(f"Iteration {i}")
        if i == 1:
            break
    else:
        print("Success - Loop completed all iterations")


def while_loop_with_else():
    print("\nWhile loop without break:")
    i = 3
    while i > 0:
        print("OK")
        i -= 1
    else:
        print("Success - Loop completed all iterations")

    print("\nWhile loop with break:")
    i = 3
    while i > 0:
        print("OK")
        if i == 2:
            break
        i -= 1
    else:
        print("Success - Loop completed all iterations")


def search_item_in_list():
    print("\nSearching for an item in a list:")
    items = [1, 2, 3, 4, 5]
    search_for = 6

    for item in items:
        if item == search_for:
            print("Item found")
            break
    else:
        print("Item not found")


if __name__ == "__main__":
    for_loop_with_else()
    while_loop_with_else()
    search_item_in_list()
