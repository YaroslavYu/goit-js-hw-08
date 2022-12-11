import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.setCurrentTime(setTimeOnLoadPage());
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(() => player.setCurrentTime(0));

player.on('timeupdate', throttle(onPlayVimeo, 1000));

function onPlayVimeo(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

// при відсутності локального сховища в консолі були помилки, вирішив написати функцію setTimeOnLoadPage, що нижче,
// викликав в 7 рядкові (теж закоментовано), бо при відсутності локального сховища в консолі була помилка.
// Потім помучився з методом setCurrentTime і документацією. Так і не зрозумів що там.then робить.
// Як зрозумів .catch це те що викликається при помилці. записав у вигляді 10 рядка, не знаю чи правильно зробив,
// але помилок не викликає і час зберігається

// function setTimeOnLoadPage() {
//   if (!localStorage.getItem('videoplayer-current-time')) {
//     return 0;
//   } else return localStorage.getItem('videoplayer-current-time');
// }
