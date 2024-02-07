<template>
<div>
    <Navbar />
    <div class="contact-us d-flex" style="gap: 5.6rem;">
        <div class="contact-left w-50">
            <h1>You require any further details please use the form below and we will be in touch with you shortly...</h1>
            <p>Wayanad Social Service Society (WSSS) is a registered charitable society Registered under Charitable Societies Registration Act of 1860 and a secular voluntary organization established in the year 1974.</p>

        </div>
         <div class="contact-right w-50">
            <h1 class="mb-4">Contact Us</h1>
            <form class="d-flex flex-column" style="gap: 0.875rem;" action="">
                <div class="d-flex flex-column" style="gap: 0.25rem;">
                    <p>Email</p>
                    <input placeholder="Enter email" class="w-100" type="text">
                </div>
                <div class="d-flex flex-column" style="gap: 0.25rem;">
                    <p>Name</p>
                    <input placeholder="Enter name" class="w-100" type="text">
                </div>
                <div class="d-flex flex-column" style="gap: 0.25rem;">
                    <p>Message</p>
                    <textarea style="height: 11rem;" name="" placeholder="Type message" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Send Message</button>
            </form>


         </div>

    </div>
    <Footer />
</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'ContactUs',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
@import './style/style.css';
</style>
