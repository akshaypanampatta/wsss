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
                        <router-link class="custom-router" to="/view/projects">
                            <button>Projects</button>
                        </router-link>
                        <button>About us</button>
                        <router-link class="custom-router" to="/awards">
                            <button>Awards & Recognitions</button>
                        </router-link>
                        <button>Gallery</button>
                        <router-link class="custom-router" to="/activities">
                            <button>Activities</button>
                        </router-link>
                        <button>Contact</button>
                        <button @click="openNav" class="menu-btn"><img src="/images/menu.svg" alt=""></button>
                    </div>
                    <button class="donate-btn">Donate</button>
                </div>
                <div class="logo">
                    <img src="/images/logo.png" alt="">
                </div>
                <div class="banner-text">
                    <h1>{{banner.banner_title}}</h1>
                    <p class="description">
                        {{banner.banner_description}}
                    </p>
                    <div class="d-flex align-items-center" style="gap: 0.9rem;">
                        <button class="mute-btn"><img src="/images/mute.svg" alt=""></button>
                        <button class="donate-btn">Know More</button>
                    </div>
                </div>

            </div>
            <div class="breaking-story">
                <div class="d-flex align-items-center justify-content-between">
                    <h2 class="sub-title">Breaking Stories</h2>
                    <h6 class="view-more">View More</h6>

                </div>

                <div class="breaking-story-list">
                    <div v-for="(story,index) in stories" class="one-breaking-story">

                        <div class="overlay">
                            <img :src="story.preview?api_url+story.preview:'/images/no_img.png'" alt="">
                            <img class="play-icon" src="/images/play.svg" alt="">
                        </div>

                        <div class="d-flex align-items-center justify-content-between" style="padding: 0.6rem 1.12rem 0 0;">
                            <div class="d-flex flex-column" style="gap: 0.65rem;">
                                <h3>{{story.name}}</h3>
                                <div class="d-flex align-items-center" style="gap: 0.84rem;">
                                    <button class="pill-btn">Latest</button>
                                    <h4>{{dateFormate(story.date)}}</h4>
                                </div>
                            </div>
                            <div>
                                <img src="/images/arrow-right.png" alt="">
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
                    <div class="custom-router project-cards">
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
            <div class="updates">
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
                                <h6 style="font-size: 1.0625rem;color: #323232;font-weight: ;">Read Now</h6>
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

                            <!-- <div class="d-flex justify-content-end">
                                <img src="/images/arrow-right.png" alt="">
                            </div> -->
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="testimonials">
                <h1>Testimonials</h1>
                <div class="d-flex testimonials-list" style="gap: 1.5rem;overflow-x: auto;">
                    <div v-for="index in 10" :key="index" class="one-testimonial">
                        <img src="/images/testimonial.png" alt="">
                        <div class="d-flex flex-column mt-2" style="padding: 0 0.75rem;gap: 0.5rem;">
                            <h2>BEST PFA (NABARD WADI PROJCET)</h2>
                            <p>06-02-24</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div class="mision-vision">
            <div class="one-vision">
                <img src="/images/vision-1.png" alt="">
                <div class="p-3 d-flex flex-column" style="gap: 0.25rem;">
                    <h1>Our Vision</h1>
                    <p>The Society has its Vision stated as “Self reliant and vibrant human communities living in a sustainable environment</p>
                </div>
            </div>
            <div class="one-vision">
                <img src="/images/mission.png" alt="">
                <div class="p-3 d-flex flex-column" style="gap: 0.25rem;">
                    <h1>Our Mission</h1>
                    <p>Organising and empowering the target groups consisting of small and marginal farmers, women, tribes, youth and children</p>
                </div>
            </div>
            <div class="one-vision">
                <img src="/images/objective.png" alt="">
                <div class="p-3 d-flex flex-column" style="gap: 0.25rem;">
                    <h1>Our Vision</h1>
                    <p>To ensure and support community based people’s organisations for development interventions.</p>
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
        <div class="donate-section" :style="{background:donateSectionHover ? '#283618' : 'url(/images/donate.gif) center / cover'}" ref="donateSection">
            <div class="donate-content">
                <h1>Let’s end poverty. <br> For good.</h1>
                <p>By supporting our work, you are helping women and their families access opportunity and build financial security.</p>
                <button @mouseover="changeDonateSectionBg" @mouseleave="resetDonateSectionBg" style="font-size: 1.5rem;" class="donate-btn ">Donate</button>
            </div>
        </div>
    </div>
    <Footer />

</div>
</template>

<script>
import Project from "./components/Project.vue"
import Footer from "./components/Footer.vue"

export default {
    name: "home",
    components: {
        Project,
        Footer,
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
