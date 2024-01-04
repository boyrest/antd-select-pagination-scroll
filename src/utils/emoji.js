import { OSS_PREFIX } from './consts';
import filterHtml from './filterHtml';

const PRE_PATH = `${OSS_PREFIX}/frontend/touch/emoji/`;

export function getEmojiList() {
  return [
    `${PRE_PATH}face1f600.png`,
    `${PRE_PATH}eyes1f601.png`,
    `${PRE_PATH}joy1f602.png`,
    `${PRE_PATH}laughing1f923.png`,
    `${PRE_PATH}mouth1f603.png`,
    `${PRE_PATH}eyes1f604.png`,
    `${PRE_PATH}sweat1f605.png`,
    `${PRE_PATH}eyes1f606.png`,
    `${PRE_PATH}face1f609.png`,
    `${PRE_PATH}eyes1f60a.png`,
    `${PRE_PATH}food1f60b.png`,
    `${PRE_PATH}sunglasses1f60e.png`,
    `${PRE_PATH}eyes1f60d.png`,
    `${PRE_PATH}kiss1f618.png`,
    `${PRE_PATH}face1f617.png`,
    `${PRE_PATH}eyes1f619.png`,
    `${PRE_PATH}face1f642.png`,
    `${PRE_PATH}face1f917.png`,
    `${PRE_PATH}face1f914.png`,
    `${PRE_PATH}face1f610.png`,
    `${PRE_PATH}face1f611.png`,
    `${PRE_PATH}mouth1f636.png`,
    `${PRE_PATH}eyes1f644.png`,
    `${PRE_PATH}face1f60f.png`,
    `${PRE_PATH}face1f623.png`,
    `${PRE_PATH}face1f625.png`,
    `${PRE_PATH}mouth1f62e.png`,
    `${PRE_PATH}face1f910.png`,
    `${PRE_PATH}face1f62f.png`,
    `${PRE_PATH}face1f62a.png`,
    `${PRE_PATH}face1f62b.png`,
    `${PRE_PATH}face1f634.png`,
    `${PRE_PATH}face1f60c.png`,
    `${PRE_PATH}tongue1f61b.png`,
    `${PRE_PATH}eye1f61c.png`,
    `${PRE_PATH}eyes1f61d.png`,
    `${PRE_PATH}face1f924.png`,
    `${PRE_PATH}face1f612.png`,
    `${PRE_PATH}sweat1f613.png`,
    `${PRE_PATH}face1f614.png`,
    `${PRE_PATH}face1f615.png`,
    `${PRE_PATH}face1f643.png`,
    `${PRE_PATH}face1f911.png`,
    `${PRE_PATH}face1f632.png`,
    `${PRE_PATH}face2639.png`,
    `${PRE_PATH}face1f616.png`,
    `${PRE_PATH}face1f61e.png`,
    `${PRE_PATH}face1f61f.png`,
    `${PRE_PATH}triumph1f624.png`,
    `${PRE_PATH}face1f622.png`,
    `${PRE_PATH}face1f62d.png`,
    `${PRE_PATH}mouth1f626.png`,
    `${PRE_PATH}face1f627.png`,
    `${PRE_PATH}face1f628.png`,
    `${PRE_PATH}face1f629.png`,
    `${PRE_PATH}face1f62c.png`,
    `${PRE_PATH}sweat1f630.png`,
    `${PRE_PATH}fear1f631.png`,
    `${PRE_PATH}face1f633.png`,
    `${PRE_PATH}face1f635.png`,
    `${PRE_PATH}face1f621.png`,
    `${PRE_PATH}face1f620.png`,
    `${PRE_PATH}mask1f637.png`,
    `${PRE_PATH}thermometer1f912.png`,
    `${PRE_PATH}bandage1f915.png`,
    `${PRE_PATH}face1f922.png`,
    `${PRE_PATH}face1f927.png`,
    `${PRE_PATH}halo1f607.png`,
    `${PRE_PATH}hat1f920.png`,
    `${PRE_PATH}face1f921.png`,
    `${PRE_PATH}face1f925.png`,
    `${PRE_PATH}face1f913.png`,
    `${PRE_PATH}horns1f608.png`,
    `${PRE_PATH}imp1f47f.png`,
    `${PRE_PATH}ogre1f479.png`,
    `${PRE_PATH}goblin1f47a.png`,
    `${PRE_PATH}skull1f480.png`,
    `${PRE_PATH}ghost1f47b.png`,
    `${PRE_PATH}alien1f47d.png`,
    `${PRE_PATH}face1f916.png`,
    `${PRE_PATH}poo1f4a9.png`,
    `${PRE_PATH}mouth1f63a.png`,
    `${PRE_PATH}eyes1f638.png`,
    `${PRE_PATH}joy1f639.png`,
    `${PRE_PATH}eyes1f63b.png`,
    `${PRE_PATH}smile1f63c.png`,
    `${PRE_PATH}eyes1f63d.png`,
    `${PRE_PATH}face1f640.png`,
    `${PRE_PATH}face1f63f.png`,
    `${PRE_PATH}face1f63e.png`,
    `${PRE_PATH}hands1f46b.png`,
    `${PRE_PATH}hands1f46d.png`,
    `${PRE_PATH}ear1f442.png`,
    `${PRE_PATH}nose1f443.png`,
    `${PRE_PATH}footprints1f463.png`,
    `${PRE_PATH}eyes1f440.png`,
    `${PRE_PATH}eye1f441.png`,
    `${PRE_PATH}tongue1f445.png`,
    `${PRE_PATH}mouth1f444.png`,
    `${PRE_PATH}mark1f48b.png`,
    `${PRE_PATH}eyeglasses1f453.png`,
    `${PRE_PATH}sunglasses1f576.png`,
    `${PRE_PATH}necktie1f454.png`,
    `${PRE_PATH}shirt1f455.png`,
    `${PRE_PATH}jeans1f456.png`,
    `${PRE_PATH}dress1f457.png`,
    `${PRE_PATH}kimono1f458.png`,
    `${PRE_PATH}bikini1f459.png`,
    `${PRE_PATH}clothes1f45a.png`,
    `${PRE_PATH}purse1f45b.png`,
    `${PRE_PATH}handbag1f45c.png`,
    `${PRE_PATH}pouch1f45d.png`,
    `${PRE_PATH}satchel1f392.png`,
    `${PRE_PATH}shoe1f45e.png`,
    `${PRE_PATH}shoe1f45f.png`,
    `${PRE_PATH}shoe1f460.png`,
    `${PRE_PATH}sandal1f461.png`,
    `${PRE_PATH}boots1f462.png`,
    `${PRE_PATH}crown1f451.png`,
    `${PRE_PATH}hat1f452.png`,
    `${PRE_PATH}hat1f3a9.png`,
    `${PRE_PATH}cap1f393.png`,
    `${PRE_PATH}cross26d1.png`,
    `${PRE_PATH}lipstick1f484.png`,
    `${PRE_PATH}ring1f48d.png`,
    `${PRE_PATH}umbrella1f302.png`,
    `${PRE_PATH}briefcase1f4bc.png`,
    `${PRE_PATH}biceps1f4aa.png`,
    `${PRE_PATH}hand270c.png`,
    `${PRE_PATH}fingerscrossed1f91e.png`,
    `${PRE_PATH}horns1f918.png`,
    `${PRE_PATH}splayed1f590.png`,
    `${PRE_PATH}sign1f44d.png`,
    `${PRE_PATH}hands1f64f.png`,
    `${PRE_PATH}handshake1f91d.png`,
    `${PRE_PATH}runner1f3c3.png`,
    `${PRE_PATH}family1f46a.png`,
    `${PRE_PATH}mouseface1f42d.png`,
    `${PRE_PATH}cowface1f42e.png`,
    `${PRE_PATH}tigerface1f42f.png`,
    `${PRE_PATH}rabbitface1f430.png`,
    `${PRE_PATH}dragonface1f432.png`,
    `${PRE_PATH}snake1f40d.png`,
    `${PRE_PATH}horseface1f434.png`,
    `${PRE_PATH}ram1f40f.png`,
    `${PRE_PATH}monkeyface1f435.png`,
    `${PRE_PATH}chicken1f414.png`,
    `${PRE_PATH}dogface1f436.png`,
    `${PRE_PATH}pigface1f437.png`,
    `${PRE_PATH}pandaface1f43c.png`,
    `${PRE_PATH}rose1f339.png`,
    `${PRE_PATH}sunflower1f33b.png`,
    `${PRE_PATH}leaf1f341.png`,
    `${PRE_PATH}africa1f30d.png`,
    `${PRE_PATH}rays2600.png`,
    `${PRE_PATH}moon1f319.png`,
    `${PRE_PATH}tornado1f32a.png`,
    `${PRE_PATH}snowflake2744.png`,
    `${PRE_PATH}snowman2603.png`,
    `${PRE_PATH}sparkles2728.png`,
    `${PRE_PATH}tree1f384.png`,
    `${PRE_PATH}loveletter1f48c.png`,
    `${PRE_PATH}hourglass231b.png`,
    `${PRE_PATH}clock23f0.png`,
    `${PRE_PATH}present1f381.png`,
    `${PRE_PATH}bag1f4b0.png`,
    `${PRE_PATH}yensign1f4b9.png`,
    `${PRE_PATH}arrow1f498.png`,
    `${PRE_PATH}heart2764.png`,
    `${PRE_PATH}speaker1f4e2.png`,
    `${PRE_PATH}note1f3b5.png`,
    `${PRE_PATH}mark2705.png`,
    `${PRE_PATH}mark274c.png`,
    `${PRE_PATH}mark203c.png`,
    `${PRE_PATH}symbol1f4af.png`,
    `${PRE_PATH}congratulation3297.png`,
    `${PRE_PATH}clipboard1f4cb.png`,
  ];
}

