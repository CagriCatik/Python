def normalize_path(path: str) -> str:
    # Split the path into components based on "/"
    components = path.split("/")
    stack = []

    for component in components:
        if component == "..":
            if stack and stack[-1] != "..":
                # Pop the last valid directory
                stack.pop()
            elif not stack or stack[-1] == "":
                # Keep `..` if stack is empty or it's an absolute path
                stack.append(component)
        elif component == "." or component == "":
            # Ignore current directory or redundant slashes
            continue
        else:
            # Add normal directory names to stack
            stack.append(component)
    
    normalized_path = "/".join(stack)
    
    # Ensure leading '/' for absolute paths
    if path.startswith("/"):
        normalized_path = "/" + normalized_path
    
    return normalized_path or "."

# Example usage
paths = [
    "/foo/bar/../baz",
    "foo/bar/../../baz",
    "/foo/./bar/",
    "foo/bar/./",
    "foo//bar/./baz/",
    "/foo/bar/../../",
    "foo/bar/../../baz",
]

for path in paths:
    print(f"Original: {path} => Normalized: {normalize_path(path)}")
