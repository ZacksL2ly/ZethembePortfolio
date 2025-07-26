navBarComponent();
footer();

function footer(){
    footeHtml = ' <footer>'+
    '<div class="container">'+
        '<div class="row">'+
           '<div class="col-lg-3">'+
                '<div class="quick-links-container">'+
                    '<h5>More About Me</h5>'+
                    '<ul>'+
                      '<p> Passionate Full-Stack developer, committed to crafting high-quality digital experiences.'+
                      ' Let’s build something amazing together.</p>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
            '<div class="col-lg-3">'+
                '<div class="quick-links-container">'+
                    '<h5>Quick Links</h5>'+
                    '<ul>'+
                    '<li><a href="#KnowMe"> About</a></li>'+
                    '<li><a href="#Projects"> Latest Work </a></li>'+
                    '<li><a href="#Expertise"> My Skills </a></li>'+
                    '<li><a href="#Connect"> Connect Now </a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
            '<div class="col-lg-3">'+
                '<div class="quick-links-container">'+
                    '<h5> Services </h5>'+
                    '<ul>'+
                    '<li><a href="#Expertise"> Web Design </a></li>'+
                    '<li><a href="#Expertise"> Web Development </a></li>'+
                    '<li><a href="#Expertise"> Web Hosting </a></li>'+
                    '<li><a href="#Connect"> Collaborate </a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
            '<div class="col-lg-3">'+
                '<div class="contact-us-container">'+
                    '<h5>Social Links</h5>'+
                '<div class="social-icon-media-container">'+
                    '<ul>'+
                        '<li><a href="mailto:zethembeluthuli@gmail.com?subject=Portfolio Inquiry"><i class="fa fa-envelope" aria-hidden="true"></i></a>Email</li>'+
                        '<li><a href="https://www.linkedin.com/in/zethembe-luthuli-748939236/"><i class="fab fa-linkedin" aria-hidden="true"></i></a>LinkedIn</li>'+
                        '<li><a href=""><i class="fa-solid fa-location-dot" aria-hidden="true"></i></a>South Africa, Durban</li>'+
                    '</ul>'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<hr>'+
        '<p class="text-center copy-right"> © Zethembe Luthuli. All rights reserved | Open to Remote & Hybrid Opportunities</p>'+
    '</div>'+
'</footer>';

$('.footer-section').html(footeHtml);
}
function navBarComponent(){
    navHtml = '<nav class="sticky-header">'+
    '<div class="nav-container">'+
        //'<div class="nav-top-container">'+
            //'<div class="container">'+
              //  '<div class="nav-top-wrap">'+
               //'&nbsp;&nbsp;<span><a href="mailto:"><i class="fas fa-map-marker-alt"></i>&nbsp;South Africa</a> <a href="tel:+27317627020"><i class="fas fa-phone"></i>&nbsp;084 027 6720</a></span>'+
               //'<div class="social-icon-media-container">'+
                 //   '<ul>'+
                   //     '<li><a href="#" class="icons" target="_blank"><i class="fab fa-facebook-f"></i></a></li>'+
                     //   '<li><a href="#" class="icons" target="_blank"><i class="fab fa-instagram"></i></a></li>'+
                       // '<li><a href="#" class="icons" target="_blank"><i class="fab fa-whatsapp"></i></a></li>'+
                        //'<li><a href="#" class="icons" target="_blank"><i class="fab fa-tiktok"></i></a></li>'+
                    //'</ul>'+
                //'</div>'+
                //'</div>'+
            //'</div>'+
        //'</div>'+
        '<div class="nav-bottom-container">'+
            '<div class="container">'+
                '<div class="row w-100 m-0">'+
                    '<div class="company-log-container">'+
                        '<a class="logo" href=""> Zethembe </a>'+
                    '</div>'+

                    '<div class="nav-links-container">'+
                        '<ul>'+
                            '<li><a class="link" href="#KnowMe"> About Me </a></li>'+
                            '<li><a class="link" href="#Projects"> Projects </a></li>'+
                            '<li><a class="link" href="#Expertise"> Expertise </a></li>'+
                            '<li><a class="link" href="#Connect"> Contact </a></li>'+   
                            '<li><a href="#" class="btn-yellow" data-bs-toggle="modal" data-bs-target="#contactModal"> Let`s Work Together </a></li>'+                               
                        '</ul>'+
                    '</div>'+
                    '<div class="icons-container">'+
                        '<div class="menu-button-container">'+
                            '<button class="btn"><i class="fa fa-bars" aria-hidden="true"></i></button>'+
                                '<ul class="popup-menu" style="display: none;" id="menu-list">'+
                                    '<button class="side-menu-close"><span class="lnr lnr-cross"></span></button>'+
                                    '<li><a class="link" href="#KnowMe"> About Me </a></li>'+
                                    '<li><a class="link" href="#Projects"> Projects </a></li>'+
                                    '<li><a class="link" href="#Expertise"> Expertise </a></li>'+
                                    '<li><a class="link" href="#Connect"> Contact </a></li>'+       
                                    '<li><a href="#" data-bs-toggle="modal" data-bs-target="#contactModal"> Let`s Work Together </a></li>'+                                                     
                                '</ul>'+
                        '</div>'+
                    '</div>'+    
                       '<div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">'+
                            '<div class="modal-dialog modal-lg modal-dialog-centered">'+
                                '<div class="modal-content">'+
                                    '<div class="modal-header border-0">'+
                                        '<h5 class="modal-title justify-content-center" id="contactModalLabel">Let’s Do Something Amazing</h5>'+
                                        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> x </button>'+
                                    '</div>'+
                                    '<div class="modal-body">'+
                                        '<form id="assist-form">'+

                                        '<input type="hidden" name="access_key" value="ce26a8f6-18df-4946-bdb1-c1a041ba5321">'+
                                        '<input type="hidden" name="from_name" value="Website Hire Form">'+
                                        '<input type="hidden" name="subject" value="New Hire Request from Website">'+
                                        '<input type="checkbox" name="botcheck" class="hidden" style="display:none;"></input>'+

                                            '<div class="row g-3">'+
                                                '<div class="col-md-6">'+
                                                    '<input name="fullname" type="text" class="form-control" id="fullname" placeholder="Full Name" required>'+
                                                '</div>'+
                                                '<div class="col-md-6">'+
                                                    '<input name="email" type="email" class="form-control" id="email" placeholder="Email" required>'+
                                                '</div>'+
                                                '<div class="col-md-6">'+
                                                    '<input name="date" type="date" class="form-control" id="date">'+
                                                '</div>'+
                                                '<div class="col-md-6">'+
                                                    '<input name="time" type="time" class="form-control" id="time" value="00:00">'+
                                                '</div>'+
                                                '<div class="col-12">'+
                                                    '<input name="subject" type="text" id="subject" class="form-control" placeholder="Subject">'+
                                                '</div>'+
                                                '<div class="col-12">'+
                                                    '<textarea name="message" class="form-control" id="message" placeholder="Enter Message" rows="6"></textarea>'+

                                                    '<div class="modal-footer border-0 justify-content-center">'+
                                                        '<button type="submit" class="btn sendContactBtn">'+
                                                        '<span class="btn-text">Send Message</span>'+
                                                        '<span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>'+
                                                        '</button>'+
                                                    '</div>'+

                                                    '<div class="response mt-2 text-center d-none"></div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</form>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</nav>';
$('.nav-bar-section').html(navHtml);
}

