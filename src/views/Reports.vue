<template>
    <MasterLayout :title="title" BgUrl="https://res.cloudinary.com/sol-academy/image/upload/v1608732173/write-good-blog-article-t-more-traffic1_ca0agq.png">
        <div class="pace_container content_width">
            <div class="ace_curriculum_item first post_image cursor_hover" v-if="!showVideo" @click="showVideoFunc">
                <div class="play_button">
                    <i class="fa fa-play" aria-hidden="true" style="color: white; font-size: 50px"></i> 
                </div> 
            </div>
            <video controls autoplay class="post_image" v-if="showVideo">
                <source src="https://res.cloudinary.com/dfjzditzc/video/upload/v1608716314/DVD-Sol_Academy_Testimonial_vcjak1.mov" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h3 class="section_col_header text-center reports_text primary-color">Ofsted Program</h3>
            <p class="section_col_text para">SOL Christian Academy was also inspected on 12-14 June 2019.</p>
            <div class="flex_display">
                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                <p class="section_col_text para">Overall effectiveness: Good</p>
            </div>
            <div class="flex_display">
                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                <p class="section_col_text para">Effectiveness of leadership and management: Good</p>
            </div>
            <div class="flex_display">
                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                <p class="section_col_text para">Quality of teaching, learning and assessment: Good</p>
            </div>
            <div class="flex_display">
                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                <p class="section_col_text para">Personal development, behaviour and welfare: Good</p>
            </div>
            <div class="flex_display">
                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                <p class="section_col_text para">To impart the skills of independent study and logical thought.</p>
            </div>
            <div class="flex_display">
                <i class="fa fa-check-circle mr-3" style="color: #08813E"></i>
                <p class="section_col_text para">To encourage a desire to contribute to others within society, an awareness of the needs of those around and sensitivity to the call of God to find a place of service.</p>
            </div>
            <section class="row reports_holder">
                <div class="col-md-3">
                    <div :style="[{
                        backgroundImage: `linear-gradient(rgb(38, 40, 49, 0.9), rgb(38, 40, 49, 0.9)), url(${ReportsBgUrl})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }]" class="single_report">
                        <strong class="text-center text-white">OFSTED</strong>
                        <a href="./Ofsted.pdf" download class="text-decoration-none report_link mt-3">Download Report</a>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div :style="[{
                        backgroundImage: `linear-gradient(rgb(38, 40, 49, 0.9), rgb(38, 40, 49, 0.85)), url(${ReportsBgUrl})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }]" class="single_report">
                        <strong class="text-center text-white">SOL OFSTED</strong>
                        <a href="./SOL OFSTED RESULTS.pptx" download class="text-decoration-none report_link  mt-3">Download Report</a>
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';


export default {
    name: 'Report',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Ofsted Reports',
            ReportsBgUrl: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732173/uniform-second_a6qc37.png',
            showVideo: false
        }
    },
    methods: {
        showVideoFunc() {
            this.showVideo = !this.showVideo
        }
    },
}
</script>