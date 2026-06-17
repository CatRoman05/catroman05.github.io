gdjs.LOGICCode = {};
gdjs.LOGICCode.localVariables = [];
gdjs.LOGICCode.idToCallbackMap = new Map();
gdjs.LOGICCode.GDbgObjects1= [];
gdjs.LOGICCode.GDLampObjects1= [];
gdjs.LOGICCode.GDWireObjects1= [];
gdjs.LOGICCode.GDTextObjects1= [];


gdjs.LOGICCode.userFunc0x98daf0 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
if (
	!runtimeScene
	.getVariables()
	.get("Initialized")
	.getAsBoolean()
) {
	runtimeScene
		.getVariables()
		.get("Initialized")
		.setBoolean(true);
    const levels = [
		{lamps:[
        {x:162,y:400,start:false,links:[1,5]},    
        {x:514,y:112,start:false,links:[0,2]},   
        {x:750,y:112,start:false,links:[1,3]},    
        {x:886,y:112,start:false,links:[2,4]},   
        {x:1092,y:112,start:false,links:[3,5]},    
        {x:1216,y:400,start:false,links:[0,4]} 
        ]},
        {lamps:[
        {x:325,y:70,start:false,links:[1,3]},
        {x:750,y:70,start:false,links:[0,2]},
        {x:1092,y:70,start:true,links:[1,5]},
        {x:514,y:561,start:true,links:[0,4]},
        {x:886,y:561,start:false,links:[3,5]},
        {x:1216,y:561,start:false,links:[2,4]}
        ]},
		{lamps:[
        {x:217,y:84,start:false,links:[2,1]},
        {x:750,y:84,start:false,links:[0,3]},
        {x:217,y:600,start:false,links:[0,3]},
        {x:750,y:600,start:false,links:[2,1]},
		]},
		{lamps:[
        {x:217,y:84,start:false,links:[2,1,4]},
        {x:750,y:84,start:false,links:[0,3,4]},
        {x:217,y:600,start:false,links:[0,3,4]},
        {x:750,y:600,start:false,links:[2,1,4]},
        {x:546,y:370,start:true,links:[0,1,2,3]}
		]},
		{lamps:[
		{x:300,y:150,start:false,links:[1]},
		{x:450,y:250,start:false,links:[0,2]},
		{x:600,y:350,start:false,links:[1,3]},
		{x:750,y:450,start:false,links:[2,4,7]},
		{x:900,y:550,start:false,links:[3,5]},
		{x:1050,y:650,start:false,links:[4,6]},
		{x:1200,y:750,start:false,links:[5]},
        {x:866,y:208,start:false,links:[3]},
		]},
		{lamps:[
		{x:168,y:122,start:false,links:[1,5]},      
		{x:391,y:122,start:false,links:[0,2]},   
		{x:550,y:352,start:false,links:[1,4,11]},     
		{x:168,y:601,start:false,links:[5,4]},     
		{x:391,y:601,start:false,links:[3,2]},    
		{x:100,y:352,start:false,links:[3,0]},
		{x:768,y:122,start:false,links:[7,11]},
		{x:991,y:122,start:false,links:[6,8]},
		{x:1150,y:352,start:false,links:[7,10]},
		{x:768,y:601,start:false,links:[11,10]},
		{x:991,y:601,start:false,links:[9,8]},
		{x:700,y:352,start:false,links:[9,6,2]},
		]},
		{lamps:[
		{x:168,y:122,start:false,links:[1,5]},      
		{x:391,y:122,start:false,links:[0,2]},   
		{x:550,y:352,start:false,links:[1,4,6]},     
		{x:168,y:601,start:false,links:[5,4]},     
		{x:391,y:601,start:false,links:[3,2]},    
		{x:100,y:352,start:false,links:[3,0]},
		{x:700,y:352,start:false,links:[7,10,2]},
		{x:840,y:160,start:false,links:[6,8]},
		{x:1060,y:230,start:false,links:[7,9]},
		{x:1060,y:470,start:false,links:[8,10]},
		{x:840,y:540,start:false,links:[9,6]},
		]},
		{lamps:[
        {x:162,y:400,start:false,links:[1]},    
		{x:162,y:400,start:false,links:[0]}, 
        ]}
    ];
	const level = levels[
		runtimeScene
		.getVariables()
		.get("Level")
		.getAsNumber()
	];
	runtimeScene
		.getVariables()
		.get("LevelData")
		.fromJSObject(level);
	const lamps = [];
	for (let i = 0; i < level.lamps.length; i++) {
		const lampData = level.lamps[i];
		const lamp =
			runtimeScene.createObject("Lamp");
		lamp.setPosition(
			lampData.x,
			lampData.y
		);
		lamp.setZOrder(2);
		lamp.getVariables()
			.get("State")
			.setBoolean(lampData.start);
		lamp.getVariables()
			.get("ID")
			.setNumber(i);
		lamp.setAnimationName(
			lampData.start ?
			"ON" :
			"OFF"
		);
		lamps.push(lamp);
	}
	for (let i = 0; i < level.lamps.length; i++) {
		const source = lamps[i];
		for (const targetIndex of level.lamps[i].links) {
			if (targetIndex <= i)
				continue;
			const target = lamps[targetIndex];
			const wire =
				runtimeScene.createObject("Wire");
			const sx =
				source.getX() +
				source.getWidth() / 2;
			const sy =
				source.getY() +
				source.getHeight() / 2;
			const tx =
				target.getX() +
				target.getWidth() / 2;
			const ty =
				target.getY() +
				target.getHeight() / 2;
			const dx = tx - sx;
			const dy = ty - sy;
			const distance =
				Math.sqrt(dx * dx + dy * dy);
			wire.setPosition(
				sx,
				sy
			);
			wire.setScaleX(
				distance / 256
			);
			wire.setAngle(
				Math.atan2(dy, dx) *
				180 /
				Math.PI
			);
			wire.setZOrder(1);
		}
	}
}
// КЛІКИ
const lamps =
	runtimeScene.getObjects("Lamp");
