<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2018/09/04/10/27/learn-3653430_960_720.jpg">
        <section class="home_programs_section">
           <div class="row home_programs_holder justify-content-center">
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <a href="#intermediate-certificate" class="program_card high_school_1">
                        <h4 class="drop_program_card_title high_school text-center">ICCE Intermediate Certificate</h4>
                    </a>
               </div>
               <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                   <a href="#advanced-certificate" class="program_card high_school_2">
                        <h4 class="drop_program_card_title high_school text-center">ICCE Advanced Certificate</h4>
                    </a>
               </div>
               <div class="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   <a href="#honours-certificate"  class="program_card college_3">
                        <h4 class="drop_program_card_title high_school text-center">ICCE Advanced Higher/Honours Certificate</h4>
                    </a>
               </div>
           </div>
       </section>
        <div class="content_width" id="intermediate-certificate">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">ICCE Intermediate Certificate</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            The International Certificate of Christian Education (ICCE) Intermediate certificate is the second academic certificate and forms a bridge between the General and Advanced Levels. The Intermediate certificate is comprised of 7 credits.<br>
                            The ICCE Qualification is centred on a compulsory core element of Christian Studies. The Christian Studies requirement is designed to foster the students’ understanding of and appreciation for Christian Faith issues and to consolidate and develop a thorough and reasoned understanding of the theology of the Christian Faith. The table below shows the minimum credit requirements to gain the ICCE Intermediate certificate.<br>
                            Note: A credit unit is one year course of study. 12 PACES is equal to one credit unit. Read more about PACES<br>
                            PACE Level Required = 1109 - 1120<br>
                            Time Per Credit = 140 hours
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <div class="content_width" id="advanced-certificate">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">ICCE Advanced Certificate</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            The International Certificate of Christian Education (ICCE) Advanced certificate is comparable to Cambridge International Examinations (CIE) ‘A’ Level standard and is intended for students who want to pursue higher education opportunities, study professional courses at colleges and universities, or enter the work place. Students may follow the standard Advanced Course or select from several bias courses.<br>
                            The ICCE Qualification is centred on a compulsory core element of Christian Studies. The Christian Studies requirement is designed to foster the students’ understanding of and appreciation for Christian Faith issues and to consolidate and develop a thorough and reasoned understanding of the theology of the Christian Faith. The table below shows the minimum credits requirement to gain the ICCE Advanced certificate.<br>
                            Note: A credit unit is one year course of study. 12 PACES is equal to one credit unit. Read more about PACES<br>
                            PACE Level Required = 1121 - 1144<br>
                            Time Per Credit = 140 hours
                        </p>

                    </div>
                </div>
            </section>
        </div>
        <div class="content_width" id="honours-certificate">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">Advanced Higher/Honours Certificate</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            The International Certificate of Christian Education (ICCE) Advanced Higher certificate provides an extension course for early finishers and high achievers, and may be beneficial for those wanting to enter more competitive disciplines at tertiary institutions.<br>
                            The ICCE Qualification is centred on a compulsory core element of Christian Studies. The Christian Studies requirement is designed to foster the students’ understanding of and appreciation for Christian Faith issues and to consolidate and develop a thorough and reasoned understanding of the theology of the Christian Faith. The table below shows the minimum amount of credits required to gain the ICCE Advanced Higher certificate.<br>
                            Note: A credit unit is one year course of study. 12 PACES is equal to one credit unit. Read more about PACES<br>
                            PACE Level Required = 1133 - 1144<br>
                            Time Per Credit = 140 hours
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
            title: 'College',
        }
    }
}
</script>