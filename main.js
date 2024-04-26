//! SLIDER
let testimonialsBottom = document.getElementById("testimonialsBottom")
let slider = document.getElementById("slider")
let sliderCards = document.getElementsByClassName("sliderCard");
let translateXValue = 0;
let sliderDigit;
sliderDigit = Math.floor(testimonialsBottom.offsetWidth / sliderCards[0].offsetWidth);
let isOpenMenu = false;
let menu = document.getElementsByClassName('menu')[0];
setInterval(() => {
    if (sliderDigit == sliderCards.length) {
        sliderDigit = Math.floor(testimonialsBottom.offsetWidth / sliderCards[0].offsetWidth);
        translateXValue = 0;
    }
    else {
        translateXValue += Number(sliderCards[0].offsetWidth) + 10;
        sliderDigit += 1;
    }
    slider.style.transform = `translateX(${-translateXValue}px)`
}, 3000);

//! -- SLIDER

//! ABOUT

let age = document.getElementById("age");
let date = new Date();
age.textContent = date.getFullYear() - 2002

//! -- ABOUT

//! FACTS

let happyClients = document.getElementsByClassName("happyClients")[0];
happyClients.textContent = "0"
let projectCount = document.getElementsByClassName("projectCount");
for (let i = 0; i < projectCount.length; i++) {
    projectCount[i].textContent = "24"
}
let supportCount = document.getElementsByClassName("supportCount")[0];
supportCount.textContent = "0"
let viewersCount = document.getElementsByClassName("viewersCount")[0];
viewersCount.textContent = "0"

let happyClientsSpan = document.getElementById("happyClientsSpan");
let supportCountSpan = document.getElementById("supportCountSpan");
let viewersCountSpan = document.getElementById("viewersCountSpan");

if (happyClients.textContent == 0) {
    happyClientsSpan.textContent = "Unknown";
} else {
    happyClientsSpan.textContent = "We have 25 clients who satisfied with us"
}

if (supportCount.textContent == 0) {
    supportCountSpan.textContent = "Unknown";
} else {
    supportCountSpan.textContent = "We have 25 clients who support us"
}

if (viewersCount.textContent == 0) {
    viewersCountSpan.textContent = "Unknown";
} else {
    viewersCountSpan.textContent = "We have 25 viewers"
}

//! -- FACTS

//! CONTACT

let typeInputs = document.getElementsByClassName("typeInput");
for (let i = 0; i < typeInputs.length; i++) {
    typeInputs[i].addEventListener('focus', () => {
        typeInputs[i].style.outline = "solid 1px blue";
    })
    typeInputs[i].addEventListener("blur", function () {
        typeInputs[i].style.outline = "solid 1px lightgray";
    })
}

//! -- CONTACT

//! MY PHOTO SECTION

let typed = document.getElementById('typed');
let cursor = document.getElementById('cursor');
typed.textContent = " ";
let typedArr = typed.getAttribute("data-typed-items").split(",");
let a = 0;
let typeInterval;
let choise = false;

function restartTypeInterval() {
    typeInterval = setInterval(() => {
        if (a !== typedArr[0].length) {
            typed.textContent += typedArr[0][a];
        } else {
            let cursorInteval = setInterval(() => {
                if (cursor.style.display === "block") {
                    cursor.style.display = "none"
                } else {
                    cursor.style.display = "block"
                }
            }, 200);
            clearInterval(typeInterval);
            setTimeout(() => {
                clearInterval(cursorInteval)
                let removeInterval = setInterval(() => {
                    if (typed.textContent.length !== 0) {
                        typed.textContent = typed.textContent.slice(0, a - 1);
                        a--;
                    } else {
                        let cursorInteval = setInterval(() => {
                            if (cursor.style.display === "block") {
                                cursor.style.display = "none"
                            } else {
                                cursor.style.display = "block"
                            }
                        }, 200);
                        clearInterval(removeInterval);
                        setTimeout(() => {
                            clearInterval(cursorInteval)
                            setTimeout(() => {
                                restartTypeInterval();
                            }, 1000);
                        }, 1000);
                    }
                }, 200);
            }, 1000);
        }
        a++;
    }, 200);
}
restartTypeInterval();
//! -- MY PHOTO SECTION

//! LEFT

