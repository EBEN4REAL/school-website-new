<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2018/02/11/09/42/questions-3145370_960_720.jpg">
        <div class="pace_container content_width">
            <div data-aos="fade-down" data-aos-duration="2000">
                <div class="ace_curriculum_item first post_image cursor_hover" v-if="!showVideo" @click="showVideoFunc">
                    <div class="play_button">
                        <i class="fa fa-play" aria-hidden="true" style="color: white; font-size: 50px"></i> 
                    </div> 
                </div>
                <video controls autoplay class="post_image" v-if="showVideo">
                    <source src="https://res.cloudinary.com/dfjzditzc/video/upload/v1608716498/PACE_Numbering_System_1_gzvhzh.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <section class="mb-5">
                <h3 class="section_col_header text-center primary-color">Packet of Accelerated Christian EDUCATION(PACE®)</h3>
                <div class="row justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <div class="col-md-12">
                        <p class="section_col_text para">Accelerated Christian Education® has taken the conventional style textbook and divided it into bite-sized, achievable worktexts called PACEs. Each PACE is similar to a unit in a textbook. Each level consists of 12 PACEs in each subject. PACEs integrate Godly character-building lessons into the academic content, and self-instructional activities are carefully designed to develop thinking skills and create mastery learning.
                        <br>
                        A.C.E. stands out from other curriculum providers with its individualized, self-instructional, mastery-based approach.  With minimal assistance, PACEs allow students to absorb subject material according to their own learning ability rather than being pushed forward or held back by their age. For instance, a student placed in the fifth grade by a conventional school may be taking PACEs in Level 4 math, Level 5 science, and Level 5 English in the A.C.E. program. Students may move ahead in some subject areas and proceed at a slower pace in others
                        </p>
                    </div>
                </div>
                
            </section>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding mar_bot" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732005/slider_3_haihb9.jpg">
                    </div>
                    <div class="col-xl-7 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">WHAT'S INSIDE</h3>
                        <ul>
                            <li class="section_col_text para">Students begin their PACE work by noting their goals, the concepts they will learn, a Bible verse, and a corresponding character trait. From the beginning of each PACE, they know what is expected and assume the responsibility for their own learning!</li>
                            <li class="section_col_text para">Throughout the curriculum, the introduction of new vocabulary words is computer controlled so that no new vocabulary word is used without the student first learning its meaning and pronunciation. Also, these words are repeated to ensure mastery.</li>
                            <li class="section_col_text para">Explanations and illustrations add excitement to each lesson, and innovative learning activities reinforce the text material.</li>
                            <li class="section_col_text para">Each PACE contains several Checkups, which are quizzes covering a section of the PACE. If mastery in an area is not achieved, the check-up will reveal that area of weakness. Students can then take the time necessary to review and learn those concepts before proceeding to the next section.</li>
                            <li class="section_col_text para">Upon completion of the activities and Checkups, students prepare to take the Self Test. Here students evaluate themselves, and a supervisor/tutor determines readiness for the final PACE Test. When the Self Test is successfully completed, the student turns in the PACE and takes the PACE Test the next school morning. The PACE Test objectively measures student mastery of the material.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="mb-5">
                <h3 class="section_col_header text-center primary-color">THE A.C.E. PROGRAM</h3>
                <div class="row justify-content-between" data-aos="zoom-in" data-aos-duration="2000">
                    <div class="col-md-12">
                        <p class="section_col_text para">Since 1970, A.C.E. PACEs have proven to be effective tools for goal setting and for achieving academic excellence. The A.C.E. Program is indeed more than just a PACE. A.C.E. provides a wide variety of student programs and staff training opportunities at locations around the world. See how A.C.E. can take education at your school or home school far beyond academics.</p>
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'Pace',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Pace',
            showVideo: false
        }
    },
    methods: {
        showVideoFunc() {
            this.showVideo = !this.showVideo
        }
    }
}
</script>