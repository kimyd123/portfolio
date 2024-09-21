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
        const tl_1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "5% top",   
            end: "bottom top",
            scrub: 2,              
            markers: false     
          }
        });
        tl_1.to(".gsap_item4", {
          y: -500,
        });
        gsap.to('.gsap_item4',{
          rotate : 360,
          x: -200,            // y축으로 10px 이동
          duration: 200,         // 2초 동안 애니메이션
          repeat: -1,          // 무한 반복
          yoyo: true           // 처음 상태로 되돌아가는 애니메이션
        })

        

        const tl_2 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 3,              
            markers: false     
          }
        });
        tl_2.to(".gsap_item5", {
          y: -500, 
        });
        gsap.to('.gsap_item5',{
          rotate : -360,            // y축으로 10px 이동
          duration: 300,         // 2초 동안 애니메이션
          repeat: -1,          // 무한 반복
          yoyo: true           // 처음 상태로 되돌아가는 애니메이션
        })

        const tl_3 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 5,              
            markers: false     
          }
        });
        tl_3.to(".gsap_item6", {
          y: -500, 
        });
        gsap.to('.gsap_item6',{
          rotate : -360,
          x: 200,            // y축으로 10px 이동
          duration: 300,         // 2초 동안 애니메이션
          repeat: -1,          // 무한 반복
          yoyo: true           // 처음 상태로 되돌아가는 애니메이션
        })


        const tl_4 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 2,              
            markers: false     
          }
        });
        tl_4.to(".gsap_item11", {
          opacity : 0,
          y :500
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
        tl_5.to(".gsap_item10", {
          y :200
        });
        
        const tl_6 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 2,              
            markers: false     
          }
        });
        tl_6.to(".gsap_item7", {
          y :400
        });

        const tl_7 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 3,             
            markers: false     
          }
        });
        tl_7.to(".gsap_item8", {
          y :500
        });

        const tl_8 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 1,         
            markers: false     
          }
        });
        tl_8.to(".gsap_item9", {
          y :500
        });

        const tl_9 = gsap.timeline({
          scrollTrigger: {
            trigger: '#visual',  
            start: "top top",   
            end: "bottom top",
            scrub: 2,         
            markers: false     
          }
        });
        tl_9.to(".gsap_item12", {
          y :500
        });







        gsap.to(".gsap_item4", {
          scale: 1.02,      
          duration: 2,       
          repeat: -1,          
          yoyo: true           
        });


        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: '#about',  // 스크롤 트리거 요소
            start: "top 50%",    // 시작 시점
            end: "bottom top",   // 종료 시점
            scrub: 2,            // 스크롤에 맞춰 부드럽게 진행
            markers: false       // 디버깅 마커 표시 여부
          }
        });

        gsap.to(".gsap_item2", {
          rotate : 360,               // y축으로 10px 이동
          duration: 100,         // 2초 동안 애니메이션
          repeat: -1,          // 무한 반복
          yoyo: true           // 처음 상태로 되돌아가는 애니메이션
        });

        t2.to(".gsap_item2", {
          x: '100',
          scale : 2,
          opacity : 0,
          scrub: 4,  
        });


        const t3 = gsap.timeline({
          scrollTrigger: {
            trigger: '#work', 
            start: "top 80%", 
            end: "bottom top",
            scrub : 5,         
            markers: false       
          }
        });

        t3.to(".gsap_item3", {
          scale : 2,
          opacity : 0.2,
          x : '100%',
          y: 1000
        });


        //가로 스크롤
        //matchMedia 반응형

        gsap.registerPlugin(ScrollTrigger);

        const li1 = document.querySelectorAll('.about_skills1 li');
        const li2 = document.querySelectorAll('.about_skills2 li');


        ScrollTrigger.matchMedia({
          '(min-width : 300px)' : function(){
            // 트리거 작성
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
                end: '300%',        
                markers: false        
              }
            });
          }
        });

















