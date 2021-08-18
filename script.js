// const btn=document.querySelector("class")

// for theme changing 
const btn = document.querySelector(".btn-toggler");

const theme = document.querySelector("#theme");

btn.addEventListener("click", function () {

    if (theme.getAttribute("href") == "css/style.css") {
        theme.href = "css/dark_style.css";
    } else {
        theme.href = "css/style.css"
    }
});

// For minimization of code in index.html

const courseArray = [
    " B.TECT",
    " DIPLOMA ENGINEERING",
    " B.PHARMA",
    " D.PHARMA",
    " BCA",
    " BBA",
    " BAJMA",
    " MCA",
    " MBA",
    " M.PHARMA",
    " M.TECH"
];

const infraArray = [
    " Genreal Infra",
    " Learning Infra",
    " Infra Gallery"
];

const lifeAtUgiArray = [
    " Blogs",
    " Campus Buzz",
    " Events",
    " Photo Gallery",
    " United In News",
    " Students Corner"
];

const downloadsArray = [
    " Admission Forms",
    " Scolarship Form",
    " Bank Pay In Slip",
    " The Unitian Newsletter"
]

const carouselImagesLocations = [
    "./images/Slider/United-at-a-glance-1356361643.jpg",
    "./images/Slider/Infosys-Placement-Drive-2019-20-878417419.jpg",
    "./images/Slider/Placement-2019-20-Batch-1921597152.jpg",
    "./images/Slider/Foreign-Tie-ups-854896788.jpg",
    "./images/Slider/If-you-WILL-you-CAN...-905460654.jpg",
    "./images/Slider/Founders-Day-787897973.jpg",
    "./images/Slider/STATE-OF-THE-ART-AUDITORIUMS-143564381.jpg",
    "./images/Slider/Placement-2019-20-Batch-1947316434.jpg",
    "./images/Slider/Awards-and-Recognitions-1764803048.jpg",
    "./images/Slider/Awe-Inspiring-Academic-Environment-876429279.jpg",
    "./images/Slider/United-at-a-glance-1356361643.jpg",
    "./images/Slider/Super-Achievers-986470333.jpg",
    "./images/Slider/Online-Teaching-Learning-Initiatives-1150171020.jpg",
    "./images/Slider/Placement-2019-20-Batch-1960819361.jpg",
    "./images/Slider/Commited-to-Quality-and-Results-1387102524.jpg",
    "./images/Slider/Education-is-the-passport-to-the-future-for-tomorrow-belongs-to-those-who-prepare-for-it-today.-605324052.jpg",
    "./images/Slider/Placement-2019-20-Batch-2032526664.jpg"
];

const marqueeArray = [
    "./images/moving/logo-accenture.jpg",
    "./images/moving/logo-alstom.jpg",
    "./images/moving/logo-hcl.jpg",
    "./images/moving/logo-hdfc.jpg",
    "./images/moving/logo-icici.jpg",
    "./images/moving/logo-indian-navy.jpg",
    "./images/moving/logo-infosys.jpg",
    "./images/moving/logo-jaro.jpg",
    "./images/moving/logo-kotak.jpg",
    "./images/moving/logo-l&l-infotech.jpg",
    "./images/moving/logo-l&l-infra.jpg",
    "./images/moving/logo-lg.jpg",
    "./images/moving/logo-mahindra.jpg",
    "./images/moving/logo-oracle.jpg",
    "./images/moving/logo-syntel.jpg",
    "./images/moving/logo-tcs.jpg",
    "./images/moving/logo-wipro.jpg"
]