// 表情window系统list 和 表情图配置同步
export function getEmojiwindowList() {
  return [
    '😀',
    '😁',
    '😂',
    '🤣',
    '😃',
    '😄',
    '😅',
    '😆',
    '😉',
    '😊',
    '😋',
    '😎',
    '😍',
    '😘',
    '😗',
    '😙',
    '🙂',
    '🤗',
    '🤔',
    '😐',
    '😑',
    '😶',
    '🙄',
    '😏',
    '😣',
    '😥',
    '😮',
    '🤐',
    '😯',
    '😪',
    '😫',
    '😴',
    '😌',
    '😛',
    '😜',
    '😝',
    '🤤',
    '😒',
    '😓',
    '😔',
    '😕',
    '🙃',
    '🤑',
    '😲',
    '🙁',
    '😖',
    '😞',
    '😟',
    '😤',
    '😢',
    '😭',
    '😦',
    '😧',
    '😨',
    '😩',
    '😬',
    '😰',
    '😱',
    '😳',
    '😵',
    '😡',
    '😠',
    '😷',
    '🤒',
    '🤕',
    '🤢',
    '🤧',
    '😇',
    '🤠',
    '🤡',
    '🤥',
    '🤓',
    '😈',
    '👿',
    '👹',
    '👺',
    '💀',
    '👻',
    '👽',
    '🤖',
    '💩',
    '😺',
    '😸',
    '😹',
    '😻',
    '😼',
    '😽',
    '🙀',
    '😿',
    '😾',
    '👫',
    '👭',
    '👂',
    '👃',
    '👣',
    '👀',
    '👁',
    '👅',
    '👄',
    '💋',
    '👓',
    '🕶',
    '👔',
    '👕',
    '👖',
    '👗',
    '👘',
    '👙',
    '👚',
    '👛',
    '👜',
    '👝',
    '🎒',
    '👞',
    '👟',
    '👠',
    '👡',
    '👢',
    '👑',
    '👒',
    '🎩',
    '🎓',
    '⛑',
    '💄',
    '💍',
    '🌂',
    '💼',
    '💪',
    '✌',
    '🤞',
    '🤘',
    '🖐',
    '👍',
    '🙏',
    '🤝',
    '🏃',
    '👪',
    '🐭',
    '🐮',
    '🐯',
    '🐰',
    '🐲',
    '🐍',
    '🐴',
    '🐏',
    '🐵',
    '🐔',
    '🐶',
    '🐷',
    '🐼',
    '🌹',
    '🌻',
    '🍁',
    '🌍',
    '☀',
    '🌙',
    '🌪',
    '❄',
    '☃',
    '✨',
    '🎄',
    '💌',
    '⌛',
    '⏰',
    '🎁',
    '💰',
    '💹',
    '💘',
    '❤',
    '📢',
    '🎵',
    '✅',
    '❌',
    '‼',
    '💯',
    '㊗',
    '📋',
  ];
}