document.addEventListener("DOMContentLoaded", () =>{
    $(document).ready(function() {
        $('.menu-button-container button').show();
        $('.side-menu-close').click(function() {
          $('.popup-menu').hide();
        });
      });
    
    const button = document.querySelector('.menu-button-container button');
    const menuList = document.getElementById('menu-list');
    button.addEventListener('click', function() {
    if (menuList.style.display === 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
    });

  const texts = ["Professional Software Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer", "Content Creator"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        setTimeout(type, 100);
      }, 2000);
    } else {
      setTimeout(type, 100);
    }
  })();

});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('assist-form');
  const responseEl = form.querySelector('.response');
  const btn = form.querySelector('.sendContactBtn');
  const btnText = btn.querySelector('.btn-text');
  const spinner = btn.querySelector('.spinner-border');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Hire form submit intercepted');

    // Show loading spinner and update button
    spinner.classList.remove('d-none');
    btnText.textContent = 'Sending...';
    btn.disabled = true;

    // Get form data
    const formData = new FormData(form);

    // Ensure subject is included
    if (!formData.get('subject') || formData.get('subject').trim() === '') {
      formData.set('subject', 'New Hire Request from Website');
    }

    // Convert to JSON object for Web3Forms
    const data = Object.fromEntries(formData);
    const json = JSON.stringify(data);

    // Submit using fetch
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(async (res) => {
        const result = await res.json();
        console.log('Web3Forms response:', result);

        if (res.status === 200) {
          responseEl.classList.remove('d-none', 'text-danger');
          responseEl.classList.add('text-success');
          responseEl.innerHTML = "✅ Thank you! Your hire request has been sent.";
          form.reset();

          // Hide modal after short delay
          setTimeout(() => {
            const contactModalEl = document.getElementById('contactModal');
            const modalInstance = bootstrap.Modal.getInstance(contactModalEl);
            if (modalInstance) modalInstance.hide();
          }, 3500);
        } else {
          responseEl.classList.remove('d-none', 'text-success');
          responseEl.classList.add('text-danger');
          responseEl.innerHTML = "❌ " + result.message;
        }
      })
      .catch((error) => {
        console.error('Error submitting hire form:', error);
        responseEl.classList.remove('d-none', 'text-success');
        responseEl.classList.add('text-danger');
        responseEl.innerHTML = "❌ Something went wrong. Please try again.";
      })
      .finally(() => {
        // Reset button state
        btn.disabled = false;
        spinner.classList.add('d-none');
        btnText.textContent = 'Send Message';

        // Hide response message after 5s
        setTimeout(() => {
          responseEl.classList.add('d-none');
          responseEl.innerHTML = '';
        }, 5000);
      });
  });
});
