class LoggingManager:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super(LoggingManager, cls).__new__(cls)
            # Initialize logging system, set default configurations, etc.
        return cls._instance

    def log(self, level, message):
        # Implement logging logic here
        print(f"[{level.upper()}] {message}")

# Usage
logging_manager = LoggingManager()
logging_manager.log("info", "This is an informational message.")
logging_manager.log("error", "Something went wrong!")