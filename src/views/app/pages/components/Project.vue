<template>
<div>

    <div class="projects-updates">
        <div class="projects">
            <div class="projects-top">
                <h1 class="main-title">Projects</h1>
                <p class="view">View More</p>
            </div>
            <div class="">
                <router-link class="custom-router project-cards" to="/project">
                    <div v-for="index in 8" :key="index" class="project-one-card">
                        <img src="/images/project.png" alt="">
                        <div class="d-flex flex-column" style="gap: 0.375rem;">
                            <h2>WSSS IS FORMING 200 JOINT LIABILITY GROUPS (JLGS)..</h2>
                            <button style="font-family: 'IBM Plex Sans', sans-serif;" class="pill-btn">2022-01-25</button>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <img src="/images/star.png" class="star" alt="">
        <div class="updates">
            <div class="projects-top">
                <h1 class="main-title">Updates & Events</h1>
                <p class="view">View More</p>
            </div>
            <div class="update-cards">
                <div v-for="index in 3" :key="index" class="update-one-card">
                    <img src="/images/project.png" alt="">
                    <h2>WSSS is forming 200 joint lability groups (JLGS)</h2>
                    <p class="description" style="color: #000;">Mar Sebastian Kallupura, Chairman, Caritas India and Archbishop of the Diocese of Patna, formally inaugurated the housin...</p>
                    <div class="d-flex justify-content-end">
                        <img src="/images/arrow-right.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div :style="{backgroundColor: sectionBackgroundColor}" class="vision-section">
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
    </div>
    <div class="donate-section" :style="{background:donateSectionHover ? '#283618' : 'url(/images/donate.gif) center / cover'}" ref="donateSection">
        <div class="donate-content">
            <h1>Let’s end poverty. <br> For good.</h1>
            <p>By supporting our work, you are helping women and their families access opportunity and build financial security.</p>
            <button @mouseover="changeDonateSectionBg" @mouseleave="resetDonateSectionBg"  style="font-size: 1.5rem;" class="donate-btn ">Donate</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Project",
    data() {
        return {
            donateSectionHover:false,
            sectionBackgroundColor: '#1E1E1E',
            visionImage: "/images/vision.png",
            visionText: "Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.",
            

        }
    },
    methods: {
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
@import "../style/style.css";
</style>
