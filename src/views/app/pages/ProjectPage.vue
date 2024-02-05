<template>
<div>
    <Navbar />
    <div class="project-page">
        <div class="project-page-top">
            <img class="project-image" :src="form_data.preview?form_data.preview:'/images/no_img.png'" alt="">
            <div class="black"></div>
            <img class="play-img" src="/images/play.svg" alt="">
        </div>
        <div class="project-page-content">
            <h1>{{form_data.name}}</h1>
            <p v-html="form_data.description"></p>
        </div>
    </div>
    <Footer/>

</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "ProjectPage",
    components: {
        Navbar,
        Footer
    },
    data(){
        return{
            form_data : {id:this.$route.params.id},
        }
    },
    mounted(){
        this.getProject()
    },
    methods: {
        getProject(){
            var headers = new Headers()
            headers.append("Authorization", "Token "+this.$root.token);
	      	fetch(this.api_url+'/wsss/projects/'+this.form_data.id+'/', {
	          	method : 'get',
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
