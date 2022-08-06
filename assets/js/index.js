const buggerMenu = document.querySelector('#burger-menu');
const ul = document.getElementById('bt-menu');

const btnClose = document.querySelector('#navbar');

const navigationLink = document.querySelectorAll('.nav-link');

buggerMenu.addEventListener('click', () => {
  ul.style.display = 'block';
  document.getElementById('navbar').style.display = 'unset';
});

navigationLink.forEach((navLink) => navLink.addEventListener('click', () => {
  ul.classList.remove('remove');
}));

btnClose.addEventListener('click', () => {
  ul.style.display = 'none';
  document.getElementById('navbar').style.display = 'none';
});

// Set up list of speaker as an object
const speakers = document.querySelector('.speakers');

const speakerObjData = {
  profileImg: ['/assets/images/speaker_06.png', '/assets/images/speaker_01.png',
    '/assets/images/speaker_02.png', '/assets/images/speaker_03.png',
    '/assets/images/speaker_04.png', '/assets/images/speaker_05.png'],
  name: ['Ryan Berkley', 'yohai benkler', 'Jeon Gil-nam', 'Ryan Merkley', 'Julia Leda', 'Layla Trettikov'],
  title: ['Ryan Berkley', 'Creative Commons CEO, Former Mozilla Foundation COO', 'Executive Director of the Wikimedia Foundation', '', 'President of Young Pirates of Europe', 'CEO of Creative Commons, ex COO of the Mozilla Foundation'],
  description: ['He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.', 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.', 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.', 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.', 'European ingetration, political democracy and participation of youth through online as her major condem, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.', 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.'],
};

window.onload = function getData() {
  const divOne = document.createElement('div');
  const h2One = document.createElement('h2');
  h2One.textContent = 'Featured Speakers';
  const imgOne = document.createElement('img');
  imgOne.classList.add('indicator');

  divOne.append(h2One, imgOne);
  speakers.append(divOne);

  const divTwo = document.createElement('div');
  divTwo.classList.add('speakersContainer');

  const divThree = [];
  const divFour = [];
  const imgTwo = [];
  const divFive = [];
  const h2Two = [];
  const h3One = [];
  const imgThree = [];
  const pOne = [];

  function dynamic(index, num) {
    for (let i = index; i < num; i += 1) {
      divThree[i] = document.createElement('div');
      divThree[i].classList.add('speakerItem');
      divFour[i] = document.createElement('div');
      imgTwo[i] = document.createElement('img');
      imgTwo[i].setAttribute('src', speakerObjData.profileImg[i]);
      divFour[i].append(imgTwo[i]);
      divThree[i].append(divFour[i]);
      divFive[i] = document.createElement('div');
      divFive[i].classList.add('profile');
      h2Two[i] = document.createElement('h2');
      h2Two[i].textContent = speakerObjData.name[i];
      divFive[i].append(h2Two[i]);
      h3One[i] = document.createElement('h3');
      h3One[i].textContent = speakerObjData.title[i];
      divFive[i].append(h3One[i]);
      imgThree[i] = document.createElement('img');

      divFive[i].append(imgThree[i]);
      pOne[i] = document.createElement('p');
      pOne[i].textContent = speakerObjData.description[i];
      divFive[i].append(pOne[i]);
      divThree[i].append(divFive[i]);
      divTwo.append(divThree[i]);
    }
    speakers.append(divOne, divTwo);
  }

  if (window.innerWidth < 768) {
    dynamic(0, 2);
  } else {
    dynamic(0, 6);
  }

  if (window.innerWidth < 768) {
    const more = document.createElement('div');
    const moreBtn = document.createElement('button');
    moreBtn.setAttribute('type', 'button');
    moreBtn.classList.add('moreBtn');
    moreBtn.textContent = 'Show More';
    const moreImg = document.createElement('img');
    moreImg.setAttribute('src', '/assets/images/union.svg');
    moreImg.classList.add('moreImg');
    moreBtn.append(moreImg);
    more.append(moreBtn);
    speakers.append(more);

    more.addEventListener('click', () => {
      if (moreBtn.textContent === 'Show More') {
        dynamic(2, 6);
        moreBtn.textContent = 'Show Less';
        moreImg.setAttribute('src', '/assets/images/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.add('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        speakers.append(more);
      } else {
        divThree[2].remove();
        divThree[3].remove();
        divThree[4].remove();
        divThree[5].remove();
        moreBtn.textContent = 'Show More';
        moreImg.setAttribute('src', '/assets/images/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.remove('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        speakers.append(more);
      }
    });
  }

  window.onresize = function checkWindow() {
    window.location.reload();
  };
};

// Page scroll up script code
const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
