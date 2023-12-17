<template>
<div class="position-relative">
    <div class="navbar-total">
        <div class="navbaar">
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
            <button @click="openNav" class="menu-btn"><img src="/images/menu-2.svg" alt=""></button>
        </div>
        <button class="green-btn">Donate</button>
        <div class="nav-logo">
            <img class="nav-logo-image" src="/images/footer-logo.png" alt="">
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

</div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            showMobileNav: false
        }
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
@import "../style/style.css";
</style>
