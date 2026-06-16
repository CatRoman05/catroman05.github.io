gdjs.QUIZCode = {};
gdjs.QUIZCode.localVariables = [];
gdjs.QUIZCode.idToCallbackMap = new Map();
gdjs.QUIZCode.GDbg1Objects1= [];
gdjs.QUIZCode.GDbg1Objects2= [];
gdjs.QUIZCode.GDbg2Objects1= [];
gdjs.QUIZCode.GDbg2Objects2= [];
gdjs.QUIZCode.GDenemyObjects1= [];
gdjs.QUIZCode.GDenemyObjects2= [];
gdjs.QUIZCode.GDplayerObjects1= [];
gdjs.QUIZCode.GDplayerObjects2= [];
gdjs.QUIZCode.GDQuestionObjects1= [];
gdjs.QUIZCode.GDQuestionObjects2= [];
gdjs.QUIZCode.GDQbgObjects1= [];
gdjs.QUIZCode.GDQbgObjects2= [];
gdjs.QUIZCode.GDAnswer1Objects1= [];
gdjs.QUIZCode.GDAnswer1Objects2= [];
gdjs.QUIZCode.GDAbg1Objects1= [];
gdjs.QUIZCode.GDAbg1Objects2= [];
gdjs.QUIZCode.GDAnswer2Objects1= [];
gdjs.QUIZCode.GDAnswer2Objects2= [];
gdjs.QUIZCode.GDAbg2Objects1= [];
gdjs.QUIZCode.GDAbg2Objects2= [];
gdjs.QUIZCode.GDAbg3Objects1= [];
gdjs.QUIZCode.GDAbg3Objects2= [];
gdjs.QUIZCode.GDAbg4Objects1= [];
gdjs.QUIZCode.GDAbg4Objects2= [];
gdjs.QUIZCode.GDAnswer3Objects1= [];
gdjs.QUIZCode.GDAnswer3Objects2= [];
gdjs.QUIZCode.GDAnswer4Objects1= [];
gdjs.QUIZCode.GDAnswer4Objects2= [];
gdjs.QUIZCode.GDTimeObjects1= [];
gdjs.QUIZCode.GDTimeObjects2= [];


gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg1Objects1Objects = Hashtable.newFrom({"Abg1": gdjs.QUIZCode.GDAbg1Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg1Objects1Objects = Hashtable.newFrom({"Abg1": gdjs.QUIZCode.GDAbg1Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg2Objects1Objects = Hashtable.newFrom({"Abg2": gdjs.QUIZCode.GDAbg2Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg2Objects1Objects = Hashtable.newFrom({"Abg2": gdjs.QUIZCode.GDAbg2Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg3Objects1Objects = Hashtable.newFrom({"Abg3": gdjs.QUIZCode.GDAbg3Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg3Objects1Objects = Hashtable.newFrom({"Abg3": gdjs.QUIZCode.GDAbg3Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg4Objects1Objects = Hashtable.newFrom({"Abg4": gdjs.QUIZCode.GDAbg4Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg4Objects1Objects = Hashtable.newFrom({"Abg4": gdjs.QUIZCode.GDAbg4Objects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.QUIZCode.GDenemyObjects1});
gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.QUIZCode.GDplayerObjects1});
gdjs.QUIZCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.QUIZCode.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.QUIZCode.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.QUIZCode.GDAnswer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer4"), gdjs.QUIZCode.GDAnswer4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Qbg"), gdjs.QUIZCode.GDQbgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.QUIZCode.GDQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.QUIZCode.GDTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.QUIZCode.GDbg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.QUIZCode.GDbg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{for(var i = 0, len = gdjs.QUIZCode.GDbg1Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDbg1Objects1[i].setX(gdjs.QUIZCode.GDbg1Objects1[i].getX() - (2));
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDbg2Objects1[i].setX(gdjs.QUIZCode.GDbg2Objects1[i].getX() - (2));
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() + (0.45));
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDQbgObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDQbgObjects1[i].getBehavior("Resizable").setWidth((( gdjs.QUIZCode.GDQuestionObjects1.length === 0 ) ? 0 :gdjs.QUIZCode.GDQuestionObjects1[0].getWidth()));
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDQbgObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDQbgObjects1[i].setX((( gdjs.QUIZCode.GDQuestionObjects1.length === 0 ) ? 0 :gdjs.QUIZCode.GDQuestionObjects1[0].getX()));
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDQuestionObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.QUIZCode.GDQuestionObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDQuestionObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDAnswer1Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDAnswer2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDAnswer3Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDAnswer3Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDAnswer4Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDAnswer4Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QUIZCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDTimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(15 - Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "T2A"))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "T2A") >= 15;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.QUIZCode.GDbg1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QUIZCode.GDbg1Objects1.length;i<l;++i) {
    if ( gdjs.QUIZCode.GDbg1Objects1[i].getX() <= -1920 ) {
        isConditionTrue_0 = true;
        gdjs.QUIZCode.GDbg1Objects1[k] = gdjs.QUIZCode.GDbg1Objects1[i];
        ++k;
    }
}
gdjs.QUIZCode.GDbg1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.QUIZCode.GDbg1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.QUIZCode.GDbg2Objects1);
{for(var i = 0, len = gdjs.QUIZCode.GDbg1Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDbg1Objects1[i].setX((( gdjs.QUIZCode.GDbg2Objects1.length === 0 ) ? 0 :gdjs.QUIZCode.GDbg2Objects1[0].getPointX("")) + 1920);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.QUIZCode.GDbg2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QUIZCode.GDbg2Objects1.length;i<l;++i) {
    if ( gdjs.QUIZCode.GDbg2Objects1[i].getX() <= -1920 ) {
        isConditionTrue_0 = true;
        gdjs.QUIZCode.GDbg2Objects1[k] = gdjs.QUIZCode.GDbg2Objects1[i];
        ++k;
    }
}
gdjs.QUIZCode.GDbg2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.QUIZCode.GDbg1Objects1);
/* Reuse gdjs.QUIZCode.GDbg2Objects1 */
{for(var i = 0, len = gdjs.QUIZCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDbg2Objects1[i].setX((( gdjs.QUIZCode.GDbg1Objects1.length === 0 ) ? 0 :gdjs.QUIZCode.GDbg1Objects1[0].getPointX("")) + 1920);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg1"), gdjs.QUIZCode.GDAbg1Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg1Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg1"), gdjs.QUIZCode.GDAbg1Objects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg1Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() + (30));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg2"), gdjs.QUIZCode.GDAbg2Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg2Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg2"), gdjs.QUIZCode.GDAbg2Objects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg2Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() + (30));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg3"), gdjs.QUIZCode.GDAbg3Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg3Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg3"), gdjs.QUIZCode.GDAbg3Objects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg3Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() + (30));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg4"), gdjs.QUIZCode.GDAbg4Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg4Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg4"), gdjs.QUIZCode.GDAbg4Objects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDAbg4Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QUIZCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QUIZCode.GDenemyObjects1[i].setX(gdjs.QUIZCode.GDenemyObjects1[i].getX() + (30));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QUIZCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.QUIZCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDenemyObjects1Objects, gdjs.QUIZCode.mapOfGDgdjs_9546QUIZCode_9546GDplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAMEOVER", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 5);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAMEOVER", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 15);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LOGIC", false);
}
}

}

}

};

