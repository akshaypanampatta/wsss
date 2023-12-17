<template>
<div>
    <header>
        <div class="header-container">
            <div class="banner-image">
                <div class="navbar-full">
                    <div class="navbar">
                        <button>Home</button>
                        <button>Projects</button>
                        <button>About us</button>
                        <button>Awards & Recognitions</button>
                        <button>Gallery</button>
                        <button>Activities</button>
                        <button>Contact</button>
                    </div>
                    <button class="donate-btn">Donate</button>
                </div>
                <div class="logo">
                    <img src="/images/logo.png" alt="">
                </div>
                <div class="banner-text">
                    <h1>WSSS is forming 200 joint lability groups (JLGS)</h1>
                    <p class="description">Wayanad Social Service Society (WSSS) is a registered charitable society Registered under Charitable Societies Registration Act of 1860 and a secular voluntary organization established in the year 1974. It is the official social work organization of the Catholic Diocese of Mananthavady.</p>
                    <div class="d-flex align-items-center" style="gap: 0.9rem;">
                        <button class="mute-btn"><img src="/images/mute.svg" alt=""></button>
                        <button class="donate-btn">Know More</button>
                    </div>
                </div>

            </div>
            <div class="breaking-story">
                <h2 class="sub-title">Breaking Stories</h2>
                <div class="breaking-story-list">
                    <div v-for="(data,index) in Breakings" :key="index" class="one-breaking-story">

                        <div class="overlay">
                            <img :src="data.image" alt="">
                            <img class="play-icon" src="/images/play.svg" alt="">
                        </div>

                        <div class="d-flex align-items-center justify-content-between" style="padding: 0.6rem 1.12rem 0 0;">
                            <div class="d-flex flex-column" style="gap: 0.65rem;">
                                <h3>ASHAKIRANAM DRESS BANK – A PHILANTHROPIC MOVEMENT</h3>
                                <div class="d-flex align-items-center" style="gap: 0.84rem;">
                                    <button class="pill-btn">Latest</button>
                                    <h4>02/03/2023</h4>
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
    </header>
    

</div>
</template>

<script>


export default {
    name: "Main",
    data() {
        return {
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
            ]
        };
    },
    
}
</script>

<style>
@import "./style/style.css";
</style>
