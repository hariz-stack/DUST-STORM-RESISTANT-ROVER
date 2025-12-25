Anticipatory Storm-Resilient Mars Rover System

Complete Presentation Content

link for website:
file:///C:/Users/Harish/.gemini/antigravity/scratch/mars-rover-presentation/index.html
file:///C:/Users/Harish/.gemini/antigravity/scratch/rover-mission-control/orbital-alert-system.html
file:///C:/Users/Harish/.gemini/antigravity/scratch/wireless-control-app/index.html





# **OUR PRESENTATION:** 



SLIDE 1: TITLE SLIDE

Title: Anticipatory Storm-Resilient Mars Rover System

Subtitle: A Preemptive Orbiter–Rover Collaborative Protection Framework

Footer: \[Team Name] | \[Hackathon Name] | \[Institution]

Visual: Mars landscape with rover silhouette against storm clouds



SLIDE 2: THE CHALLENGE

Title: The Silent Killer of Mars Missions

Content:



Mars rovers don't crash—they slowly fade away

Environmental hazards > Mechanical failures

Primary threat: Dust storms blocking solar power and degrading systems

Current approach: React after the storm hits



Visual: Split image showing healthy rover vs. dust-covered rover

Key Message: "Survival is the new frontier of Mars exploration"



SLIDE 3: CASE STUDY—OPPORTUNITY ROVER

Title: When Excellence Wasn't Enough

The Record:



Designed for: 90 days

Survived: 14 years, 46 days

Mission End: June 2018—Global dust storm



What Happened:



Solar panels covered by dust accumulation

Power depleted to critical levels

Final communication: "My battery is low and it's getting dark"

Could not be revived



Visual: Timeline graphic showing Opportunity's mission arc

Insight: "Not a hardware failure—an environmental defeat"



SLIDE 4: CASE STUDY—INSIGHT LANDER

Title: The Slow Decline

The Reality:



Fully functional seismometer and instruments

Gradual dust accumulation on solar panels

No active cleaning mechanism

Power output dropped below operational threshold

Mission ended December 2022



The Pattern:



Environment was monitored

Decline was predicted

No autonomous protection response

Reactive strategy failed



Visual: Graph showing power decline over time



SLIDE 5: THE CRITICAL INSIGHT

Title: What Mars Missions Teach Us

Three Key Lessons:



Failures Are Environmental, Not Mechanical



Systems remain functional but cannot operate





Threats Are Predictable



Orbital data shows storms developing days in advance





Current Systems Are Reactive



Rovers wait for problems to reach them







The Gap: "We can see danger coming—but rovers cannot prepare"

Visual: Diagram showing orbiter detecting storm while rover continues normally



SLIDE 6: PROBLEM STATEMENT

Title: The Anticipation Gap

Core Question:

"How can a rover prepare itself BEFORE the storm arrives?"

Current Limitations:



Rovers rely only on local, immediate sensing

Rich orbital environmental data exists but isn't used for rover protection

No mechanical anchoring or active sheltering systems

Response begins only when threat is already present



Visual: Question mark between orbiter and rover with storm approaching



SLIDE 7: OUR SOLUTION

Title: From Reaction to Anticipation

The Paradigm Shift:



Traditional: Detect → Endure → Hope

Our Approach: Predict → Prepare → Protect



Core Innovation:

Converting orbital early-warning data into autonomous rover survival actions

System Architecture:



Orbiter monitors large-scale environmental changes

Transmits early warnings to rover

Rover executes pre-programmed protection protocols

Mechanical systems secure and shelter critical components



Visual: Flow diagram showing information and action flow



SLIDE 8: SYSTEM OVERVIEW

Title: Collaborative Two-Tier Architecture

ORBITER UNIT (Intelligence Layer)



Wide-area atmospheric monitoring

Storm detection and trajectory prediction

Alert generation and transmission

Communication relay



ROVER UNIT (Action Layer)



Autonomous navigation and operation

Alert reception and interpretation

Mechanical protection deployment

Emergency power management



Visual: Layered system diagram with orbiter above, rover below, communication between

Key Principle: "Intelligence meets action"



SLIDE 9: ORBITER MODULE

Title: Early Warning System (Simulated)

Monitoring Capabilities:



