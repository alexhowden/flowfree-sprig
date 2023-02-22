/*
@title: connect the dots
@author: pxkka

shit to do
- make it so you can only drag starting on an endpoint
- make it so you can drop off on an endpoint of same color, and if not, delete the chain
- win logic
- make a shit ton of levels for the 5 mins of gameplay
*/

const player = "c";
const playerToggle = "C";
const red = "r";
const orange = "o";
const yellow = "y";
const green = "g";
const blue = "b";
const purple = "p";

const redEnd = "R";
const orangeEnd = "O";
const yellowEnd = "Y";
const greenEnd = "G";
const blueEnd = "B";
const purpleEnd = "P";

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
0000000000000000`]
);

const levels = [
  map`
c....
.....
.....
.....
.....`,
  map`
c....
.....
..B..
.....
....B`,
];

let level = 0;
let toggle = 0;
let coordList = [];

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
  } else if (getTile(getFirst(playerToggle).x, getFirst(playerToggle).y - 1) == "") {
    const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
    getFirst(playerToggle).y -= 1;
    addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
    appendItem(coordList, (getFirst(playerToggle).x, getFirst(playerToggle).y));
  }
});

onInput("a", () => {
  if (toggle == 0) {
    getFirst(player).x -= 1;
  } else if (getTile(getFirst(playerToggle).x - 1, getFirst(playerToggle).y) == "") {
    const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
    getFirst(playerToggle).x -= 1;
    addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
    appendItem(coordList, (getFirst(playerToggle).x, getFirst(playerToggle).y));
  }
});

onInput("s", () => {
  if (toggle == 0) {
    getFirst(player).y += 1;
  } else if (getTile(getFirst(playerToggle).x, getFirst(playerToggle).y + 1) == "") {
    const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
    getFirst(playerToggle).y += 1;
    addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
    appendItem(coordList, (getFirst(playerToggle).x, getFirst(playerToggle).y));
  }
});

onInput("d", () => {
  if (toggle == 0) {
    getFirst(player).x += 1;
  } else if (getTile(getFirst(playerToggle).x + 1, getFirst(playerToggle).y) == "") {
    const sprt = getTile(getFirst(playerToggle).x, getFirst(playerToggle).y)[1]["type"];
    getFirst(playerToggle).x += 1;
    addSprite(getFirst(playerToggle).x, getFirst(playerToggle).y, dict[sprt]);
    appendItem(coordList, (getFirst(playerToggle).x, getFirst(playerToggle).y));
  }
});

onInput("i", () => {
  toggleDrag();
});

onInput("k", () => {
  changeLevel();
});

afterInput(() => {
  if (level == 0) {
    level++;
    changeLevel();
  } else if (tilesWith(player, red, orange, yellow, green, blue, purple).length == currentLevel.length) {
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
  const sprt = getTile(getFirst(player).x, getFirst(player).y)[1]["type"];
  if (toggle == 0) {
    if (sprt in ["R", "O", "Y", "G", "B", "P"]) {
      toggle = 1;
      getFirst(player).type = playerToggle;
    }
  } else {
    if (getTile(getFirst(playerToggle).x, getFirst(playerToggle).y).length != 1) {
      toggle = 0;
      getFirst(playerToggle).type = player;
    }
    if (sprt in ["r", "o", "y", "g", "b", "p"]) {
      for (var i = 0; i < coordList.length - 1; i++) {
        clearTile(coordList[i]);
      }
      coordList = [];
      
    }
  }
}
