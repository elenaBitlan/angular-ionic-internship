

fetch('./assets/users.json')
  .then((res) => res.json())
  .then((profile) => {
    const trueProfiles = profile.filter((obj) => obj.isActive);

    const buildCards = (arr) => {
      const parent = document.getElementById('cards');
      const row = document.createElement('div');
      row.classList.add('row', 'justify-content-center');
      row.setAttribute('id', 'row');
      parent.appendChild(row);

      arr.forEach((obj) => {
        const card = document.createElement('div');
        card.classList.add('card', 'text-center', 'bg-white', 'w-20', 'col-md-auto', 'm-4');
        card.setAttribute('id', obj.id);
        card.classList.add(obj.gender);
        row.appendChild(card);

        const image = document.createElement('img');
        image.src = (obj.picture);
        image.classList.add('rounded-circle', 'card-image-top');
        card.appendChild(image);

        const cardbody = document.createElement('div');
        cardbody.classList.add('card-body');
        card.appendChild(cardbody);

        const cardtitle = document.createElement('h4');
        cardtitle.classList.add('card-title', 'text-color', 'pt-1');
        cardtitle.innerHTML = (obj.fullName);

        const cardtext = document.createElement('p');
        cardtext.classList.add('card-text', 'cut-text');
        cardtext.innerHTML = obj.about;

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.setAttribute('href', obj.email);
        button.onclick = (href) => { window.open(href); };
        button.onclick = window.open;
        button.innerHTML = 'Email';

        cardbody.appendChild(image);
        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        cardbody.appendChild(button);
      });
    };

    buildCards(trueProfiles);


    const choseGender = document.getElementById('choseGender');
    choseGender.addEventListener('change', () => { checker(); }, false);
    const searchbar = document.getElementById('searchbar');
    searchbar.addEventListener('keyup', () => { checker(); }, false);

    const checker = () => {
      const gender = choseGender.value;
      const input = searchbar.value.toLowerCase();
      const row = document.getElementById('row');
      row.parentNode.removeChild(row);
      let sortedByGender;
      let sortedByInput;
      if (gender != 0) {
        sortedByGender = trueProfiles.filter((obj) => obj.gender === gender);
      } else { sortedByGender = trueProfiles; }

      if (input) {
        sortedByInput = sortedByGender.filter((obj) => obj.fullName.toLowerCase().includes(input));
      } else {
        sortedByInput = sortedByGender;
      }
      buildCards(sortedByInput);
    };
  });