// 表情code码率 和 表情图配置同步
export function getEmojiCodeList() {
  return [
    'de00',
    'de01',
    'de02',
    'dd23',
    'de03',
    'de04',
    'de05',
    'de06',
    'de09',
    'de0a',
    'de0b',
    'de0e',
    'de0d',
    'de18',
    'de17',
    'de19',
    'de42',
    'dd17',
    'dd14',
    'de10',
    'de11',
    'de36',
    'de44',
    'de0f',
    'de23',
    'de25',
    'de2e',
    'dd10',
    'de2f',
    'de2a',
    'de2b',
    'de34',
    'de0c',
    'de1b',
    'de1c',
    'de1d',
    'dd24',
    'de12',
    'de13',
    'de14',
    'de15',
    'de43',
    'dd11',
    'de32',
    'de41',
    'de16',
    'de1e',
    'de1f',
    'de24',
    'de22',
    'de2d',
    'de26',
    'de27',
    'de28',
    'de29',
    'de2c',
    'de30',
    'de31',
    'de33',
    'de35',
    'de21',
    'de20',
    'de37',
    'dd12',
    'dd15',
    'dd22',
    'dd27',
    'de07',
    'dd20',
    'dd21',
    'dd25',
    'dd13',
    'de08',
    'dc7f',
    'dc79',
    'dc7a',
    'dc80',
    'dc7b',
    'dc7d',
    'dd16',
    'dca9',
    'de3a',
    'de38',
    'de39',
    'de3b',
    'de3c',
    'de3d',
    'de40',
    'de3f',
    'de3e',
    'dc6b',
    'dc6d',
    'dc42',
    'dc43',
    'dc63',
    'dc40',
    'dc41',
    'dc45',
    'dc44',
    'dc8b',
    'dc53',
    'dd76',
    'dc54',
    'dc55',
    'dc56',
    'dc57',
    'dc58',
    'dc59',
    'dc5a',
    'dc5b',
    'dc5c',
    'dc5d',
    'df92',
    'dc5e',
    'dc5f',
    'dc60',
    'dc61',
    'dc62',
    'dc51',
    'dc52',
    'dfa9',
    'df93',
    '26d1',
    'dc84',
    'dc8d',
    'df02',
    'dcbc',
    'dcaa',
    '270c',
    'dd1e',
    'dd18',
    'dd90',
    'dc4d',
    'de4f',
    'dd1d',
    'dfc3',
    'dc6a',
    'dc2d',
    'dc2e',
    'dc2f',
    'dc30',
    'dc32',
    'dc0d',
    'dc34',
    'dc0f',
    'dc35',
    'dc14',
    'dc36',
    'dc37',
    'dc3c',
    'df39',
    'df3b',
    'df41',
    'df0d',
    '2600',
    'df19',
    'df2a',
    '2744',
    '2603',
    '2728',
    'df84',
    'dc8c',
    '231b',
    '23f0',
    'df81',
    'dcb0',
    'dcb9',
    'dc98',
    '2764',
    'dce2',
    'dfb5',
    '2705',
    '274c',
    '203c',
    'dcaf',
    '3297',
    'dccb',
  ];
  //return ['1f600”,”1f601', '1f602', '1f923', '1f603', '1f604', '1f605', '1f606', '1f609', '1f60a', '1f60b', '1f60e', '1f60d', '1f618', '1f617', '1f619', '1f642', '1f917', '1f914', '1f610', '1f611', '1f636', '1f644', '1f60f', '1f623', '1f625', '1f62e', '1f910', '1f62f', '1f62a', '1f62b', '1f634', '1f60c', '1f61b', '1f61c', '1f61d', '1f924', '1f612', '1f613', '1f614', '1f615', '1f643', '1f911', '1f632', '1f641', '1f616', '1f61e', '1f61f', '1f624', '1f622', '1f62d', '1f626', '1f627', '1f628', '1f629', '1f62c', '1f630', '1f631', '1f633', '1f635', '1f621', '1f620', '1f637', '1f912', '1f915', '1f922', '1f927', '1f607', '1f920', '1f921', '1f925', '1f913', '1f608', '1f47f', '1f479', '1f47a', '1f480', '1f47b', '1f47d', '1f916', '1f4a9', '1f63a', '1f638', '1f639', '1f63b', '1f63c', '1f63d', '1f640', '1f63f', '1f63e', '1f46b', '1f46d', '1f442', '1f443', '1f463', '1f440', '1f441', '1f445', '1f444', '1f48b', '1f453', '1f576', '1f454', '1f455', '1f456', '1f457', '1f458', '1f459', '1f45a', '1f45b', '1f45c', '1f45d', '1f392', '1f45e', '1f45f', '1f460', '1f461', '1f462', '1f451', '1f452', '1f3a9', '1f393', '26d1', '1f484', '1f48d', '1f302', '1f4bc', '1f4aa', '270c', '1f91e', '1f918', '1f590', '1f44d', '1f64f', '1f91d', '1f3c3', '1f46a', '1f42d', '1f42e', '1f42f', '1f430', '1f432', '1f40d', '1f434', '1f40f', '1f435', '1f414', '1f436', '1f437', '1f43c', '1f339”,”1f33b', '1f341', '1f30d', '2600', '1f319', '1f32a', '2744', '2603', '1f525', '2728', '1f384', '1f48c', '231b', '23f0', '1f381', '1f4b0', '1f4b9', '1f498', '2764', '1f4e2', '1f514', '1f3b5', '2705', '274c', '203c', '1f4af', '3297', '1f1e8', '1f4cb'];
}

