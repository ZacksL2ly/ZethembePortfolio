$(document).ready(function () {
    // lightbox.option({
    // 'resizeDuration': 200,
    // 'wrapAround': true
    // });

    var textArray = [
        'E-commerce platform redesign and migration',
        'Legal Services E-Commerce Website',
        'Automotive Parts of E-Commerce',
        'International Family Church',
        'Women`s Fashion E-Commerce',     
        // 'Financial Services Website',
    ];
    
    var images = [
        //project1
        ['assets/img/project1/alude.png', 'assets/img/project1/home.png', 'assets/img/project1/home2.png', 'assets/img/project1/home3.png', 'assets/img/project1/home33.png',
         'assets/img/project1/home4.png', 'assets/img/project1/products.png', 'assets/img/project1/shoponline.png', 'assets/img/project1/prev-page.png', 'assets/img/project1/preview-product.png',
         'assets/img/project1/footer.png', 'assets/img/project1/cart.png', 'assets/img/project1/checkout.png', 'assets/img/project1/contact.png', 'assets/img/project1/contact-form.png'
        ],
         //project6
        ['assets/img/project6/project6.png', 'assets/img/project6/home.png', 'assets/img/project6/home1.png', 'assets/img/project6/home2.png', 'assets/img/project6/home3.png', 'assets/img/project6/home4.png',
        'assets/img/project6/navbar.png', 'assets/img/project6/footer.png', 'assets/img/project6/about.png', 'assets/img/project6/values.png', 'assets/img/project6/team.png','assets/img/project6/business1.png',
        'assets/img/project6/business2.png', 'assets/img/project6/services.png', 'assets/img/project6/popup.png','assets/img/project6/shop.png','assets/img/project6/shop1.png','assets/img/project6/contact.png',
        ],

        //project3
        ['assets/img/project3/project3.png', 'assets/img/project3/hero.png', 'assets/img/project3/home2.png', 'assets/img/project3/home3.png', 'assets/img/project3/home4.png',
         'assets/img/project3/home5.png', 'assets/img/project3/home5.png', 'assets/img/project3/footer.png', 'assets/img/project3/products.png', 'assets/img/project3/preview.png', 'assets/img/project3/cart.png',
         'assets/img/project3/contact.png','assets/img/project3/contact2.png', 'assets/img/project3/navbar.png', 'assets/img/project3/insights.png',
        ],
        //project5
        ['assets/img/project5/ebenezer.png', 'assets/img/project5/home.png', 'assets/img/project5/home1.png', 'assets/img/project5/home2.png', 'assets/img/project5/home3.png', 'assets/img/project5/about.png',
        'assets/img/project5/navbar.png', 'assets/img/project5/navbar1.png', 'assets/img/project5/footer.png', 'assets/img/project5/calendar.png', 'assets/img/project5/calendar1.png', 'assets/img/project5/gallery.png', 
        'assets/img/project5/sponsor.png', 'assets/img/project5/ministries.png', 'assets/img/project5/contact.png', 'assets/img/project5/contact1.png',
        ],
        //project4
        ['assets/img/project4/project4.png', 'assets/img/project4/home.png', 'assets/img/project4/home2.png', 'assets/img/project4/home3.png', 'assets/img/project4/home4.png', 'assets/img/project4/navbar.png',
        'assets/img/project4/footer.png', 'assets/img/project4/products1.png', 'assets/img/project4/products.png', 'assets/img/project4/preview.png','assets/img/project4/cart.png',
        'assets/img/project4/checkout.png', 'assets/img/project4/contact.png',
        ],
               //project2
        // ['assets/img/project2/project2.png', 'assets/img/project2/appointment.png', 'assets/img/project2/home.png', 'assets/img/project2/home1.png', 'assets/img/project2/home2.png',
        //  'assets/img/project2/home3.png', 'assets/img/project2/footer.png', 'assets/img/project2/about1.png', 'assets/img/project2/about.png', 'assets/img/project2/value.png', 'assets/img/project2/steps.png',
        //  'assets/img/project2/services1.png','assets/img/project2/services.png', 'assets/img/project2/book-service.png', 'assets/img/project2/navbar.png', 'assets/img/project2/contact1.png', 'assets/img/project2/contact.png',
        // ],
    ];
    
    var descriptions = [
        ['<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>'
        ,'<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>'
        ,'<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>','<a href="https://www.aludearts.co.za" target="_blank">Web Link</a>'
        ],

           ['<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>'
        ,'<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>'
        ,'<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>'
        ,'<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>','<a href="https://visiondesignsword.co.za/hlatshwayoAttorneys/" target="_blank">Web Link</a>',
        ],


     
        ['<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>'
        ,'<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>'
        ,'<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>','<a href="https://samcoengines.co.za/" target="_blank">Web Link</a>'
        ],

        ['<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>'
        ,'<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>'
        ,'<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>'
        ,'<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>','<a href="https://ebenezerfamilychurch.org.za/" target="_blank">Web Link</a>'
        ],


        ['<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>'
        ,'<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>'
        ,'<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>','<a href="https://blushwear.co.za/" target="_blank">Web Link</a>'
        ],
        //duplicated links
       // ['<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>'
       //  ,'<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>'
       //  ,'<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>'
       //  ,'<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>','<a href="https://umnothofs.co.za/" target="_blank">Web Link</a>'
       //  ],
    ];
    
    // Detailed project information
    var projectDetails = [
       {
            name: "E-Commerce Website Redesign",
            projectType: "Full Stack Developer at Infinity Growth",
            briefInfo:"Alude Arts the Evolution of African Artistry where every design is a legacy",
            isEcommerce: true,
            myContribution: "Complete website redesign and migration from custom Laravel solution to WordPress. Handled full-stack development, payment integration, and performance optimization.",
            tools: [
                { name: "WordPress" },
                { name: "WooCommerce" },
                { name: "JavaScript" },
                { name: "CSS3" },
                { name: "PayFast Integration" }
            ],
            howICameUp: "The client needed a more maintainable e-commerce solution with better content management capabilities. I proposed migrating from the existing Laravel/jQuery setup to WordPress with WooCommerce for easier updates and better scalability.",
            paymentGateway: "PayFast",
            websiteNote: "What you see here might not reflect what's on live application",
            exceededExpectations: true,
            exceededDetails: "Successfully maintained all existing functionality while improving user experience. Delivered a more maintainable solution that reduced client's content management time by 70%. Delivered on time as expected by the client."
        },
      {
        name: "Legal Services E-Commerce Website",
        projectType: "Full Stack Developer & UI/UX Designer at Infinity Growth",
        briefInfo: "S. Hlatshwayo Attorneys Inc. is a dynamic law firm offering cutting-edge legal solutions in family law, estates, property law, commercial law and litigation",
        isEcommerce: true,
        designStatus: "redesigned",
        myContribution: "Complete website redesign and development using WordPress with Elementor and custom coding. Created a modern, professional interface that reflects their legal expertise, implemented PayFast payment integration for legal service payments, and ensured full responsiveness across all devices. Delivered comprehensive full-stack solution on time.",
        tools: [
            { name: "WordPress"},
            { name: "WooCommerce"},
            { name: "Custom HTML/CSS & JS" },
            { name: "PayFast Integration" },
            { name: "Responsive Design" },
            { name: "Optimization" }
        ],
        howICameUp: "Having an existing website, They needed a modern redesign that better reflected their status as a dynamic law firm offering cutting-edge legal solutions. I created a beautiful, professional design that showcases their expertise in various legal disciplines while maintaining the trust and credibility essential for a legal practice.",
        paymentGateway: "PayFast",
        websiteNote: "New redesigned version ready for deployment. Portfolio showcases the modern design currently being prepared for launch.",
        exceededExpectations: true,
        exceededDetails: "Delivered on time a stunning, fully responsive legal website with integrated payment processing for legal services. The modern design significantly enhanced their professional online presence while maintaining the trust factor crucial for legal services. Ready for deployment with comprehensive mobile optimization."
        },
        {
            name: "Samco Engines - Automotive Parts E-Commerce",
            projectType: "Full Stack Developer & SEO at Infinity Growth",
            briefInfo: "Samco Engines are proud importers of used engines, brand new engines and gearboxes",
            isEcommerce: true,
            myContribution: "Took over development from a departing developer at Infinity Growth company who had created designs and initial setup 50%. Completed the entire backend development using Laravel, implemented custom cart system with email-based ordering, Mobile response, SEO and ongoing website maintenance.",
            tools: [
                { name: "Laravel (Blade PHP)" },
                { name: "JavaScript/jQuery" },
                { name: "HTML5" },
                { name: "MySql" },
                { name: "Bootstrap" },
                { name: "CSS3" },
                { name: "Optimization" },
                { name: "Custom Cart System" }
            ],
            howICameUp: "When the original developer from Infinity Growth left for a new position, I stepped in to complete the Samco Engines project. Working from existing Figma designs and initial setup, I built a robust solution for this leading automotive parts importer. Given their fluctuating inventory of engines and parts from brands like BMW, Audi, Mercedes-Benz, I implemented a custom email-based cart system instead of direct payments.",
            paymentGateway: null,
            websiteNote: "What you see here might not reflect what's on live application",
            exceededExpectations: true,
            exceededDetails: "Successfully completed the handover project, delivering a high-performing website with comprehensive SEO improvements that dramatically increased their online sales and inquiries. The custom Laravel backend and email-based ordering system perfectly addressed their inventory management needs while maintaining optimal performance."
        },
        {
        name: "Ebenezer Family Church International - Multi-Branch Website",
        projectType: "Full Stack Developer & UI/UX Designer at Infinity Growth",
        briefInfo: "Ebenezer Family Church International is well known in Africa with more branches across Africa",
        isEcommerce: false,
        myContribution: "Complete end-to-end project from concept to deployment. Handled all design work including custom graphics, created interactive Africa map image, posters, developed year calendar system, events showcasing gallery, and optimized user experience with animations to fully performance responsive and lazy loading.",
        tools: [
        { name: "HTML5" },
        { name: "PHP" },
        { name: "Bootstrap" },
        { name: "CSS3" },
        { name: "JavaScript/AJAX" },
        { name: "Basic SEO" },
        { name: "Figma & Canva" }
       ],
        howICameUp: "Ebenezer Family Church International needed a comprehensive website to connect their multiple branches across Africa. I designed and developed a visually stunning platform featuring all branch locations, complete events calendar system, and beautiful imagery that reflects their continental presence and community spirit.",
        paymentGateway: null,
        websiteNote: "What you see here might not reflect what's on live application",
        exceededExpectations: true,
        exceededDetails: "Delivered a visually captivating website with custom-designed features, smooth AOS animations, optimized loading with lazy loading techniques, and a comprehensive calendar system. The beautiful design and intuitive navigation enhanced their online presence and improved engagement across all African branches."
        },
        {
            name: "Blushwear Clothing - Women's Fashion E-Commerce",
            projectType: "Full Stack Developer at Infinity Growth",
            briefInfo: "Blushwear, a classy and trendy women's fashion brand featuring both import and local brands",
            isEcommerce: true,
            designStatus: "redesigned", // or you could use a flag like hasRedesign: true
            myContribution: "Complete website redesign and development with modern UI/UX and enhanced order management system. Built custom order processing that stores data in both email and database, backend management, and Speed optimization. New design completed - awaiting client's payment gateway details and approval for launch.",
            tools: [
                { name: "JavaScript/jQuery" },
                { name: "HTML5" },
                { name: "PHP" },
                { name: "MySQL" },
                { name: "Bootstrap (responsive)" },
                { name: "AJAX" },
                { name: "Google Analytics" },
                { name: "Basic SEO" },
            ],
            howICameUp: "Having previously worked on previous website design, I identified areas for improvement in user experience and conversion optimization. They needed new features, streamlined e-commerce platform. Building on my understanding of their brand and customer base, I redesigned the website with a cleaner interface and strategic call-to-action features to help customers 'reveal their hidden glow'.",            
            paymentGateway: "PayFast (Pending Client Setup)",
            websiteNote: "Portfolio shows new redesigned version. Live website displays our previous design while awaiting new version deployment.",
            exceededExpectations: true,
            exceededDetails: "Delivered a comprehensive redesigned e-commerce solution with modern UI, dual order tracking, robust product management system, and analytics integration. The new conversion-focused design with strategic call-to-actions is ready for launch pending final payment integration and client approval."
        },
       
        //   {
        //     name: "Umnotho FS - Financial Services Website",
        //     projectType: "Full Stack Developer",
        //     briefInfo: "Umnotho FS is a licensed financial services provider, proudly regulated by the Financial Sector Conduct Authority (FSCA).",
        //     isEcommerce: false,
        //     myContribution: "Complete website development including service showcase, booking system integration, and content management. Handled both frontend design and backend functionality for their financial services platform.",
        //     tools: [
        //         { name: "WordPress" },
        //         { name: "JavaScript" },
        //         { name: "CSS3" },
        //         { name: "Booking Plugin Integration" },
        //         { name: "Contact Forms" }
        //     ],
        //     howICameUp: "Umnotho FS needed a professional mordern website to showcase their financial planning services and allow clients to book consultations. I created a trustworthy, informative platform that reflects their expertise in serving middle-income earners and professionals.",
        //     paymentGateway: null,
        //     exceededExpectations: true,
        //     exceededDetails: "Delivered on time as expected by the client, providing a comprehensive solution with integrated booking system and complete service portfolio showcase. The website established strong online credibility and increased consultation bookings within the first month of launch."
        // },
    ];
    
    var batchSize = 4;
    
    function createImageBatch(startIndex) {
        var imageBatch = $('<div class="row"></div>');
        for (var i = startIndex; i < startIndex + batchSize && i < images.length; i++) {
            var col = $('<div class="col-md-3"></div>');
            var card = $('<div class="card" data-aos="fade-up" data-aos-duration="1400"></div>');
            var img = $('<img src="' + images[i][0] + '" class="card-img-top" alt="...">');
            var cardBody = $('<div class="card-body text-center"></div>');
            var cardText = $('<p class="card-text">' + textArray[i] + '</p>');
            
            // Button container
            var buttonContainer = $('<div class="button-container"></div>');
            var infoBtn = $('<button class="btn-info project-info-btn" data-toggle="modal" data-target="#projectInfoModal" data-index="' + i + '">Project Info</button>');
            var viewBtn = $('<button class="btn-b view-design-btn" data-toggle="modal" data-target="#imageModal" data-index="' + i + '">View Project</button>');
          
            buttonContainer.append(infoBtn);
            buttonContainer.append(viewBtn);
            cardBody.append(cardText);
            cardBody.append(buttonContainer);
            card.append(img);
            card.append(cardBody);
            col.append(card);
            imageBatch.append(col);
        }
        
        if (startIndex + batchSize < images.length) {
            var loadBtnCol = $('<div class="col-lg-12 loading text-center"></div>');
            var loadMoreBtn = $('<a  class="btn-b" id="loadMoreBtn">Load More Projects</a>');
            loadMoreBtn.click(function () {
                $('#imageContainer').append(createImageBatch(startIndex + batchSize));
                $(this).remove();
            });
            loadBtnCol.append(loadMoreBtn);
            imageBatch.append(loadBtnCol);
        }
        
        return imageBatch;
    }
    
    // Initialize with first batch
    $('#imageContainer').append(createImageBatch(0));
    
    // View Design Modal Handler
    $(document).on('click', '.view-design-btn', function () {
        var modalImages = $('#modalImages .carousel-inner');
        modalImages.empty();
        
        var currentIndex = $(this).data('index');
        var projectTitle = textArray[currentIndex];
        var projectImages = images[currentIndex];
        var projectDescriptions = descriptions[currentIndex];
        
        $('#imageModalLabel').text(projectTitle);
        
        projectImages.forEach(function (imageUrl, index) {
            var imageItem = $(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img class="d-block w-100" src="${imageUrl}" />
                    <p class="mt-3 text-center">${projectDescriptions[index]}</p>
                </div>
            `);
            modalImages.append(imageItem);
        });
    });
    
    // Project Info Modal Handler
    $(document).on('click', '.project-info-btn', function () {
        var currentIndex = $(this).data('index');
        var project = projectDetails[currentIndex];
        
        // Set modal title
        $('#projectInfoModalLabel').text(project.name);
        
        // Clear and populate modal content
        var modalBody = $('#projectInfoModal .modal-body');
        modalBody.empty();
        
        var content = `
            <div class="project-info-content">
                <div class="info-section">
                    <h5><i class="fas fa-project-diagram"></i> Project Type</h5>
                    <p>${project.projectType}</p>
                    
                </div>

                 <div class="info-section">
                    <h5><i class="fas fa-project-diagram"></i> Introduction </h5>
                    <p>${project.briefInfo}</p>
                    
                </div>
                  
                
                <div class="info-section">
                    <h5><i class="fas fa-user-tie"></i> My Contribution</h5>
                    <p>${project.myContribution}</p>
                </div>
                
                <div class="info-section">
                    <h5><i class="fas fa-tools"></i> Tools & Technologies</h5>
                    <div class="tools-grid">
                        ${project.tools.map(tool => `
                            <div class="tool-item">
                                <span class="tool-name">${tool.name} ,</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="info-section">
                    <h5><i class="fas fa-lightbulb"></i> How I Came Up With This Idea</h5>
                    <p>${project.howICameUp}</p>
                </div>

                <div class="info-section">
                    <h5><i class="fas fa-lightbulb"></i> Notice</h5>
                    <p>${project.websiteNote}</p>
                </div>
                
                ${project.paymentGateway ? `
                    <div class="info-section">
                        <h5><i class="fas fa-credit-card"></i> Payment Gateway Integration</h5>
                        <p>${project.paymentGateway}</p>
                    </div>
                ` : ''}
                
                <div class="info-section">
                    <h5><i class="fas fa-star"></i> Beyond the Brief</h5>
                    ${project.exceededExpectations ? `
                        <div class="exceeded-yes">
                            <p>${project.exceededDetails}</p>
                        </div>
                    ` : `
                        <span class="badge badge-warning">Met Expectations</span>
                    `}
                </div>
            </div>
        `;
        
        modalBody.html(content);
    });
});



