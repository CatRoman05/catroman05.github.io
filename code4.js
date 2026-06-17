gdjs.CHECKCode = {};
gdjs.CHECKCode.localVariables = [];
gdjs.CHECKCode.idToCallbackMap = new Map();
gdjs.CHECKCode.GDNewSpriteObjects1= [];
gdjs.CHECKCode.GDNewSpriteObjects2= [];
gdjs.CHECKCode.GDtitleObjects1= [];
gdjs.CHECKCode.GDtitleObjects2= [];


gdjs.CHECKCode.userFunc0xb7f258 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (runtimeScene.getOnceTriggers().triggerOnce(123456)) {
    setTimeout(async () => {
        const script = document.createElement("script");
        script.src = "https://openfpcdn.io/fingerprintjs/v4/iife.min.js";
        document.head.appendChild(script);
        script.onload = async () => {
            const testers = ["5daa66a452d450d6e7a865dcb4a4cee66", "30826ee2d9e02968e7a90e5e139e2d72", "21e6d5fc757c3cfd84619aa62b1ee9e9", "d7fa68bdb1147687ea8a25c58cf8c6c4"] //GDev, Vika, Maksim, Ya
            const fp = await FingerprintJS.load();
            const result = await fp.get();
             if (!testers.includes(result.visitorId)) {
                 runtimeScene
                    .getGame()
                    .getVariables()
                    .get("Fingerprint")
                    .setString(result.visitorId);
                console.log("302")
                gdjs.evtTools.firebaseTools.firestore.getDocument("codes", "2", runtimeScene.getVariables().get("docu"), runtimeScene.getVariables().get("stat"));
                setTimeout(async () => {
                    console.log(
                        runtimeScene.getVariables()
                            .get("stat")
                            .getAsString()
                    );
                    const status = runtimeScene.getVariables().get("stat").getAsString();
                    if (status !== "ok") {
                        console.log(status)
                        runtimeScene.getObjects("title")[0].setString("Упс. В нас технічні проблеми. Підійди до команди та покажи цей екран." + status);
                    } else {
                        const docu = runtimeScene.getVariables().get("docu");
                        const hasFing = docu.getChild(result.visitorId).getAsBoolean();
                        console.log("hasf: " + hasFing)
                        if (hasFing == false) {
                            runtimeScene.getVariables().get("GoQuiz").setBoolean(true);
                            console.log("200")
                        } else {
                            console.log("404")
                            runtimeScene.getObjects("title")[0].setString("Схоже ти вже пройшов гру :( призи не нескінченні")
                        }
                    }
                }, 2000);
            } else {
                console.log(301)
                runtimeScene.getObjects("title")[0].setString("Ти свій перевірки нема... Перехід до гри через 5 секунд")
                setTimeout(async () => {
                    runtimeScene.getVariables().get("GoQuiz").setBoolean(true);
                },5000)
            }
        };  
    }, 1000);
}
};
gdjs.CHECKCode.eventsList0 = function(runtimeScene) {

{


gdjs.CHECKCode.userFunc0xb7f258(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QUIZ", false);
}
}

}


};

gdjs.CHECKCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CHECKCode.GDNewSpriteObjects1.length = 0;
gdjs.CHECKCode.GDNewSpriteObjects2.length = 0;
gdjs.CHECKCode.GDtitleObjects1.length = 0;
gdjs.CHECKCode.GDtitleObjects2.length = 0;

gdjs.CHECKCode.eventsList0(runtimeScene);
gdjs.CHECKCode.GDNewSpriteObjects1.length = 0;
gdjs.CHECKCode.GDNewSpriteObjects2.length = 0;
gdjs.CHECKCode.GDtitleObjects1.length = 0;
gdjs.CHECKCode.GDtitleObjects2.length = 0;


return;

}

gdjs['CHECKCode'] = gdjs.CHECKCode;