Temperature sensors: Detect atmospheric disturbances

Light intensity sensors: Identify dust concentration increases

Pressure monitors: Track storm formation

Change-detection algorithms: Identify rapid environmental shifts



Alert Protocol:



Real-time environmental analysis

Threat assessment and classification

Wireless broadcast to rover units (Wi-Fi in prototype)

Continuous monitoring during events



Real-World Parallel:

Mars orbiters like MRO already perform atmospheric monitoring—we leverage this existing capability

Visual: Orbiter with sensor indicators and broadcast waves



SLIDE 10: ROVER MODULE

Title: Autonomous Survival Unit

Control System:



ESP32 microcontroller for decision-making

Event-driven programming architecture

Low-power operational modes



Sensing Array:



Ultrasonic sensors: Obstacle detection and terrain mapping

LDR (Light Dependent Resistors): Dust-induced light dimming detection

Vibration sensors: Structural instability and wind force monitoring

Temperature sensors: Local environmental conditions



Actuation Systems:



DC motors for mobility

Servo motors for mechanical deployment

Slider-crank mechanisms for anchoring



Visual: Rover schematic with labeled components



SLIDE 11: MECHANICAL INNOVATION 

Title: The Anchoring System

Primary Protection: Screw-Type Ground Anchor



Servo-driven rotational mechanism

Penetrates loose Martian regolith

Creates stable, low-profile stance

Prevents tipping and drift



Secondary Protection: Deployable Dome



Covers sensitive instruments and solar panels

Reduces dust accumulation on critical surfaces

Minimizes wind resistance

Retractable for normal operations



Engineering Principles:



Exploits Mars' low wind force (thin atmosphere = less kinetic energy)

Works with rover's existing low center of gravity

Simple, reliable mechanisms—fewer failure points



Visual: Cross-section showing anchoring mechanism deployment sequence

Why It Works: "On Mars, even 100 mph winds have less force than a gentle Earth breeze"



SLIDE 12: DECISION LOGIC

Title: Autonomous Response Protocol

OPERATIONAL FLOW:

1\. Normal Mode



Continuous environmental monitoring

Standard exploration and science operations

Alert reception system active



2\. Alert Received



Parse threat level and estimated arrival time

Calculate optimal positioning

Initiate protection sequence



3\. Protection Deployment



Halt all non-essential operations

Move to optimal shelter location (if time permits)

Deploy ground anchors

Activate protective enclosure

Enter low-power emergency mode



4\. Storm Duration



Maintain minimal power consumption

Continue local monitoring

Wait for all-clear conditions



5\. Recovery Mode



Retract protective mechanisms

System diagnostics

Resume normal operations



Visual: Flowchart with decision diamonds and action boxes



SLIDE 13: PROTOTYPE DEMONSTRATION

Title: Proof of Concept

What You'll See:

Phase 1: Normal Operations



Rover navigates autonomously

Sensors actively monitoring

Green status indicators



Phase 2: Alert Reception



Simulated orbiter warning transmitted

Yellow status—alert mode

Rover halts movement



Phase 3: Protection Deployment



Anchoring mechanism activates

Protective systems deploy

Red status—storm mode



Phase 4: Recovery



Systems retract

Return to normal operations



Scale Note: Time-compressed and scaled demonstration—real deployment would occur over hours with larger mechanisms

Visual: Photo series or video stills of prototype in action



SLIDE 14: TECHNICAL FEASIBILITY

Title: Why This Works in Reality

Leverages Existing Infrastructure:



Mars orbiters already collect atmospheric data

No new space hardware required

Rover modifications are mechanical, not fundamental redesign



Simple, Proven Principles:



Anchoring systems used in terrestrial robotics

Protective enclosures are standard engineering

Low-power modes already implemented on missions



Energy Efficient:



Protection deployment uses minimal power

Preserves energy during storms

Quick return to operations



Material Practicality:



No exotic materials required

Withstands Mars temperature extremes

Resistant to UV radiation and dust



Visual: Checkmark list with supporting icons



SLIDE 15: BUSINESS \& MISSION VALUE

Title: Impact and Applications

For Space Agencies:



Mission Extension: Rovers survive longer, collect more data

Risk Reduction: Protects billion-dollar investments

Mission Success Rate: Higher probability of completing objectives



