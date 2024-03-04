$(".ham-burger").click(function(){
    $(this).toggleClass("fa-times");
    $(".menu").slideToggle(300);
  });

  let title = document.querySelector('.main_heading');
  let name = "HEAL HEALTH & SPORTS CLUB"
  let index = 1;
  
  const typeWriter = () => {
      let new_title = name.slice(0,index);
      title.innerText = new_title;
  
      index > name.length ? index = 1 : index++;
      // index++;
  
      setTimeout(() => typeWriter(), 300)
  }
  
  typeWriter();


// google translator

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// jquery staart here 

