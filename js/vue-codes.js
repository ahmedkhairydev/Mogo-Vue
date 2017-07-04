/*global $, alert, console*/
$(function () {
    'use strict';
    
    new Vue({
        el: "#nav",
        data: {
            logo: 'MoGo',
            navbar: [
                {text: 'about', url: 'about.html'},
                {text: 'service', url: 'service.html'},
                {text: 'work', url: 'work.html'},
                {text: 'blog', url: 'blog.html'},
                {text: 'contact', url: 'contact.html'}
            ]
        }
    });
    
    // Add Home Data
    
    new Vue ({
        el: "#headerData",
        data: {
            header1: 'Creative Template',
            header2: 'Welcome',
            header3: 'to mogo',
            learnMore: 'learnmore'
        }
    });
    
    // Add What We Do Data
    
    new Vue ({
        el: "#what-we-do",
        data: {
            header: 'what we do',
            subHeader: 'story about us',
            figure: [
                {src: 'img/photo1.jpg', class: 'imghvr-zoom-out-left'},
                {src: 'img/photo2.jpg', class: 'imghvr-zoom-out'},
                {src: 'img/photo3.jpg', class: 'imghvr-zoom-out-right'},
            ]
        }
    });
    
    new Vue ({
        el: "#facts",
        data: {
            facts: [
                {number: '42', name: 'web design products'},
                {number: '123', name: 'happy client'},
                {number: '15', name: 'award winer'},
                {number: '99', name: 'cup of coffee'},
                {number: '24', name: 'members'}
            ]
        }
    });
    
    new Vue ({
        el: "#what-we-do-2",
        data: {
            header: 'what we do',
            subHeader: 'some of our work',
            anchor: [
                {href: '#one!', src: 'img/WWD-1.jpg', style: 'margin:-100px 0 0 0' },
                {href: '#two!', src: 'img/WWD-3.jpg' },
                {href: '#three!', src: 'img/WWD-4.jpg' },
                {href: '#six!', src: 'img/WWD-6.jpg' },
                {href: '#seven!', src: 'img/WWD-7.jpg' },
                {href: '#four!', src: 'img/WWD-5.jpg' },
                {href: '#five!', src: 'img/WWD-2.jpg' }
            ]
        }
    });
    
    // Add Service Data
    
    new Vue ({
        el: "#service",
        data: {
            header: 'Service',
            subHeader: 'what we do',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            service: [
                {icon: 'fa fa-picture-o', headerTap: 'photography', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                
                {icon: 'material-icons', iconName: 'desktop_mac', headerTap: 'creativity', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptate repudiandae numquam, mollitia, natus libero harum adipisci explicabo rem omnis sunt? Corrupti laborum repellat ex, rerum consequuntur asperiores? Corporis, rem.'},
                
                {icon: 'material-icons', iconName: 'show_chart', headerTap: 'web design', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, illo inventore illum velit! Voluptates eum hic eos delectus cupiditate quos magni saepe quia ullam, velit inventore, nam iure eius reprehenderit fugit ipsa. Suscipit facilis, ad mollitia ratione sint expedita et!'},
            ]
        }
    });
    
    // Add We Work With Data
    
    new Vue ({
        el: "#we-work-with",
        data: {
            header: 'we work with',
            subHeader: 'amazing services',
            services: [
                {icon: 'alarm', header: 'photography', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
                {icon: 'show_chart', header: 'web design', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
                {icon: 'desktop_mac', header: 'creativity', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
                {icon: 'library_books', header: 'seo', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
                {icon: 'home', header: 'css/html', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
                {icon: 'photo', header: 'digital', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
            ]
        }
    });
    
    // Add Our Stories Data
    
    new Vue ({
        el: "#our-stories",
        data: {
            header: 'Our stories',
            subHeader: 'latest blog',
            blog: [
                {img: 'img/OS-1.jpg', day: '15', month: 'Jan', header: 'lorem ipsum dolor sit amet', subHeader: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: 'material-icons', iconName: 'remove_red_eye', viewNumber: '542', iconTwo: 'fa fa-commenting', commentNumber: '17'},
                
                {img: 'img/OS-2.jpg', day: '14', month: 'Jan', header: 'sed do eiusmod tempor', subHeader: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: 'material-icons', iconName: 'remove_red_eye', viewNumber: '992', iconTwo: 'fa fa-commenting', commentNumber: '42'},
                
                {img: 'img/OS-3.jpg', day: '12', month: 'Jan', header: 'incididunt ut labore et dolore', subHeader: 'Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: 'material-icons', iconName: 'remove_red_eye', viewNumber: '1560', iconTwo: 'fa fa-commenting', commentNumber: '98'}
            ]
        }
    });
    
    // Add Contact Data
    
    new Vue ({
        el: "#who-we-are",
        data: {
            header: 'who we are',
            subHeader: 'meet our team',
            
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            
            figure: [
                {class: 'imghvr-zoom-out-left', src: 'img/WWA-1.jpg', header: 'Matthew Dix', title: 'Graphic Design'},
                {class: 'imghvr-zoom-out', src: 'img/WWA-2.jpg', header: 'Christopher Campbell', title: 'Branding/UX design'},
                {class: 'imghvr-zoom-out-right', src: 'img/WWA-3.jpg', header: 'Michael Fertig', title: 'Developer'}
            ],
            
            icons: [
                {class: 'fa fa-facebook fa-3 col s3'},
                {class: 'fa fa-twitter fa-3 col s3'},
                {class: 'fa fa-pinterest fa-3 col s3'},
                {class: 'fa fa-instagram fa-3 col s3'}
            ],
            
            names: [
                {header: 'Matthew Dix', title: 'Graphic Design'},
                {header: 'Christopher Campbell', title: 'Branding/UX design'},
                {header: 'Michael Fertig', title: 'Developer'}
            ]
        }
    });
    
    // Add Slider Data
    
    new Vue ({
        el: "#slider-2",
        data: {
            slider: [
                {opinion: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”', name: 'Joshua Earle'},
                
                {opinion: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore quas quasi consectetur enim.”', name: 'Verginia Wolf'},
                
                {opinion: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi provident reiciendis eaque voluptates ipsum excepturi ipsa voluptate cum quam voluptatem.”', name: 'Rogina Earle'},
            ]
        }
    });
    
    new Vue ({
        el: "#slider",
        data: {
            slider: [
                {opinion: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”', name: 'Jon Doe'},
                
                {opinion: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit at beatae, quae, molestiae porro!”', name: 'BonDok'},
                
                {opinion: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore quas quasi consectetur enim.”', name: 'Jac'}
            ]
        }
    });
    
    // Add Happy Clients Data
    
    new Vue ({
        el: "#happy-clients",
        data: {
            header: 'Happy Clients',
            subHeader: 'what people say',
            clients: [
                {img: 'img/client-1.jpg', name: 'Matthew Dix', title: 'Graphic Design', opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'},
                
                {img: 'img/client-2.jpg', name: 'Nick Karvounis', title: 'Graphic Design', opinion: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
                
                {img: 'img/client-3.jpg', name: 'Jaelynn Castillo', title: 'Graphic Design', opinion: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
                
                {img: 'img/client-4.jpg', name: 'Mike Petrucci', title: 'Graphic Design', opinion: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'}
            ]
        }
    });
    
    // Add Footer-Data
    
    new Vue ({
        el: "#footer",
        data: {
            icons: [
                {fa: 'fa fa-facebook'},
                {fa: 'fa fa-twitter'},
                {fa: 'fa fa-instagram'},
                {fa: 'fa fa-pinterest'},
                {fa: 'fa fa-google-plus'},
                {fa: 'fa fa-youtube-play'},
                {fa: 'fa fa-dribbble'},
                {fa: 'fa fa-tumblr'}
            ],
            blog: [
                {class: 'col m4 s4', style: 'padding: 0;', src: 'img/footer-1.jpg', header: 'Lorem ipsum dolor sit amet, consectetur adipiscing', date: 'Jan 9, 2016'},
                {class: 'col m4 s4', style: 'padding: 0;', src: 'img/footer-2.jpg', header: 'Lorem ipsum dolor sit amet, consectetur adipiscing', date: 'Jan 9, 2016'},
                {class: 'col m4 s4', style: 'padding: 0;', src: 'img/footer-3.jpg', header: 'Lorem ipsum dolor sit amet, consectetur adipiscing', date: 'Jan 9, 2016'},
            ],
            instgram: [
                {class: 'col s4', src: 'img/footer-4.jpg'},
                {class: 'col s4', src: 'img/footer-5.jpg'},
                {class: 'col s4', src: 'img/footer-6.jpg'},
                {class: 'col s4', src: 'img/footer-7.jpg'},
                {class: 'col s4', src: 'img/footer-8.jpg'},
                {class: 'col s4', src: 'img/footer-9.jpg'},
                {class: 'col s4', src: 'img/footer-10.jpg'},
                {class: 'col s4', src: 'img/footer-11.jpg'},
                {class: 'col s4', src: 'img/footer-12.jpg'}
            ]
        }
    });
    
});