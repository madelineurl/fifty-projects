const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (evt) => {
  createTags(evt.target.value);

  if (evt.key === 'Enter') {
    setTimeout(() => {
      evt.target.value = '';
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.classList.add('tag');
      tagEl.innerText = tag;
      tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
  // number of times to highlight each choice before stopping
  const times = 30;

  // cycles through tags
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // lands on a tag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    });
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
