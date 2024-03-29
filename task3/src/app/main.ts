
interface Person {
  _id: string,
  isActive: boolean,
  gender: string,
  about: string,
  picture: string,
  email: string,
  fullName: string
}

fetch('./assets/users.json')
  .then((res) => res.json())
  .then((profile) => {
    const trueProfiles: Person[] = profile.filter((obj: Person) => obj.isActive);

    const buildCards = (arr: Person[]) => {

      const parent = document.getElementById('cards') as HTMLElement;
      const row: HTMLElement = document.createElement('div');
      row.classList.add('row', 'justify-content-center');
      row.setAttribute('id', 'row');
      parent.appendChild(row);

      arr.forEach((obj: Person) => {
        const card = document.createElement('div');
        card.classList.add('card', 'text-center', 'bg-white', 'w-20', 'col-md-auto', 'm-4');
        card.setAttribute('id', obj._id);
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
        button.innerHTML = 'Email';

        cardbody.appendChild(image);
        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        cardbody.appendChild(button);
      });
    };

    buildCards(trueProfiles);

    const choseGender = document.getElementById('choseGender');
    if (choseGender === null) {
      return;
    }
    choseGender.addEventListener('change', () => { checker(); }, false);
    const searchbar = document.getElementById('searchbar');
    if (searchbar === null) {
      return;
    }
    searchbar.addEventListener('keyup', () => { checker(); }, false);

    const checker = () => {
      const genderCheck = <HTMLInputElement>document.getElementById('choseGender');
      if (genderCheck === null) {
        return;
      }
      const searchbar = <HTMLInputElement>document.getElementById('searchbar');
      if (searchbar === null) {
        return;
      }

      const input = searchbar.value.toLowerCase();
      const gender = genderCheck.value;

      const row: HTMLElement | null = document.getElementById('row');
      if (row !== null && row.parentNode) {
        row.parentNode.removeChild(row);
        let sortedByGender: Person[];
        let sortedByInput: Person[];
        if (gender != '0') {
          sortedByGender = trueProfiles.filter((obj: Person) => obj.gender === gender);
        } else { sortedByGender = trueProfiles; }

        if (input) {
          sortedByInput = sortedByGender.filter((obj: Person) => obj.fullName.toLowerCase().includes(input));
        } else {
          sortedByInput = sortedByGender;
        }
        buildCards(sortedByInput);
      }

    };
  });