const endTxt = {};
const endList = [];
const extList = ['3c', '70', '3e', '2f', 'd83d', 'd83e', 'd83c', 'd83b', 'd83f', 'd83g'];

export function getEmojiName(str) {
  const end = str.replace(/\<span.*?>(.*?)<\/span>/g, (mathed, index, str) => {
    return index.trim();
  }); //去除span

  const end1 = end.replace(/\<img.*?>(.*?)/g, (mathed, index, str) => {
    const list = getEmojiList();
    let imgIndex = -1;
    for (let i = 0; i < list.length; ++i) {
      if (mathed.indexOf(list[i]) > -1) {
        imgIndex = i;
        break;
      }
    }
    if (imgIndex !== -1) {
      return getEmojiwindowList()[imgIndex];
    }
    return mathed;
  });
  return end1;
}
export function transformTextToRichText(str) {
  if (!str) return '';
  str = str
    .split('\n')
    .map((item) => {
      return `<div>${item || ''}</div>`;
    })
    .join('');
  let rs = '';
  for (const value of str) {
    const index = getEmojiwindowList().indexOf(value);
    if (index > -1) {
      rs += `<img src='${getEmojiList()[index]}' class='braft-emoticon-wrap' />`;
    } else {
      rs += value;
    }
  }
  return rs;
}

