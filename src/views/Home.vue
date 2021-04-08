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
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text"></h3>
                                <p class="banner__header__para mt-3">

                                </p>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732083/SOL_Academy_Christmas_Greetings3_kcpeoa.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                           
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text"></h3>
                                <p class="banner__header__para mt-3">
                                </p>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732076/slider_nco4ps.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                           
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">	High quality education services; Find a balance of Values, Academics and Morals today!
                                </p>
                                <div>
                                    <b-link to="/development"  >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732039/slider_2_n2b1om.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL, we ensure a good mental balance by engaging with an array of extracurricular programs and activities while attaining our set goals; what are you waiting for?
                                </p>
                                <div>
                                    <b-link to="/school-hours" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732041/slider_9_ktvaed.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL: You can count on us for the right environment to equip and for effective learning.
                                </p>
                                <div>
                                    <b-link to="/school-hours" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732107/slider_8_uzzxoz.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">AT SOL Academy, we promote an equal, diverse working relationship between the staff members and pupils enabling us to work together as one happy family; this viewpoint brings us together and culminates in the attainment of our goals.
                                </p>
                                <div>
                                    <b-link to="/blog-posts" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732064/slider_7_axtbxf.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">As we await a better future, we don’t fold our hands at SOL Academy; we share and demonstrate an optimistic belief system; hence, the need of investing in the formative structure and platform that is responsible for the anticipated future transformation. 
                                </p>
                                <div>
                                    <b-link to="/gallery" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732051/slider_4_endipt.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                         <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL, we ensure a good mental balance by engaging with an array of extracurricular programs and activities while attaining our set goals; what are you waiting for?
                                </p>
                                <div>
                                     <b-link to="/blog-post" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                 <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608732005/slider_3_haihb9.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                        <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">At SOL: You can count on us for the right environment to equip and for effective learning.
                                </p>
                                <div>
                                     <b-link to="/development" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://res.cloudinary.com/sol-academy/image/upload/v1608731976/Main_slider_y5ewvo.jpg">
                    <div class="image-overlay"></div>
                    <div class="banner_wrapper" style="width:100%; height:100%; margin:0; padding-top:80px; padding-left: 80px" :style="[{
                            background: `linear-gradient(rgb(0, 0, 0 , 0.6), rgb(0, 0, 0 , 0.6))`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }]">
                        <div class="row  slider_banner_padding">
                            <div class="col-md-5 slider_banner_padding">
                                <h3 class="banner__header__text">Growing in Knowledge, Following in Faith, Serving in Unity.</h3>
                                <p class="banner__header__para mt-3">As we await a better future, we don’t fold our hands at SOL Academy; we share and demonstrate an optimistic belief system; hence, the need of investing in the formative structure and platform that is responsible for the anticipated future transformation.
                                </p>
                                <div>
                                     <b-link to="/gallery" class="text-decoration-none " >
                                        <button class="btn btn-white mt-3 mb-3 home_hover_effect">Learn More</button>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-carousel-slide>
            </b-carousel>
       </div>
       <section class="home_programs_section">
           <h4 class="text-center bold_text header_content primary-color">Programs</h4>
           <div class="row home_programs_holder">
               <div class="col-md-3" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   <div class="program_card first">
                        <h4 class="drop_program_card_title">Nursery</h4>
                        <p class="drop_program_card">Broaden the creative horizons of your kids</p>
                    </div>
               </div>
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <div class="program_card second">
                        <h4 class="drop_program_card_title">Primary</h4>
                        <p class="drop_program_card">Broaden the creative horizons of your kids</p>
                    </div>
               </div>
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <div class="program_card third">
                        <h4 class="drop_program_card_title">High School</h4>
                        <p class="drop_program_card">Broaden the creative horizons of your kids</p>
                    </div>
               </div>
               <div class="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   <div class="program_card fourth">
                        <h4 class="drop_program_card_title">College</h4>
                        <p class="drop_program_card">Preparing youngsters for the adult life</p>
                    </div>
               </div>
           </div>
       </section>
       <section class="content_width welcome_note_section">
           <div class="row">
               <div class="col-md-4 welcome_note" data-aos="fade-down" data-aos-duration="2000">
                    <div class="note_header">
                        Welcome Note
                    </div>
                    <div class="note_content">
                        <p>On behalf of all staff and I would like to welcome you to this New Academic Year.
                        At SOL Christian Academy we aim to give every child the very best start possible to their education. The achievement of all children matters, and we strive to ensure that learning is fun, fulfilling and for everyone. We provide an environment which is friendly and promotes success through vibrant and engaging teaching enabling the children to become active learners by using exciting, broad and balanced curriculum.</p>
                    </div>
                </div>
                <div class="col-md-4 welcome_sol_image" data-aos="zoom-in" data-aos-duration="2000">
                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731980/School_Logo_1_i87czg.png"/>
                </div>
                <div class="col-md-4 welcome_note" data-aos="fade-up" data-aos-duration="2000">
                    <div class="note_header">
                        Upcoming Events
                    </div>
                    <div class="note_content">
                        <p>17th Thursday 2020: Commencement of Half Term</p>
                        <p>The management of SOL Academy wish you a prosperous Christmas holiday, also implore us as law abiding citizens to read and obey the guidance around COVID-19 regulations</p>
                        <p></p>
                    </div>
                </div>
           </div>
       </section>
       <section class="important_resources_section">
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
                    <img src="https://media.istockphoto.com/vectors/leadership-concepts-with-arrows-on-blackboad-background-vector-id1205160735?s=612x612"/>
                    <div>
                        <h5>Leadership</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-3 choose_us_reason" data-aos="zoom-in" data-aos-duration="2000">
                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732076/slider_nco4ps.jpg"/>
                    <div>
                        <h5>Character</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-3 choose_us_reason" data-aos="zoom-in" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2017/10/11/17/18/monster-2841763_960_720.jpg"/>
                    <div>
                        <h5>Academics</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div class="col-md-3 choose_us_reason" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src="https://cdn.pixabay.com/photo/2014/10/04/07/40/woman-472657__340.jpg"/>
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
                        <div class="ace_curriculum_item last" :class="[!vid.video ? 'width-hundred' : null]">
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
        <section class="home_blogs">
           <h4 class="bold_text text-center header_content primary-color">Blog</h4>
           <div class="row">
                <div class="col-md-2 home_blog" v-for="(blog,i) in blogs" :key="i" :data-aos="((i + 1) % 2 !== 0) ? 'flip-left' : 'zoom-in'" data-aos-duration="2000">
                    <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none ">
                        <div class="home_cards_hover">
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
       </section>
    <Footer />
   </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        VueperSlides, 
        VueperSlide,
    },
    data() {
      return {
        slide: 0,
        sliding: null,
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
        }
    }
}
</script>