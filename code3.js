gdjs.WINCode = {};
gdjs.WINCode.localVariables = [];
gdjs.WINCode.idToCallbackMap = new Map();
gdjs.WINCode.GDbgObjects1= [];
gdjs.WINCode.GDbgObjects2= [];
gdjs.WINCode.GDtitleObjects1= [];
gdjs.WINCode.GDtitleObjects2= [];
gdjs.WINCode.GDcodeObjects1= [];
gdjs.WINCode.GDcodeObjects2= [];


gdjs.WINCode.userFunc0xb40038 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (runtimeScene.getOnceTriggers().triggerOnce(12345678)) {
    setTimeout(() => {
            const status = runtimeScene.getVariables().get("Stat").getAsString();
            const fingerprint =
                runtimeScene
                    .getGame()
                    .getVariables()
                    .get("Fingerprint")
                    .getAsString();
            if (status !== "ok") {
                runtimeScene.getObjects("title")[0].setString("Упс. В нас технічні проблеми. Підійди до команди та покажи цей екран " + status);
            } else {
                if (fingerprint) {
                    gdjs.evtTools.firebaseTools.firestore.updateField("codes", "2", fingerprint, true)
            }
                const docu = runtimeScene.getVariables().get("Docu");
                const next = docu.getChild("next").getAsString();
                const code = docu.getChild("code" + next).getAsString();
                if (code == 0) {
                    runtimeScene.getObjects("title")[0].setString("На жаль призи закінчилися :(");
                    return;
                }
                runtimeScene.getObjects("code")[0].setString(code)
                gdjs.evtTools.firebaseTools.firestore.updateField("codes", "1", "next", toString(next) + 1)
            }
    }, 1000);
}
};
gdjs.WINCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(9).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.getDocument("codes", "1", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


{


gdjs.WINCode.userFunc0xb40038(runtimeScene);

}


};

gdjs.WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINCode.GDbgObjects1.length = 0;
gdjs.WINCode.GDbgObjects2.length = 0;
gdjs.WINCode.GDtitleObjects1.length = 0;
gdjs.WINCode.GDtitleObjects2.length = 0;
gdjs.WINCode.GDcodeObjects1.length = 0;
gdjs.WINCode.GDcodeObjects2.length = 0;

gdjs.WINCode.eventsList0(runtimeScene);
gdjs.WINCode.GDbgObjects1.length = 0;
gdjs.WINCode.GDbgObjects2.length = 0;
gdjs.WINCode.GDtitleObjects1.length = 0;
gdjs.WINCode.GDtitleObjects2.length = 0;
gdjs.WINCode.GDcodeObjects1.length = 0;
gdjs.WINCode.GDcodeObjects2.length = 0;


return;

}

gdjs['WINCode'] = gdjs.WINCode;
