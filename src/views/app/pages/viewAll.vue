<template>
<div>

    <Navbar />
    <div>
        <div class="projects-updates">
            <div v-if="current_page=='projects'">
                <div class="projects">
                    <div class="projects-top">
                        <h1 class="main-title">Projects</h1>
                    </div>
                    <div v-if="projectSkeleton" style="padding: 1.98rem 4.5rem 4.5rem 4.5rem;gap: 1.875rem;" class="d-flex w-100 flex-wrap">
                        <div v-for="project in projects" class="view-all-one-card">
                            <router-link :to="'/project/'+project.id">
                                <b-skeleton-img no-aspect height="350px"></b-skeleton-img>
                                <div class="d-flex pt-2 align-items-center justify-content-between" style="gap: 0.375rem;padding: 0 0.75rem;">
                                    <div class="d-flex flex-column">
                                        <h2>
                                            <b-skeleton animation="wave" style="height: 1rem;border-radius: 1rem;" width="9rem"></b-skeleton>
                                        </h2>
                                        <h2>
                                            <b-skeleton animation="wave" style="height: 1rem;border-radius: 1rem;" width="5rem"></b-skeleton>
                                        </h2>
                                    </div>
                                    <b-skeleton animation="wave" style="height: 1rem;border-radius: 1rem;" width="2rem"></b-skeleton>
                                    <button style="font-family: 'IBM Plex Sans', sans-serif;background-color: #adadad;" class="pill-btn">
                                        <b-skeleton animation="wave" style="height: 1rem;border-radius: 1rem;" width="5rem"></b-skeleton>
                                    </button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div v-else style="padding: 1.98rem 4.5rem 4.5rem 4.5rem;gap: 1.875rem;" class="d-flex w-100 flex-wrap">
                        <div v-for="project in projects" class="view-all-one-card">
                            <router-link :to="'/project/'+project.id">
                                <img :src="project.preview?project.preview:'/images/no_img.png'" alt="" style="height: 350px;">
                                <div class="d-flex pt-2 align-items-center justify-content-between" style="gap: 0.375rem;padding: 0 0.75rem;">
                                    <h2>{{project.name}}</h2>
                                    <svg style="min-width: 1.73863rem;" xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
                                        <g clip-path="url(#clip0_295_846)">
                                            <path d="M27.3371 8.17314C27.2592 7.97227 27.1423 7.78877 26.9934 7.63314L20.448 1.08769C20.2955 0.935115 20.1143 0.814088 19.9148 0.731517C19.7155 0.648945 19.502 0.606445 19.2861 0.606445C18.8504 0.606445 18.4325 0.779552 18.1243 1.08769C17.8162 1.39582 17.6431 1.81374 17.6431 2.2495C17.6431 2.68526 17.8162 3.10319 18.1243 3.41132L21.888 7.15859H2.92249C2.48851 7.15859 2.07229 7.331 1.76542 7.63788C1.45854 7.94475 1.28613 8.36097 1.28613 8.79495C1.28613 9.22895 1.45854 9.64516 1.76542 9.95204C2.07229 10.2589 2.48851 10.4313 2.92249 10.4313H21.888L18.1243 14.1786C17.971 14.3307 17.8493 14.5117 17.7661 14.7111C17.683 14.9105 17.6403 15.1244 17.6403 15.3404C17.6403 15.5564 17.683 15.7703 17.7661 15.9697C17.8493 16.1691 17.971 16.3501 18.1243 16.5022C18.2765 16.6556 18.4575 16.7773 18.6568 16.8604C18.8563 16.9435 19.0701 16.9862 19.2861 16.9862C19.5021 16.9862 19.716 16.9435 19.9155 16.8604C20.1148 16.7773 20.2958 16.6556 20.448 16.5022L26.9934 9.95677C27.1423 9.80115 27.2592 9.61764 27.3371 9.41677C27.5007 9.01838 27.5007 8.57153 27.3371 8.17314Z" fill="#0B9F0D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_295_846">
                                                <rect width="27.8182" height="18" fill="white" transform="translate(0.0908203 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <button style="font-family: 'IBM Plex Sans', sans-serif;" class="pill-btn">{{dateFormate(project.date)}}</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <img src="/images/green-star.png" class="star" alt="">
            </div>
            <div class="updates" v-else-if="current_page=='events'">
                <div class="projects-top">
                    <h1 class="main-title">Updates & Events</h1>
                </div>
                <div v-if="projectSkeleton" class="d-flex flex-wrap" style="padding: 2.37rem 4.5rem 5rem 4.5rem;gap: 1.5rem;">
                    <div v-for="event in events" class="update-card-view-all update-one-card">
                        <router-link :to="'/event/'+event.id">
                            <b-skeleton-img no-aspect height="12.5rem"></b-skeleton-img>
                            <div style="padding: 1.13rem 1.25rem 2.13rem 1.37rem;">
                                <b-skeleton animation="wave" style="min-height: 1.5rem;border-radius: 1rem;" width="5rem"></b-skeleton>
                                <b-skeleton animation="wave" style="height: 1rem;border-radius: 1rem;margin: 1rem 0;" width="60%"></b-skeleton>
                                <div class="d-flex flex-column">
                                    <b-skeleton animation="wave" style="max-height: 0.75rem;border-radius: 1rem;" width="90%"></b-skeleton>
                                    <b-skeleton animation="wave" style="max-height: 0.75rem;border-radius: 1rem;" width="95%"></b-skeleton>
                                    <b-skeleton animation="wave" style="max-height: 0.75rem;border-radius: 1rem;" width="85%"></b-skeleton>
                                    <b-skeleton animation="wave" style="max-height: 0.75rem;border-radius: 1rem;" width="60%"></b-skeleton>

                                </div>
                            </div>
                            <div class="d-flex align-items-center" style="padding: 0.25rem 1.375rem 2rem 1.375rem;gap: 0.375rem;">
                                <b-skeleton animation="wave" style="height: 1.5rem;border-radius: 1rem;" width="5rem"></b-skeleton>
                                <b-skeleton animation="wave" style="height: 1.5rem;border-radius: 1rem;" width="2rem"></b-skeleton>
                            </div>
                        </router-link>
                    </div>

                </div>
                <div v-else class="d-flex flex-wrap" style="padding: 2.37rem 4.5rem 5rem 4.5rem;gap: 1.5rem;">
                    <div v-for="event in events" class="update-card-view-all update-one-card">
                        <router-link :to="'/event/'+event.id">
                            <img style="width: 100%;" :src="event.preview?event.preview:'/images/no_img.png'" alt="">
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
        </div>
    </div>
    <Footer />

