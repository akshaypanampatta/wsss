<template>
<div>
    <Navbar />
    <div class="gallery">
        <div style="border-bottom: solid 2px #000;width: fit-content;" class="py-3 px-2">
            <h1>Gallery</h1>
        </div>
        <div style="padding: 0.75rem 0.5rem;">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

        </div>
        <div style="margin-top: 2.1rem;gap: 2rem;" class="d-flex flex-wrap">
            <div v-for="photo in photos" class="gallery-card d-flex flex-column">
                <h1>Headline</h1>
                <img :src='photo.thumbnail' alt="">
                <h6>Indo German Social Service Society.(IGSSS)</h6>
            </div>

        </div>

        <!-- <div class="gallery-container">
            <div class="gallery-top" ref="gallery">
                <img v-for="(gallery,index) in GalleryTop" :src="gallery.image" :key="index" alt="">
                <img v-for="(gallery,index) in GalleryTop" :src="gallery.image" :key="index" alt="">
            </div>
        </div>
        <div style="margin-top: 2.25rem;" class="gallery-container">
            <div class="gallery-center" ref="gallery">
                <img v-for="(gallery,index) in GalleryCenter.slice(-2)" :src="gallery.image" :key="'center-duplicate-' + index" alt="">
                <img v-for="(gallery,index) in GalleryCenter" :src="gallery.image" :key="'center-' + index" alt="">
                <img v-for="(gallery,index) in GalleryCenter.slice(0, 2)" :src="gallery.image" :key="'center-duplicate-' + index" alt="">
            </div>
        </div>
        <div style="margin-top: 2.25rem;" class="gallery-top" ref="gallery">
            <div class="gallery-top" ref="gallery">
                <img v-for="(gallery,index) in GalleryBottom" :src="gallery.image" :key="index" alt="">
                <img v-for="(gallery,index) in GalleryBottom" :src="gallery.image" :key="index" alt="">
            </div>
        </div> -->
    </div>
    <Footer />

</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "Gallery",
    data() {
        return {
            photos: [],
            GalleryTop: [{
                    image: '/images/1-1.jpg'
                },
                {
                    image: '/images/2.jfif'
                },
                {
                    image: '/images/2.jpg'
                },
                {
                    image: '/images/4.jfif'
                },
                {
                    image: '/images/5.jpg'
                },
            ],
            GalleryCenter: [{
                    image: '/images/6.jfif'
                },
                {
                    image: '/images/7.jfif'
                },
                {
                    image: '/images/8.jfif'
                },
                {
                    image: '/images/9.jfif'
                },
                {
                    image: '/images/10.jpg'
                },
            ],
            GalleryBottom: [{
                    image: '/images/11.jpg'
                },
                {
                    image: '/images/12.jpeg'
                },
                {
                    image: '/images/13.jpg'
                },
                {
                    image: '/images/14.jpg'
                },
                {
                    image: '/images/15.jpg'
                },
            ],
        }
    },

    components: {
        Navbar,
        Footer
    },
    methods: {
        getPhotos() {
            var headers = new Headers();
            headers.append("Authorization", "Token " + this.$root.token);
            fetch(this.api_url + '/wsss/all_photos/', {
                    method: 'get',
                    headers: headers,
                })
                .then((response) => {
                    return response.json()
                })
                .then((jsonData) => {
                    this.photos = jsonData
                })
        },
    },
}
</script>

<style>
@import "./style/style.css";
</style>