const studentTestimonialArray = [{
        images: "./images/StudentTestimonial/I-can-state-this-with-pride-and-joy-that-my-journey-with-United-Group-of-Institutions-at-UGI-Potentials-are-harnessed-Skills-are-developed-confidence-is-build-and-dream-is-realize.jpg",
        review: "I can state this with pride and joy that my journey with United Group of Institutions, at UGI Potentials are harnessed, Skills are developed, confidence is build and dream is reali...",
        name: "SHIKHAR SRIVASTAVA",
        designation: "Tata Consultancy and Infosys."
    },
    {
        images: "./images/StudentTestimonial/I-extend-my-heartfelt-gratitude-towards-esteemed-learned-and-dedicated-trainers-of-UGI-and-constant-support-care-and-concern-of-Dr.Divya-Bartaria-maam-and-whole-CRC-team-towards-b.jpg",
        review: "I extend my heartfelt gratitude towards esteemed learned and dedicated trainers of UGI and constant support ,care & concern of Dr.Divya Bartaria ma\'am & whole CRC team towards bet...",
        name: "ANAGHA AGRAWAL",
        designation: "INFOSYS"
    },
    {
        images: "./images/StudentTestimonial/I-truly-believe-in-myself-and-my-college-because-of-which-today-I-am-standing-at-the-success-point-of-my-life.-1683.png",
        review: "I truly believe in myself and my college because of which today I am standing at the success point of my life",
        name: "KOMAL SAHU",
        designation: "1st Rank in UPTU"
    },
    {
        images: "./images/StudentTestimonial/I-want-to-express-my-gratitude-towards-my-college-u-c-e-r-faculty-members-and-my-parents-who-continuously-motivated-me-and-supported-me-to-achieve-this-milestone-in-my-life.-75623.jpg",
        review: "I want to express my gratitude towards my college UCER faculty members and my parents who continuously motivated me and supported me to achieve this milestone in my life",
        name: "TANYA VERMA",
        designation: "AKTU Top 10 Rankers 04 Rank UCER(EI)"
    },
    {
        images: "./images/StudentTestimonial/I-would-specially-like-to-thank-my-parents-and-teachers-who-guided-me-and-worked-hard-with-me-because-of-whom-I-was-able-to-achieve-this-feat.-1620632972.jpg",
        review: "I would specially like to thank my parents and teachers who guided me and worked hard with me because of whom I was able to achieve this feat",
        name: "JAI JAISWAL",
        designation: "AKTU Top 10 Rankers 7 Rank UCER(ME)"
    },
    {
        images: "./images/StudentTestimonial/My-experience-at-united-has-been-truely-wonderful.-Firstly-i-want-to-thank-my-teacherguide-and-mentor-Rohit-Vishwakarma-sir-for-his-wonderful-guidance-.-I-also-want-to-thank-my-pr.jpg",
        review: "My-experience at-united-has-been-truely-wonderful.-Firstly-i-want-to-thank-my-teacherguide-and-mentor-Rohit-Vishwakarma-sir-for-his-wonderful-guidance-.-I-also-want-to-thank-my-pr",
        name: "MAHIMA BAHL",
        designation: "AKTU Final Top 10 Rank 8 MBA"
    },
    {
        images: "./images/StudentTestimonial/The-credit-of-achieving-credits-in-UPTU-subject-assessments-must-be-credited-to-the-incredible-Academics-at-UGI.-1693891222.png",
        review: "The credit of achieving credits in UPTU subject assessments must be credited to the incredible Academics at UGI.",
        name: "NIDHI SRIVASTAVA",
        designation: "UPTU Rank 4 with 84.64%"
    },
    {
        images: "./images/StudentTestimonial/The-journey-with-united-group-of-institutions-taught-me-how-to-deal-with-diverse-situations.-7772.png",
        review: "The journey with united group of institutions taught me how to deal with diverse situations.",
        name: "ANHINAV RANJAN SRIVASTAVA",
        designation: "Tops UPPCS"
    },
    {
        images: "./images/StudentTestimonial/The-MBA-program-at-UIM-has-helped-me-to-deepen-and-broaden-my-leadership-skills-and-focus-on-the-holistic-picture.The-facilities-environment-and-the-resources-here-are-much-better.jpg",
        review: "The MBA program at UIM has helped me to deepen and broaden my leadership skills, and focus on the holistic picture.The facilities, environment and the resources here are much bette...",
        name: "SHAKSHI GUPTA",
        designation: "Decathlon Sports India Pvt. Ltd."
    },
    {
        images: "./images/StudentTestimonial/Throughout-my-two-years-of-MBA-I-had-countless-opportunities-to-develop-analytical-skills-leadership-and-proactive-thinking-through-various-programs-and-events.-858640981.jpg",
        review: "Throughout my two years of MBA, I had countless opportunities to develop analytical skills, leadership and proactive thinking through various programs and events.",
        name: "SHAKSHI GULATI",
        designation: "Decathlon Sports India Pvt. Ltd."
    }
]

courseId = document.getElementById("courses");
infraId = document.getElementById("infra");
lifeAtUgiId = document.getElementById("lifeAtUgi");
downloadsId = document.getElementById("downloads");
marqueeId = document.getElementById("movingImages");
studentTestimonialId = document.getElementById("studentTestimonial");
carouselImagesId = document.getElementById("carouselImages");

courseArray.forEach(function (course) {
    courseId.innerHTML +=
        `<a class="dropdown-item dropdown-item-style" href="#"><i class="fas fa-star fa-spin"></i>${course}</a>`;
})

lifeAtUgiArray.forEach(function (lifeAtUgi) {
    lifeAtUgiId.innerHTML +=
        `<a class="dropdown-item dropdown-item-style" href="#"><i class="fas fa-star fa-spin"></i>${lifeAtUgi}</a>`;
})

infraArray.forEach(function (infras) {
    infraId.innerHTML +=
        `<a class="dropdown-item dropdown-item-style" href="#"><i class="fas fa-star fa-spin"></i>${infras}</a>`;
})

downloadsArray.forEach(function (download) {
    downloadsId.innerHTML +=
        `<a class="dropdown-item dropdown-item-style" href="#"><i class="fas fa-star fa-spin"></i>${download}</a>`;
})

marqueeArray.forEach(function (marquee) {
    marqueeId.innerHTML += `<img src="${marquee}" alt="">`;
})

let i = 0;
studentTestimonialArray.forEach(function (student) {
    if (i == 0) { //this condition is added because first item in the carousel should have active class and other shoould not have 
        studentTestimonialId.innerHTML +=
            `<div class="carousel-item active">
                <img class="student-img"
                    src="${student.images}"
                    class="d-block w-100" alt="...">
                <p>${student.review}</p><br>
                <spn class="bold">${student.name}</spn><br>
                <span>${student.designation}</span>
            </div>`;
    } else {
        studentTestimonialId.innerHTML +=
            `<div class="carousel-item">
                <img class="student-img"
                    src="${student.images}"
                    class="d-block w-100" alt="...">
                <p>${student.review}</p><br>
                <spn class="bold">${student.name}</spn><br>
                <span>${student.designation}</span>
            </div>`;
    }
    i++;
});

let j=0;
carouselImagesLocations.forEach(function (imageLocation) {
        if (j == 0) {
        carouselImagesId.innerHTML +=
        `<div class="carousel-item active">
            <img src="${imageLocation}" class="d-block w-100" alt="...">
        </div>`;
        } 
        else {
        carouselImagesId.innerHTML +=
        `<div class="carousel-item">
            <img src="${imageLocation}" class="d-block w-100" alt="...">
        </div>`;
        }
        j++;
});
