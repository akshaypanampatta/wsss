<template>
<div class="position-relative">
    <div class="navbar-total">
        <div class="navbaar">
            <router-link class="custom-router" to="/">
                <button>Home</button>
            </router-link>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                    <button>Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143" stroke="#1E1E1E" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                </template>
                <div class="custom-dropdown">
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 1</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 2</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 3</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 4</h4>
                    </div>

                </div>
            </b-dropdown>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                    <button>About us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143" stroke="#1E1E1E" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                </template>
                <div class="custom-dropdown">
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 1</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 2</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 3</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 4</h4>
                    </div>

                </div>
            </b-dropdown>
            <router-link class="custom-router" to="/awards">
                <button>Awards & Recognitions</button>
            </router-link>
            <button>Gallery</button>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                    <button>Activities <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143" stroke="#1E1E1E" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                </template>
                <div class="custom-dropdown">
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 1</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 2</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 3</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Option 4</h4>
                    </div>

                </div>
            </b-dropdown>
            <button>Contact</button>
            <button @click="openNav" class="menu-btn"><img src="/images/menu-2.svg" alt=""></button>
        </div>
        <button style="background-color: #0B9F0D;color: #fff;" class="green-btn">Donate</button>

        <img class="nav-logo-image" src="/images/nav-logo.png" alt="">

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
