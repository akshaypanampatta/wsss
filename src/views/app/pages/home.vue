<template>
<div>

    <header>
        <div class="header-container">
            <div class="banner-image">
                <div class="navbar-full">
                    <div class="navbar">
                        <router-link class="custom-router" to="/">
                            <button>Home</button>
                        </router-link>
                        <router-link class="custom-router" to="/project">
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
                    <h1>WSSS is forming 200 joint lability groups (JLGS)</h1>
                    <p class="description">Wayanad Social Service Society (WSSS) is a registered charitable society Registered under Charitable Societies Registration Act of 1860 and a secular voluntary organization established in the year 1974. It is the official social work organization of the Catholic Diocese of Mananthavady.</p>
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
    <Project />
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
    methods: {
        openNav() {
            this.showMobileNav = true;
        },
        closeNav() {
            this.showMobileNav = false;
        }
    },

}
</script>

<style>
@import "./style/style.css";
</style>
