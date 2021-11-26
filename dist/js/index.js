let gameCards=[{gameName:"PUBG Mobile",src:"images/pubg.jpg",srcset:"images/pubg.jpg 1x, images/pubg@2x.jpg 2x, images/pubg@3x.jpg 3x",category:"Action",description:"Deal 5000 damage to enemies with grenades.",points:100,energy:300},{gameName:"Mayhem Combat",src:"images/mayhem.jpg",srcset:"images/mayhem.jpg 1x, images/mayhem@2x.jpg 2x, images/mayhem@3x.jpg 3x",category:"Action",description:"Win 10 games per character Mike.",points:70,energy:200},{gameName:"Burrito Bison: Launcha Libre",src:"images/BurritoBison.jpg",srcset:"images/BurritoBison.jpg 1x, images/BurritoBison@2x.jpg 2x, images/BurritoBison@3x.jpg 3x",category:"Action",description:"Earn 10,000 сoins.",points:150,energy:400},{gameName:"Battlelands Royale",src:"images/BattlelandsRoyale.jpg",srcset:"images/BattlelandsRoyale.jpg 1x, images/BattlelandsRoyale@2x.jpg 2x, images/BattlelandsRoyale@3x.jpg 3x",category:"Action",description:"Eliminate 10 opponents.",points:100,energy:300},{gameName:"PUBG Mobile",src:"images/pubg.jpg",srcset:"images/pubg.jpg 1x, images/pubg@2x.jpg 2x, images/pubg@3x.jpg 3x",category:"Action",description:"Deal 5000 damage to enemies with grenades.",points:100,energy:300},{gameName:"Mayhem Combat",src:"images/mayhem.jpg",srcset:"images/mayhem.jpg 1x, images/mayhem@2x.jpg 2x, images/mayhem@3x.jpg 3x",category:"Action",description:"Win 10 games per character Mike.",points:70,energy:200},{gameName:"Burrito Bison: Launcha Libre",src:"images/BurritoBison.jpg",srcset:"images/BurritoBison.jpg 1x, images/BurritoBison@2x.jpg 2x, images/BurritoBison@3x.jpg 3x",category:"Action",description:"Earn 10,000 сoins.",points:150,energy:400},{gameName:"Battlelands Royale",src:"images/BattlelandsRoyale.jpg",srcset:"images/BattlelandsRoyale.jpg 1x, images/BattlelandsRoyale@2x.jpg 2x, images/BattlelandsRoyale@3x.jpg 3x",category:"Action",description:"Eliminate 10 opponents.",points:100,energy:300}];function WeeklyQuest(e){let t=document.querySelector(".card-stage"),a=document.createElement("div");a&&(a.classList.add("card"),t.appendChild(a));let s=document.createElement("div");s&&(s.classList.add("poster"),a.appendChild(s));let i=document.createElement("img");i&&(i.classList.add("game-img"),i.setAttribute("src",gameCards[e].src),i.setAttribute("srcset",gameCards[e].srcset),i.setAttribute("Alt",gameCards[e].gameName),s.appendChild(i));let r=document.createElement("span");r&&(r.classList.add("game-category-badge","btn-badge"),r.textContent="Action",s.appendChild(r));let n=document.createElement("div");n&&(n.classList.add("card-description"),a.appendChild(n));let c=document.createElement("p");c&&(c.classList.add("game-name"),c.textContent=""+gameCards[e].gameName,n.appendChild(c));let o=document.createElement("p");o&&(o.classList.add("game-description"),o.textContent=""+gameCards[e].description,n.appendChild(o));let l=document.createElement("div");l&&(l.classList.add("score-wrapper"),l.innerHTML=`
            <img src="images/flower-shape.svg" width="13" height="12" class="shape-flower" alt="flower-shape" />
            <span class="score">+${gameCards[e].points}</span>
            <img src="images/thunder-shape.svg" width="7" height="12" class="shape-thunder" alt="Thunder-shape" />
            <span class="score">-${gameCards[e].energy}</span>
            <button class="btn-badge">Accept</button>
        `,a.appendChild(l))}function createWeeklyQuest(){for(let e=0;e<gameCards.length;e++)WeeklyQuest(e)}function isInViewport(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function slider(){let e=document.querySelector(".card-stage");var t=document.querySelectorAll(".card");let a=document.querySelector(".navigations .nav-left"),s=document.querySelector(".navigations .nav-right"),i=[...t],r=i.pop();function n(){var e=isInViewport(r);0==c?a.setAttribute("disabled",!0):a.removeAttribute("disabled"),e?(s.setAttribute("disabled",!0),a.removeAttribute("disabled")):s.removeAttribute("disabled")}let c=0;a.setAttribute("disabled",!0),s.addEventListener("click",()=>{setTimeout(n,250),c-=263,e.style.transform=`translateX(${c}px)`}),a.addEventListener("click",()=>{setTimeout(n,250),c+=263,e.style.transform=`translateX(${c}px)`}),n()}function country(){let e=document.querySelector(".country-dropdown"),t=document.querySelector(".country-dropdown-content"),a=document.querySelectorAll(".country");e.addEventListener("click",e=>{t.classList.toggle("show")}),a.forEach(t=>{t.addEventListener("click",e=>{return updateCountry([...t.children])})})}function updateCountry(e){e.forEach(t=>{if("IMG"==t.tagName){var a=t.getAttribute("src"),s=t.getAttribute("srcset");let e=document.querySelector(".flag-img-display");e.setAttribute("src",a),e.setAttribute("srcset",s)}let e=document.querySelector(".flag-name-display");e.textContent=t.textContent})}function sidebar(){let e=document.querySelector(".games"),t=document.querySelector(".sidebar-games"),a=document.querySelector(".categories"),s=document.querySelector(".categories-links");e.addEventListener("click",()=>{e.classList.toggle("rotate"),t.classList.toggle("hide"),s.classList.toggle("hide"),t.classList.contains("hide")?s.classList.add("hide"):s.classList.remove("hide"),s.classList.contains("hide")?a.classList.add("rotate"):a.classList.remove("rotate")}),a.addEventListener("click",()=>{a.classList.toggle("rotate"),s.classList.toggle("hide")});let i=document.querySelectorAll(".category-item");i.forEach(t=>{t.addEventListener("click",()=>{t.classList.add("active");let e=[...i];e.filter(e=>{e!==t&&e.classList.remove("active")})})})}function pages(){let s=[...document.querySelectorAll("main .body")],e=[...document.querySelectorAll(".nav-left-link")].slice(0,-1);e.forEach((t,a)=>{t.addEventListener("click",()=>{t.classList.add("active"),e.filter(e=>{e!=t&&e.classList.remove("active")}),s[a+1].classList.add("active"),s.filter(e=>{e!=s[a+1]&&e.classList.remove("active")})})})}window.addEventListener("load",()=>{country(),sidebar(),createWeeklyQuest(),slider(),pages()});