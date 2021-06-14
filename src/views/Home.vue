<template>
   <div>
       <div class="bg_wrapper">
            <Header />
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732168/welcome_to_SOL_Academy3_wuhxfv.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                <!-- Below is Christmas image to be used during christmas period -->
                <!-- <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732083/SOL_Academy_Christmas_Greetings3_kcpeoa.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide> -->
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732076/slider_nco4ps.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732039/slider_2_n2b1om.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732041/slider_9_ktvaed.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732107/slider_8_uzzxoz.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732064/slider_7_axtbxf.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732051/slider_4_endipt.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732005/slider_3_haihb9.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608731976/Main_slider_y5ewvo.jpg">
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px">
                    </div>
                </b-carousel-slide>
            </b-carousel>
       </div>
       <section class="home_programs_section">
           <div class="row home_programs_holder">
               <div class="col-md-3" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   <a href="https://solacademyorg.wixsite.com/solnurseryschool" target="_blank" class="program_card first">
                        <h4 class="drop_program_card_title">Nursery</h4>
                        <p class="drop_program_card">Broaden the creative horizons of your kids</p>
                    </a>
               </div>
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <router-link :to="{ name: 'primary' }" class="program_card second">
                        <h4 class="drop_program_card_title">Primary</h4>
                        <p class="drop_program_card">Broaden the creative horizons of your kids</p>
                    </router-link>
               </div>
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <router-link :to="{ name: 'highSchool' }" class="program_card third">
                        <h4 class="drop_program_card_title">High School</h4>
                        <p class="drop_program_card">Broaden the creative horizons of your kids</p>
                    </router-link>
               </div>
               <div class="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   <router-link  :to="{ name: 'college' }" class="program_card fourth">
                        <h4 class="drop_program_card_title">College</h4>
                        <p class="drop_program_card">Preparing youngsters for the adult life</p>
                    </router-link>
               </div>
           </div>
       </section>
       <section class="content_width welcome_note_section">
           <div class="row align-items-center">
               <div class="col-md-7 welcome_note" data-aos="fade-down" data-aos-duration="2000">
                   <h4 class="note_header">Welcome Note</h4>
                    <div class="note_content">
                        <p><i>On behalf of all staff and I would like to welcome you to this New <br> Academic Year.
                        At SOL Christian Academy we aim to give every<br> child the very best start possible to their education. <br> The achievement of all children matters, and we strive to ensure that <br> learning is fun, fulfilling and for everyone. We provide an <br> environment which is friendly and promotes success through <br> vibrant and engaging teaching enabling the children to become <br> active learners by using exciting, broad and balanced curriculum.</i></p>
                    </div>
                    <div class="note_content_img">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731869/about-fourth_a1puzn.png"/>
                        <div>
                            <h4>SOL Academy</h4>
                            <p>Founder & CEO, SOL</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-5 upcoming_events home_back" data-aos="fade-up" data-aos-duration="2000">
                    <div class="note_header">
                        <h4 class="upcoming_events_header">Upcoming Events</h4>
                    </div>
                    <div class="upcoming_events_content">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/12/11/08/01/coming-soon-1898936_960_720.jpg"/>
                            <p>17th Thursday 2020: Commencement of Half Term</p>
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2017/06/10/07/22/news-2389226_960_720.png"/>
                            <p>The management of SOL Academy wish you a prosperous Christmas holiday, also implore us as law abiding citizens to read and obey the guidance around COVID-19 regulations</p>
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_960_720.png"/>
                            <p>The management of SOL Academy wish you a prosperous Christmas holiday, also implore us as law abiding citizens to read and obey the guidance around COVID-19 regulations</p>
                        </div>
                    </div>
                </div>
           </div>
       </section>
       <section class="home_nursery_width welcome_note_section">
           <div class="home_nursery">
               <div>
                   <!-- <vue-typed-js :style="{ width: '100%'}" :strings="['Zero tuition for nursery']" :showCursor="true">
                        <h1 class="typing text-center"></h1>
                   </vue-typed-js> -->
                   <h1 class="text-center" data-aos="fade-right" data-aos-duration="2000">Zero tuition for nursery</h1>
                    <router-link :to="{ name: 'admission', query: { view: 'nursery' } }" class="nursery_link_button hover_effect" style="width 156px" data-aos="fade-up" data-aos-duration="2000">Learn more</router-link>
               </div>
               <div class="nurs_imgs">
                   <img class="first_nurs_img" src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617626813/nursery-admission_eonagp.png"  data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                   <img class="second_nurs_img" src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260g"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
               </div>
           </div>
       </section>
       <section class="important_resources_section home_back">
           <div class="row content_width">
               <div class="col-md-6 resources">
                   <h4 class="bold_text header_content primary-color">Important Resources</h4>
                   <div class="row justify-content-between resources_first">
                        <a href="./Fees_Struture.pdf"  download class="col-md-6 home_cards_hover" data-aos="zoom-in" data-aos-duration="2000">
                            <div class="circular_div">
                                <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617820066/fees-structure_aq3rkt.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Fee Structure</p>
                        </a>
                        <a href="./Calendar 2020_2021.pdf"  download class="col-md-6 home_cards_hover" data-aos="zoom-in" data-aos-duration="2000">
                            <div class="circular_div">
                                <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617820067/calendar_d2cfhh.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Calendar</p>
                        </a>
                   </div>
                   <div class="row justify-content-between">
                       <a href="./Application_Form.pdf"  download class="col-md-6 home_cards_hover" data-aos="zoom-in" data-aos-duration="2000">
                            <div class="circular_div">
                                <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617820066/application-form_nbnry6.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Application Form</p>
                        </a>
                        <a href="./Prospectus.pdf"  download class="col-md-6 home_cards_hover" data-aos="zoom-in" data-aos-duration="2000">
                            <div class="circular_div">
                                <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1617820066/prospectus_kyd6hk.svg"  width="40" />
                            </div>
                            <p class="mt-3 green__text bold_text resources_content">Prospectus</p>
                        </a>
                   </div>
                </div>
                <div class="col-md-6 important_resources_img" data-aos="fade-left" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2018/04/14/10/12/hand-3318659_960_720.png"/>
                </div>
           </div>
       </section>
       <section class="content_width choose_us_reasons">
           <h4 class="bold_text text-center header_content primary-color">Here are some reasons why you should choose us</h4>
           <div class="row">
                <div class="col-md-3 choose_us_reason" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2015/01/30/07/58/businesswoman-617129_960_720.jpg"/>
                    <div>
                        <h5>Leadership</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-3 choose_us_reason" data-aos="zoom-in" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2015/11/13/10/07/smiley-1041796_960_720.jpg"/>
                    <div>
                        <h5>Character</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-3 choose_us_reason" data-aos="zoom-in" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2015/09/03/20/14/back-to-school-921254_960_720.jpg"/>
                    <div>
                        <h5>Academics</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-3 choose_us_reason" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2016/10/19/10/29/rules-1752625_960_720.png"/>
                    <div>
                        <h5>Morals</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
           </div>
       </section>
       <section class="content_width" data-aos="fade-left" data-aos-duration="2000">
            <h4 class="bold_text primary-color mb-4">Our Clients Feedback</h4>
            <vueper-slides                            
              class="no-shadow"
              :visible-slides="1"
              slide-multiple
              :gap="0"
              :slide-ratio="1 / 4"
              :dragging-distance="200"
              :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }">
              <vueper-slide  v-for="(vid, index) in testVideos" :key="index" style="display: block !important;padding-right: 0; padding-left: 0">
                  <template v-slot:content>
                     <div class=" ace_curriculum">
                        <div class="ace_curriculum_item first cursor_hover" v-if="!showVideo" @click="showVideoFunc" :class="[!vid.video ? 'hide' : null]">
                            <div class="play_button">
                                <i class="fa fa-play" aria-hidden="true" style="color: white; font-size: 50px"></i> 
                            </div> 
                        </div>
                        <video controls autoplay  class="width-fifty-percent ace_curriculum_item" v-if="showVideo && vid.video" :class="[!vid.video ? 'hide' : null]">
                            <source src="https://res.cloudinary.com/dfjzditzc/video/upload/v1608716314/DVD-Sol_Academy_Testimonial_vcjak1.mov" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="ace_curriculum_item last home_back" :class="[!vid.video ? 'width-hundred' : null]">
                            <div class="text-center py-4">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731851/grade-24px_1_onwft7.svg" v-for="(a, i) in 5" :key="i" class="mr-2 testimonaial_rate" width="30" />
                            </div>
                            <div class="testimonials__text_container">
                                <p class="para testimonials__text text-center">
                                    {{vid.comment}}
                                </p>
                                <div class="text-center">
                                    <small class="">{{vid.author}}</small> 
                                </div>
                            </div>
                        </div>  
                    </div>
                  </template>
              </vueper-slide>
            </vueper-slides>
        </section>
        <section class="home_blogs home_back">
           <div class="home_blog_div">
                <h4 class="bold_text text-center header_content primary-color">Blog</h4>
                <div class="row">
                        <div class="col-md-2 home_blog" v-for="(blog,i) in blogs" :key="i" :data-aos="((i + 1) % 2 !== 0) ? 'flip-left' : 'zoom-in'" data-aos-duration="2000">
                            <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none ">
                                <div class="home_cards_hover home_blog_hover">
                                    <img :src="blog.img"/>
                                    <div>
                                        <h5>{{blog.title}}</h5>
                                        <p>{{blog.content}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                </div>
                <div class="blog_link_button_holder">
                        <router-link :to="{ name: 'blogPosts' }" class="text-decoration-none text-center">
                            <div class="blog_link_button header_hover">Read More</div>
                        </router-link>
                </div>
           </div>
       </section>
    <Footer />
   </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import { VueTypedJs } from 'vue-typed-js'


export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        VueperSlides, 
        VueperSlide,
        // VueTypedJs
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        nurseryTexts: [],
        blogs: [
            {title: 'Tree Top', key: 'tree-top', content: 'Students having fun in the tree top', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732871/first_mlhpfp.jpg'}, 
            {title: 'Sports Day', key: 'sports-day', content: 'Students participating in sporting activities on sports day', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732759/first_u943km.jpg'}, 
            {title: 'SOL Park', key: 'sol-park', content: 'Students at the school park', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732727/first_y7penx.jpg'}, 
            {title: 'SOL Tennis', key: 'sol-tennis', content: 'Students at the tennis court', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732784/first_bgqzlh.jpg'}, 
            {title: 'Museum', key: 'museum', content: 'Students taking an excursion at a museum', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732685/first_tgyytk.jpg'}, 
            {title: 'Legoland', key: 'legoland', content: 'Students having a fun day at legoland', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732653/first_jifgdq.jpg'}
        ],
        testVideos: [
            {
                comment: 'Life at Sol Academy', author: '', video: 'DVD-Sol Academy Testimonial.mp4'
            },
            {
                comment: 'Sol Academy is another home away from home: Parent Survey.', author: '', video: null
            },
            {
                comment: 'Pupils attain outstanding progress in their Packets of Accelerated Christian Learning (PACEs) in subjects including English Mathematics, Science, Bible studies and social studies.', video: null 
            },
            {
                comment: 'The KS2 report: SOL’s Management Board.', video: null 
            } 
        ],
        showVideo: false
      }
    },
    computed: {
        todaysDate() {
            const todaysDate = this.$moment(new Date()).format("DD MMMM YYYY")
            return todaysDate
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        showVideoFunc() {
            this.showVideo = !this.showVideo
        },
    }
}
</script>