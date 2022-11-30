const menuLinks = document.querySelectorAll('.header__nav-link');

menuLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));

const heroDots = document.querySelectorAll('.hero__dot');
const heroImage = document.querySelector('.hero__image');
const heroTitle = document.querySelector('.hero__title');
const heroSubtitle = document.querySelector('.hero__subtitle');

const heroTitles = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];

const heroSubtitles = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
];

heroDots.forEach((dot,index) => dot.addEventListener('click', event => {
    heroDots.forEach(el => {
        el.classList.remove('active');
    })

    dot.classList.add('active');
    heroImage.src = `assets/hero_${index+1}.png`;
    heroTitle.textContent = heroTitles[index];
    heroSubtitle.textContent = heroSubtitles[index];

}))


let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();