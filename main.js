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
  'darkgrey',
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
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray ',
  'dimgrey',
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
  'grey',
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
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
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
  'slategrey',
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

// close.addEventListener('click', function () {
//   popupWrapper.classList.add('hidden');
// })

namesContent.addEventListener('click', function (e) {
  const li = e.target.closest('li');
  if (li.classList.contains('disabled')) {
    return;
  }
  namesContent.querySelector('.active')?.classList.remove('active');
  li.classList.add('active');
  checkPair()
})

colorsContent.addEventListener('click', function (e) {
  const span = e.target.closest('span');
  if (span.classList.contains('disabled')) {
    return;
  }
  colorsContent.querySelector('.active')?.classList.remove('active');
  span.classList.add('active');
  checkPair()
})

function checkPair() {
  const li = namesContent.querySelector('.active');
  const span = colorsContent.querySelector('.active');
  if (!li || !span) {
    return
  }
  if (li.innerText.toLowerCase() == span.style.backgroundColor) {
    li.classList.add('disabled');
    span.classList.add('disabled');
  }
  li.classList.remove('active');
  span.classList.remove('active');
  checkForFinish()
}

function checkForFinish() {
  if (!colorsContent.querySelector(':not(.disabled)')) {
    popupWrapper.classList.remove('hidden');
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


// function matchColors() {
// }