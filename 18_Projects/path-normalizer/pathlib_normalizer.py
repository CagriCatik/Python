from pathlib import Path

class PathNormalizer:
    @staticmethod
    def normalize_path(path: str) -> str:
        """
        Normalize a given file path using pathlib to resolve `.` and `..` components.
        
        Parameters:
            path (str): The file path to normalize.
        
        Returns:
            str: The normalized file path.
        """
        if not path:
            raise ValueError("The path cannot be an empty string.")
        
        # Resolve the path using pathlib, which automatically handles '.', '..', and redundant slashes
        normalized_path = str(Path(path).resolve(strict=False))
        
        # For relative paths, ensure the normalization does not prepend the current directory
        if not path.startswith("/"):
            normalized_path = str(Path(normalized_path).relative_to(Path.cwd()))
        
        return normalized_path

# Example usage
if __name__ == "__main__":
    paths = [
        "/foo/bar/../baz",
        "foo/bar/../../baz",
        "/foo/./bar/",
        "foo/bar/./",
        "foo//bar/./baz/",
        "/foo/bar/../../",
        "foo/bar/../../baz",
        "/",  # root path
        "../relative/path",
        "./relative/path",
    ]

    normalizer = PathNormalizer()

    for path in paths:
        try:
            normalized = normalizer.normalize_path(path)
            print(f"Original: {path} => Normalized: {normalized}")
        except ValueError as ve:
            print(f"Error normalizing '{path}': {ve}")