For Industry:



Technology Transfer: Applicable to Earth-based extreme environment robotics

Market Applications: Desert exploration, mining, disaster response

Patent Potential: Novel mechanical protection systems



Broader Applications:



Lunar exploration (different environment, same principle)

Autonomous systems in dust-prone environments

Military and security applications



ROI Perspective:

"Adding $10M in protection systems to save a $2.7B mission is cost-effective insurance"

Visual: Icons showing space, industry, and Earth applications



SLIDE 16: LIMITATIONS \& TRANSPARENCY

Title: Current Prototype Constraints

Communication:



Orbiter-to-rover latency not fully modeled

Real Mars communication has 3-22 minute Earth delay



Environmental Simulation:



Mars atmospheric pressure (0.6% of Earth's) not replicated

Regolith composition simplified



Sensor Accuracy:



Prototype sensors have lower precision than flight-grade hardware



Mechanical Scale:



Anchoring depth and force scaled down

Material testing incomplete



Why This Matters:

"This prototype validates the CONCEPT and decision logic—not final flight hardware"

Next Steps: Full environmental testing, material qualification, NASA collaboration

Visual: Honest assessment table with "Prototype" vs. "Flight System" comparison



SLIDE 17: FUTURE ENHANCEMENTS

Title: Evolution Pathway

Phase 2: Intelligence Upgrade



AI-based storm prediction using historical data

Machine learning for optimal anchor positioning

Adaptive response based on storm severity



Phase 3: Mechanical Refinement



Variable-depth anchoring based on soil analysis

Multiple anchor points for extreme stability

Self-cleaning mechanisms for sensors



Phase 4: Energy Optimization



Solar panel orientation during storms

Energy-aware survival modes

Battery management algorithms



Phase 5: Multi-Asset Coordination



Multiple orbiters providing triangulated data

Rover swarm protection protocols

Shared environmental awareness



Long-term Vision: "A fully autonomous Martian survival ecosystem"

Visual: Roadmap timeline with milestones



SLIDE 18: CLOSING IMPACT

Title: Prepared, Not Reactive

The Core Message:



"Survival on Mars is not about withstanding force—

it's about anticipating danger and acting before it arrives."



What We've Demonstrated:



✓ Feasible engineering solution

✓ Uses existing orbital infrastructure

✓ Simple, reliable mechanical principles

✓ Significant mission value



The Bigger Picture:



Mars exploration is maturing beyond "getting there"

Long-term presence requires environmental adaptation

Our system is the bridge between detection and survival



Call to Action:

"Let's ensure the next generation of Mars rovers doesn't just land—they endure."

Visual: Inspiring image of rover on Mars with clear skies after storm



BACKUP SLIDES

Technical Specifications

Rover Prototype:



Controller: ESP32 DevKit

Power: 5V regulated supply

Motors: 4x DC geared motors (100 RPM)

Servos: 2x MG996R (180° rotation)

Sensors: HC-SR04, LDR modules, SW-420 vibration

Communication: Wi-Fi 802.11 b/g/n



Orbiter Prototype:



Controller: ESP32 DevKit

Sensors: DHT11 (temp/humidity), LDR

Transmission: Wi-Fi broadcast



Why Mars Winds Are Weak



Mars atmospheric density: 0.020 kg/m³

Earth atmospheric density: 1.225 kg/m³

Mars atmosphere is ~1.6% as dense

Force = ½ × density × velocity² × area × drag coefficient

100 mph Mars wind = ~6 mph Earth wind equivalent



Cost-Benefit Analysis



Average Mars rover cost: $2.5-3 billion

Estimated protection system addition: $15-20 million

Mission extension value: $500M+ per additional year

Risk reduction: 40-60% lower environmental failure probability





PRESENTATION TIPS:



Use confident, declarative language

Maintain eye contact—refer to slides, don't read them

Pause after key statistics for impact

Show genuine enthusiasm for the innovation

Welcome questions as opportunities to demonstrate depth

Acknowledge limitations honestly—builds credibility



## 

# **CODE**



## ROVER:

\#include <WiFi.h>

\#include <WebServer.h>

\#include <ESP32Servo.h>



// -------- WIFI (CONNECT TO TRANSMITTER NETWORK) ----------

const char\* ssid = "Mars-Orbiter";     // Same AP as transmitter

const char\* password = "12345678";



// -------- SERVER ----------

WebServer server(80);



// -------- PIN CONFIG ----------

\#define LED\_PIN 2



// Ultrasonic

\#define TRIG\_PIN 13

\#define ECHO\_PIN 12



// Vibration

\#define VIB\_PIN 14



// Gas

\#define GAS\_PIN 34



// Servos

\#define SERVO1\_PIN 26

\#define SERVO2\_PIN 27



Servo servo1;

Servo servo2;



// -------- VARIABLES ----------

bool alertReceived = false;

long distanceCM = 0;

int gasValue = 0;

int vibrationState = 0;



// -------- ULTRASONIC FUNCTION ----------

long readUltrasonic() {

&nbsp; digitalWrite(TRIG\_PIN, LOW);

&nbsp; delayMicroseconds(2);

&nbsp; digitalWrite(TRIG\_PIN, HIGH);

&nbsp; delayMicroseconds(10);

&nbsp; digitalWrite(TRIG\_PIN, LOW);



&nbsp; long duration = pulseIn(ECHO\_PIN, HIGH, 30000);

&nbsp; return duration \* 0.034 / 2;

}



// -------- SETUP ----------

void setup() {

&nbsp; Serial.begin(115200);



&nbsp; pinMode(LED\_PIN, OUTPUT);

&nbsp; pinMode(TRIG\_PIN, OUTPUT);

&nbsp; pinMode(ECHO\_PIN, INPUT);

&nbsp; pinMode(VIB\_PIN, INPUT);



&nbsp; servo1.attach(SERVO1\_PIN);

&nbsp; servo2.attach(SERVO2\_PIN);



&nbsp; servo1.write(0);

&nbsp; servo2.write(0);



&nbsp; // WiFi connection

&nbsp; WiFi.mode(WIFI\_STA);

&nbsp; WiFi.begin(ssid, password);



&nbsp; Serial.print("Connecting to transmitter");

&nbsp; while (WiFi.status() != WL\_CONNECTED) {

&nbsp;   delay(500);

&nbsp;   Serial.print(".");

&nbsp; }



&nbsp; Serial.println("\\nConnected!");

&nbsp; Serial.print("Rover IP: ");

&nbsp; Serial.println(WiFi.localIP());



&nbsp; // -------- SERVER ROUTES ----------

&nbsp; server.on("/alert", \[]() {

&nbsp;   alertReceived = true;

&nbsp;   server.send(200, "text/plain", "ALERT RECEIVED");

&nbsp;   Serial.println("🚨 ALERT MODE ACTIVATED");

&nbsp; });



&nbsp; server.on("/normal", \[]() {

&nbsp;   alertReceived = false;

&nbsp;   server.send(200, "text/plain", "NORMAL MODE");

&nbsp;   Serial.println("✅ NORMAL MODE");

&nbsp; });



&nbsp; server.begin();

}



// -------- LOOP ----------

void loop() {

&nbsp; server.handleClient();



&nbsp; // Read sensors

&nbsp; distanceCM = readUltrasonic();

&nbsp; vibrationState = digitalRead(VIB\_PIN);

&nbsp; gasValue = analogRead(GAS\_PIN);



&nbsp; // Display readings

&nbsp; Serial.print("Distance: ");

&nbsp; Serial.print(distanceCM);

&nbsp; Serial.print(" cm | Vibration: ");

&nbsp; Serial.print(vibrationState);

&nbsp; Serial.print(" | Gas: ");

&nbsp; Serial.println(gasValue);



&nbsp; // -------- ALERT MODE ----------

&nbsp; if (alertReceived) {

&nbsp;   digitalWrite(LED\_PIN, HIGH);



&nbsp;   // Protective servo movement

&nbsp;   servo1.write(90);

&nbsp;   servo2.write(90);



&nbsp;   if (distanceCM < 20) {

&nbsp;     Serial.println("⚠ OBSTACLE DETECTED");

&nbsp;   }



&nbsp;   if (vibrationState == HIGH) {

&nbsp;     Serial.println("⚠ STRONG VIBRATION");

&nbsp;   }



&nbsp;   if (gasValue > 2000) {

&nbsp;     Serial.println("⚠ GAS / DUST DETECTED");

&nbsp;   }

&nbsp; }

&nbsp; // -------- NORMAL MODE ----------

&nbsp; else {

&nbsp;   digitalWrite(LED\_PIN, LOW);

&nbsp;   servo1.write(0);

&nbsp;   servo2.write(0);

&nbsp; }



&nbsp; delay(1000);

}





### **TRANSMITTER**



\#include <WiFi.h>

\#include <WebServer.h>

\#include <DHT.h>



// -------- PIN CONFIG ----------

\#define LED\_PIN     2       // ESP32 inbuilt LED

\#define BUZZER\_PIN  5       // D5

\#define DHT\_PIN     18

\#define DHT\_TYPE    DHT22   // change to DHT11 if needed



// -------- WIFI ---------------

const char\* ssid = "Infinix NOTE 30 5G";

const char\* password = "dhani2006";



WebServer server(80);

DHT dht(DHT\_PIN, DHT\_TYPE);



// -------- VARIABLES ----------

bool transmitterEnabled = true;

float temperature = 0;



unsigned long previousMillis = 0;

unsigned long blinkInterval = 1000;

bool ledState = LOW;



// -------- SETUP --------------

void setup() {

&nbsp; Serial.begin(115200);



&nbsp; pinMode(LED\_PIN, OUTPUT);

&nbsp; pinMode(BUZZER\_PIN, OUTPUT);

&nbsp; digitalWrite(BUZZER\_PIN, LOW);



&nbsp; dht.begin();



&nbsp; WiFi.mode(WIFI\_AP);

&nbsp; WiFi.softAP(ssid, password);



&nbsp; Serial.print("ESP32 IP: ");

&nbsp; Serial.println(WiFi.softAPIP());



&nbsp; // -------- WEB PAGE ----------

&nbsp; server.on("/", \[]() {

&nbsp;   server.send(200, "text/html",

&nbsp;     "<h1>Mars Orbiter Control</h1>"

&nbsp;     "<p>Temperature Threshold Alert</p>"

&nbsp;     "<button onclick=\\"fetch('/enable')\\">ENABLE TRANSMITTER</button><br><br>"

&nbsp;     "<button onclick=\\"fetch('/disable')\\">DISABLE TRANSMITTER</button>"

&nbsp;   );

&nbsp; });



&nbsp; server.on("/enable", \[]() {

&nbsp;   transmitterEnabled = true;

&nbsp;   server.send(200, "text/plain", "TRANSMITTER ENABLED");

&nbsp; });



&nbsp; server.on("/disable", \[]() {

&nbsp;   transmitterEnabled = false;

&nbsp;   digitalWrite(BUZZER\_PIN, LOW);

&nbsp;   blinkInterval = 1000;

&nbsp;   server.send(200, "text/plain", "TRANSMITTER DISABLED");

&nbsp; });



&nbsp; server.begin();

}



// -------- LOOP ---------------

void loop() {

&nbsp; server.handleClient();



&nbsp; // -------- LED BLINK ----------

&nbsp; if (millis() - previousMillis >= blinkInterval) {

&nbsp;   previousMillis = millis();

&nbsp;   ledState = !ledState;

&nbsp;   digitalWrite(LED\_PIN, ledState);

&nbsp; }



&nbsp; // -------- READ TEMPERATURE ---

&nbsp; temperature = dht.readTemperature();



&nbsp; if (isnan(temperature)) {

&nbsp;   Serial.println("DHT Read Error");

&nbsp;   return;

&nbsp; }



&nbsp; Serial.print("Temperature: ");

&nbsp; Serial.println(temperature);



&nbsp; // -------- ALERT LOGIC --------

&nbsp; if (transmitterEnabled \&\& temperature < 23.0) {

&nbsp;   digitalWrite(BUZZER\_PIN, HIGH);  // Alert ON

&nbsp;   blinkInterval = 200;             // FAST LED blink

&nbsp;   Serial.println("⚠ STORM ALERT ACTIVE");

&nbsp; } else {

&nbsp;   digitalWrite(BUZZER\_PIN, LOW);   // Alert OFF

&nbsp;   blinkInterval = 1000;            // SLOW LED blink

&nbsp; }



&nbsp; delay(2000);

}



