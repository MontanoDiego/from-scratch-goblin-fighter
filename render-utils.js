export function amygdalaRender(amygdalaData) {
    const amygdalaEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const vitEl = document.createElement('p');

    amygdalaEl.classList.add('amygdala');
    imgEl.classList.add('amygdalaImgAlive');

    nameEl.textContent = amygdalaData.name;
    vitEl.id = `amygdala-vitality-${amygdalaData.id}`; // !IMPORTANT
    vitEl.textContent = amygdalaData.vit;

    if (amygdalaData.vit < 0) {
        imgEl.classList.remove('amygdalaImgAlive');
        imgEl.classList.add('amygdalaImgDead');
    }

    amygdalaEl.append(nameEl, imgEl, vitEl);

    return amygdalaEl;

}