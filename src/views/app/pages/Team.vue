<template>
<div>
    <Navbar />
    <div class="team">
        <h1>WSSS Team</h1>
        <div class="d-flex justify-content-center flex-wrap" style="gap: 1.25rem;">
            <div v-for="team in Teams" class="one-person">
                <img :src="team.image" alt="">
                <div class="one-person-text d-flex flex-column" style="gap: 0.5rem;">
                    <h3>{{ team.name }}</h3>
                    <h4>{{ team.position }}</h4>

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
    name: 'Team',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            Teams: [{
                    name: 'P.A Jose',
                    position: 'PROGRAM OFFICER',
                    image: '/images/team1.jpg'
                },
                {
                    name: 'Robin Joseph',
                    position: 'STATE HEAD ,DDU - GKY',
                    image: '/images/team2.jpg'
                },
                {
                    name: 'Sr. Anilit',
                    position: 'CO ORDINATOR, SAFP',
                    image: '/images/team3.jpg'
                },
                {
                    name: 'Jini Shinu',
                    position: 'ANIMATOR, JAL JEEVAN MISSION',
                    image: '/images/team4.jpg'
                },
                {
                    name: 'Shiji Joyson',
                    position: 'SOAP AND DETERGENT UNIT',
                    image: '/images/team5.jpg'
                },
                {
                    name: 'Sheeba Shaji',
                    position: 'SOAP AND DETERGENT UNIT',
                    image: '/images/team6.jpg'
                },
                {
                    name: 'Sheena Saji',
                    position: 'SOAP AND DETERGENT UNIT',
                    image: '/images/team7.jpg'
                },
                {
                    name: 'Binu Joy',
                    position: 'SOAP AND DETERGENT UNIT',
                    image: '/images/team8.jpg'
                },
                {
                    name: 'Mercy Shaji',
                    position: 'TRAINING CENTRE',
                    image: '/images/team9.jpg'
                },
                {
                    name: 'Tubin P E',
                    position: 'ANIMATOR, JAL JEEVAN MISSION',
                    image: '/images/team10.jpg'
                },
                {
                    name: 'Shilly',
                    position: 'ANIMATOR, JAL JEEVAN MISSIO',
                    image: '/images/team11.jpg'
                },
                {
                    name: 'Alice Cicil',
                    position: 'REGIONAL CO ORDINATOR',
                    image: '/images/team12.jpg'
                },
                {
                    name: 'Shermil Shibu',
                    position: 'FINANCE MANAGER',
                    image: '/images/team13.jpg'
                },
                {
                    name: 'Mini Unnikrishnan',
                    position: 'CO ORDINATOR ,KLM AND INSURANCE',
                    image: '/images/team14.jpg'
                },
                {
                    name: 'Jancy Jijo',
                    position: 'CENTER HEAD,DDUGKY',
                    image: '/images/team15.jpg'
                },
                {
                    name: 'Sheena Antony',
                    position: 'ACCOUNTANT',
                    image: '/images/team16.jpg'
                },
                {
                    name: 'Jerin John',
                    position: 'ACCOUNTANT',
                    image: '/images/team17.jpg'
                },
                {
                    name: 'Deepu Joseph',
                    position: 'TEAM LEADER,JAL JEEVAN MISSION',
                    image: '/images/team18.jpg'
                },
                {
                    name: 'Chinchu Maria Peter',
                    position: 'TRAINER ,FDGT',
                    image: '/images/team19.jpg'
                },
                {
                    name: 'Biju. K.J',
                    position: 'BOTANIST',
                    image: '/images/team20.jpg'
                },
                 {
                    name: 'Anjana Thomas',
                    position: 'TRAINER ,FDGT',
                    image: '/images/f-no-image.jpg'
                },
                 {
                    name: 'Jubin Augustin',
                    position: 'MIS HEAD',
                    image: '/images/g-no-image.jpg'
                },
                

            ]
        }
    },
}
</script>

<style>
@import './style/style.css';
</style>
