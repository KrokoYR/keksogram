'use strict';

var minLikes = 15;
var maxLikes = 200;
var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var pictureList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture-template').content;

var uniqueComments = [];
for (var i = 0; i <= Math.round(Math.random()) ; i++) {
	uniqueComments[i] = comments[Math.floor(Math.random() * comments.length)]
	if (i > 0 & uniqueComments[i] == uniqueComments[i-1]) {
		uniqueComments.length = i;
	}
}

var pictures = [];

for (var i = 0; i < 25; i++){
	pictures[i] = {
		url: 'photos/' + (i+1) + '.jpg',
		likes: Math.floor(Math.random() * (maxLikes - minLikes + 1) + minLikes),
		comment: uniqueComments.slice()
	}
}

var renderPictures = function (picture) {
	var pictureElement = pictureTemplate.cloneNode(true);

	pictureElement.querySelector('.picture').children[0].src = pictures[i].url;
	pictureElement.querySelector('.picture-likes').textContent = pictures[i].likes.toString(10);
	pictureElement.querySelector('.picture-comments').textContent = pictures[i].comment;

	return pictureElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length; i++){
	fragment.appendChild(renderPictures(pictures[i]));
	console.log(fragment);
}
pictureList.appendChild(fragment);

document.querySelector('.gallery-overlay').classList.remove('hidden');
document.querySelector('.gallery-overlay-image').src = pictures[0].url;
document.querySelector('.likes-count').textContent = pictures[0].likes.toString(10);
document.querySelector('.comments-count').textContent = uniqueComments.length.toString(10);

