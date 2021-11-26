 function WeeklyQuest(i){
    let stage = document.querySelector('.card-stage');

    let card = document.createElement('div');
    if(card){
        card.classList.add('card');
        stage.appendChild(card);
    }
    let poster = document.createElement('div');
    if(poster){
        poster.classList.add('poster');
        card.appendChild(poster);
    }
    
    let img = document.createElement('img');
    if(img){
        img.classList.add('game-img');
        img.setAttribute('src', gameCards[i].src);
        img.setAttribute('srcset', gameCards[i].srcset);
        img.setAttribute('Alt', gameCards[i].gameName);
        poster.appendChild(img);
    }
    
    let span = document.createElement('span');
    if(span){
        span.classList.add('game-category-badge', 'btn-badge');
        span.textContent = 'Action';
        poster.appendChild(span);
    }
    
    let description = document.createElement('div');
    if(description){
        description.classList.add('card-description');
        card.appendChild(description);
    }

    let gameName = document.createElement('p');
    if(gameName){
        gameName.classList.add('game-name');
        gameName.textContent = `${gameCards[i].gameName}`;
        description.appendChild(gameName);
    }

    let gameDescription = document.createElement('p');
    if(gameDescription){
        gameDescription.classList.add('game-description');
        gameDescription.textContent = `${gameCards[i].description}`;
        description.appendChild(gameDescription);
    }

    let scoreWrapper = document.createElement('div');
    if(scoreWrapper){
        scoreWrapper.classList.add('score-wrapper');
        scoreWrapper.innerHTML = `
            <img src="images/flower-shape.svg" width="13" height="12" class="shape-flower" alt="flower-shape" />
            <span class="score">+${gameCards[i].points}</span>
            <img src="images/thunder-shape.svg" width="7" height="12" class="shape-thunder" alt="Thunder-shape" />
            <span class="score">-${gameCards[i].energy}</span>
            <button class="btn-badge">Accept</button>
        `;
        card.appendChild(scoreWrapper);
    }
}

function createWeeklyQuest(){
    for(let i = 0; i < gameCards.length; i++){
        WeeklyQuest(i);
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function slider(){
    let cardStage = document.querySelector('.card-stage');
    let cards = document.querySelectorAll('.card');
    let prevBtn = document.querySelector('.navigations .nav-left');
    let nextBtn = document.querySelector('.navigations .nav-right');

    let arr = [...cards];
    
    let lastCard = arr.pop();

    function check(){
        let lastCardVisible = isInViewport(lastCard);
        
        if(value == 0){
            prevBtn.setAttribute('disabled', true)
        }else{
            prevBtn.removeAttribute('disabled');
        }
        if(lastCardVisible){
            nextBtn.setAttribute('disabled', true)
            prevBtn.removeAttribute('disabled');
        }else{
            nextBtn.removeAttribute('disabled')
        }
    }
            
    let value = 0;
    
    prevBtn.setAttribute('disabled', true)
    nextBtn.addEventListener('click', () => {
        setTimeout(check, 250);
        value -= 263;
        cardStage.style.transform = `translateX(${value}px)`;
    })
    
    prevBtn.addEventListener('click', () => {
        setTimeout(check, 250);
        value += 263;
        cardStage.style.transform = `translateX(${value}px)`;
    })
    
    check();
}

function country() {
    let dropdownArea = document.querySelector('.country-dropdown');
    let dropdownContent = document.querySelector('.country-dropdown-content');
    let dropdownValue = document.querySelectorAll('.country');
    dropdownArea.addEventListener('click', (e) => {
        dropdownContent.classList.toggle('show');
    })
    
    dropdownValue.forEach(values => {
        values.addEventListener('click', (e) => {
            let arr = [...values.children];
            return updateCountry(arr);
        })
    });
}

function updateCountry(arr){
    arr.forEach(value => {
        if(value.tagName == "IMG"){
            let src = value.getAttribute('src');
            let srcset = value.getAttribute('srcset');
            let imgUpdate = document.querySelector('.flag-img-display');
            imgUpdate.setAttribute('src', src);
            imgUpdate.setAttribute('srcset', srcset);
        }
        let nameUpdate = document.querySelector('.flag-name-display');
        nameUpdate.textContent = value.textContent;
    });
}

function sidebar(){
    let games = document.querySelector('.games');
    let gamesMenu = document.querySelector('.sidebar-games');
    let categories = document.querySelector('.categories');
    let categoriesLink = document.querySelector('.categories-links');

    games.addEventListener('click', () => {
        games.classList.toggle('rotate');
        gamesMenu.classList.toggle('hide');
        categoriesLink.classList.toggle('hide');
        if(gamesMenu.classList.contains('hide')){
            categoriesLink.classList.add('hide');
        }else{
            categoriesLink.classList.remove('hide');
        }
        if(categoriesLink.classList.contains('hide')){
            categories.classList.add('rotate');
        }else{
            categories.classList.remove('rotate');
        }
    })

    categories.addEventListener('click', () => {
        categories.classList.toggle('rotate');
        categoriesLink.classList.toggle('hide');
    })

    let gameCategories = document.querySelectorAll('.category-item');
    gameCategories.forEach(gameCategory => {
        gameCategory.addEventListener('click', () => {
            gameCategory.classList.add('active');
            let allElements = [...gameCategories];
            allElements.filter(e => {
                if(e !== gameCategory){
                    e.classList.remove('active');
                }
            })
        })
    });
}

function pages(){
    let sections = [...document.querySelectorAll('main .body')];
    let allPages = [...document.querySelectorAll('.nav-left-link')].slice(0,-1);
    allPages.forEach((page,i) => {
        page.addEventListener('click', () => {
            page.classList.add('active');
            allPages.filter(other => {
                if(other != page){
                    other.classList.remove('active');
                }
            })
            sections[i+1].classList.add('active');
            sections.filter(section => {
                if(section != sections[i+1]){
                    section.classList.remove('active');
                }
            })

        })
    });
}


window.addEventListener('load', () => {
    country();
    sidebar();
    createWeeklyQuest();
    slider();
    pages();
})