// Pin definitions for the Ultrasonic Sensor
const int trigPin = 9;
const int echoPin = 10;

// Tank dimensions in cm (adjust these values according to your tank)
const float tankHeight = 100.0;
const float tankWidth = 50.0;
const float tankDepth = 40.0;

// Speed of sound in air (in cm/us)
const float soundSpeed = 0.0343;

// Maximum allowable distance for measurement (in cm)
const float maxDistance = 400.0; // This value should be adjusted based on your sensor's capability

void setup() {
  // Initialize the Serial Monitor at a baud rate of 9600
  Serial.begin(9600);
  
  // Set up the TRIG and ECHO pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  // Provide initial feedback on the Serial Monitor
  Serial.println("Water Level and Volume Monitoring System");
  Serial.println("----------------------------------------");
}

float measureDistance() {
  // Clear the TRIG pin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Send a 10µs pulse to the TRIG pin
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Read the echoPin and measure the time in microseconds
  long duration = pulseIn(echoPin, HIGH, maxDistance / soundSpeed * 2);

  // Check for timeout or invalid readings
  if (duration == 0) {
    Serial.println("Error: No valid echo received. Check sensor or adjust maxDistance.");
    return -1;
  }

  // Calculate distance in cm
  float distance = duration * soundSpeed / 2.0;
  return distance;
}

float calculateVolume(float waterHeight, float width, float depth) {
  // Calculate the volume in cubic centimeters (cm^3)
  float volume = waterHeight * width * depth;
  // Convert volume to liters (1 L = 1000 cm^3)
  return volume / 1000.0;
}

void loop() {
  // Measure the distance from the sensor to the water surface
  float distance = measureDistance();

  // Check if the distance measurement is valid
  if (distance < 0) {
    delay(2000); // Wait before the next measurement
    return;
  }

  // Calculate the water height
  float waterHeight = tankHeight - distance;

  // Ensure waterHeight is non-negative
  if (waterHeight < 0) {
    waterHeight = 0;
  }

  // Calculate the volume of water in the tank
  float waterVolume = calculateVolume(waterHeight, tankWidth, tankDepth);

  // Print the results to the Serial Monitor with better formatting
  Serial.print("Water Height: ");
  Serial.print(waterHeight);
  Serial.println(" cm");

  Serial.print("Water Volume: ");
  Serial.print(waterVolume);
  Serial.println(" liters");

  Serial.println("----------------------------------------");

  // Wait before the next measurement
  delay(2000);
}
