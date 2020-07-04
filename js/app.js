    // MOBILE SHARE BUTTON
    const shareButton = document.querySelector('.container__share-icon');
    const socialsBefore = document.querySelector('.container__socials');
    const socialsAfter = document.querySelector('.container__socials-after');
    const blueBtn = document.querySelector('.btn_share');
    if (window.matchMedia("(max-width: 1300px)").matches) {
        shareButton.addEventListener('click', () => {
            socialsBefore.style.display = "none";
            socialsAfter.style.display = "flex";

        })

    } else {
        shareButton.addEventListener('click', () => {
            socialsBefore.style.display = "flex";
            socialsAfter.style.display = "inline-block";

        })

    }