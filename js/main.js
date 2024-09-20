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

      // const about_skills_box = document.querySelector('.about_skills_box');
      // io_skillbox.observe(about_skills_box);


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
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#visual',  // 스크롤 트리거 요소
    start: "top 10%",    // 시작 시점
    end: "bottom top",   // 종료 시점
    scrub: 2,            // 스크롤에 맞춰 부드럽게 진행
    markers: false       // 디버깅 마커 표시 여부
  }
});

tl.to(".gsap_item1", {
  y: 500,  // y축으로 500px 이동
});

// 별도로 무한 반복 애니메이션 정의 (scrollTrigger와 무관)
gsap.to(".gsap_item1", {
  scale: 1.03,               // y축으로 10px 이동
  duration: 2,         // 2초 동안 애니메이션
  repeat: -1,          // 무한 반복
  yoyo: true           // 처음 상태로 되돌아가는 애니메이션
});


const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',  // 스크롤 트리거 요소
    start: "top 40%",    // 시작 시점
    end: "bottom top",   // 종료 시점
    scrub: 2,            // 스크롤에 맞춰 부드럽게 진행
    markers: false       // 디버깅 마커 표시 여부
  }
});

gsap.to(".gsap_item2", {
  rotate : 360,               // y축으로 10px 이동
  duration: 500,         // 2초 동안 애니메이션
  repeat: -1,          // 무한 반복
  yoyo: true           // 처음 상태로 되돌아가는 애니메이션
});

t2.to(".gsap_item2", {
  // x: '100%',
  scale : 2,
  opacity : 0,
  scrub: 4,  
});


//가로 스크롤
//matchMedia 반응형

gsap.registerPlugin(ScrollTrigger);

const li = document.querySelectorAll('.about_skills li');

ScrollTrigger.matchMedia({
  '(min-width : 500px)' : function(){
    // 트리거 작성
    let list = gsap.utils.toArray(li);

    gsap.to(list, {
      xPercent: -100 * (list.length - 1),  // 가로 스크롤 공식
      ease: 'none',
      scrollTrigger: {
        trigger: '.about_skills',
        pin: true,            // 스크롤 중 요소 고정
        pinSpacing: true,
        scrub: 1,             // 스크롤에 따라 애니메이션 진행
        start: 'center center',     // 시작 지점 설정 (뷰포트 상단)
        end: '300%',        // 종료 시점 설정
        markers: true         // 디버그용 마커
      }
    });
  }
});














