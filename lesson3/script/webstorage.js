const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback");

button.addEventListener("click", () => {
  if (input.value) {
    feedback.textContent = "";

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "X";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    input.focus();
    input.value = "";

  } else {
    input.focus();
    // give feedback to user
    feedback.textContent = "Please enter a Book and Chapter";
  }
});

// Adds the chapters to the local storage
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
}); 

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    li.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.foucs();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

function deleteChapter(chapter) {
    chapter = chapter.slice(0, character.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}