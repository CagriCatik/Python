from dataclasses import dataclass, field
from typing import Dict

@dataclass
class AppConfig:
    app_name: str
    version: str
    settings: Dict[str, str] = field(default_factory=dict)

# Creating instances
app_config1 = AppConfig(app_name="MyApp", version="1.0")
app_config2 = AppConfig(app_name="AnotherApp", version="2.5", settings={"debug": "True", "logging": "False"})

# Displaying application configurations
print(app_config1)
print(app_config2)
