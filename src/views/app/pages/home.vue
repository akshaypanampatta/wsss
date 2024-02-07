<template>
<div>

    <header>
        <div class="header-container">
            <div class="banner-image" :style="'background: linear-gradient(188deg, rgba(0, 0, 0, 0.72) 17.43%, rgba(0, 0, 0, 0.00) 86.29%), url('+api_url+banner.banner_image+');background-size: cover!important;background-position: center;'">
                <div class="navbar-full">
                    <div class="navbar">
                        <router-link class="custom-router" to="/">
                            <button>Home</button>
                        </router-link>
                        <!-- <router-link class="custom-router" to="/view/projects"> -->
                        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret right="0">
                            <template #button-content>
                                <button>Projects <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.5716 11.7143L12.0001 16.2857L7.42871 11.7143" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </template>
                            <div class="projects-dropdown custom-dropdown">
                                <div class="d-flex flex-wrap">
                                    <router-link class="pb-4" :to="'/project/'+project.id" v-for="(project, pk) in projects" v-if="pk<5">
                                        <span>
                                            <h4>{{project.name}}</h4>
                                            <div class="d-flex align-items-center">
                                                <p>Know more</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="#0B9F0D" />
                                                </svg>
                                            </div>
                                        </span>
                                    </router-link>
                                </div>
                                <div class="d-flex justify-content-between" style="padding: 1.25rem 1.5rem;border-top: solid 1px #c6c6c6;">
                                    <router-link to="/view/projects">
                                        <h4 style="color: #000;font-size: 1.125rem;font-weight: 500;text-decoration: underline;line-height: 1.7rem;cursor: pointer;">View All Projects</h4>
                                    </router-link>
                                    <img src="/images/logo-drop.png" alt="">
                                </div>
                            </div>
                        </b-dropdown>

                        <!-- </router-link> -->

                        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                            <template #button-content>
                                <button>About us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.5716 11.7143L12.0001 16.2857L7.42871 11.7143" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></button>
                            </template>
                            <div class="custom-dropdown">
                                <!-- <div style="padding: 0.625rem 1.5rem;">
                                    <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Initiatives</h4>
                                </div> -->
                                <!-- <router-link to="/history" class="custom-router">
                                    <div style="padding: 0.625rem 1.5rem;">
                                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">History</h4>
                                    </div>

                                </router-link> -->
                                <router-link to="/partners" class="custon-router">
                                    <div style="padding: 0.625rem 1.5rem;">
                                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Partners in Development</h4>
                                    </div>
                                </router-link>
                                <!-- <div style="padding: 0.625rem 1.5rem;">
                                    <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Consultancy Services</h4>
                                </div> -->
                                <router-link to="annual-reports" class="custom-router">
                                    <div style="padding: 0.625rem 1.5rem;">
                                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Annual Reports & Audit Statements</h4>
                                    </div>
                                </router-link>
                                <router-link to="wsss-team">
                                    <div style="padding: 0.625rem 1.5rem;">
                                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Wsss Team</h4>
                                    </div>
                                </router-link>
                                <!-- <div style="padding: 0.625rem 1.5rem;">
                                    <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Career</h4>
                                </div> -->
                                <router-link to="/erp-login">
                                    <div style="padding: 0.625rem 1.5rem;">
                                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">ERP Login</h4>
                                    </div>
                                </router-link>

                            </div>
                        </b-dropdown>
                        <router-link class="custom-router" to="/awards">
                            <button>Awards & Recognitions</button>
                        </router-link>
                        <router-link to="/gallery" class="custom-router">
                            <button>Gallery</button>
                        </router-link>
                        <!-- <router-link class="custom-router" to="/activities"> -->
                        <b-dropdown variant="link" toggle-class="text-decoration-none" class="activity-drop" no-caret>
                            <template #button-content>
                                <button>Activities <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.5716 11.7143L12.0001 16.2857L7.42871 11.7143" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></button>
                            </template>
                            <div class="projects-dropdown custom-dropdown">
                                <div class="d-flex flex-wrap">
                                    <router-link class="pb-4" :to="'/event/'+event.id" v-for="event in events">
                                        <span>
                                            <h4>{{event.name}}</h4>
                                            <div class="d-flex align-items-center">
                                                <p>Know more</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="#0B9F0D" />
                                                </svg>
                                            </div>
                                        </span>
                                    </router-link>
                                </div>
                                <div class="d-flex justify-content-between" style="padding: 1.25rem 1.5rem;border-top: solid 1px #c6c6c6;">
                                    <router-link to="/view/events">
                                        <h4 style="color: #000;font-size: 1.125rem;font-weight: 500;text-decoration: underline;line-height: 1.7rem;cursor: pointer;">View All Activities</h4>
                                    </router-link>
                                    <img src="/images/logo-drop.png" alt="">
                                </div>
                            </div>

                        </b-dropdown>

                        <router-link to="contact-us" class="custom-router">
                            <button>Contact</button>
                        </router-link>
                        <button @click="openNav" class="menu-btn"><img src="/images/menu.svg" alt=""></button>
                    </div>
                    <a href="https://rzp.io/l/AamDxsS" target="_blank">
                        <button style="background-color: #0B9F0D;color: #fff;" class="donate-btn">Donate</button>
                    </a>
                </div>
                <div class="logo">
                    <img class="nav-logo-2" src="/images/new-logo.png" alt="">
                </div>
                <div class="banner-text">
                    <h1 style="color: #fff;">{{banner.banner_title}}</h1>
                    <p class="description" style="color: #fff;">
                        {{banner.banner_description}}
                    </p>
                    <!-- <div class="d-flex align-items-center" style="gap: 0.9rem;">
                        <button class="mute-btn"><img src="/images/mute.svg" alt=""></button>
                        <button class="donate-btn">Know More</button>
                    </div> -->
                </div>

            </div>
            <div class="breaking-story">
                <div class="d-flex align-items-center justify-content-between">
                    <h2 class="sub-title">Latest Stories</h2>
                    <h6 class="view-more">View More</h6>

                </div>

                <div class="breaking-story-list">
                    <div v-for="(story,index) in stories" class="one-breaking-story">

                        <iframe width="100%" style="height: 12rem;" v-if="story.video_link" :src="story.video_link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div class="overlay" v-else>
                            <img class="breaking-image" :src="story.preview?api_url+story.preview:'/images/no_img.png'" alt="">
                            <img class="play-icon" src="/images/play.svg" alt="">
                        </div>

                        <div class="d-flex align-items-center justify-content-between" style="padding: 0.6rem 1.12rem 0 0;">
                            <div class="d-flex flex-column" style="gap: 0.65rem;">
                                <h3>{{story.name}}</h3>
                                <div class="d-flex align-items-center" style="gap: 0.84rem;">
                                    <button style="padding: 0.28125rem 1.125rem;font-size: 0.75rem;" class="pill-btn">Latest</button>
                                    <h4>{{dateFormate(story.date)}}</h4>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path d="M19.5249 7.16555C19.4748 7.21562 19.435 7.27507 19.4079 7.34051C19.3808 7.40595 19.3668 7.4761 19.3668 7.54694C19.3668 7.61778 19.3808 7.68793 19.4079 7.75337C19.435 7.81881 19.4748 7.87826 19.5249 7.92833L28.3076 16.711H5.89069C5.74772 16.711 5.61061 16.7678 5.50951 16.8689C5.40842 16.97 5.35163 17.1071 5.35163 17.2501C5.35163 17.393 5.40842 17.5301 5.50951 17.6312C5.61061 17.7323 5.74772 17.7891 5.89069 17.7891H28.3076L19.5249 26.5718C19.4748 26.6219 19.4351 26.6813 19.408 26.7468C19.3809 26.8122 19.367 26.8824 19.367 26.9532C19.367 27.024 19.3809 27.0942 19.408 27.1596C19.4351 27.225 19.4748 27.2845 19.5249 27.3346C19.575 27.3847 19.6345 27.4244 19.6999 27.4515C19.7653 27.4786 19.8355 27.4926 19.9063 27.4926C19.9771 27.4926 20.0473 27.4786 20.1127 27.4515C20.1782 27.4244 20.2376 27.3847 20.2877 27.3346L29.9908 17.6315C30.0409 17.5814 30.0807 17.5219 30.1078 17.4565C30.135 17.3911 30.1489 17.3209 30.1489 17.2501C30.1489 17.1792 30.135 17.1091 30.1078 17.0436C30.0807 16.9782 30.0409 16.9187 29.9908 16.8687L20.2877 7.16555C20.2376 7.11543 20.1782 7.07567 20.1127 7.04855C20.0473 7.02142 19.9772 7.00745 19.9063 7.00745C19.8355 7.00745 19.7653 7.02142 19.6999 7.04855C19.6344 7.07567 19.575 7.11543 19.5249 7.16555Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showMobileNav" class="navbar-mobile">
            <div class="nav-mobile-top">
                <img class="mobile-logo" src="/images/logo.png" alt="">
                <img @click="closeNav" src="/images/close.svg" alt="">
            </div>
            <div class="d-flex flex-column">
                <router-link class="custom-router" to="/">
                    <div class="one-nav-mobile">
                        <h3>Home</h3>
                        <img src="/images/arrow-right.png" alt="">
                    </div>
                </router-link>
                <router-link class="custom-router" to="/project">
                    <div class="one-nav-mobile">
                        <h3>Projects</h3>
                        <img src="/images/arrow-right.png" alt="">
                    </div>
                </router-link>
                <div class="one-nav-mobile">
                    <h3>About us</h3>
                    <img src="/images/arrow-right.png" alt="">
                </div>
                <router-link class="custom-router" to="/awards">
                    <div class="one-nav-mobile">
                        <h3>Awards & Recognitions</h3>
                        <img src="/images/arrow-right.png" alt="">
                    </div>
                </router-link>
                <div class="one-nav-mobile">
                    <h3>Gallery</h3>
                    <img src="/images/arrow-right.png" alt="">
                </div>
                <router-link class="custom-router" to="/activities">
                    <div class="one-nav-mobile">
                        <h3>Activities</h3>
                        <img src="/images/arrow-right.png" alt="">
                    </div>
                </router-link>
                <div style="border-bottom: solid 1px #283618;" class="one-nav-mobile">
                    <h3>Contact</h3>
                    <img src="/images/arrow-right.png" alt="">
                </div>

            </div>

        </div>
    </header>

    <div>
        <div class="projects-updates">
            <div class="projects">
                <div class="projects-top">
                    <h1 class="main-title">Projects</h1>
                    <router-link to="/view/projects">
                        <p class="view">View More</p>
                    </router-link>
                </div>
                <div class="">
                    <div class="custom-router project-cards ">
                        <div v-for="project in projects" class="project-one-card">
                            <router-link :to="'/project/'+project.id">
                                <button style="font-family: 'IBM Plex Sans', sans-serif;" class="pill-btn">{{dateFormate(project.date)}}</button>
                                <img :src="project.preview?api_url+project.preview:'/images/no_img.png'" alt="">
                                <div class="d-flex align-items-center justify-content-between" style="gap: 0.375rem;padding: 0.5rem 0.75rem 0 0.75rem;">
                                    <h2>{{project.name}}</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                                        <g clip-path="url(#clip0_260_315)">
                                            <path d="M27.3371 7.67289C27.2592 7.47203 27.1423 7.28853 26.9934 7.13289L20.448 0.587442C20.2955 0.434871 20.1143 0.313844 19.9148 0.231273C19.7155 0.148701 19.502 0.106201 19.2861 0.106201C18.8504 0.106201 18.4325 0.279308 18.1243 0.587442C17.8162 0.895576 17.6431 1.3135 17.6431 1.74926C17.6431 2.18502 17.8162 2.60295 18.1243 2.91107L21.888 6.65835H2.92249C2.48851 6.65835 2.07229 6.83075 1.76542 7.13764C1.45854 7.4445 1.28613 7.86073 1.28613 8.29471C1.28613 8.72871 1.45854 9.14492 1.76542 9.4518C2.07229 9.75868 2.48851 9.93107 2.92249 9.93107H21.888L18.1243 13.6783C17.971 13.8305 17.8493 14.0115 17.7661 14.2109C17.683 14.4103 17.6403 14.6241 17.6403 14.8402C17.6403 15.0562 17.683 15.2701 17.7661 15.4695C17.8493 15.6689 17.971 15.8499 18.1243 16.002C18.2765 16.1554 18.4575 16.2771 18.6568 16.3602C18.8563 16.4433 19.0701 16.486 19.2861 16.486C19.5021 16.486 19.716 16.4433 19.9155 16.3602C20.1148 16.2771 20.2958 16.1554 20.448 16.002L26.9934 9.45653C27.1423 9.30091 27.2592 9.11739 27.3371 8.91653C27.5007 8.51814 27.5007 8.07128 27.3371 7.67289Z" fill="#0B9F0D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_260_315">
                                                <rect width="27.8182" height="18" fill="white" transform="translate(0.0908203)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/green-star.png" class="star" alt="">
            <div class="updates w-100">
                <div class="projects-top">
                    <h1 class="main-title">Updates & Events</h1>
                    <router-link to="/view/events">
                        <p class="view">View More</p>
                    </router-link>
                </div>
                <div class="update-cards">

                    <div v-for="event in events" class="update-one-card">
                        <router-link :to="'/event/'+event.id">
                            <img :src="event.preview?api_url+event.preview:'/images/no_img.png'" alt="">
                            <div style="padding: 1.13rem 1.25rem 2.13rem 1.37rem;">
                                <button style="padding: 0.1875rem 1.5rem;font-size: 1.0625rem;line-height: 1.59375rem" class="pill-btn">New</button>
                                <h2 style="margin-top: 0.66rem;">{{event.name}}</h2>
                                <p class="description mt-2" style="color: #000;line-height: 1.75rem;" v-html="stringLimit(event.description, 150, true)">
                                </p>
                            </div>
                            <div class="d-flex align-items-center" style="padding: 0.25rem 1.375rem 2rem 1.375rem;gap: 0.375rem;">
                                <h6 style="font-size: 1.0625rem;color: #323232;font-weight:700 ;">Read Now</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                                    <g clip-path="url(#clip0_259_297)">
                                        <path d="M27.3371 7.67289C27.2592 7.47203 27.1423 7.28853 26.9934 7.13289L20.448 0.587442C20.2955 0.434871 20.1143 0.313844 19.9148 0.231273C19.7155 0.148701 19.502 0.106201 19.2861 0.106201C18.8504 0.106201 18.4325 0.279308 18.1243 0.587442C17.8162 0.895576 17.6431 1.3135 17.6431 1.74926C17.6431 2.18502 17.8162 2.60295 18.1243 2.91107L21.888 6.65835H2.92249C2.48851 6.65835 2.07229 6.83075 1.76542 7.13764C1.45854 7.4445 1.28613 7.86073 1.28613 8.29471C1.28613 8.72871 1.45854 9.14492 1.76542 9.4518C2.07229 9.75868 2.48851 9.93107 2.92249 9.93107H21.888L18.1243 13.6783C17.971 13.8305 17.8493 14.0115 17.7661 14.2109C17.683 14.4103 17.6403 14.6241 17.6403 14.8402C17.6403 15.0562 17.683 15.2701 17.7661 15.4695C17.8493 15.6689 17.971 15.8499 18.1243 16.002C18.2765 16.1554 18.4575 16.2771 18.6568 16.3602C18.8563 16.4433 19.0701 16.486 19.2861 16.486C19.5021 16.486 19.716 16.4433 19.9155 16.3602C20.1148 16.2771 20.2958 16.1554 20.448 16.002L26.9934 9.45653C27.1423 9.30091 27.2592 9.11739 27.3371 8.91653C27.5007 8.51814 27.5007 8.07128 27.3371 7.67289Z" fill="#0B9F0D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_259_297">
                                            <rect width="27.8182" height="18" fill="white" transform="translate(0.0908203)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="testimonials" style="background-color: #fff;">
                <h1>Testimonials</h1>
                <div class="d-flex testimonials-list" style="gap: 1.5rem;overflow-x: auto;">

                    <div v-for="testimonial in testimonials" :key="index" class="one-testimonial">
                        <router-link :to="'/testimonial/'+testimonial.id" class="custom-router">
                            <img :src="testimonial.preview?api_url+testimonial.preview:'/images/no_img.png'" alt="">
                            <div class="d-flex flex-column mt-2" style="padding: 0 0.75rem;gap: 0.5rem;">
                                <h2>{{ testimonial.name }}</h2>
                                <p>{{ dateFormate(testimonial.date) }}</p>
                            </div>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
        <div class="d-flex  justify-content-center">

            <div class="mision-vision">
                <div class="one-vision">
                    <img src="/images/vision5.png" alt="">
                    <div class="d-flex " style="gap: 0.25rem;padding: 2.1875rem 1.5rem;gap: 0.9375rem;">
                        <h6>(1)</h6>
                        <div class="d-flex align-items-center" style="gap: 0.25rem;">
                            <div class="d-flex flex-column" style="gap: 0.9375rem;">
                                <h1>Our vision</h1>
                                <p>Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.</p>
                            </div>
                            <svg style="min-width: 3rem;min-height: 3rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                <path d="M25.9063 28.0935H13.875V25.906H25.9063V13.8748H28.0938V25.906H40.125V28.0935H28.0938V40.1248H25.9063V28.0935Z" fill="#283618" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="one-vision">
                    <img src="/images/mision5.png" alt="">
                    <div class="d-flex " style="gap: 0.25rem;padding: 2.1875rem 1.5rem;gap: 0.9375rem;">
                        <h6>(2)</h6>
                        <div class="d-flex align-items-center" style="gap: 0.25rem;">
                            <div class="d-flex flex-column" style="gap: 0.9375rem;">
                                <h1>Our mission</h1>
                                <p>Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.</p>
                            </div>
                            <svg style="min-width: 3rem;min-height: 3rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                <path d="M25.9063 28.0935H13.875V25.906H25.9063V13.8748H28.0938V25.906H40.125V28.0935H28.0938V40.1248H25.9063V28.0935Z" fill="#283618" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="one-vision">
                    <img src="/images/objective5.png" alt="">
                    <div class="d-flex " style="gap: 0.25rem;padding: 2.1875rem 1.5rem;gap: 0.9375rem;">
                        <h6>(3)</h6>
                        <div class="d-flex align-items-center" style="gap: 0.25rem;">
                            <div class="d-flex flex-column" style="gap: 0.9375rem;">
                                <h1>Our objective</h1>
                                <p>To ensure and support community based people’s organisations for development interventions.</p>
                            </div>
                            <svg style="min-width: 3rem;min-height: 3rem;" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                <path d="M25.9063 28.0935H13.875V25.906H25.9063V13.8748H28.0938V25.906H40.125V28.0935H28.0938V40.1248H25.9063V28.0935Z" fill="#283618" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div :style="{backgroundColor: sectionBackgroundColor}" class="vision-section">
            <div class="vision-section-left">
                <img :src="visionImage" alt="">
                <div class="quote">
                    <p>{{ visionText }}</p>
                </div>
            </div>
            <div class="vision-section-right">
                <div @mouseover="changeContent('our-vision')" @mouseleave="resetContent" class="our-vision">
                    <div class="vision-one-left">
                        <p>(1)</p>
                        <div class="d-flex flex-column" style="gap: 0.65rem;">
                            <h4>Our vision</h4>
                            <h5>Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.</h5>
                        </div>
                    </div>
                    <img src="/images/add.png" alt="">
                </div>
                <div @mouseover="changeContent('our-mission')" @mouseleave="resetContent" class="our-mission">
                    <div class="vision-one-left">
                        <p>(2)</p>
                        <div class="d-flex flex-column" style="gap: 0.65rem;">
                            <h4>Our mission</h4>
                            <h5>Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.</h5>
                        </div>
                    </div>
                    <img src="/images/add.png" alt="">
                </div>
                <div @mouseover="changeContent('our-objective')" @mouseleave="resetContent" class="our-objective">
                    <div class="vision-one-left">
                        <p>(3)</p>
                        <div class="d-flex flex-column" style="gap: 0.65rem;">
                            <h4>Our objective</h4>
                            <h5>Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.</h5>
                        </div>
                    </div>
                    <img src="/images/add.png" alt="">
                </div>
            </div>
            <div>
            </div>
        </div> -->
        <!-- :style="{background:donateSectionHover ? '#0B9F0D' : 'url(/images/poverty.jpg) center / cover'}" ref="donateSection" -->
        <!-- @mouseover="changeDonateSectionBg" @mouseleave="resetDonateSectionBg" -->
        <div class="donate-section">
            <div class="donate-content">
                <!-- <h1>Let’s end poverty. <br> For good.</h1> -->
                <p>Your small support makes a big difference in providing opportunities and financial security for those in need</p>
                <a href="https://rzp.io/l/AamDxsS" target="_blank">
                    <button style="font-size: 1.5rem;" class="donate-btn ">Donate</button>
                </a>
            </div>
        </div>
    </div>
    <Footer />

