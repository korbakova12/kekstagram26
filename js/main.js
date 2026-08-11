const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES_AUTHORS = [
  'Анна',
  'Андрей',
  'Игорь',
  'Анастасия',
  'Сергей',
  'Даниил',
  'Олег',
  'Евдокия',
  'Ренат',
  'Максим',
  'Елена'
];

const DESCRIPTIONS = [
  'Огненный закат',
  'Рыбак на фоне реки',
  'Натюрморт',
  'Архитектурное решение',
  'Пересечение дорог',
  'Анды',
  'Фиолетовое поле'
];

const QUNATITY_PHOTOS = 25;


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let currentValue = 0;
  return () => ++currentValue;
};

// const MIN_PHOTO_ID = 1;
// const MAX_PHOTO_ID = 25;

// const MIN_COMMENT_ID = 1;
// const MAX_COMMENT_ID = 1000000;

const createPhotoId = createIdGenerator();
const createCommentId = createIdGenerator();

const MIN_LIKES = 15;
const MAX_LIKES = 2000;

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const createComment = () => (
  {
    id: createCommentId(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES_AUTHORS),
  }
);

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;


const createPublishedPhoto = () => {

  const id = createPhotoId();
  const likes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const comments = Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComment);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes,
    comments,
  };
};

const publishedPhotos = Array.from({length: QUNATITY_PHOTOS}, createPublishedPhoto);
console.log(publishedPhotos);
