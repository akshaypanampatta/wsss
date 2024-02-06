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
                        <img src="/images/award.png" alt="">
                    </div>
                    <div class="award-text">
                        <div class="d-flex align-items-center " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge2.png" alt="">
                            <h3>SPECIAL APPRECIATION AWARD - 2019</h3>
                        </div>
                        <div>
                            <p>WSSS got Special Appreciation award from World Malayalee Association for Environment Conservation Projects. Mr.Pradeep Kumar, WSSS received the Special Appreciation Award from Sri. Pinarai Vijayan, Chief Minister of Kerala</p>
                        </div>
                    </div>
                </div>
                <div class="one-award">
                    <div class="award-text">
                        <div class="d-flex align-items-center " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge2.png" alt="">
                            <h3>BEST PFA (NABARD WADI PROJCET)</h3>
                        </div>
                        <div>
                            <p>Wayanad Social Service Society has been selected as the best Program Facilitating Agency in the State for NABARD Integrated Tribal Development Project (WADI). During the function held at Thiruvanathapuram, Rev.Fr. Jinoj Palathadathil (Associate Director, WSSS) and P.A.Jose (Program Officer, WSSS) were accepted Award from Sri.V.S.Anilkumar, Minister for Agriculture, Kerala State. NABARD is implementing the Integrated Tribal Development Project (WADI) in various districts of Kerala. The project is being implemented by various Program Facilitating Agencies (PFAs).</p>
                        </div>
                    </div>
                    <div class="one-award-left">
                        <img src="/images/award2.png" alt="">
                    </div>

                </div>
                <div class="one-award">
                    <div class="one-award-left">
                        <img src="/images/award3.png" alt="">
                    </div>
                    <div class="award-text">
                        <div class="d-flex align-items-center" style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge2.png" alt="">
                            <h3>SPECIAL CONSULTATIVE STATUS FOR WSSS WITH THE UNITED NATIONS ECONOMIC AND SOCIAL COUNCIL (ECOSOC)</h3>
                        </div>
                        <div>
                            <p>Wayanad Social Service Society has been selected as the best Program Facilitating Agency in the State for NABARD Integrated Tribal Development Project (WADI). During the function held at Thiruvanathapuram, Rev.Fr. Jinoj Palathadathil (Associate Director, WSSS) and P.A.Jose (Program Officer, WSSS) were accepted Award from Sri.V.S.Anilkumar, Minister for Agriculture, Kerala State. NABARD is implementing the Integrated Tribal Development Project (WADI) in various districts of Kerala. The project is being implemented by various Program Facilitating Agencies (PFAs).
                            </p>
                        </div>
                    </div>
                </div>
                <div class="one-award">
                    <div class="award-text">
                        <div class="d-flex align-items-center " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge2.png" alt="">
                            <h3>Paristhithi Mithra Award, Uzhavoor College</h3>
                        </div>
                        <div>
                            <p>No text</p>
                        </div>
                    </div>
                    <div class="one-award-left">
                        <img src="/images/award4.png" alt="">
                    </div>

                </div>
                <div class="one-award">
                    <div class="one-award-left">
                        <img src="/images/award5.png" alt="">
                    </div>
                    <div class="award-text">
                        <div class="d-flex align-items-center" style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge2.png" alt="">
                            <h3>Excellence Award: Kerala Social Service Form- 2014</h3>
                        </div>
                        <div>
                            <p>To text</p>
                        </div>
                    </div>
                </div>
                 <div class="one-award">
                    <div class="award-text">
                        <div class="d-flex align-items-center " style="gap: 1.5rem;">
                            <img class="badgee" src="/images/badge2.png" alt="">
                            <h3>Best overall performance of State Nodal Agency ( first prize) : Vikaspedia- 2016</h3>
                        </div>
                        <div>
                            <p>No text</p>
                        </div>
                    </div>
                    <div class="one-award-left">
                        <img src="/images/award6.png" alt="">
                    </div>

                </div>

            </div>
            <!-- <div style="padding: 2.625rem 0;border-bottom: solid 1px #d1d1d1;">
                <h1 style="font-size: 3.5625rem;font-weight: 400;color: #000;">Other Awards</h1>
            </div> -->
            <!-- <div v-for="(award,index) in awards" class="other-awards py-4 d-flex align-items-center">
                <img src="/images/badge2.png" alt="">
                <p>{{ award.name }}</p>
            </div>
            <div style="padding: 2.625rem 0;margin-top: 3.4rem;">
                <h1 style="font-size: 3.5625rem;font-weight: 400;color: #000;">Recognitions</h1>
            </div>
            <div class="d-flex flex-wrap" style="gap: 0.5rem;">
                <div v-for="recognition in Recognitions " class="recognition-one">
                    <div class="d-flex flex-column" style="z-index: 1000!important;gap: 1.5rem;">
                        <p>THE RECOGNISATION</p>
                        <h1>{{ recognition.text }}</h1>
                        <img  src="/images/awards.png" alt="">
                    </div>
                </div>
            </div> -->
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
    data() {
        return {
            awards: [{
                    name: 'Best overall performance of State Nodal Agency ( first prize) : Vikaspedia- 2016',
                },
                {
                    name: 'Model enterprise (medium scale) : State Pollution Control Board-2016'
                },
                {
                    name: 'Best overall performance of State Nodal Agency (second prize) : Vikaspedia- 2015'
                },
                {
                    name: 'Excellence Award: Kerala Social Service Form- 2014'
                },
                {
                    name: 'Karshik Sevak Puraskar : Sree Maha Genapathy Bhakthajana Sevak- 2013'
                },
                {
                    name: 'Best Entrepreneur Award (Wayanad district) : State Industries Department, Kerala - 2012'
                },

            ],
            Recognitions: [{
                    text: 'Regional Council for PGS- NCOF-Govt. of India'
                },
                {
                    text: 'Service Provider for Organic Farming: NCOF-Govt. of India'
                },
                {
                    text: 'State Nodal Agency for Vikaspedia knowledge portal – Ministry of Information technology'
                },
                {
                    text: 'Program Facilitating Agency for NABARD Women SHG Program, Watershed Program, WADI Program, Farm Club Promotion, JLG Promotion, MEDP, LEDP, CAT, Financial Literacy , FTTF, UPNRM Project, Farmer Producer Organizations & KfW Soil projects.'
                },
                {
                    text: 'Program Implementing Agency of Western Ghat Development Projects- Department of Planning & Economic Affairs.'
                },
                {
                    text: 'Program Implementing Agency of NULM- Ministry of Rural Development'
                },
                {
                    text: 'Program Implementing Agency of NAI ROSHNI Training Program- Ministry of Rural Development'
                },
                {
                    text: 'Program Facilitating Agency of Sammunnathi Project- Corporation for Forward Community.'
                },
                {
                    text: 'Service Provider of Tribal Sub Plan Projects'
                },
                {
                    text: 'Program Facilitating Agency of TRIFED'
                },

                {
                    text: 'Service Provider of Sujitwa Mission Kerala'
                },
                {
                    text: 'Supporting Organization of Jalanidhi Project'
                },
                {
                    text: 'Program Implementing Agency- FCT Training, Coconut Dev. Board'
                },
                {
                    text: 'Service Provider of MILMA for Biogas Promotion'
                },
                {
                    text: 'Service Provider of Sustainable Development Agency – SDA'
                },
                {
                    text: 'Service Provider of Andhyodaya - Solar Water Heater, CFL Lamps, Lanterns & DLS'
                },
                {
                    text: 'Service Provider of Khadi & Village Industries Commission'
                },
                {
                    text: 'Master Training Institute for NABARD Krishi Jaldhooth Project'
                },
                {
                    text: 'National Accredited Agency for conducting NABARD rural immersion program'
                },
                {
                    text: 'Consortium Partner for ICAR Projects'
                },

            ]
        }
    },
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
@import "./style/style.css";
</style>
