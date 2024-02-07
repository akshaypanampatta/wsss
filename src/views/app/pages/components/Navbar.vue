<template>
<div class="position-relative">
    <div class="navbar-total">
        <div class="navbaar">
            <router-link class="custom-router" to="/">
                <button>Home</button>
            </router-link>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret right="10">
                <template #button-content>
                    <button>Projects <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M16.5716 12.2144L12.0001 16.7858L7.42871 12.2144" stroke="#1E1E1E" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                </template>
                <div class="projects-dropdown custom-dropdown">
                    <div class="d-flex flex-wrap">
                        <router-link to="" v-for="index in 6" class="pb-4">
                            <span>
                                <h4>Project 1</h4>
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
                        <h4 style="color: #000;font-size: 1.125rem;font-weight: 500;text-decoration: underline;line-height: 1.7rem;">View All Projects</h4>
                        <img src="/images/logo-drop.png" alt="">

                    </div>

                </div>
            </b-dropdown>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                    <button>About us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143" stroke="#1E1E1E" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                </template>
                <div class="custom-dropdown">
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Initiatives</h4>
                    </div>
                    <router-link to="/history" class="custom-router">
                        <div style="padding: 0.625rem 1.5rem;">
                            <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">History</h4>
                        </div>
                    </router-link>
                    <router-link to="/partners">
                        <div style="padding: 0.625rem 1.5rem;">
                            <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Partners in Development</h4>
                        </div>
                    </router-link>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Consultancy Services</h4>
                    </div>
                    <router-link to="/annual-reports" class="custom-router">
                        <div style="padding: 0.625rem 1.5rem;">
                            <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Annual Reports & Audit Statements</h4>
                        </div>
                    </router-link>
                    <router-link to="/wsss-team">
                        <div style="padding: 0.625rem 1.5rem;">
                            <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Wsss Team</h4>
                        </div>
                    </router-link>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">Career</h4>
                    </div>
                    <div style="padding: 0.625rem 1.5rem;">
                        <h4 class="sub-title" style="font-size: 1rem;color: #202020;line-height: 1.5rem;">ERP Login</h4>
                    </div>

                </div>
            </b-dropdown>
            <router-link class="custom-router" to="/awards">
                <button>Awards & Recognitions</button>
            </router-link>
            <router-link to="/gallery" class="custom-router">
                <button>Gallery</button>
            </router-link>
            <b-dropdown variant="link"  toggle-class="text-decoration-none"  class="activity-drop" no-caret >
                            <template #button-content>
                                <button>Activities <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M16.5716 12.2143L12.0001 16.7857L7.42871 12.2143" stroke="#1E1E1E" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                            </template>
                            <div class="projects-dropdown custom-dropdown">
                                <div class="d-flex flex-wrap">
                                    <router-link class="pb-4" to="" >
                                        <span>
                                            <h4>Activity 1</h4>
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
                                    <h4 style="color: #000;font-size: 1.125rem;font-weight: 500;text-decoration: underline;line-height: 1.7rem;cursor: pointer;">View All Projects</h4>
                                    <img src="/images/logo-drop.png" alt="">
                                </div>
                            </div>
                            
                        </b-dropdown>
            <button>Contact</button>
            <button @click="openNav" class="menu-btn"><img src="/images/menu-2.svg" alt=""></button>
        </div>
        <a href="https://rzp.io/l/AamDxsS">
            <button style="background-color: #0B9F0D;color: #fff;" class="green-btn">Donate</button>
        </a>

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
