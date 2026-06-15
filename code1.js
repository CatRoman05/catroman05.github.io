gdjs.GAMEOVERCode = {};
gdjs.GAMEOVERCode.localVariables = [];
gdjs.GAMEOVERCode.idToCallbackMap = new Map();
gdjs.GAMEOVERCode.GDbgObjects1= [];
gdjs.GAMEOVERCode.GDbgObjects2= [];
gdjs.GAMEOVERCode.GDTextObjects1= [];
gdjs.GAMEOVERCode.GDTextObjects2= [];
gdjs.GAMEOVERCode.GDButtonObjects1= [];
gdjs.GAMEOVERCode.GDButtonObjects2= [];


gdjs.GAMEOVERCode.mapOfGDgdjs_9546GAMEOVERCode_9546GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GAMEOVERCode.GDButtonObjects1});
gdjs.GAMEOVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GAMEOVERCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GAMEOVERCode.mapOfGDgdjs_9546GAMEOVERCode_9546GDButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Quiz", false);
}
}

}


};

gdjs.GAMEOVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAMEOVERCode.GDbgObjects1.length = 0;
gdjs.GAMEOVERCode.GDbgObjects2.length = 0;
gdjs.GAMEOVERCode.GDTextObjects1.length = 0;
gdjs.GAMEOVERCode.GDTextObjects2.length = 0;
gdjs.GAMEOVERCode.GDButtonObjects1.length = 0;
gdjs.GAMEOVERCode.GDButtonObjects2.length = 0;

gdjs.GAMEOVERCode.eventsList0(runtimeScene);
gdjs.GAMEOVERCode.GDbgObjects1.length = 0;
gdjs.GAMEOVERCode.GDbgObjects2.length = 0;
gdjs.GAMEOVERCode.GDTextObjects1.length = 0;
gdjs.GAMEOVERCode.GDTextObjects2.length = 0;
gdjs.GAMEOVERCode.GDButtonObjects1.length = 0;
gdjs.GAMEOVERCode.GDButtonObjects2.length = 0;


return;

}

gdjs['GAMEOVERCode'] = gdjs.GAMEOVERCode;
