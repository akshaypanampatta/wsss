<template>
<div>
    <Navbar />
    <div>
        <div class="main-heading">
            <h1>Annual Reports</h1>
        </div>
        <div class="d-flex flex-wrap" style="padding: 2rem 4.5rem 10rem 4.5rem;gap: 1.875rem;">
            <div v-for="index in 3" class="one-annual-report">
                <img src="/images/report.png" alt="">
                <button class="pill-btn" style="padding: 0.375rem 1rem;color: #0B9F0D;font-size: 1rem;font-weight: 500;background-color: #fff;">View Report</button>
                <div class="d-flex align-items-center justify-content-between" style="padding: 0.875rem;">
                    <div class="d-flex flex-column" style="gap: 0.125rem;">
                        <h1>Annual Report 2020</h1>
                        <p>PDF</p>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16.0007 21.3334L9.33398 14.6667L11.2007 12.7334L14.6673 16.2V5.33337H17.334V16.2L20.8007 12.7334L22.6673 14.6667L16.0007 21.3334ZM8.00065 26.6667C7.26732 26.6667 6.63976 26.4058 6.11798 25.884C5.59621 25.3623 5.33487 24.7343 5.33398 24V20H8.00065V24H24.0007V20H26.6673V24C26.6673 24.7334 26.4064 25.3614 25.8847 25.884C25.3629 26.4067 24.7349 26.6676 24.0007 26.6667H8.00065Z" fill="black" />
                        </svg>
                    </span>
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
    name: 'AnnualReports',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
@import './style/style.css';
</style>