let hMenu = document.getElementById('hMenu');
let dots = document.getElementsByClassName('dot');
hMenu.addEventListener('click', function () {
    isOpenMenu = !isOpenMenu;
    if (isOpenMenu == true) {
        dots[0].style.left = "32px";
        dots[1].style.left = "auto";
        dots[1].style.width = "0";
        dots[2].style.left = "32px";
        setTimeout(() => {
            dots[0].style.transform = "rotate(45deg)";
            dots[0].style.width = "18px";
            dots[0].style.borderRadius = "2px";
            dots[0].style.height = "3px";
            dots[0].style.left = "26px";

            dots[2].style.transform = "rotate(-45deg)";
            dots[2].style.width = "18px";
            dots[2].style.borderRadius = "2px";
            dots[2].style.height = "3px";
            dots[2].style.left = "26px";
        }, 500);
        menu.style.display = "flex";
        menu.style.width = "100%";
        menu.style.flexDirection = "column";
        menu.style.alignItems = "center";
        menu.style.position = "absolute";
        menu.style.left = "0px";
        menu.style.zIndex = "1";
        menu.style.top = "30px";
        menu.style.backgroundColor = "black";
        menu.style.gap = "5px";
    } else {
        dots[0].style.left = "8px";
        dots[0].style.width = "6px";
        dots[0].style.height = "6px";
        dots[0].style.borderRadius = "50%";
        dots[1].style.left = "22px";
        dots[1].style.width = "28px";
        dots[2].style.left = "58px";
        dots[2].style.width = "6px";
        dots[2].style.height = "6px";
        dots[2].style.borderRadius = "50%";

        menu.style.display = "none";
    }
})

//! -- LEFT

//! RESPONSIVE NAVBAR
var stylesheet = document.querySelector('link[href="./mediaQuery/responsive.css"]');
let navButtons = document.getElementsByClassName("nav_button");
let responsive_navbar = document.getElementsByClassName("responsive_navbar")[0];
let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];
let personal_info = document.getElementsByClassName("personal_info")[0];
let website = document.getElementsByClassName("website")[0];
let copyright = document.getElementsByClassName("copyright")[0];
let menu_lists = document.getElementsByClassName("menu_list");
let aboutPicture = document.getElementsByClassName("aboutPicture")[0];
let aboutInfo = document.getElementsByClassName("aboutInfo")[0];
let cards = document.querySelectorAll(".card");

let infos = document.getElementsByClassName("info");
// let cards = document.getElementsByClassName("card");

let form = document.getElementsByTagName("form")[0];
let gmap_canvas = document.getElementsByTagName("gmap_canvas")[0];

let nameContainer = document.getElementById("name");
let pp = document.getElementById("pp");
let myPhoto = document.getElementById("myPhoto");
let aboutmyself = document.getElementById("aboutmyself");
let aboutBottom = document.getElementById("aboutBottom");
let factsTop = document.getElementById("factsTop");
let portfolio = document.getElementById("portfolio");
let portfolioTop = document.getElementById("portfolioTop");
let portfoliosImages = document.getElementById("portfoliosImages");
let servicesTop = document.getElementById("servicesTop");
let servicesBottom = document.getElementById("servicesBottom");
let contactInfo = document.getElementById("contactInfo");
let contactBottom = document.getElementById("contactBottom");
let testimonialsTop = document.getElementById("testimonialsTop");

let style = document.createElement('style');

for (let i = 0; i < menu_lists.length; i++) {
    menu_lists[i].addEventListener('click', function () {
        menu_lists[i].children[0].style.color = "#00A6EB";
        for (let j = 0; j < menu_lists.length; j++) {
            if (j != i) {
                menu_lists[j].children[0].style.color = "white";
            }
        }
    })
}
menu_lists[0].addEventListener("click", function () {
    document.body.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
    })
})

