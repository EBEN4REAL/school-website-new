<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2017/06/23/08/55/board-2433982_960_720.jpg">
        <section class="home_programs_section">
           <div class="row home_programs_holder justify-content-center">
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <a href="#general-certificate" class="program_card high_school_1">
                        <h4 class="drop_program_card_title high_school text-center">ICCE General Certificate</h4>
                    </a>
               </div>
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <a href="#vocational-certificate" class="program_card high_school_2">
                        <h4 class="drop_program_card_title high_school text-center">ICCE Vocational Certificate</h4>
                    </a>
               </div>
               <div class="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   <router-link :to="{ name: 'gcseTutorials' }"  class="program_card high_school_3">
                        <h4 class="drop_program_card_title high_school text-center"> GCSE Tutorials</h4>
                    </router-link>
               </div>
           </div>
       </section>
        <div class="content_width" id="general-certificate">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <!-- <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding mar_bot" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://cdn.pixabay.com/photo/2016/07/14/17/27/family-1517192_960_720.jpg">
                    </div> -->
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">ICCE General Certificate</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            The International Certificate of Christian Education (ICCE) General certificate is comparable to Cambridge International Examinations (CIE) ‘O’ Level standard and is the first of the ICCE academic certificates. The ICCE Qualification is centred on a compulsory core element of Christian Studies. The Christian Studies requirement is designed to foster the students’ understanding of and appreciation for Christian Faith issues and to consolidate and develop a thorough and reasoned understanding of the theology of the Christian Faith. The table below shows the minimum credit requirements to gain the ICCE General certificate.<br>
                            Note: A credit unit is one year course of study. 12 PACES is equal to one credit unit. Read more about PACES <br>
                            PACE Level Required = 1097 - 1108 <br>
                            Time Per Credit = 120 hours
                        </p>

                    </div>
                </div>
            </section>
        </div>
        <div class="content_width" id="vocational-certificate">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">ICCE Vocational Certificate</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            The International Certificate of Christian Education (ICCE) Vocational certificates are available to those who need a qualification with a less academic focus. These certificates are divided into Basic, Foundation, and Vocational.<br>
                            The Basic certificate course is designed for students with considerable Special Educational Needs and Disabilities (SEND). The content varies with the individual education plan (IEP) of each student.<br>
                            The Foundation certificate is for students who start late or work too slowly to complete a General Certificate. It is equivalent to the first year of General Level (Level 8) and is similar to 5 GCSE short courses.<br>
                            The Vocational certificate course is intended for students who wish to follow more practical vocations and therefore can replace some Level 9 academic subjects with courses relevant/adapted to their desired outcomes.

                        </p>

                    </div>
                </div>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'Policies',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'High School',
        }
    }
}
</script>