const characterEntity = [
  {
    name: '&quot;',
    character: '"',
  },
  {
    name: '&amp;',
    character: '&',
  },
  {
    name: '&lt;',
    character: '<',
  },
  {
    name: '&gt;',
    character: '>',
  },
  {
    name: '&euro;',
    character: '€',
  },
  {
    name: '&sbquo;',
    character: '‚',
  },
  {
    name: '&fnof;',
    character: 'ƒ',
  },
  {
    name: '&bdquo;',
    character: '„',
  },
  {
    name: '&hellip;',
    character: '…',
  },
  {
    name: '&dagger;',
    character: '†',
  },
  {
    name: '&Dagger;',
    character: '‡',
  },
  {
    name: '&circ;',
    character: 'ˆ',
  },
  {
    name: '&permil;',
    character: '‰',
  },
  {
    name: '&Scaron;',
    character: 'Š',
  },
  {
    name: '&lsaquo;',
    character: '‹',
  },
  {
    name: '&OElig;',
    character: 'Œ',
  },
  {
    name: '&Zcaron;',
    character: 'Ž',
  },
  {
    name: '&lsquo;',
    character: '‘',
  },
  {
    name: '&rsquo;',
    character: '’',
  },
  {
    name: '&ldquo;',
    character: '“',
  },
  {
    name: '&rdquo;',
    character: '”',
  },
  {
    name: '&bull;',
    character: '•',
  },
  {
    name: '&ndash;',
    character: '–',
  },
  {
    name: '&mdash;',
    character: '—',
  },
  {
    name: '&tilde;',
    character: '˜',
  },
  {
    name: '&trade;',
    character: '™',
  },
  {
    name: '&scaron;',
    character: 'š',
  },
  {
    name: '&rsaquo;',
    character: '›',
  },
  {
    name: '&oelig;',
    character: 'œ',
  },
  {
    name: '&zcaron;',
    character: 'ž',
  },
  {
    name: '&Yuml;',
    character: 'Ÿ',
  },
  {
    name: '&nbsp;',
    character: ' ',
  },
  {
    name: '&iexcl;',
    character: '¡',
  },
  {
    name: '&cent;',
    character: '¢',
  },
  {
    name: '&pound;',
    character: '£',
  },
  {
    name: '&curren;',
    character: '¤',
  },
  {
    name: '&yen;',
    character: '¥',
  },
  {
    name: '&brvbar;',
    character: '¦',
  },
  {
    name: '&sect;',
    character: '§',
  },
  {
    name: '&uml;',
    character: '¨',
  },
  {
    name: '&copy;',
    character: '©',
  },
  {
    name: '&ordf;',
    character: 'ª',
  },
  {
    name: '&laquo;',
    character: '«',
  },
  {
    name: '&not;',
    character: '¬',
  },
  {
    name: '&shy;',
    character: '­',
  },
  {
    name: '&reg;',
    character: '®',
  },
  {
    name: '&macr;',
    character: '¯',
  },
  {
    name: '&deg;',
    character: '°',
  },
  {
    name: '&plusmn;',
    character: '±',
  },
  {
    name: '&sup2;',
    character: '²',
  },
  {
    name: '&sup3;',
    character: '³',
  },
  {
    name: '&acute;',
    character: '´',
  },
  {
    name: '&micro;',
    character: 'µ',
  },
  {
    name: '&para;',
    character: '¶',
  },
  {
    name: '&middot;',
    character: '·',
  },
  {
    name: '&cedil;',
    character: '¸',
  },
  {
    name: '&sup1;',
    character: '¹',
  },
  {
    name: '&ordm;',
    character: 'º',
  },
  {
    name: '&raquo;',
    character: '»',
  },
  {
    name: '&frac14;',
    character: '¼',
  },
  {
    name: '&frac12;',
    character: '½',
  },
  {
    name: '&frac34;',
    character: '¾',
  },
  {
    name: '&iquest;',
    character: '¿',
  },
  {
    name: '&Agrave;',
    character: 'À',
  },
  {
    name: '&Aacute;',
    character: 'Á',
  },
  {
    name: '&Acirc;',
    character: 'Â',
  },
  {
    name: '&Atilde;',
    character: 'Ã',
  },
  {
    name: '&Auml;',
    character: 'Ä',
  },
  {
    name: '&Aring;',
    character: 'Å',
  },
  {
    name: '&AElig;',
    character: 'Æ',
  },
  {
    name: '&Ccedil;',
    character: 'Ç',
  },
  {
    name: '&Egrave;',
    character: 'È',
  },
  {
    name: '&Eacute;',
    character: 'É',
  },
  {
    name: '&Ecirc;',
    character: 'Ê',
  },
  {
    name: '&Euml;',
    character: 'Ë',
  },
  {
    name: '&Igrave;',
    character: 'Ì',
  },
  {
    name: '&Iacute;',
    character: 'Í',
  },
  {
    name: '&Icirc;',
    character: 'Î',
  },
  {
    name: '&Iuml;',
    character: 'Ï',
  },
  {
    name: '&ETH;',
    character: 'Ð',
  },
  {
    name: '&Ntilde;',
    character: 'Ñ',
  },
  {
    name: '&Ograve;',
    character: 'Ò',
  },
  {
    name: '&Oacute;',
    character: 'Ó',
  },
  {
    name: '&Ocirc;',
    character: 'Ô',
  },
  {
    name: '&Otilde;',
    character: 'Õ',
  },
  {
    name: '&Ouml;',
    character: 'Ö',
  },
  {
    name: '&times;',
    character: '×',
  },
  {
    name: '&Oslash;',
    character: 'Ø',
  },
  {
    name: '&Ugrave;',
    character: 'Ù',
  },
  {
    name: '&Uacute;',
    character: 'Ú',
  },
  {
    name: '&Ucirc;',
    character: 'Û',
  },
  {
    name: '&Uuml;',
    character: 'Ü',
  },
  {
    name: '&Yacute;',
    character: 'Ý',
  },
  {
    name: '&THORN;',
    character: 'Þ',
  },
  {
    name: '&szlig;',
    character: 'ß',
  },
  {
    name: '&agrave;',
    character: 'à',
  },
  {
    name: '&aacute;',
    character: 'á',
  },
  {
    name: '&acirc;',
    character: 'â',
  },
  {
    name: '&atilde;',
    character: 'ã',
  },
  {
    name: '&auml;',
    character: 'ä',
  },
  {
    name: '&aring;',
    character: 'å',
  },
  {
    name: '&aelig;',
    character: 'æ',
  },
  {
    name: '&ccedil;',
    character: 'ç',
  },
  {
    name: '&egrave;',
    character: 'è',
  },
  {
    name: '&eacute;',
    character: 'é',
  },
  {
    name: '&ecirc;',
    character: 'ê',
  },
  {
    name: '&euml;',
    character: 'ë',
  },
  {
    name: '&igrave;',
    character: 'ì',
  },
  {
    name: '&iacute;',
    character: 'í',
  },
  {
    name: '&icirc;',
    character: 'î',
  },
  {
    name: '&iuml;',
    character: 'ï',
  },
  {
    name: '&eth;',
    character: 'ð',
  },
  {
    name: '&ntilde;',
    character: 'ñ',
  },
  {
    name: '&ograve;',
    character: 'ò',
  },
  {
    name: '&oacute;',
    character: 'ó',
  },
  {
    name: '&ocirc;',
    character: 'ô',
  },
  {
    name: '&otilde;',
    character: 'õ',
  },
  {
    name: '&ouml;',
    character: 'ö',
  },
  {
    name: '&divide;',
    character: '÷',
  },
  {
    name: '&oslash;',
    character: 'ø',
  },
  {
    name: '&ugrave;',
    character: 'ù',
  },
  {
    name: '&uacute;',
    character: 'ú',
  },
  {
    name: '&ucirc;',
    character: 'û',
  },
  {
    name: '&uuml;',
    character: 'ü',
  },
  {
    name: '&yacute;',
    character: 'ý',
  },
  {
    name: '&thorn;',
    character: 'þ',
  },
  {
    name: '&yuml;',
    character: 'ÿ',
  },
];
export function handlePasteContent(editor, args, isInput) {
  let content = getEmojiName(args.content);
  content = content?.replace(/<[^>]*>/g, ''); // 把富文本转为plain text
  if (isInput) {
    // input的时候删除所有换行
    content = content.replace(/\n/g, '');
  }

  content = transformTextToRichText(content)
    .replace(/<div>/, '')
    .replace(/<\/div>/, '');
  return content;
}