navButtons[0].addEventListener("click", function () {
    navButtons[0].style.color = "white";
    navButtons[1].style.color = "#7191AD";
    navButtons[2].style.color = "#7191AD";

    document.body.style.width = "1400px";
    website.style.width = "100%";
    right.style.width = "82%";

    website.style.flexDirection = "row";
    style.innerHTML = "";
    menu.style.position = "static";

    //! LEFT
    left.style.width = "18%";
    left.style.height = "auto";
    left.style.flexDirection = "column";
    left.style.padding = "20px";
    left.style.gap = "20px";
    left.style.justifyContent = "flex-start";
    personal_info.style.width = "100%";
    personal_info.style.flexDirection = "column";
    personal_info.style.alignItems = "center";
    personal_info.style.gap = "20px";
    pp.style.display = "flex";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    hMenu.style.display = "none";
    copyright.style.display = "flex"
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].style.width = "100%"
        menu.children[i].style.height = "60px"
    }

    //! ABOUT
    aboutBottom.style.flexDirection = "row";
    aboutPicture.style.width = "350px";
    aboutPicture.style.height = "400px";
    aboutInfo.style.width = "800px";
    aboutInfo.style.height = "400px";
    aboutmyself.style.flexDirection = "row";
    aboutmyself.style.flexWrap = "wrap";
    for (let i = 0; i < aboutmyself.children.length; i++) {
        aboutmyself.children[i].style.width = "45%"
    }

    //! FACTS
    factsTop.style.padding = "15px 0 15px 20px"
    factsTop.style.alignItems = "flex-start"
    factsTop.style.gap = "40px"
    factsTop.children[1].style.textAlign = "left"
    factsBottom.style.flexWrap = "nowrap"
    factsBottom.style.gap = "20px"
    factsBottom.style.padding = "0 10px"
    for (let i = 0; i < factsBottom.children.length; i++) {
        factsBottom.children[i].style.width = "23%";
        factsBottom.children[i].style.padding = "10px";
        factsBottom.children[i].children[1].style.textAlign = "left";
    }

    //! PORTFOLIO
    portfolio.style.left = "auto";
    portfolio.style.padding = "0 0 100px 0";
    portfolioTop.style.alignItems = "flex-start";
    portfolioTop.children[0].style.textAlign = "left";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = "30%"
        cards[i].style.height = "300px"
    }

    //! SERVICES
    servicesTop.style.gap = "40px"
    servicesTop.style.alignItems = "flex-start"
    servicesTop.children[1].style.textAlign = "left"
    servicesBottom.style.flexWrap = "wrap"
    servicesBottom.style.flexDirection = "row"
    servicesBottom.style.alignItems = "flex-start"
    for (let i = 0; i < servicesBottom.children.length; i++) {
        servicesBottom.children[i].style.width = "33%"
        servicesBottom.children[i].style.flexDirection = "row"
        servicesBottom.children[i].style.alignItems = "flex-start"
        servicesBottom.children[i].children[1].style.textAlign = "left"
    }

    //! TESTIMONIALS
    testimonialsTop.style.padding = "45px 0 45px 20px";
    testimonialsTop.style.gap = "40px";
    // testimonialsTop.style.flexDirection = "column";
    testimonialsTop.style.justifyContent = "flex-start";
    testimonialsTop.style.alignItems = "flex-start";
    testimonialsTop.children[1].style.textAlign = "left";
    testimonials.style.width = "1148px";
    testimonialsTop.style.width = "100%";
    testimonialsBottom.style.width = "1020px";
    testimonialsBottom.style.justifyContent = "center";
    slider.style.width = "100%";
    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.width = "333px";
        slider.children[i].style.minWidth = "333px";
        slider.children[i].children[0].style.width = "301px";
    }

    //! CONTACT
    contactBottom.style.flexDirection = "row";
    contactInfo.style.width = "50%";
    contactInfo.style.height = "500px";
    contactInfo.style.gap = "20px";
    contactInfo.style.padding = "20px";
    contactInfo.style.justifyContent = "flex-start";
    contactInfo.style.alignItems = "flex-start";
    for (let i = 0; i < contactInfo.children.length; i++) {
        contactInfo.children[i].style.width = "100%";
    }
    form.style.width = "100%";
    form.style.padding = "0";
    form.style.flexWrap = "wrap";
    // form.style.gap = "1px";
    for (let i = 0; i < form.children.length; i++) {
        form.children[i].style.width = "auto";
    }
    form.children[0].style.width = "48%";
    form.children[1].style.width = "48%";
    form.children[2].style.width = "100%";
    form.children[3].style.width = "100%";
    form.children[4].style.width = "120px";
})
navButtons[1].addEventListener("click", function () {
    navButtons[0].style.color = "#7191AD";
    navButtons[1].style.color = "white";
    navButtons[2].style.color = "#7191AD";

    document.body.style.width = "900px";

    //! TESTIMONIALS
    for (let i = 0; i < sliderCards.length; i++) {
        sliderCards[i].style.minWidth = "400px";
        sliderCards[i].children[0].style.width = "360px";
    }

    testimonialsBottom.style.width = "800px"

    //! LEFT & RESPONSIVE_NAVBAR
    responsive_navbar.style.padding = "0 80px";
    left.style.justifyContent = "space-between";
    left.style.alignItems = "center";
    left.style.width = "100%";
    left.style.height = "fit-content";
    left.style.flexDirection = "row";
    left.style.padding = "0 80px";
    right.style.width = "100%";
    personal_info.style.width = "fit-content";
    personal_info.style.flexDirection = "row";
    personal_info.style.height = "fit-content";
    personal_info.style.padding = "0";
    pp.style.display = "none";
    nameContainer.style.display = "none";
    nameContainer.style.fontSize = "22px";
    hMenu.style.display = "flex";
    menu.style.display = "none";
    dots[0].style.left = "8px";
    dots[0].style.width = "6px";
    dots[0].style.height = "6px";
    dots[0].style.borderRadius = "50%";
    dots[1].style.left = "22px";
    dots[1].style.width = "28px";
    dots[2].style.left = "58px";
    dots[2].style.width = "6px";
    dots[2].style.height = "6px";
    dots[2].style.borderRadius = "50%";
    isOpenMenu = false;
    for (let i = 0; i < menu_lists.length; i++) {
        menu_lists[i].style.width = "fit-content";
        menu_lists[i].style.height = "fit-content";
        menu_lists[i].style.padding = "5px 10px";
    }
    copyright.style.display = "none"
    website.style.flexDirection = "column"

    //! MY PHOTO
    myPhoto.style.backgroundPosition = "0 -100px"

    //! ABOUT
    aboutBottom.style.flexDirection = "row";
    aboutPicture.style.width = "525px"
    aboutPicture.style.height = "600px"
    aboutInfo.style.width = "625px"
    aboutInfo.style.height = "auto"
    aboutInfo.style.gap = "10px"
    aboutmyself.style.flexWrap = "nowrap"
    aboutmyself.style.flexDirection = "column"
    for (let i = 0; i < aboutmyself.children.length; i++) {
        aboutmyself.children[i].style.width = "100%"
    }

    //! SKILLS
    skillsBottom.style.flexDirection = "column";
    skillsBottom.style.gap = 0;
    skillsBottom.children[0].style.width = "100%";
    skillsBottom.children[0].style.height = "auto";
    skillsBottom.children[0].style.padding = 0;
    skillsBottom.children[0].style.flexDirection = "column";
    skillsBottom.children[1].style.width = "100%";
    skillsBottom.children[1].style.height = "auto";
    skillsBottom.children[1].style.padding = 0;
    skillsBottom.children[1].style.flexDirection = "column";
    for (let i = 0; i < skillsBottom.children[0].length; i++) {
        skillsBottom.children[0].style.width = "100%";
    }
    for (let i = 0; i < skillsBottom.children[1].length; i++) {
        skillsBottom.children[1].style.width = "100%";
    }

    //! PORTFOLIO
    for (let i = 0; i < portfoliosImages.children.length; i++) {
        portfoliosImages.children[i].style.width = "48%";
        portfoliosImages.children[i].style.height = "400px";
        portfoliosImages.children[i].style.backgroundPosition = "-100px 0";
    }

    //! SERVICES
    servicesBottom.style.flexWrap = "wrap";
    servicesBottom.style.flexDirection = "row";
    for (let i = 0; i < servicesBottom.children.length; i++) {
        servicesBottom.children[i].style.width = "33%";
    }

    //! CONTACT
    contactBottom.children[0].style.width = "50%";
    contactBottom.children[0].style.flexDirection = "column";
    contactBottom.children[0].style.height = "auto";
    contactBottom.children[0].children[0].style.width = "50%";
    for (let i = 0; i < contactBottom.children[0].children[0].children.length; i++) {
        contactBottom.children[0].children[0].children[i].children[1].children[0].style.fontSize = "18px";
        contactBottom.children[0].children[0].children[i].children[1].children[1].style.fontSize = "16px";
    }
    // contactBottom.children[0].children[1].style.width = "50%";
    contactBottom.children[0].children[1].children[0].style.width = "300px";
    contactBottom.children[0].children[1].children[0].children[0].style.width = "300px";

    form.style.width = "100%";
    form.style.padding = "0";
    form.style.flexWrap = "wrap";
    // form.style.gap = "1px";
    for (let i = 0; i < form.children.length; i++) {
        form.children[i].style.width = "auto";
    }
    form.children[0].style.width = "47%";
    form.children[1].style.width = "47%";
    form.children[2].style.width = "100%";
    form.children[3].style.width = "100%";
    form.children[4].style.width = "120px";
})
navButtons[2].addEventListener("click", function () {
    navButtons[0].style.color = "#7191AD";
    navButtons[1].style.color = "#7191AD";
    navButtons[2].style.color = "white";

    document.body.style.width = "600px";
    responsive_navbar.style.padding = "0 80px";
    left.style.justifyContent = "space-between";
    left.style.alignItems = "center";
    left.style.width = "100%";
    left.style.height = "fit-content";
    left.style.flexDirection = "row";
    left.style.padding = "0 80px";
    right.style.width = "100%";
    personal_info.style.width = "fit-content";
    personal_info.style.flexDirection = "row";
    personal_info.style.height = "fit-content";
    personal_info.style.padding = "0";
    pp.style.display = "none";
    nameContainer.style.display = "none";
    nameContainer.style.fontSize = "22px";
    hMenu.style.display = "flex";
    menu.style.display = "none";
    dots[0].style.left = "8px";
    dots[0].style.width = "6px";
    dots[0].style.height = "6px";
    dots[0].style.borderRadius = "50%";
    dots[1].style.left = "22px";
    dots[1].style.width = "28px";
    dots[2].style.left = "58px";
    dots[2].style.width = "6px";
    dots[2].style.height = "6px";
    dots[2].style.borderRadius = "50%";
    isOpenMenu = false;
    for (let i = 0; i < menu_lists.length; i++) {
        menu_lists[i].style.width = "fit-content";
        menu_lists[i].style.height = "fit-content";
        menu_lists[i].style.padding = "5px 10px";
    }
    copyright.style.display = "none";
    website.style.flexDirection = "column";

    //! MY PHOTO
    myPhoto.style.backgroundPosition = "0 -100px";

    //! ABOUT
    aboutBottom.style.flexDirection = "column";
    aboutBottom.style.padding = "0 40px";
    aboutPicture.style.width = "100%";
    aboutPicture.style.height = "600px";
    aboutPicture.style.backgroundRepeat = "no-repeat";
    aboutInfo.style.width = "100%";
    aboutInfo.style.height = "fit-content";
    aboutInfo.style.gap = "20px";
    aboutmyself.style.flexWrap = "nowrap";
    aboutmyself.style.flexDirection = "column";
    for (let i = 0; i < infos.length; i++) {
        infos[i].style.width = "100%";
    }

    //! FACTS
    factsTop.style.padding = "10px 0"
    factsTop.style.alignItems = "center"
    factsTop.style.gap = "10px"
    // window.getComputedStyle(factsTop.children[0], "::before").setProperty("display", "none")
    style.innerHTML = `
    body .website .right .rightContainer .rightInside #facts #factsTop h1::after {content:""; display: none; }
    body .website .right .rightContainer .rightInside #portfolio #portfolioTop h1::after{
        display:none;}
    body .website .right .rightContainer .rightInside #services #servicesTop h1::after{
        display:none;}
    body .website .right .rightContainer .rightInside #testimonials #testimonialsTop h1::after{
        display:none;}
    `;
    document.head.appendChild(style);
    factsTop.children[1].style.textAlign = "center"
    factsBottom.style.flexWrap = "wrap"
    factsBottom.style.gap = "20px"
    factsBottom.style.padding = "0 10px"
    for (let i = 0; i < factsBottom.children.length; i++) {
        factsBottom.children[i].style.width = "40%";
        factsBottom.children[i].style.padding = "0";
        factsBottom.children[i].children[1].style.textAlign = "center";
    }

    //! PORTFOLIO
    portfolio.style.left = 0;
    portfolio.style.padding = "50px 10px";
    portfolioTop.style.alignItems = "center";
    portfolioTop.children[0].style.textAlign = "center";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = "100%"
        cards[i].style.height = "350px"
    }

    //! SERVICES
    servicesTop.style.gap = "10px"
    servicesTop.style.alignItems = "center"
    servicesTop.children[1].style.textAlign = "center"
    servicesBottom.style.flexWrap = "nowrap"
    servicesBottom.style.flexDirection = "column"
    servicesBottom.style.alignItems = "center"
    for (let i = 0; i < servicesBottom.children.length; i++) {
        servicesBottom.children[i].style.width = "90%"
        servicesBottom.children[i].style.flexDirection = "column"
        servicesBottom.children[i].style.alignItems = "center"
        servicesBottom.children[i].children[1].style.textAlign = "center"
    }

    //! TESTIMONIALS
    testimonials.style.paddingBottom = 0;
    testimonialsTop.style.padding = "10px 0";
    testimonialsTop.style.gap = "10px";
    testimonialsTop.style.justifyContent = "center";
    testimonialsTop.style.alignItems = "center";
    testimonialsTop.children[1].style.textAlign = "center";
    testimonialsBottom.style.width = "400px";

    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.minWidth = "400px";
        slider.children[i].children[0].style.width = "360px";
    }

    //! CONTACT
    contactBottom.style.flexDirection = "column";
    contactBottom.children[0].style.flexDirection = "column";
    contactBottom.children[0].children[1].children[0].children[0].style.width = "400px";
    contactInfo.style.width = "100%";
    contactInfo.style.height = "auto";
    contactInfo.style.gap = "20px";
    contactInfo.style.padding = "20px 0";
    contactInfo.style.justifyContent = "flex-start";
    contactInfo.style.alignItems = "center";
    for (let i = 0; i < contactInfo.children.length; i++) {
        contactInfo.children[i].style.width = "fit-content";
    }
    form.style.width = "100%";
    form.style.padding = "10px";
    for (let i = 0; i < form.children.length; i++) {
        form.children[i].style.width = "100%";
    }
})