gdjs.QUIZCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QUIZCode.GDbg1Objects1.length = 0;
gdjs.QUIZCode.GDbg1Objects2.length = 0;
gdjs.QUIZCode.GDbg2Objects1.length = 0;
gdjs.QUIZCode.GDbg2Objects2.length = 0;
gdjs.QUIZCode.GDenemyObjects1.length = 0;
gdjs.QUIZCode.GDenemyObjects2.length = 0;
gdjs.QUIZCode.GDplayerObjects1.length = 0;
gdjs.QUIZCode.GDplayerObjects2.length = 0;
gdjs.QUIZCode.GDQuestionObjects1.length = 0;
gdjs.QUIZCode.GDQuestionObjects2.length = 0;
gdjs.QUIZCode.GDQbgObjects1.length = 0;
gdjs.QUIZCode.GDQbgObjects2.length = 0;
gdjs.QUIZCode.GDAnswer1Objects1.length = 0;
gdjs.QUIZCode.GDAnswer1Objects2.length = 0;
gdjs.QUIZCode.GDAbg1Objects1.length = 0;
gdjs.QUIZCode.GDAbg1Objects2.length = 0;
gdjs.QUIZCode.GDAnswer2Objects1.length = 0;
gdjs.QUIZCode.GDAnswer2Objects2.length = 0;
gdjs.QUIZCode.GDAbg2Objects1.length = 0;
gdjs.QUIZCode.GDAbg2Objects2.length = 0;
gdjs.QUIZCode.GDAbg3Objects1.length = 0;
gdjs.QUIZCode.GDAbg3Objects2.length = 0;
gdjs.QUIZCode.GDAbg4Objects1.length = 0;
gdjs.QUIZCode.GDAbg4Objects2.length = 0;
gdjs.QUIZCode.GDAnswer3Objects1.length = 0;
gdjs.QUIZCode.GDAnswer3Objects2.length = 0;
gdjs.QUIZCode.GDAnswer4Objects1.length = 0;
gdjs.QUIZCode.GDAnswer4Objects2.length = 0;
gdjs.QUIZCode.GDTimeObjects1.length = 0;
gdjs.QUIZCode.GDTimeObjects2.length = 0;

gdjs.QUIZCode.eventsList0(runtimeScene);
gdjs.QUIZCode.GDbg1Objects1.length = 0;
gdjs.QUIZCode.GDbg1Objects2.length = 0;
gdjs.QUIZCode.GDbg2Objects1.length = 0;
gdjs.QUIZCode.GDbg2Objects2.length = 0;
gdjs.QUIZCode.GDenemyObjects1.length = 0;
gdjs.QUIZCode.GDenemyObjects2.length = 0;
gdjs.QUIZCode.GDplayerObjects1.length = 0;
gdjs.QUIZCode.GDplayerObjects2.length = 0;
gdjs.QUIZCode.GDQuestionObjects1.length = 0;
gdjs.QUIZCode.GDQuestionObjects2.length = 0;
gdjs.QUIZCode.GDQbgObjects1.length = 0;
gdjs.QUIZCode.GDQbgObjects2.length = 0;
gdjs.QUIZCode.GDAnswer1Objects1.length = 0;
gdjs.QUIZCode.GDAnswer1Objects2.length = 0;
gdjs.QUIZCode.GDAbg1Objects1.length = 0;
gdjs.QUIZCode.GDAbg1Objects2.length = 0;
gdjs.QUIZCode.GDAnswer2Objects1.length = 0;
gdjs.QUIZCode.GDAnswer2Objects2.length = 0;
gdjs.QUIZCode.GDAbg2Objects1.length = 0;
gdjs.QUIZCode.GDAbg2Objects2.length = 0;
gdjs.QUIZCode.GDAbg3Objects1.length = 0;
gdjs.QUIZCode.GDAbg3Objects2.length = 0;
gdjs.QUIZCode.GDAbg4Objects1.length = 0;
gdjs.QUIZCode.GDAbg4Objects2.length = 0;
gdjs.QUIZCode.GDAnswer3Objects1.length = 0;
gdjs.QUIZCode.GDAnswer3Objects2.length = 0;
gdjs.QUIZCode.GDAnswer4Objects1.length = 0;
gdjs.QUIZCode.GDAnswer4Objects2.length = 0;
gdjs.QUIZCode.GDTimeObjects1.length = 0;
gdjs.QUIZCode.GDTimeObjects2.length = 0;


return;

}

gdjs['QUIZCode'] = gdjs.QUIZCode;
