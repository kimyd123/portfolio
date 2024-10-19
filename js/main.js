// work 스크롤시 위치 오파시티 반응하는 박스
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    })
}, { threshold: [0, 0.6] });

const work_content_fig = document.querySelectorAll('.work_content_fig');
work_content_fig.forEach((el) => {
    io.observe(el);
});

//모달
const modals = document.querySelectorAll('.modal');

work_content_fig.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        modals.forEach((el) => {
            el.classList.remove('modal_slide');
            el.addEventListener('click', (e) => {
                const evTarget = e.target;
                if (evTarget.classList.contains("modal")) {
                    modals[i].classList.remove('modal_slide');
                }
            });
        });
        modals[i].classList.toggle('modal_slide');
    });
})

//이력서 카드모달

const modal_resume = document.querySelectorAll('.modal_resume');
const resume_cards = document.querySelectorAll('.resume_card');
const modal_resume_box = document.querySelector('.modal_resume_box');

resume_cards.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        resume_cards.forEach((el) => {
            el.classList.remove('modal_resum_slide');
            modal_resume_box.addEventListener('click', (e) => {
                const evTarget = e.target;
                if (evTarget.classList.contains("modal_resume")) {
                    modal_resume[i].classList.remove('modal_resum_slide');
                }
            });
        });
        modal_resume[i].classList.toggle('modal_resum_slide');
    });
})

//내비게이션바 휠 아리로할때 위로 숨겨짐
const nav = document.querySelector('#header');
const header_gnb = document.querySelector('.header_gnb');

window.addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        nav.classList.add('stiky');
    } else {
        nav.classList.remove('stiky');
    }
});

//비쥬얼 모션
const tl_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "5% top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});

tl_1.to(".gsap_item4", {y: -500});
gsap.to('.gsap_item4', {
    rotate: 360,
    x: -200, 
    duration: 200,
    repeat: -1, 
    yoyo: true 
})

const tl_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_2.to(".gsap_item5", {y: -500});
gsap.to('.gsap_item5', {
    rotate: -360, 
    duration: 300,
    repeat: -1, 
    yoyo: true 
})

const tl_3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_3.to(".gsap_item6", {y: -500});
gsap.to('.gsap_item6', {
    rotate: -360,
    x: 200, 
    duration: 300, 
    repeat: -1,
    yoyo: true 
})

const tl_4 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_4.to(".gsap_item11", {
    opacity: 0,
    y: 500
});

const tl_5 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_5.to(".gsap_item10", {y: 200});

const tl_6 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_6.to(".gsap_item7", {y: 400});

const tl_7 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_7.to(".gsap_item8", {y: 500});

const tl_8 = gsap.timeline({
    scrollTrigger: {
        trigger: '#visual',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});
tl_8.to(".gsap_item9", {y: 500});

gsap.to(".gsap_item4", {
    scale: 1.02,
    duration: 2,
    repeat: -1,
    yoyo: true
});

const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: "top 50%", 
        end: "bottom top", 
        scrub: 1, 
        markers: false 
    }
});

gsap.to(".gsap_item2", {
    rotate: 360, 
    duration: 100, 
    repeat: -1, 
    yoyo: true 
});

t2.to(".gsap_item2", {
    x: '100',
    scale: 2,
    opacity: 0,
    scrub: 1
});

const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#work',
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});

t3.to(".gsap_item3", {
    scale: 2,
    opacity: 0.2,
    x: '100%',
    y: 1000
});

//스킬카드 가로스크롤
gsap.registerPlugin(ScrollTrigger);

const li1 = document.querySelectorAll('.about_skills1 li');

ScrollTrigger.matchMedia({
    '(min-width : 300px)': function () {
        let list1 = gsap.utils.toArray(li1);
        gsap.to(list1, {
            xPercent: -100 * (list1.length - 1), 
            ease: 'none',
            scrollTrigger: {
                trigger: '.about_skills',
                pin: true,
                pinSpacing: true,
                scrub: 1,
                start: 'center center',
                end: '500%',
                markers: false
            }
        });
    }
});

// --------------------------

const cards = document.querySelectorAll('.resume_card');
ScrollTrigger.matchMedia({

    '(min-width: 300px)': function () {
        let list = gsap.utils.toArray(cards);

        gsap.fromTo(list[0], {
            display: 'none',
            rotate: 0,
            x: -100
        }, {
            opacity: 1,
            display: 'block',
            rotate: 10,
            x: 0,
            scrollTrigger: {
                trigger: '.resume_container',
                scrub: 1,
                start: 'center center',
                end: 'bottom bottom',
                markers: false 
            }
        })
        gsap.fromTo(list[1], {
            display: 'none',
            rotate: 0,
            x: 150
        }, {
            opacity: 1,
            display: 'block',
            rotate: -20,
            x: 0,
            scrollTrigger: {
                trigger: '.resume_container',
                scrub: 1,
                start: '+=100% center',
                end: 'bottom bottom',
                markers: false 
            }
        })

        gsap.fromTo(list[2], {
            display: 'none',
            rotate: 0,
            x: -180
        }, {
            opacity: 1,
            display: 'block',
            rotate: 20,
            x: 0,
            scrollTrigger: {
                trigger: '.resume_container',
                scrub: 1,
                start: '+=200% center',
                end: 'bottom bottom',
                markers: false 
            }
        })

        gsap.fromTo(list[3], {
            display: 'none',
            rotate: 0,
            x: 150
        }, {
            opacity: 1,
            display: 'block',
            rotate: -5,
            x: 0,
            scrollTrigger: {
                trigger: '.resume_container',
                scrub: 1,
                start: '+=300% center',
                end: 'bottom bottom',
                markers: false 
            }
        })

        gsap.to(list, {
            ease: 'none',
            scrollTrigger: {
                trigger: '.resume_container',
                pin: true,
                pinSpacing: true,
                scrub: 1,
                start: 'center center',
                end: '300%',
                markers: false 
            }
        });
    }
});

// --------------------------

gsap.from('.gsap_contectImg', {
    rotate: 280,
    x: -500,
    duration: 3,
    scrollTrigger: {
        trigger: '#contect',
        scrub: 3,
        start: 'top center',
        end: '100% bottom',
        markers: false
    }
})
gsap.to(".gsap_contectImg", {
    y: 20,
    scale: 1.02,
    duration: 2,
    repeat: -1,
    yoyo: true
});
