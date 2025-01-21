from dataclasses import dataclass

@dataclass
class Car:
    engine: str
    transmission: str
    interior: str
    exterior: str

class CarConfigurationBuilder:
    def __init__(self):
        self.engine = None
        self.transmission = None
        self.interior = None
        self.exterior = None

    def set_engine(self, engine):
        self.engine = engine
        return self

    def set_transmission(self, transmission):
        self.transmission = transmission
        return self

    def set_interior(self, interior):
        self.interior = interior
        return self

    def set_exterior(self, exterior):
        self.exterior = exterior
        return self

    def build(self):
        # Validate the configuration
        if not self.engine or not self.transmission or not self.interior or not self.exterior:
            raise ValueError("Incomplete car configuration")

        return Car(
            engine=self.engine,
            transmission=self.transmission,
            interior=self.interior,
            exterior=self.exterior,
        )

# Usage
builder = CarConfigurationBuilder()
car = (
    builder.set_engine("V8")
    .set_transmission("Automatic")
    .set_interior("Leather")
    .set_exterior("Red")
    .build()
)

print(car)
# Output: Car(engine='V8', transmission='Automatic', interior='Leather', exterior='Red')