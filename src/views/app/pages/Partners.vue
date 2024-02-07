<template>
<div>
    <Navbar />
    <div class="partners d-flex flex-column " >
        <h1>Partners in development</h1>

        <div class="d-flex justify-content-center flex-wrap" style="gap: 1.25rem;">
            <div v-for="partner in Partners" class="one-partner">
                <div class="one-partner-top">
                    <img :src="partner.image" alt="">
                </div>
                <div class="py-3 px-2" style="border-top: solid 1px #cdcdcd;">
                    <p>{{ partner.name }}</p>
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
    name: 'Partners',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            Partners:[
                {
                    name:'NABARD',
                    image:'/images/nabard.jpg'
                },
                 {
                    name:'Ministry of Rural Development',
                    image:'/images/rural.jpg'
                },
                 {
                    name:'Ministry of Minority Affairs',
                    image:'/images/minority.jpg'
                },
                 {
                    name:'Save a Family Plan',
                    image:'/images/family.png'
                },
                 {
                    name:'Caritas India',
                    image:'/images/caritass.jpg'
                },
                 {
                    name:'Italian Bishops Conference',
                    image:'/images/italian.jpg'
                },
                 {
                    name:'Kudumbashree',
                    image:'/images/kudumbasree.jpg'
                },
                 {
                    name:'Jalanidhi',
                    image:'/images/jalanidhi.png'
                },
                 {
                    name:'Khadi And Village Industries Centre (KVIC)',
                    image:'/images/khadi.jpg'
                },
                 {
                    name:'Kerala Social Service Forum( KSSF )',
                    image:'/images/kssf.jpg'
                },
                 {
                    name:'Star health insurance',
                    image:'/images/starr.png'
                },
                 {
                    name:'Life Insurance Corporation of India',
                    image:'/images/lic.png'
                },
                 {
                    name:'Department of Science and Technology (DST)',
                    image:'/images/dst.png'
                },
                 {
                    name:'National Medicinal Plants Board',
                    image:'/images/medicinal.jpg'
                },
                 {
                    name:'National Centre for Organic Farming',
                    image:'/images/organic.jpg'
                },
                 {
                    name:'National Horticultre Mission',
                    image:'/images/horticular.jpg'
                },
                 {
                    name:'Local Self-Government Department',
                    image:'/images/local.png'
                },
                 {
                    name:'Spices Board',
                    image:'/images/spices.jpg'
                },
                 {
                    name:'Coffee Board',
                    image:'/images/coffee.jpg'
                },
                 {
                    name:'DEG Germany',
                    image:'/images/deg.jpg'
                },
                 {
                    name:'Coconut Development Board',
                    image:'/images/coconut.jpg'
                },
                 {
                    name:'TRIFED',
                    image:'/images/trifed.jpg'
                },
                 {
                    name:'Kerala Labour Movement',
                    image:'/images/labour.jpg'
                },
                 {
                    name:'Ministry of Electronics and Information Technology',
                    image:'/images/electronics.jpg'
                },
                 {
                    name:'C-DAC',
                    image:'/images/cdac.png'
                },
                 {
                    name:'Kerala Agriculture University',
                    image:'/images/agriculture.jpg'
                },
                 {
                    name:'REACH-Chennai',
                    image:'/images/reach.png'
                },
                 {
                    name:'Krishi Vigyan Kendra (KVK)',
                    image:'/images/kvk.jpg'
                },
                 {
                    name:'Dairy Development Department',
                    image:'/images/diary.jpg'
                },
                 {
                    name:'State Institute of Educational Technology (SIET)',
                    image:'/images/siet.png'
                },
                 {
                    name:'Vigyan Prasar',
                    image:'/images/vigyan.png'
                },
                 {
                    name:'Jal Jeevan Mission',
                    image:'/images/jal.jpg'
                },
                

            ]
        }
    },
}
</script>

<style>
@import './style/style.css';
</style>
