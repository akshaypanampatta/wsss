<template>
<div>
    <Navbar />
    <div>
        <div class="activity">
            <img class="project-image" src="/images/project1.jpg" alt="">
            <div class="activity-title">
                <h1>Page headline</h1>
                <h5>An Undertaking of the Catholic Diocese of Mananthavady.</h5>
                <button style="background-color: #0B9F0D;color: #FEFAE0;" class="green-btn">For more information contact us ></button>
            </div>
            <!-- <div class="rotate-box">
            </div> -->
        </div>
        <div class="activity-text">
            <div class="line"></div>
            <div class="activity-des">
                <div style="margin-bottom: 1.25rem;" class="green-bg">
                    <h2>06 Feb 2023 • 08:45 AM</h2>
                </div>
                <h1>WSSS is forming 200 joint lability groups (JLGS)</h1>
                <p>The Wayanad Service Society (WSSS), the official social work wing of the Mananthavady Diocese, has been accorded special consultative status with the United Nations Economic and Social Council (ECOSOC).The recognition was a testimony to the dedicated efforts that the organization has been making since its inception in 1974.This consultative status will enable the organization to actively engage with ECOSOC and its subsidiary bodies, UN secretariat, programmes, projects and funds in a number of ways. Wayanad Social Service Society started the process of interaction and procedures of project application with UN since 2015. It is a great achievement that the organization gained this successful international development platform which will definitely make conducive atmosphere with the Sustainable Development Goals (SDG 2030).</p>
            </div>
        </div>
        <div style="padding-top: 9rem;" class="updates" >
            <div class="projects-top">
                <h1 class="main-title">Related</h1>
                <!-- <router-link to="/view/events">
                    <p class="view">View More</p>
                </router-link> -->
            </div>
            <div style="padding-bottom: 4rem;" class="update-cards">
                <div v-for="index in 7" class="update-one-card">
                    <!-- <router-link :to="'/event/'+event.id"> -->
                    <img src="/images/no_img.png" alt="">
                    <div style="padding: 1.13rem 1.25rem 2.13rem 1.37rem;">
                        <button style="padding: 0.1875rem 1.5rem;font-size: 1.0625rem;line-height: 1.59375rem" class="pill-btn">New</button>
                        <h2 style="margin-top: 0.66rem;">7jhu7yj</h2>
                        <p class="description mt-2" style="color: #000;line-height: 1.75rem;">
                            yjhy
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
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "Activities",
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
@import "./style/style.css";
</style>
