<template>
<div>
    <Navbar />
    <div>
       <iframe width="100%" style="height: 31rem;" v-if="form_data.video_link" :src="form_data.video_link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div class="project-page-top" v-else>
            <img class="project-image" :src="form_data.preview?form_data.preview:'/images/no_img.png'" alt="">
        </div>


        <div class="activity-text" style="padding-top: 3rem;padding-bottom: 10rem;">
            <div class="activity-des">
                <div style="margin-bottom: 1.25rem;" class="green-bg">
                    <h2>{{dateFormate(form_data.date, true)}}</h2>
                </div>
                <h1>{{form_data.name}}</h1>
                <p v-html="form_data.description"></p>
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
    name: "Testimonial",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            form_data: {
                id: this.$route.params.id
            },
        }
    },
    mounted() {
        this.getProject()
    },
    methods: {
        getProject() {
            var headers = new Headers()
            headers.append("Authorization", "Token " + this.$root.token);
            fetch(this.api_url + '/wsss/testimonials/' + this.form_data.id + '/', {
                    method: 'get',
                    headers: headers,
                })
                .then((response) => {
                    return response.json()
                })
                .then((jsonData) => {
                    this.form_data = jsonData
                })
        }
    }
}
</script>

<style>
@import "./style/style.css";
</style>