export function removeCharacterEntity(content) {
  if (content) {
    characterEntity.forEach(({ name, character }) => {
      if (content && content.indexOf(name) > -1) {
        const regex = new RegExp(name, 'g');
        content = content.replace(regex, character);
      }
    });
  }
  return content;
}

export function getStrCount(substring, armstr) {
  let count = 0;
  while (substring.indexOf(armstr) != -1) {
    substring = substring.replace(armstr, '');
    ++count;
  }
  let endStr = '';
  let i;
  let len;
  let charCode;
  for (i = 0, len = substring.length; i < len; i++) {
    charCode = substring.charCodeAt(i);
    if (charCode != 65039) {
      endStr += substring[i];
    }
  }
  return { length: endStr.length + count, emojiNum: count };
}

export function countSymbols(richHtml) {
  const str = filterHtml(getEmojiName(richHtml || ''));
  const ranges = [
    '\ud83c[\udf00-\udfff]',
    '\ud83d[\udc00-\udfff]',
    '\ud83d[\ude80-\udeff]',
    '\ud83e[\udd00-\udeff]',
    '[\u2600-\u27ff]',
  ];
  const emojireg = str.replace(new RegExp(ranges.join('|'), 'g'), '$~');

  return getStrCount(emojireg, '$~');
}

export const transformEmojiCodeToImg = (text) => {
  let rs = '';
  for (const value of text) {
    const index = getEmojiwindowList().indexOf(value);
    if (index > -1) {
      rs += `<img src='${getEmojiList()[index]}' class='braft-emoticon-wrap' />`;
    } else {
      rs += value;
    }
  }
  return rs;
};

export const transformRichTextToText = (richText) => {
  return filterHtml(getEmojiName(richText || ''));
};
