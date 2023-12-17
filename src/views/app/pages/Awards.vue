<template>
<div>
    <Navbar />
    <div class="aswards">
        <div class="awards-header">
            <h1>Awards & Recognitions</h1>
        </div>
        <div class="awards-body">
            <div class="awars-list">
                <div class="one-award">
                    <div class="one-award-left">
                        <img src="/images/award-.png" alt="">
                    </div>
                    <div class="award-text">
                        <div class="d-flex " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge.png" alt="">
                            <h3>SPECIAL CONSULTATIVE STATUS FOR WSSS WITH THE UNITED NATIONS ECONOMIC AND SOCIAL COUNCIL (ECOSOC)</h3>
                        </div>
                        <div>
                            <p>The Wayanad Service Society (WSSS), the official social work wing of the Mananthavady Diocese, has been accorded special consultative status with the United Nations Economic and Social Council (ECOSOC).The recognition was a testimony to the dedicated efforts that the organization has been making since its inception in 1974.This consultative status will enable the organization to actively engage with ECOSOC and its subsidiary bodies, UN secretariat, programmes, projects and funds in a number of ways. Wayanad Social Service Society started the process of interaction and procedures of project application with UN since 2015. It is a great achievement that the organization gained this successful international development platform which will definitely make conducive atmosphere with the Sustainable Development Goals (SDG 2030).</p>
                        </div>
                    </div>
                </div>
                 <div class="one-award">
                    <div class="award-text">
                        <div class="d-flex " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge.png" alt="">
                            <h3>BEST PFA (NABARD WADI PROJCET)</h3>
                        </div>
                        <div>
                            <p>Wayanad Social Service Society has been selected as the best Program Facilitating Agency in the State for NABARD Integrated Tribal Development Project (WADI). During the function held at Thiruvanathapuram, Rev.Fr. Jinoj Palathadathil (Associate Director, WSSS) and P.A.Jose (Program Officer, WSSS) were accepted Award from Sri.V.S.Anilkumar, Minister for Agriculture, Kerala State. NABARD is implementing the Integrated Tribal Development Project (WADI) in various districts of Kerala. The project is being implemented by various Program Facilitating Agencies (PFAs).</p>
                        </div>
                    </div>
                    <div class="one-award-left">
                        <img src="/images/award-.png" alt="">
                    </div>
                    
                </div>
                 <div class="one-award">
                    <div class="one-award-left">
                        <img src="/images/award-.png" alt="">
                    </div>
                    <div class="award-text">
                        <div class="d-flex " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge.png" alt="">
                            <h3>SPECIAL APPRECIATION AWARD - 2019</h3>
                        </div>
                        <div>
                            <p>WSSS got Special Appreciation award from World Malayalee Association for Environment Conservation Projects. Mr.Pradeep Kumar, WSSS received the Special Appreciation Award from Sri. Pinarai Vijayan, Chief Minister of Kerala</p>
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
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "Awards",
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
@import "./style/style.css";
</style>
