<template>
<div>
    <Navbar />
    <div class="history">
        <div class="history-left">
            <div class="p-4" style="border-bottom: solid 1px #d9d9d9;">
                <h1>OUR JOURNEY</h1>
            </div>

            <button @click="activeSection = 'history1'" :class="{'active' : activeSection === 'history1'}">1974-1985</button>
            <button @click="activeSection = 'history2'" :class="{'active' : activeSection === 'history2'}">1984-1995</button>
            <button @click="activeSection = 'history3'" :class="{'active' : activeSection === 'history3'}">1995-2005</button>
            <button @click="activeSection = 'history4'" :class="{'active' : activeSection === 'history4'}">2005-2015</button>
            <button @click="activeSection = 'history5'" :class="{'active' : activeSection === 'history5'}">2015-2025</button>
        </div>
        <div style="flex: 1;" class="history-right">

            <h1 v-if="activeSection === 'history1'">1974 - 1985</h1>
            <h1 v-if="activeSection === 'history2'">1984 - 1995</h1>
            <h1 v-if="activeSection === 'history3'">1995 - 2005</h1>
            <h1 v-if="activeSection === 'history4'">2005 - 2015</h1>
            <h1 v-if="activeSection === 'history5'">2015 - 2025</h1>
            <h6 v-if="activeSection === 'history1'">THE BEGINNING</h6>
            <div class="d-flex flex-column " style="margin-top: 1.125rem;gap: 1.5rem;padding-bottom: 11rem;flex: 1;">
                <div v-if="activeSection === 'history1'" v-for="history in history1" class="one-history-card">
                    <div class="d-flex flex-column" style="gap: 1rem;">
                        <div v-for="image in history.images" class="d-flex flex-column " style="gap: 1rem;">
                            <div class="history-img-bg position-relative">
                                <img :src="image.img" alt="">
                                <h5 style="position: absolute; ">{{ image.year }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column" style="gap: 0.25rem;">
                        <h2>Headline here</h2>
                        <ul v-if="history.description && history.description.length > 0">
                            <li v-for="dec in history.description">{{ dec }}</li>
                        </ul>
                        <h3 v-else><span>{{ history.subtitle }}</span> {{ history.text }}</h3>
                    </div>
                </div>

                <div v-if="activeSection === 'history2'" v-for="history in history2" class="one-history-card">
                    <div class="d-flex flex-column" style="gap: 1rem;">
                        <div v-for="image in history.images" class="d-flex flex-column " style="gap: 1rem;">
                            <div class="history-img-bg position-relative">
                                <img :src="image.img" alt="">
                                <h5 style="position: absolute; ">{{ image.year }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column" style="gap: 0.25rem;">
                        <h2>Headline here</h2>
                        <ul v-if="history.description && history.description.length > 0">
                            <li v-for="dec in history.description">{{ dec }}</li>
                        </ul>
                        <h3 v-else><span>{{ history.subtitle }}</span> {{ history.text }}</h3>
                    </div>
                </div>

                <div v-if="activeSection === 'history3'" v-for="history in history3" class="one-history-card">
                    <div class="d-flex flex-column" style="gap: 1rem;">
                        <div v-for="image in history.images" class="d-flex flex-column " style="gap: 1rem;">
                            <div class="history-img-bg position-relative">
                                <img :src="image.img" alt="">
                                <h5 style="position: absolute; ">{{ image.year }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column" style="gap: 0.25rem;">
                        <h2>Headline here</h2>
                        <ul v-if="history.description && history.description.length > 0">
                            <li v-for="dec in history.description">{{ dec }}</li>
                        </ul>
                        <h3 v-else><span>{{ history.subtitle }}</span> {{ history.text }}</h3>
                    </div>
                </div>

                <div v-if="activeSection === 'history4'" v-for="history in history4" class="one-history-card">
                    <div class="d-flex flex-column" style="gap: 1rem;">
                        <div v-for="image in history.images" class="d-flex flex-column " style="gap: 1rem;">
                            <div class="history-img-bg position-relative">
                                <img :src="image.img" alt="">
                                <h5 style="position: absolute; ">{{ image.year }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column" style="gap: 0.25rem;">
                        <h2>Headline here</h2>
                        <ul v-if="history.description && history.description.length > 0">
                            <li v-for="dec in history.description">{{ dec }}</li>
                        </ul>
                        <h3 v-else><span>{{ history.subtitle }}</span> {{ history.text }}</h3>
                    </div>
                </div>

                <div v-if="activeSection === 'history5'" v-for="history in history5" class="one-history-card">
                    <div class="d-flex flex-column" style="gap: 1rem;">
                        <div v-for="image in history.images" class="d-flex flex-column " style="gap: 1rem;">
                            <div class="history-img-bg position-relative">
                                <img :src="image.img" alt="">
                                <h5 style="position: absolute; ">{{ image.year }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column" style="gap: 0.25rem;">
                        <h2>Headline here</h2>
                        <ul v-if="history.description && history.description.length > 0">
                            <li v-for="dec in history.description">{{ dec }}</li>
                        </ul>
                        <h3 v-else><span>{{ history.subtitle }}</span> {{ history.text }}</h3>
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
    name: 'History',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            activeSection: 'history1',
            history1: [{
                    title: '',
                    description: ['Registration of wayanad social service society under charitable societies registration act of 1860.',
                        'Started plant nursery near bishops house for providing quality seedlings to the farmers in the wayanad district'
                    ],
                    images: [{
                        img: '/history/1974_1978_1.jpg',
                        year: '1974'
                    }],

                },
                {
                    title: '',
                    description: ['Tribal development program in thiunnellygramapanchayath.',
                        'Mother and child health program (mch) with the support of catholic relief service (crs)',
                        'Family sponsorship program with the support of safp'
                    ],
                    images: [{
                            img: '/history/1978_83_1.jpg',
                            year: '1974 - 1978'

                        },
                        {
                            img: '/history/1978_83_2.jpg',
                            year: '1974 - 1978'
                        }
                    ],

                },
                {
                    title: '',

                    images: [{
                        img: '/history/1978a.jpg',
                        year: '1978'
                    }],
                    text: 'Comprehensive socio-economic survey of the North Wayanad region was conducted with the financial assistance of MISEREOR'

                },
                {
                    title: '',

                    images: [{
                        img: '/history/1978a.jpg',
                        year: '1978 - 1983'
                    }],
                    text: 'This period could be considered as a high water mark in the history of Wayanad Social Service Society, during which burning issues like human rights, mobilization of tribals, Non Formal Education programme, unionization of tea estate workers, conscientisation and awareness building among the oppressed and deprived sections of society like tribals and women, and struggles like the Gudallur anti-eviction action were taken up actively.'
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1978a.jpg',
                        year: '1983 - 1985'
                    }],
                    text: 'Organisation of the marginal and small farmers became an unavoidable necessity. This was because it was realized more and more that the genuine development of the people of Wayanad, whose vast majority belong to the agricultural community, can be attained only through the betterment of the socio-economic status of the farmers.',
                    subtitle: 'Farmer based Programs: '
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1983_85_1.jpg',
                        year: '1983 - 1985'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1983_85_2.jpg',
                        year: '1983 - 1985'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1985.jpg',
                        year: '1985'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1985_89_1.jpg',
                        year: '1985 - 1989'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1985_89_2.jpg',
                        year: '1985 - 1989'
                    }],
                },

            ],
            history2: [{
                    title: '',
                    images: [{
                        img: '/history/1989.jpg',
                        year: '1989'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1990_1.jpg',
                        year: '1990'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1990_2.jpg',
                        year: '1990'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/1993_1.jpg',
                        year: '1993'
                    }],
                },

            ],
            history3: [{
                    title: '',
                    images: [{
                        img: '/history/2000_2002_1.jpg',
                        year: '2000 - 2002'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2000_2002_2.jpg',
                        year: '2000 - 2002'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2001_11.jpg',
                        year: '2001'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2002_1.jpg',
                        year: '2004'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2004_1.jpeg',
                        year: '2004'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2004_2.jpeg',
                        year: '2004'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2005_06_1.jpg',
                        year: '2005'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2005_06_2.jpg',
                        year: '2005'
                    }],
                },

            ],

            history4: [{
                    title: '',
                    images: [{
                        img: '/history/2006_2007_1.jpg',
                        year: '2006 - 2007'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2006_2007_2.jpg',
                        year: '2006 - 2007'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2008.jpg',
                        year: '2008'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2008_2011_1.jpeg',
                        year: '2008 - 2011'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2008_2011_2.jpeg',
                        year: '2008 - 2011'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2009.jpg',
                        year: '2009'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2011_14_1.jpeg',
                        year: '2011 - 2014'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2011_14_2.jpeg',
                        year: '2011 - 2014'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2012_1.jpg',
                        year: '2012'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2014_1.jpeg',
                        year: '2014'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2015_1.jpeg',
                        year: '2015'
                    }],
                },

            ],


             history5: [{
                    title: '',
                    images: [{
                        img: '/history/2016_1.jpg',
                        year: '2016'
                    }],
                },
             {
                    title: '',
                    images: [{
                        img: '/history/2016_2.jpg',
                        year: '2016'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2017_1.jpeg',
                        year: '2017'
                    }],
                },
               {
                    title: '',
                    images: [{
                        img: '/history/2017_2.jpg',
                        year: '2017'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2018_1.jpg',
                        year: '2018'
                    }],
                },
               {
                    title: '',
                    images: [{
                        img: '/history/2018_2.jpg',
                        year: '2018'
                    }],
                },
               {
                    title: '',
                    images: [{
                        img: '/history/2019_1.jpg',
                        year: '2019'
                    }],
                },
               {
                    title: '',
                    images: [{
                        img: '/history/2019_2.jpeg',
                        year: '2019'
                    }],
                },
                {
                    title: '',
                    images: [{
                        img: '/history/2020_1.jpg',
                        year: '2020'
                    }],
                },
               {
                    title: '',
                    images: [{
                        img: '/history/2020_2.jpeg',
                        year: '2020'
                    }],
                },{
                    title: '',
                    images: [{
                        img: '/history/2020_3.jpg',
                        year: '2020'
                    }],
                },
              

            ],

        }
    },
}
</script>

<style>
@import "./style/style.css";
</style>
