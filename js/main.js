// work 스크롤시 위치 오파시티 반응하는 박스

      const io = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('animated');
              console.log('ddasdasdad');
            }else{
              entry.target.classList.remove('animated');
              console.log('ddasdasdad');
            }	
          })
        },{ threshold:[0, 0.6]});

        const work_content_fig = document.querySelectorAll('.work_content_fig');
        work_content_fig.forEach((el) => {
          io.observe(el);
          });

  // 스킬박스 요소 화면에 보일때 좌에서 우로
    
      const io_skillbox = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('animated_skill_box');
              console.log('등장');
            }else{
              entry.target.classList.remove('animated_skill_box');
              console.log('퇴장');
            }	
          })
        },{ threshold:[0, 0.8]});

      const about_skills_box = document.querySelector('.about_skills_box');
      io_skillbox.observe(about_skills_box);


      //내비게이션바 휠 아리로할때 위로 숨겨짐
      const nav = document.querySelector('#header');
      const header_gnb = document.querySelector('.header_gnb');
      
      window.addEventListener('wheel', function(e){
        if(e.deltaY > 0){
          nav.classList.add('stiky');
        }else{
          nav.classList.remove('stiky');
        }
        console.log(e.deltaY);
      });



//트리거
gsap.registerPlugin(ScrollTrigger);
const gsap_item = document.querySelector('.gsap_item');
const visual = document.querySelector('#visual');

const gsap_item2 = document.querySelector('.gsap_item2');
const work = document.querySelector('#work');

gsap.to(gsap_item,{ 
  x : -1000, 
  y : 1000,
  scale: 0.5,
  scrollTrigger: {
  trigger: gsap_item, // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
  start: "top 10%", // 애니메이션 시작시점
  end:"bottom top", // 애니메이션 종료시점
  scrub: 2,
  // markers: true 
}}
)

gsap.to(gsap_item2,{ 
  x : 1000, 
  y : 1000, 
  scrollTrigger: {
  trigger: work, // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
  start: "top 50%", // 애니메이션 시작시점
  end:"bottom top", // 애니메이션 종료시점
  scrub: 1,
  markers: true // 트리거 마커의 표시(boolean)
}}
)