//! -- RESPONSIVE NAVBAR

if (document.body.offsetWidth < 1400) {
    responsive_navbar.style.display = "none"
}
let choiseForPortfolioArr = false;
let wholePortfolioArr;
if (!choiseForPortfolioArr) {
    wholePortfolioArr = portfoliosImages.children;
    wholePortfolioArr = Array.prototype.slice.call(wholePortfolioArr)
}
let controlButtons = document.getElementById("controlButtons");
controlButtons.children[0].addEventListener('click', function () {
    controlButtons.children[0].style.color = "#00A6EB";
    for (let i = 0; i < controlButtons.children.length; i++) {
        if (i != 0) {
            controlButtons.children[i].style.color = "black";
        }
    }
    for (let i = 0; i < wholePortfolioArr.length; i++) {
        portfoliosImages.append(wholePortfolioArr[i]);
    }
    choiseForPortfolioArr = true;
})
controlButtons.children[1].addEventListener('click', function () {
    controlButtons.children[1].style.color = "#00A6EB";
    for (let i = 0; i < controlButtons.children.length; i++) {
        if (i != 1) {
            controlButtons.children[i].style.color = "black";
        }
    }
    portfoliosImages.innerHTML = "";
    cards.forEach((el) => {
        if (el.getAttribute("data-cardType") === "sport") {
            portfoliosImages.append(el);
        }
    })
    choiseForPortfolioArr = true;
})
controlButtons.children[2].addEventListener('click', function () {
    controlButtons.children[2].style.color = "#00A6EB";
    for (let i = 0; i < controlButtons.children.length; i++) {
        if (i != 2) {
            controlButtons.children[i].style.color = "black";
        }
    }
    portfoliosImages.innerHTML = "";
    cards.forEach((el) => {
        if (el.getAttribute("data-cardType") === "card") {
            portfoliosImages.append(el);
        }
    })
    choiseForPortfolioArr = true;
})
controlButtons.children[3].addEventListener('click', function () {
    controlButtons.children[3].style.color = "#00A6EB";
    for (let i = 0; i < controlButtons.children.length; i++) {
        if (i != 3) {
            controlButtons.children[i].style.color = "black";
        }
    }
    portfoliosImages.innerHTML = "";
    cards.forEach((el) => {
        if (el.getAttribute("data-cardType") === "masculinity") {
            portfoliosImages.append(el);
        }
    })
    choiseForPortfolioArr = true;
})