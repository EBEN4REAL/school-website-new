<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2018/05/21/23/31/kids-3420032_960_720.png">
        <div class="pace_container content_width uniform_container">
            <p class="section_col_text para" data-aos="fade-down" data-aos-duration="2000">Uniform gives Our Students a sense of ‘Unity’ and by dressing correctly students can show pride in their school. Students are required to wear uniform at all times. All students must wear the uniform listed below.</p>
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-6 col-lg-12 mb-3 col-md-12 remove_about_padding" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731859/Group_3004_di4wr8.svg">
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-12 codes" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">DRESS CODE AND GENERAL GUIDELINES</h3>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Jewellery is not permitted in school except for girls who may wear one pair of studs or sleepers in their ears if pierced.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Body piercing is not permitted.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Hair for boys must be worn short.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">For girls, long hair must be tied back or a headband worn.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">Hair colouring is not permitted nor fashion or ‘Punk’ styles.</p>
                        </div>
                        <div class="flex_display">
                            <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                            <p class="section_col_text para">No mobile phones or bleepers are allowed in school unless prior written permission has been given.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-12 col-md-12 skewed_parent mar_bot" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">BLOUSES AND SHIRTS AVAILABLE :</h3>
                        <div class="skewed_div uniform_skewed flex_column">
                            <p>Boys' shirt, golden, collar: 36cm / 14" (12-14 years)</p>
                            <p>Boys' shirt, golden, collar: 41cm / 16" (16 years)</p>
                            <p>Girls' blouse, golden, 71cm / 28" (8-9 years)</p>
                            <p>Girls' blouse, golden, 76cm / 30" (9-10 years)</p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding" data-aos="fade-left" data-aos-duration="2000">
                        <splide :options="options">
                            <splide-slide>
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732161/Uniform_1_lckzjk.jpg" width="100%" >
                            </splide-slide>
                            <splide-slide>
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732164/Uniform_2_h5llg3.jpg" width="100%" >
                            </splide-slide>
                            <splide-slide>
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732180/Uniform_3_i9n4de.jpg" width="100%"  >
                            </splide-slide>
                            <splide-slide>
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732179/Uniform_4_sgeljx.jpg" width="100%" >
                            </splide-slide>
                            <splide-slide>
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732180/Uniform_5_svbhix.jpg" width="100%" >
                            </splide-slide>
                        </splide>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <a href="https://www.schooltrends.co.uk/"  data-aos="fade-right" data-aos-duration="2000">
                        <button class="view_calendar_button transparent_hover_effect">
                            ORDER UNIFORM HERE 
                        </button>
                    </a>
                    <a href="./Uniform List.pdf" target="blank" data-aos="fade-left" data-aos-duration="2000">
                        <button class="view_calendar_button transparent_hover_effect">
                            SEE UNIFORM LIST
                        </button>
                    </a>
                </div>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';


export default {
    name: 'Uniform',
    components: {
        Splide,
        SplideSlide,
        MasterLayout
    },
    data() {
        return {
            title: 'UNIFORM',
            options: {
                rewind : true,
                width  : 800,
                gap    : '1rem',
            },
        }
    }
}
</script>