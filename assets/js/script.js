/*  ------=========     Menu    =========------   */

function mobileMenu() {
  document.querySelector('HEADER').classList.toggle('header-menu');
  document.querySelector('.headerLogo').classList.toggle('hide');
  document.querySelector('body').classList.toggle('overFlow');
}

document.querySelector('#menuIcon').addEventListener('click', () => {
  mobileMenu();
});

/*    ------=========     Data    =========------    */

const projectData = [
  {
    name: 'Arctic wolf',
    background: 'Canis lupus arctos',
    profileImage: './assets/imgs/speakers/wolf_01.png',
    alt: 'Artic wolf photo',
    description:
      'The Arctic wolf (Canis lupus arctos), also known as the white wolf or polar wolf, is a subspecies of grey wolf native to the High Arctic tundra of Canada',
  },
  {
    name: 'Northwestern wolf',
    background: 'Canis lupus occidentalis',
    profileImage: './assets/imgs/speakers/wolf_02.png',
    alt: 'Northwestern wolf photo',
    description:
      'The northwestern wolf is a subspecies of gray wolf in western North America. Arguably the largest grey wolf subspecies in the world.',
  },
  {
    name: 'Great Plains wolf ',
    background: 'Canis lupus nubilus',
    profileImage: './assets/imgs/speakers/wolf_03.png',
    alt: 'Great Plains wolf photo',
    description:
      'The Great Plains wolf also known as the buffalo wolf or loafer, is an extinct subspecies of gray wolf that once extended throughout the Great Plains',
  },
  {
    name: 'Mexican wolf',
    background: 'Canis lupus baileyi',
    profileImage: './assets/imgs/speakers/wolf_04.png',
    alt: 'Mexican wolf photo',
    description:
      'It is the smallest of North America gray wolves, and is similar to the extinct Great Plains wolf.',
  },
  {
    name: 'Eastern timber wolf',
    background: 'Canis lupus lycaon',
    profileImage: './assets/imgs/speakers/wolf_05.png',
    alt: 'Eastern wolf photo',
    description:
      'Eastern timber wolf is considered to be either a unique subspecies of grey wolf or red wolf or a separate species from both. ',
  },
  {
    name: 'Eurasian Wolf',
    background: 'Canis lupus lupus',
    profileImage: './assets/imgs/speakers/wolf_06.png',
    alt: 'Eurasian wolf photo',
    description:
      'The Eurasian wolf also known as the common wolf, is a subspecies of grey wolf native to Europe and Asia. It was once widespread throughout Eurasia prior to the Middle Ages',
  },
];

/*    ------=========     Wolves Section    =========------    */

// Create portfolio section, add portfolio class to use in css, add portfolio id to use in js

const wolvesSpeakers = document.createElement('SECTION');
wolvesSpeakers.classList.add('wolvesSpeakers');
wolvesSpeakers.id = 'wolvesSpeakers';

// Place porftolio section before about section on html

const main = document.getElementById('main');
const partners = document.getElementById('partners');
main.insertBefore(wolvesSpeakers, partners);

// -- wolves Speakers Title -- //

// Create portfolio-title div and h2, add css classes and content

const sectionContainer = document.createElement('div');
const wolvesSpeakersTitleh2 = document.createElement('h2');
const wolvesSpeakersLine = document.createElement('div');
sectionContainer.classList.add('sectionContainer');
wolvesSpeakersTitleh2.textContent = 'Wolves';
wolvesSpeakersLine.classList.add('line');

// -- Speakers Container -- //

// Create speakers container, speakers card

const speakersContainer = document.createElement('div');
speakersContainer.classList.add('speakersContainer', 'grid');

// Append to the html

wolvesSpeakers.appendChild(sectionContainer);
sectionContainer.append(
  wolvesSpeakersTitleh2,
  wolvesSpeakersLine,
  speakersContainer,
);

projectData.forEach((element, index) => {
// Create Speakers Card with img, cardInfo div, h3, h4, line, p

  const speakersCard = document.createElement('div');
  const speakersImg = document.createElement('img');
  const speakersCardInfo = document.createElement('div');
  const speakersh3 = document.createElement('h3');
  const speakersh4 = document.createElement('h4');
  const speakersLine = document.createElement('div');
  let speakersP = document.createElement('p');

  // Add classes and ids

  speakersCard.classList.add('speakerCard');
  speakersCardInfo.classList.add('speakerCardInfo');
  speakersLine.classList.add('line2');
  speakersCard.id = index;

  // Add content

  speakersImg.src = element.profileImage;
  speakersh3.textContent = element.name;
  speakersh4.textContent = element.background;
  speakersP = element.description;

  // Append elements

  speakersContainer.appendChild(speakersCard);
  speakersCard.append(speakersImg, speakersCardInfo);
  speakersCardInfo.append(speakersh3, speakersh4, speakersLine, speakersP);
});