</div>
</template>

<script>
import Project from "./components/Project.vue"
import Footer from "./components/Footer.vue"
import router from "../../../router";

export default {
    name: "home",
    components: {
        Project,
        Footer,
        router
    },
    data() {
        return {
            showMobileNav: false,
            Breakings: [{
                    image: "/images/breaking-2.png"
                },
                {
                    image: "/images/breaking-3.png"
                },
                {
                    image: "/images/breaking-2.png"
                },
                {
                    image: "/images/breaking-3.png"
                },
                {
                    image: "/images/breaking-2.png"
                },
            ],

            donateSectionHover: false,
            sectionBackgroundColor: '#1E1E1E',
            visionImage: "/images/vision.png",
            visionText: "Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.",
            banner: {},
            stories: [],
            projects: [],
            events: [],
            testimonials: [],
        };
    },
    mounted() {
        this.getHomeData()
    },
    methods: {
        getHomeData() {
            var headers = new Headers()
            headers.append("Authorization", "Token " + this.$root.token);
            fetch(this.api_url + '/wsss/home_data/', {
                    method: 'get',
                    headers: headers,
                })
                .then((response) => {
                    return response.json()
                })
                .then((jsonData) => {
                    this.banner = jsonData.banner
                    this.stories = jsonData.stories
                    this.projects = jsonData.projects
                    this.events = jsonData.events
                    this.testimonials = jsonData.testimonials
                })
        },
        openNav() {
            this.showMobileNav = true;
        },
        closeNav() {
            this.showMobileNav = false;
        },
        changeDonateSectionBg() {
            this.donateSectionHover = true;
        },
        resetDonateSectionBg() {
            this.donateSectionHover = false;
        },

        changeContent(section) {
            switch (section) {

                case 'our-vision':
                    this.visionImage = "/images/vision.png";
                    this.visionText = "Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.";
                    break;
                case 'our-mission':
                    this.visionImage = "/images/vision2.png";
                    this.visionText = "Organising and empowering the target groups consisting of small and marginal farmers, women, tribes, youth and children in the target area through participatory process of development.";
                    break;
                case 'our-objective':
                    this.visionImage = "/images/vision3.png";
                    this.visionText = "To ensure and support community based people’s organisations for development interventions. ·To build self-reliance among the people by mobilizing resources, capacity building, creating employment";
                    break;
            }
            this.sectionBackgroundColor = '#283618';
        },
        resetContent() {
            this.sectionBackgroundColor = '#1E1E1E';
            this.visionImage = "/images/vision.png";
            this.visionText = "Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.";

        },
    },

}
</script>

<style>
@import "./style/style.css";
</style>
