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
                <h1>WSSS is forming 200 joint lability groups (JLGS)</h1>
                <p>The Wayanad Service Society (WSSS), the official social work wing of the Mananthavady Diocese, has been accorded special consultative status with the United Nations Economic and Social Council (ECOSOC).The recognition was a testimony to the dedicated efforts that the organization has been making since its inception in 1974.This consultative status will enable the organization to actively engage with ECOSOC and its subsidiary bodies, UN secretariat, programmes, projects and funds in a number of ways. Wayanad Social Service Society started the process of interaction and procedures of project application with UN since 2015. It is a great achievement that the organization gained this successful international development platform which will definitely make conducive atmosphere with the Sustainable Development Goals (SDG 2030).</p>
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
