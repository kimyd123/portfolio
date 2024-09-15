

// 워크 부분 


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
      },{ threshold:[0, 0.6]});

      const about_skills_box = document.querySelector('.about_skills_box');
      io_skillbox.observe(about_skills_box);

