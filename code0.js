gdjs.QuizCode = {};
gdjs.QuizCode.localVariables = [];
gdjs.QuizCode.idToCallbackMap = new Map();
gdjs.QuizCode.GDbg1Objects1= [];
gdjs.QuizCode.GDbg1Objects2= [];
gdjs.QuizCode.GDbg2Objects1= [];
gdjs.QuizCode.GDbg2Objects2= [];
gdjs.QuizCode.GDenemyObjects1= [];
gdjs.QuizCode.GDenemyObjects2= [];
gdjs.QuizCode.GDplayerObjects1= [];
gdjs.QuizCode.GDplayerObjects2= [];
gdjs.QuizCode.GDQuestionObjects1= [];
gdjs.QuizCode.GDQuestionObjects2= [];
gdjs.QuizCode.GDQbgObjects1= [];
gdjs.QuizCode.GDQbgObjects2= [];
gdjs.QuizCode.GDAnswer1Objects1= [];
gdjs.QuizCode.GDAnswer1Objects2= [];
gdjs.QuizCode.GDAbg1Objects1= [];
gdjs.QuizCode.GDAbg1Objects2= [];
gdjs.QuizCode.GDAnswer2Objects1= [];
gdjs.QuizCode.GDAnswer2Objects2= [];
gdjs.QuizCode.GDAbg2Objects1= [];
gdjs.QuizCode.GDAbg2Objects2= [];
gdjs.QuizCode.GDAbg3Objects1= [];
gdjs.QuizCode.GDAbg3Objects2= [];
gdjs.QuizCode.GDAbg4Objects1= [];
gdjs.QuizCode.GDAbg4Objects2= [];
gdjs.QuizCode.GDAnswer3Objects1= [];
gdjs.QuizCode.GDAnswer3Objects2= [];
gdjs.QuizCode.GDAnswer4Objects1= [];
gdjs.QuizCode.GDAnswer4Objects2= [];
gdjs.QuizCode.GDTimeObjects1= [];
gdjs.QuizCode.GDTimeObjects2= [];


gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg1Objects1Objects = Hashtable.newFrom({"Abg1": gdjs.QuizCode.GDAbg1Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg2Objects1Objects = Hashtable.newFrom({"Abg2": gdjs.QuizCode.GDAbg2Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg3Objects1Objects = Hashtable.newFrom({"Abg3": gdjs.QuizCode.GDAbg3Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg4Objects1Objects = Hashtable.newFrom({"Abg4": gdjs.QuizCode.GDAbg4Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg1Objects1Objects = Hashtable.newFrom({"Abg1": gdjs.QuizCode.GDAbg1Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg2Objects1Objects = Hashtable.newFrom({"Abg2": gdjs.QuizCode.GDAbg2Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg3Objects1Objects = Hashtable.newFrom({"Abg3": gdjs.QuizCode.GDAbg3Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg4Objects1Objects = Hashtable.newFrom({"Abg4": gdjs.QuizCode.GDAbg4Objects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.QuizCode.GDenemyObjects1});
gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.QuizCode.GDplayerObjects1});
gdjs.QuizCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.QuizCode.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.QuizCode.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.QuizCode.GDAnswer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer4"), gdjs.QuizCode.GDAnswer4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Qbg"), gdjs.QuizCode.GDQbgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.QuizCode.GDQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.QuizCode.GDTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.QuizCode.GDbg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.QuizCode.GDbg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{for(var i = 0, len = gdjs.QuizCode.GDbg1Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDbg1Objects1[i].setX(gdjs.QuizCode.GDbg1Objects1[i].getX() - (2));
}
}
{for(var i = 0, len = gdjs.QuizCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDbg2Objects1[i].setX(gdjs.QuizCode.GDbg2Objects1[i].getX() - (2));
}
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() + (0.6));
}
}
{for(var i = 0, len = gdjs.QuizCode.GDQbgObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDQbgObjects1[i].getBehavior("Resizable").setWidth((( gdjs.QuizCode.GDQuestionObjects1.length === 0 ) ? 0 :gdjs.QuizCode.GDQuestionObjects1[0].getWidth()));
}
}
{for(var i = 0, len = gdjs.QuizCode.GDQbgObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDQbgObjects1[i].setX((( gdjs.QuizCode.GDQuestionObjects1.length === 0 ) ? 0 :gdjs.QuizCode.GDQuestionObjects1[0].getX()));
}
}
{for(var i = 0, len = gdjs.QuizCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDQuestionObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.QuizCode.GDQuestionObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.QuizCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDQuestionObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDAnswer1Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDAnswer2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDAnswer3Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDAnswer3Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDAnswer4Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDAnswer4Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDTimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(10 - Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "T2A"))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "T2A") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.QuizCode.GDbg1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuizCode.GDbg1Objects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDbg1Objects1[i].getX() <= -1920 ) {
        isConditionTrue_0 = true;
        gdjs.QuizCode.GDbg1Objects1[k] = gdjs.QuizCode.GDbg1Objects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDbg1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.QuizCode.GDbg1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.QuizCode.GDbg2Objects1);
{for(var i = 0, len = gdjs.QuizCode.GDbg1Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDbg1Objects1[i].setX((( gdjs.QuizCode.GDbg2Objects1.length === 0 ) ? 0 :gdjs.QuizCode.GDbg2Objects1[0].getPointX("")) + 1920);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.QuizCode.GDbg2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuizCode.GDbg2Objects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDbg2Objects1[i].getX() <= -1920 ) {
        isConditionTrue_0 = true;
        gdjs.QuizCode.GDbg2Objects1[k] = gdjs.QuizCode.GDbg2Objects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDbg2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.QuizCode.GDbg1Objects1);
/* Reuse gdjs.QuizCode.GDbg2Objects1 */
{for(var i = 0, len = gdjs.QuizCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.QuizCode.GDbg2Objects1[i].setX((( gdjs.QuizCode.GDbg1Objects1.length === 0 ) ? 0 :gdjs.QuizCode.GDbg1Objects1[0].getPointX("")) + 1920);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg1"), gdjs.QuizCode.GDAbg1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg1Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg2"), gdjs.QuizCode.GDAbg2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg2Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg3"), gdjs.QuizCode.GDAbg3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg3Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg4"), gdjs.QuizCode.GDAbg4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg4Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() - (20));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg1"), gdjs.QuizCode.GDAbg1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg1Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() + (30));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg2"), gdjs.QuizCode.GDAbg2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg2Objects1Objects, runtimeScene, false, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() + (30));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg3"), gdjs.QuizCode.GDAbg3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg3Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() + (30));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abg4"), gdjs.QuizCode.GDAbg4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDAbg4Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsNumber() != 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2A");
}
{for(var i = 0, len = gdjs.QuizCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDenemyObjects1[i].setX(gdjs.QuizCode.GDenemyObjects1[i].getX() + (30));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.QuizCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.QuizCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDenemyObjects1Objects, gdjs.QuizCode.mapOfGDgdjs_9546QuizCode_9546GDplayerObjects1Objects, false, runtimeScene, false);
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


};

gdjs.QuizCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QuizCode.GDbg1Objects1.length = 0;
gdjs.QuizCode.GDbg1Objects2.length = 0;
gdjs.QuizCode.GDbg2Objects1.length = 0;
gdjs.QuizCode.GDbg2Objects2.length = 0;
gdjs.QuizCode.GDenemyObjects1.length = 0;
gdjs.QuizCode.GDenemyObjects2.length = 0;
gdjs.QuizCode.GDplayerObjects1.length = 0;
gdjs.QuizCode.GDplayerObjects2.length = 0;
gdjs.QuizCode.GDQuestionObjects1.length = 0;
gdjs.QuizCode.GDQuestionObjects2.length = 0;
gdjs.QuizCode.GDQbgObjects1.length = 0;
gdjs.QuizCode.GDQbgObjects2.length = 0;
gdjs.QuizCode.GDAnswer1Objects1.length = 0;
gdjs.QuizCode.GDAnswer1Objects2.length = 0;
gdjs.QuizCode.GDAbg1Objects1.length = 0;
gdjs.QuizCode.GDAbg1Objects2.length = 0;
gdjs.QuizCode.GDAnswer2Objects1.length = 0;
gdjs.QuizCode.GDAnswer2Objects2.length = 0;
gdjs.QuizCode.GDAbg2Objects1.length = 0;
gdjs.QuizCode.GDAbg2Objects2.length = 0;
gdjs.QuizCode.GDAbg3Objects1.length = 0;
gdjs.QuizCode.GDAbg3Objects2.length = 0;
gdjs.QuizCode.GDAbg4Objects1.length = 0;
gdjs.QuizCode.GDAbg4Objects2.length = 0;
gdjs.QuizCode.GDAnswer3Objects1.length = 0;
gdjs.QuizCode.GDAnswer3Objects2.length = 0;
gdjs.QuizCode.GDAnswer4Objects1.length = 0;
gdjs.QuizCode.GDAnswer4Objects2.length = 0;
gdjs.QuizCode.GDTimeObjects1.length = 0;
gdjs.QuizCode.GDTimeObjects2.length = 0;

gdjs.QuizCode.eventsList0(runtimeScene);
gdjs.QuizCode.GDbg1Objects1.length = 0;
gdjs.QuizCode.GDbg1Objects2.length = 0;
gdjs.QuizCode.GDbg2Objects1.length = 0;
gdjs.QuizCode.GDbg2Objects2.length = 0;
gdjs.QuizCode.GDenemyObjects1.length = 0;
gdjs.QuizCode.GDenemyObjects2.length = 0;
gdjs.QuizCode.GDplayerObjects1.length = 0;
gdjs.QuizCode.GDplayerObjects2.length = 0;
gdjs.QuizCode.GDQuestionObjects1.length = 0;
gdjs.QuizCode.GDQuestionObjects2.length = 0;
gdjs.QuizCode.GDQbgObjects1.length = 0;
gdjs.QuizCode.GDQbgObjects2.length = 0;
gdjs.QuizCode.GDAnswer1Objects1.length = 0;
gdjs.QuizCode.GDAnswer1Objects2.length = 0;
gdjs.QuizCode.GDAbg1Objects1.length = 0;
gdjs.QuizCode.GDAbg1Objects2.length = 0;
gdjs.QuizCode.GDAnswer2Objects1.length = 0;
gdjs.QuizCode.GDAnswer2Objects2.length = 0;
gdjs.QuizCode.GDAbg2Objects1.length = 0;
gdjs.QuizCode.GDAbg2Objects2.length = 0;
gdjs.QuizCode.GDAbg3Objects1.length = 0;
gdjs.QuizCode.GDAbg3Objects2.length = 0;
gdjs.QuizCode.GDAbg4Objects1.length = 0;
gdjs.QuizCode.GDAbg4Objects2.length = 0;
gdjs.QuizCode.GDAnswer3Objects1.length = 0;
gdjs.QuizCode.GDAnswer3Objects2.length = 0;
gdjs.QuizCode.GDAnswer4Objects1.length = 0;
gdjs.QuizCode.GDAnswer4Objects2.length = 0;
gdjs.QuizCode.GDTimeObjects1.length = 0;
gdjs.QuizCode.GDTimeObjects2.length = 0;


return;

}

gdjs['QuizCode'] = gdjs.QuizCode;