</div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Project from "./components/Project.vue"
import Footer from "./components/Footer.vue"

export default {
    name: "home",
    components: {
        Project,
        Footer,
        Navbar,
    },
    data() {
        return {
            showMobileNav: false,
            donateSectionHover: false,
            sectionBackgroundColor: '#1E1E1E',
            visionImage: "/images/vision.png",
            visionText: "Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.",
            banner: {},
            stories: [],
            projects: [],
            events: [],
            current_page: this.$route.params.page,
        };
    },
    mounted() {
        if (this.current_page == 'projects') {
            this.getProjects()
        } else if (this.current_page == 'events') {
            this.getEvents()
        }
    },
    methods: {
        getProjects() {
            var headers = new Headers()
            this.projectSkeleton = true
            headers.append("Authorization", "Token " + this.$root.token);
            fetch(this.api_url + '/wsss/projects/', {
                    method: 'get',
                    headers: headers,
                })
                .then((response) => {
                    return response.json()
                })
                .then((jsonData) => {
                    this.projects = jsonData.results
                    this.projectSkeleton = false
                })
        },
        getEvents() {
            var headers = new Headers()
            this.projectSkeleton = true
            headers.append("Authorization", "Token " + this.$root.token);
            fetch(this.api_url + '/wsss/events/', {
                    method: 'get',
                    headers: headers,
                })
                .then((response) => {
                    return response.json()
                })
                .then((jsonData) => {
                    this.events = jsonData.results
                    this.projectSkeleton = false
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
