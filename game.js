/*
@title: connect the dots
@author: pxkka
- add lock to prevent new lines/changes
- add button to reset one line
- win logic
- make a ton of levels for the 5 mins of gameplay
*/

const player = "c";
const playerToggle = "C";

const redEnd = "R";
const orangeEnd = "O";
const yellowEnd = "Y";
const greenEnd = "G";
const blueEnd = "B";
const purpleEnd = "P";

const red = "r";
const orange = "o";
const yellow = "y";
const green = "g";
const blue = "b";
const purple = "p";

const lock = "l";

const dict = {"R": red, "O": orange, "Y": yellow, "G": green, "B": blue, "P": purple,
              "r": red, "o": orange, "y": yellow, "g": green, "b": blue, "p": purple};

setLegend(
  [player, bitmap`
0000000000000000
0000000000000000
00............00
00............00
00............00
00............00
00............00
00............00
00............00
00............00
00............00
00............00
00............00
00............00
0000000000000000
0000000000000000`],
  [playerToggle, bitmap`
1111111111111111
1111111111111111
11............11
11............11
11............11
11............11
11............11
11............11
11............11
11............11
11............11
11............11
11............11
11............11
1111111111111111
1111111111111111`],
  [redEnd, bitmap`
0000000000000000
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0000000000000000`],
  [orangeEnd, bitmap`
0000000000000000
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0999999999999990
0000000000000000`],
  [yellowEnd, bitmap`
0000000000000000
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0666666666666660
0000000000000000`],
  [greenEnd, bitmap`
0000000000000000
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0444444444444440
0000000000000000`],
  [blueEnd, bitmap`
0000000000000000
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0777777777777770
0000000000000000`],
  [purpleEnd, bitmap`
0000000000000000
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0HHHHHHHHHHHHHH0
0000000000000000`],
  [red, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [orange, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`],
  [yellow, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  [green, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`],
  [blue, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [purple, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
  [lock, bitmap`
................
................
......LLLL......
.....LLLLLL.....
....LLL11LLL....
....LL...1LL....
....LL...1LL....
.........1LL....
....LLLLLLLL....
....LLLLLLLL....
....LLL00LLL....
....LLL00LLL....
....LLLLLLLL....
....LLLLLLLL....
................
................`]
);

const levels = [
  map`
c....
.....
.....
.....
.....`,
  map`
B.R.G
c.O.P
.....
.R.G.
.BOP.`,
];

let level = 0;
let toggle = 0;
let startPos = [];
let endPos = [];
let dragSprt = "";

addText("WASD: Movement", {x: 3, y: 5, color: color`0`});
addText("I: Toggle Drag", {x: 3, y: 8, color: color`0`});
addText("K: Reset Level", {x: 3, y: 11, color: color`0`});

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([player]);

setPushables({
  [player]: [blue],
});

onInput("w", () => {
  if (toggle == 0) {
    getFirst(player).y -= 1;
  } else {
    if (getTile(getFirst(playerToggle).x, getFirst(playerToggle).y - 1) == "" || getTile(getFirst(playerToggle).x, getFirst(playerToggle).y - 1)[0]["type"] == dragSprt) {
      const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
      getFirst(playerToggle).y -= 1;
      if (!["R", "O", "Y", "G", "B", "P"].includes(getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[getTile(getFirst(playerToggle).x, getFirst(playerToggle).y).length - 1]["type"])) {
        addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
      }    
    }
  }
});

onInput("a", () => {
  if (toggle == 0) {
    getFirst(player).x -= 1;
  } else {
    if (getTile(getFirst(playerToggle).x - 1, getFirst(playerToggle).y) == "" || getTile(getFirst(playerToggle).x - 1, getFirst(playerToggle).y)[0]["type"] == dragSprt) {
      const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
      getFirst(playerToggle).x -= 1;
      if (!["R", "O", "Y", "G", "B", "P"].includes(getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[getTile(getFirst(playerToggle).x, getFirst(playerToggle).y).length - 1]["type"])) {
        addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
      }    
    }
  }
});

onInput("s", () => {
  if (toggle == 0) {
    getFirst(player).y += 1;
  } else {
    if (getTile(getFirst(playerToggle).x, getFirst(playerToggle).y + 1) == "" || getTile(getFirst(playerToggle).x, getFirst(playerToggle).y + 1)[0]["type"] == dragSprt) {
      const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
      getFirst(playerToggle).y += 1;
      if (!["R", "O", "Y", "G", "B", "P"].includes(getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[getTile(getFirst(playerToggle).x, getFirst(playerToggle).y).length - 1]["type"])) {
        addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
      }    
    }
  }
});

onInput("d", () => {
  if (toggle == 0) {
    getFirst(player).x += 1;
  } else {
    if (getTile(getFirst(playerToggle).x + 1, getFirst(playerToggle).y) == "" || getTile(getFirst(playerToggle).x + 1, getFirst(playerToggle).y)[0]["type"] == dragSprt) {
      const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
      getFirst(playerToggle).x += 1;
      if (!["R", "O", "Y", "G", "B", "P"].includes(getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[getTile(getFirst(playerToggle).x, getFirst(playerToggle).y).length - 1]["type"])) {
        addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
      }
    }
  }
});

onInput("i", () => {
  toggleDrag();
});

onInput("j", () => {
  console.log(getTile(getFirst(player).x, getFirst(player).y)[getTile(getFirst(player).x, getFirst(player).y).length - 2]["type"]);
  if (["R", "O", "Y", "G", "B", "P"].includes(getTile(getFirst(player).x, getFirst(player).y)[getTile(getFirst(player).x, getFirst(player).y).length - 2]["type"])) {
    while (getAll(dict[getTile(getFirst(player).x, getFirst(player).y)[1]["type"]]).length > 0) {
      getFirst(dict[getTile(getFirst(player).x, getFirst(player).y)[1]["type"]]).remove();
    }
    for (var i = 0; i < tilesWith(getTile(getFirst(player).x, getFirst(player).y)[1]["type"]).length - 1; i++) {
      for (var k = 0; k < tilesWith(getTile(getFirst(player).x, getFirst(player).y)[1]["type"])[i]; k++) {
    console.log(tilesWith(getTile(getFirst(player).x, getFirst(player).y)[1]["type"]));
    //cont here
  }
});

onInput("k", () => {
  changeLevel();
});

afterInput(() => {
  if (level == 0 || tilesWith(player, red, orange, yellow, green, blue, purple).length == currentLevel.length) {
    level++;
    changeLevel();
  }
});

function changeLevel() {
  toggle = 0;
  clearText("");
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  } else {
    addText("you win!", { y: 4, color: color`3` });
  }
}

function toggleDrag() {
  if (toggle == 0) {
    try {
      dragSprt = getTile(getFirst(player).x, getFirst(player).y)[1]["type"];
    } catch (error) {}
    console.log(getTile(getFirst(player).x, getFirst(player).y)[getTile(getFirst(player).x, getFirst(player).y).length - 1]["type"]);
    if (getTile(getFirst(player).x, getFirst(player).y)[getTile(getFirst(player).x, getFirst(player).y).length - 1]["type"] != "l" && getTile(getFirst(player).x, getFirst(player).y).length > 1 && ["R", "O", "Y", "G", "B", "P"].includes(getTile(getFirst(player).x, getFirst(player).y)[1]["type"])) {
      toggle = 1;
      getFirst(player).type = playerToggle;
      startPos = [getFirst(playerToggle).x, getFirst(playerToggle).y];
    }
  } else {
    toggle = 0;
    getFirst(playerToggle).type = player;
    endPos = [getFirst(player).x, getFirst(player).y];
    if (startPos == endPos || getTile(startPos[0], startPos[1])[0]["type"] != getTile(endPos[0], endPos[1])[getTile(endPos[0], endPos[1]).length - 1]["type"] || (getTile(endPos[0], endPos[1]).length >= 3 && !["R", "O", "Y", "G", "B", "P"].includes(dragSprt))) {
      while (getAll(dict[dragSprt]).length > 0) {
        getFirst(dict[dragSprt]).remove();
      }
    } else {
      addSprite(startPos[0], startPos[1], lock);
      addSprite(endPos[0], endPos[1], lock);
    }
  }
}
