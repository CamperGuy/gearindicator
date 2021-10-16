const express = require('express');
const dgram = require('dgram');

const PORT = 8000;
const HOST = '127.0.0.1';

const app = express();
const server = dgram.createSocket('udp4');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

server.on('listening', () => {
	console.log('server listening');
});

const data = {};
server.on('message', (message, remote) => {
	let jump = 0;
	data.isRaceOn = message.readInt32LE(jump);
	jump += 4;
	data.timestampMS = message.readUInt32LE(jump); //Getting wrong data
	jump += 4;
	data.engineMaxRpm = message.readFloatLE(jump);
	jump += 4;
	data.engineIdleRpm = message.readFloatLE(jump);
	jump += 4;
	data.currentEngineRpm = message.readFloatLE(jump);
	jump += 4;

	data.accelerationX = message.readFloatLE(jump); //In the car's local space; X = right, Y = up, Z = forward
	jump += 4;
	data.accelerationY = message.readFloatLE(jump);
	jump += 4;
	data.accelerationZ = message.readFloatLE(jump);
	jump += 4;

	data.velocityX = message.readFloatLE(jump); //In the car's local space; X = right, Y = up, Z = forward
	jump += 4;
	data.velocityY = message.readFloatLE(jump);
	jump += 4;
	data.velocityZ = message.readFloatLE(jump);
	jump += 4;

	data.angularVelocityX = message.readFloatLE(jump); //In the car's local space; X = pitch, Y = yaw, Z = roll
	jump += 4;
	data.angularVelocityY = message.readFloatLE(jump);
	jump += 4;
	data.angularVelocityZ = message.readFloatLE(jump);
	jump += 4;

	data.yaw = message.readFloatLE(jump);
	jump += 4;
	data.pitch = message.readFloatLE(jump);
	jump += 4;
	data.roll = message.readFloatLE(jump);
	jump += 4;

	data.normalizedSuspensionTravelFrontLeft = message.readFloatLE(jump); // Suspension travel normalized: 0.0f = max stretch; 1.0 = max compression
	jump += 4;
	data.normalizedSuspensionTravelFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.normalizedSuspensionTravelRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.normalizedSuspensionTravelRearRight = message.readFloatLE(jump);
	jump += 4;

	data.tireSlipRatioFrontLeft = message.readFloatLE(jump); // Tire normalized slip ratio, = 0 means 100% grip and |ratio| > 1.0 means loss of grip.
	jump += 4;
	data.tireSlipRatioFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.tireSlipRatioRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.tireSlipRatioRearRight = message.readFloatLE(jump);
	jump += 4;

	data.wheelRotationSpeedFrontLeft = message.readFloatLE(jump); // Wheel rotation speed radians/sec.
	jump += 4;
	data.wheelRotationSpeedFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.wheelRotationSpeedRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.wheelRotationSpeedRearRight = message.readFloatLE(jump);
	jump += 4;

	data.wheelOnRumbleStripFrontLeft = message.readFloatLE(jump); // = 1 when wheel is on rumble strip, = 0 when off.
	jump += 4;
	data.wheelOnRumbleStripFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.wheelOnRumbleStripRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.wheelOnRumbleStripRearRight = message.readFloatLE(jump);
	jump += 4;

	data.wheelInPuddleDepthFrontLeft = message.readFloatLE(jump); // = from 0 to 1, where 1 is the deepest puddle
	jump += 4;
	data.wheelInPuddleDepthFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.wheelInPuddleDepthRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.wheelInPuddleDepthRearRight = message.readFloatLE(jump);
	jump += 4;

	data.surfaceRumbleFrontLeft = message.readFloatLE(jump); // Non-dimensional surface rumble values passed to controller force feedback
	jump += 4;
	data.surfaceRumbleFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.surfaceRumbleRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.surfaceRumbleRearRight = message.readFloatLE(jump);
	jump += 4;

	data.tireSlipAngleFrontLeft = message.readFloatLE(jump); // Tire normalized slip angle, = 0 means 100% grip and |angle| > 1.0 means loss of grip.
	jump += 4;
	data.tireSlipAngleFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.tireSlipAngleRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.tireSlipAngleRearRight = message.readFloatLE(jump);
	jump += 4;

	data.tireCombinedSlipFrontLeft = message.readFloatLE(jump); // Tire normalized combined slip, = 0 means 100% grip and |slip| > 1.0 means loss of grip.
	jump += 4;
	data.tireCombinedSlipFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.tireCombinedSlipRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.tireCombinedSlipRearRight = message.readFloatLE(jump);
	jump += 4;

	data.suspensionTravelMetersFrontLeft = message.readFloatLE(jump); // Actual suspension travel in meters
	jump += 4;
	data.suspensionTravelMetersFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.suspensionTravelMetersRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.suspensionTravelMetersRearRight = message.readFloatLE(jump);
	jump += 4;

	data.carOrdinal = message.readInt32LE(jump); //Unique ID of the car make/model
	jump += 4;
	data.carClass = message.readInt32LE(jump); //Between 0 (D -- worst cars) and 7 (X class -- best cars) inclusive
	jump += 4;
	data.carPerformanceIndex = message.readInt32LE(jump); //Between 100 (slowest car) and 999 (fastest car) inclusive
	jump += 4;
	data.drivetrainType = message.readInt32LE(jump); //Corresponds to EDrivetrainType; 0 = FWD, 1 = RWD, 2 = AWD
	jump += 4;
	data.numCylinders = message.readInt32LE(jump); //Number of cylinders in the engine
	jump += 4;

	//Position (meters)
	data.positionX = message.readFloatLE(jump);
	jump += 4;
	data.positionY = message.readFloatLE(jump);
	jump += 4;
	data.positionZ = message.readFloatLE(jump);
	jump += 4;

	data.speed = message.readFloatLE(jump); // meters per second
	jump += 4;
	data.power = message.readFloatLE(jump); // watts
	jump += 4;
	data.torque = message.readFloatLE(jump); // newton meter
	jump += 4;

	data.tireTempFrontLeft = message.readFloatLE(jump);
	jump += 4;
	data.tireTempFrontRight = message.readFloatLE(jump);
	jump += 4;
	data.tireTempRearLeft = message.readFloatLE(jump);
	jump += 4;
	data.tireTempRearRight = message.readFloatLE(jump);
	jump += 4;

	data.boost = message.readFloatLE(jump);
	jump += 4;
	data.fuel = message.readFloatLE(jump);
	jump += 4;
	data.distanceTraveled = message.readFloatLE(jump);
	jump += 4;
	data.bestLap = message.readFloatLE(jump); // seconds
	jump += 4;
	data.lastLap = message.readFloatLE(jump); // seconds
	jump += 4;
	data.currentLap = message.readFloatLE(jump); // seconds
	jump += 4;
	data.currentRaceTime = message.readFloatLE(jump); // seconds
	jump += 4;

	data.lapNumber = message.readUInt16LE(jump);
	jump += 2;
	data.racePosition = message.readUInt8(jump);
	jump += 1;

	data.accel = message.readUInt8(jump); // 0 - 255
	jump += 1;
	data.brake = message.readUInt8(jump); // 0 - 255
	jump += 1;
	data.clutch = message.readUInt8(jump);
	jump += 1;
	data.handBrake = message.readUInt8(jump);
	jump += 1;
	data.gear = message.readUInt8(jump);
	jump += 1;
	data.steer = message.readUInt8(jump);
	jump += 1;

	data.normalizedDrivingLine = message.readUInt8(jump);
	jump += 1;
	data.normalizedAIBrakeDifference = message.readUInt8(jump);
	jump += 1;

	console.log(data);
});

server.bind(PORT, HOST);
app.get('/', (req, res) => {
	return res.send();
});

app.get('/data', (req, res) => {
	res.send(data);
});

app.listen(PORT, () => {
	console.log('server is on');
});