const level =
	runtimeScene
	.getVariables()
	.get("LevelData")
	.toJSObject();
if (gdjs.evtTools.input.popStartedTouch(runtimeScene)) {
	const x =
		gdjs.evtTools.input.getCursorX(runtimeScene);
	const y =
		gdjs.evtTools.input.getCursorY(runtimeScene);
	for (const lamp of lamps) {
		if (
			x >= lamp.getX() &&
			x <= lamp.getX() + lamp.getWidth() &&
			y >= lamp.getY() &&
			y <= lamp.getY() + lamp.getHeight()
		) {
			const id =
				lamp.getVariables()
				.get("ID")
				.getAsNumber();
			const state =
				lamp.getVariables()
				.get("State");
			state.setBoolean(
				!state.getAsBoolean()
			);
			lamp.setAnimationName(
				state.getAsBoolean() ?
				"ON" :
				"OFF"
			);
			for (const targetIndex of level.lamps[id].links) {
				const targetLamp =
					lamps.find(
						l =>
						l.getVariables()
						.get("ID")
						.getAsNumber() ===
						targetIndex
					);
				if (!targetLamp)
					continue;
				const targetState =
					targetLamp
					.getVariables()
					.get("State");
				targetState.setBoolean(
					!targetState.getAsBoolean()
				);
				targetLamp.setAnimationName(
					targetState.getAsBoolean() ?
					"ON" :
					"OFF"
				);
			}
			break;
		}
	}
}
// ПЕРЕМОГА
let win = true;
for (const lamp of lamps) {
	if (
		!lamp
		.getVariables()
		.get("State")
		.getAsBoolean()
	) {
		win = false;
		break;
	}
}
if (
	win &&
	runtimeScene
	.getVariables()
	.get("Initialized")
	.getAsBoolean()
) {
	runtimeScene
		.getVariables()
		.get("Level")
		.add(1);
	console.log(
		runtimeScene.getObjects("Lamp").length
	);
	const lampsToDelete = [...runtimeScene.getObjects("Lamp")];
	for (const lamp of lampsToDelete) {
		lamp.deleteFromScene(runtimeScene);
	}
	const wiresToDelete = [...runtimeScene.getObjects("Wire")];
	for (const wire of wiresToDelete) {
		wire.deleteFromScene(runtimeScene);
	}
	runtimeScene
		.getVariables()
		.get("Initialized")
		.setBoolean(false);
	console.log(
		runtimeScene
		.getVariables()
		.get("Initialized")
		.getAsBoolean()
	);
	const currentLevel =
		runtimeScene
		.getVariables()
		.get("Level")
		.getAsNumber();
	if (currentLevel == 8) {
		runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, "WIN")
	}
	const text =
		runtimeScene.getObjects("Text")[0];
	text.setString(
		(currentLevel + 1) + "/7"
	);
}

        // {lamps:[
        // {x:848,y:260,start:false,links:[1,2]},
        // {x:626,y:530,start:false,links:[0]},
        // {x:980,y:530,start:false,links:[0]}
        // ]},
        // {lamps:[
        // {x:700,y:260,start:true,links:[1,2]},
        // {x:626,y:530,start:false,links:[0]},
        // {x:980,y:530,start:false,links:[0]}
        // ]},
        // {lamps:[
        // {x:348,y:233,start:true,links:[1]},
        // {x:733,y:370,start:false,links:[0,2,3]},
        // {x:1216,y:160,start:false,links:[1,3]},
        // {x:1216,y:500,start:false,links:[1,2]}
        // ]},
        // {lamps:[
        // {x:325,y:70,start:false,links:[1,3]},
        // {x:750,y:70,start:false,links:[0,2]},
        // {x:1092,y:70,start:false,links:[1,5]},
        // {x:514,y:561,start:false,links:[0,4]},
        // {x:886,y:561,start:false,links:[3,5]},
        // {x:1216,y:561,start:false,links:[2,4]}
        // ]},
};
gdjs.LOGICCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lamp"), gdjs.LOGICCode.GDLampObjects1);

const objects = gdjs.LOGICCode.GDLampObjects1;
gdjs.LOGICCode.userFunc0x98daf0(runtimeScene, objects);

}


};

gdjs.LOGICCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOGICCode.GDbgObjects1.length = 0;
gdjs.LOGICCode.GDLampObjects1.length = 0;
gdjs.LOGICCode.GDWireObjects1.length = 0;
gdjs.LOGICCode.GDTextObjects1.length = 0;

gdjs.LOGICCode.eventsList0(runtimeScene);
gdjs.LOGICCode.GDbgObjects1.length = 0;
gdjs.LOGICCode.GDLampObjects1.length = 0;
gdjs.LOGICCode.GDWireObjects1.length = 0;
gdjs.LOGICCode.GDTextObjects1.length = 0;


return;

}

gdjs['LOGICCode'] = gdjs.LOGICCode;
