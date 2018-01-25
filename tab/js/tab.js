class Tab {
    constructor(title, content) {
        this.title = title.title;
        this.content = title.content;
        this.init();
    }
    init() {
        this.foundWorp();
        this.founduli();
        this.foundoli();
        this.defaultDom();
        this.switchover();
    }
    foundWorp() {
        let wrap = document.createElement('div');
        wrap.className = 'wrap';
        document.body.appendChild(wrap);
    }
    founduli() {
        let wrap = document.getElementsByClassName('wrap')[0];
        const ulis = document.createElement('ul');
        let lis = '';
        this.title.map((item, index) => {
            lis += '<li>' + item + '</li>';
            // console.log(item);
        })
        ulis.innerHTML = lis;
        wrap.appendChild(ulis);
    }
    foundoli() {
        let wrap = document.getElementsByClassName('wrap')[0];
        const olis = document.createElement('ol');
        let lis = '';
        this.title.map((item, index) => {
            lis += '<li>' + item + '</li>';
        })
        olis.innerHTML = lis;
        wrap.appendChild(olis);
    }
    defaultDom() {
        let ul = document.querySelectorAll('ul')[0].querySelectorAll('li');
        let ol = document.querySelectorAll('ol')[0].querySelectorAll('li');
        [...ul].map((item, ind) => {
            ol[ind].style.display = 'none';
            ul[ind].className = '';
        })
        ol[0].style.display = 'block';
        ul[0].className = 'bg';
    }
    switchover() {
        let ul = document.querySelectorAll('ul')[0].querySelectorAll('li');
        let ol = document.querySelectorAll('ol')[0].querySelectorAll('li');
        [...ul].map((item, ind) => {
            ul[ind].index = ind;
            ul[ind].addEventListener('click', () => {
                [...ul].map((item, i) => {
                    ol[i].style.display = 'none';
                    ul[i].className = '';
                })
                ol[ind].style.display = 'block';
                ul[ind].className = 'bg';
            })
        })
    }
}
new Tab({
    title: ['new', 'sports', 'recreation', 'celebrity', 'military'],
    content: [
        'new',
        'sports',
        'recreation',
        'celebrity',
        'military'
    ]
});