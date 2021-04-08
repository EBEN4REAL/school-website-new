<template>
    <MasterLayout :title="title" :BgUrl="BgUrl">
        <div class="content_width mb-4">
            <h4 class="section_col_header text-center py-3 primary-color">It’s as easy as 1, 2, 3</h4>
            <div class="admission_file_holder">
                <div class="admission_file_section first" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <a href="./Prospectus.pdf"  download>
                        <button class="header_hover">Download Prospectus</button>
                    </a>
                </div>
                <div class="adm_left_rod" data-aos="fade-down" data-aos-duration="2000"></div>
                <div class="admission_file_section second" data-aos="zoom-in" data-aos-duration="2000">
                    <a href="./Fees_Struture.pdf"  download>
                         <button class="header_hover">Download Fee structure</button>
                    </a>
                </div>
                <div class="adm_left_rod" data-aos="fade-up" data-aos-duration="2000"></div>
                <div class="admission_file_section third" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <a href="./Application_Form.pdf"  download>
                        <button class="header_hover">Download application form</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="full_width_wrapper nursery_holder">
            <h4 class="section_col_header text-center primary-color">Zero tuition for nursery</h4>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4 nursery_slider" data-aos="fade-right" data-aos-duration="2000">
                    <splide :options="options" data-aos="fade-right" data-aos-duration="2000">
                        <splide-slide>
                            <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617626813/nursery-admission_eonagp.png" width="100%" >
                        </splide-slide>
                        <splide-slide>
                            <img src="https://cdn.pixabay.com/photo/2019/10/02/07/15/education-4520228_960_720.jpg" width="100%" >
                        </splide-slide>
                        <splide-slide>
                            <img src="https://cdn.pixabay.com/photo/2014/04/20/19/49/paint-328676_960_720.jpg" width="100%"  >
                        </splide-slide>
                        <splide-slide>
                            <img src="https://cdn.pixabay.com/photo/2018/03/25/21/01/motor-loop-3260697_960_720.jpg" width="100%" >
                        </splide-slide>
                        <splide-slide>
                            <img src="https://cdn.pixabay.com/photo/2019/03/03/11/34/colored-pencils-4031668_960_720.jpg" width="100%" >
                        </splide-slide>
                        <splide-slide>
                            <img src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="100%" >
                        </splide-slide>
                    </splide>
                    <!-- <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617626813/nursery-admission_eonagp.png"> -->
                </div>
                <div class="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
                    <p class="section_col_text">The Nursery is free for the first thirty hours per week that a 3-4 year old attends; therefore, if a child attends for only fifteen hours a week there are no fees to pay!</p>
                </div>
            </div>
        </div>
         <div class="full_width_wrapper open_bible_wrapper "  :style="[{
                backgroundImage: `linear-gradient(rgb(0, 0, 0 , 0.75), rgb(0, 0, 0 , 0.75)), url(${OpenBibleBG})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }]">
            <h4 class="text-white">Matthew 6:21 says,</h4>
            <p class="py-5 ">“For where your treasure is, there your heart will be also.”</p>
        </div>
         <div class="mt-4 centra_para_section">
            <p class="section_col_text" data-aos="zoom-in" data-aos-duration="2000">
                Everyone knows that what we really value is what we invest in. We believe that our children are worth investing in. The financial contribution from each family is kept to a minimum by the sacrificial giving of time, energy, and availability of all the staff involved as well as the generous support of volunteer parents. Sol Christian Academy is very grateful for the financial support it has received from individuals and churches.
            </p>
            <div class="row py-4">
                <div class="col-md-6 admission_media_wrapper" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div class="admission_media header_hover">
                        <div class="row align-items-center hundred-percent-height">
                            <div class="col-md-4">
                                <div class="icon_centralised_wrapper">
                                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731932/money_4_1_h26ftf.svg" style="width: 40px;">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <a href="./Fees_Struture.pdf" download >
                                    <h6>Fees</h6>
                                    <div class="card_para">Fees Annual Fees per academic year for a student in one of our Learning Centres:</div>
                                    <div class="mt-3">
                                        <!-- <small class="bold_text "> £3,600.</small> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 admission_media_wrapper" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div class="admission_media header_hover">
                        <div class="row align-items-center hundred-percent-height">
                            <div class="col-md-4">
                                <div class="icon_centralised_wrapper">
                                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731934/money_nf9erm.svg" style="width: 40px;">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <a href="./Fees_Struture.pdf" download>
                                     <h6>PAYMENT</h6>
                                    <div class="card_para">Payment School Fees are payable by standing order in twelve monthly payments:</div>
                                    <div class="mt-3">
                                        <small class="bold_text ">Make Payment</small>
                                    </div>
                                    
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default {
    name: 'About',
    components: {
        Splide,
        SplideSlide,
        MasterLayout
    },
    data() {
        return {
            title: 'Admission',
            BgUrl : 'https://cdn.pixabay.com/photo/2016/03/22/07/07/pre-1272291_960_720.jpg',
            OpenBibleBG: 'https://res.cloudinary.com/sol-academy/image/upload/v1608731943/opened-holy-bible_lnuv6e.png',
            options: {
                rewind : true,
                width  : 800,
                gap    : '1rem',
            },
        }
    }
}
</script>