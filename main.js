const closeBtn = document.querySelector('.close');
const popupWrapper = document.querySelector('.popup__wrapper');
const colorsContent = document.querySelector('.colors__content');
const colorBlocks = colorsContent.querySelectorAll('.color');
const namesContent = document.querySelector('.names__content')
const colorListItems = namesContent.querySelectorAll('.color__name');
const colorNames = [
  'aliceBlue',
  'antiqueWhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray ',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'gray',
  'green',
  'greenyellow',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'whitesmoke',
  'yellow',
  'yellowgreen'
];
const randomColors = get25Colors();
paintBlocks(randomColors);
showColorList(shuffle(randomColors));

let mistakeCount = 0;

closeBtn.addEventListener('click', function () {
  popupWrapper.classList.add('hidden');
})

namesContent.addEventListener('click', function (e) {
  const namesContentList = e.target.closest('li');
  if (namesContentList.classList.contains('disabled')) {
    return;
  }
  namesContent.querySelector('.active')?.classList.remove('active');
  namesContentList.classList.add('active');
  checkPair()
})

colorsContent.addEventListener('click', function (e) {
  const colorsContentList = e.target.closest('span');
  if (colorsContentList.classList.contains('disabled')) {
    return;
  }
  colorsContent.querySelector('.active')?.classList.remove('active');
  colorsContentList.classList.add('active');
  checkPair()
})

function checkPair() {
  const namesContentList = namesContent.querySelector('.active');
  const colorsContentList = colorsContent.querySelector('.active');
  if (!namesContentList || !colorsContentList) {
    return
  }
  if (namesContentList.innerText.toLowerCase() == colorsContentList.style.backgroundColor) {
    namesContentList.classList.add('disabled');
    colorsContentList.classList.add('disabled');
  }
  if (namesContentList !== colorsContentList) {
    mistakeCount++;
    namesContentList.classList.add('wrong');
    setTimeout(() => {
      namesContentList.classList.remove('wrong');
    }, 1000);
    colorsContentList.classList.add('wrong');
    setTimeout(() => {
      colorsContentList.classList.remove('wrong');
    }, 1000);
  }
  namesContentList.classList.remove('active');
  colorsContentList.classList.remove('active');
  checkForFinish()
}

function checkForFinish() {
  if (!colorsContent.querySelector(':not(.disabled)')) {
    popupWrapper.classList.remove('hidden');
    output.value = mistakeCount;
  }
}

function get25Colors() {
  const colors = [];

  while (colors.length < 25) {
    const randomColor = colorNames[rnd(colorNames.length)];
    if (colors.includes(randomColor)) {
      continue
    } else {
      colors.push(randomColor);
    }
  }
  return colors;
}

function rnd(max) {
  return Math.floor(Math.random() * max);
}

function paintBlocks(colors) {
  colors.forEach((color, i) => colorBlocks[i].style.backgroundColor = color);
}

function showColorList(colors) {
  colors.forEach((color, i) => colorListItems[i].firstElementChild.innerText = color);
}

function shuffle(arr) {
  const shuffledArr = [];
  while (arr.length) {
    const i = rnd(arr.length);
    const cutItem = arr.splice(i, 1);
    shuffledArr.push(...cutItem);
  }
  return shuffledArr;
}
