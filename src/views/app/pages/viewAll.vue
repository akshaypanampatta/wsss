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
                    <div class="">
                        <div class="row pr-5 mt-2">
                            <div class="col-md-3" v-for="project in projects" >
                                <div class="project-one-card">
                                    <router-link :to="'/project/'+project.id">
                                        <img :src="project.preview?project.preview:'/images/no_img.png'" alt="" style="height: 350px;">
                                        <div class="d-flex flex-column" style="gap: 0.375rem;">
                                            <h2>{{project.name}}</h2>
                                            <button style="font-family: 'IBM Plex Sans', sans-serif;" class="pill-btn">{{dateFormate(project.date)}}</button>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/star.png" class="star" alt="">
            </div>
            <div class="updates" v-else-if="current_page=='events'">
                <div class="projects-top">
                    <h1 class="main-title">Updates & Events</h1>
                </div>
                
                <div class="row">
                    <div class="col-md-4 my-3" v-for="event in events">
                        <div class="update-one-card">
                            <router-link :to="'/event/'+event.id">
                                <img :src="event.preview?event.preview:'/images/no_img.png'" alt="" style="height: 450px;">
                                <h2>{{event.name}}</h2>
                                <p class="description" style="color: #000;" v-html="stringLimit(event.description, 150, true)">
                            
                                </p>
                                <div class="d-flex justify-content-end">
                                    <img src="/images/arrow-right.png" alt="">
                                </div>
                            </router-link>
                        </div>
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
            donateSectionHover:false,
            sectionBackgroundColor: '#1E1E1E',
            visionImage: "/images/vision.png",
            visionText: "Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.",
            banner :{},
            stories:[],
            projects:[],
            events:[],
            current_page : this.$route.params.page,
        };
    },
    mounted(){
        if(this.current_page=='projects'){
            this.getProjects()
        }else if(this.current_page=='events'){
            this.getEvents()
        }
    },
    methods: {
	    getProjects() {
            var headers = new Headers()
            headers.append("Authorization", "Token "+this.$root.token);
	      	fetch(this.api_url+'/wsss/projects/', {
	          	method : 'get',
                headers: headers,
	      	})
	      	.then((response) => {
	          return response.json()
	      	})
	      	.then((jsonData) => {
                this.projects = jsonData.results
	      	})
	    },
	    getEvents() {
            var headers = new Headers()
            headers.append("Authorization", "Token "+this.$root.token);
	      	fetch(this.api_url+'/wsss/events/', {
	          	method : 'get',
                headers: headers,
	      	})
	      	.then((response) => {
	          return response.json()
	      	})
	      	.then((jsonData) => {
                this.events = jsonData.results
	      	})
	    },
        openNav() {
            this.showMobileNav = true;
        },
        closeNav() {
            this.showMobileNav = false;
        },
        changeDonateSectionBg(){
            this.donateSectionHover = true;
        },
        resetDonateSectionBg(){
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
