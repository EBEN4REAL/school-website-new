<template>
    <MasterLayout :title="title" BgUrl="https://res.cloudinary.com/sol-academy/image/upload/v1608732173/write-good-blog-article-t-more-traffic1_ca0agq.png">
        <div class="pace_container content_width">
            <p class="section_col_text para" data-aos="fade-down" data-aos-duration="2000">Visitors often comment on the calm environment of the School which is something we are proud of. This environment is the result of the desire of students to learn and teachers to make that learning experience interesting and enjoyable.</p>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6 remove_about_padding" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732063/Rewards_pgt1cg.jpg">
                    </div>
                    <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">REWARDS</h3>
                        <p class="section_col_text para remove_p_bottom_border">Visitors often comment on the calm environment of the School which is something we are proud of. This environment is the result of the desire of students to learn and teachers to make that learning experience interesting and enjoyable.
                        <br>
                        The role of rewards and praise in recognising and promoting the school’s values is a key component of developing the potential of our students by giving them encouragement and praise; praise is a key component of good teaching and good staff/student relationships. Good behaviour is also best promoted and developed by drawing attention to and rewarding well behaved and hardworking students. Praise is used appropriately, sincerely and will be linked to tangible examples of a student’s strengths or effort.
                        <br>
                        Students’ hard work, good behaviour and demonstration of the School’s core values are recognised and celebrated by teachers in many different ways, including:
                        </p>
                        <ul class="remove_p_bottom_border">
                            <li class="section_col_text para">Verbal praise</li>
                            <li class="section_col_text para">Positive feedback</li>
                            <li class="section_col_text para">Positive letters</li>
                            <li class="section_col_text para">Merits</li>
                            <li class="section_col_text para">Assembly Trophy</li>
                        </ul>
                        <p class="section_col_text para">
                            Student’s effort and achievements are rewarded in Assembly on Friday. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">SANCTIONS</h3>
                        <p class="section_col_text para remove_p_bottom_border">At Sol Christian Academy we will support those who are experiencing behavioural, emotional, social or other difficulties that might impede self-discipline and effective learning. Whilst we believe the most effective way of managing behaviour is to praise and reward good behaviour, there are occasions and circumstances when other support is required. Where students are having difficulty conforming to the expected standards of behaviour various strategies and systems may be employed to help them improve.
                        <br>
                        In the Learning Centre, some examples of strategies that teachers may deploy include:
                        </p>
                        <ul class="remove_p_bottom_border">
                            <li class="section_col_text para">challenging the student by reminding them of godly characters</li>
                            <li class="section_col_text para">moving a student to another seat</li>
                            <li class="section_col_text para">writing the students name on the board as a warning</li>
                            <li class="section_col_text para">putting a note in their Student Planner (FAO parents/carers and tutor)</li>
                            <li class="section_col_text para">phone call, email or letter home</li>
                            <li class="section_col_text para">recording the incident on the student’s file through SIMs</li>
                            <li class="section_col_text para">referring the incident to the Curriculum Leader (for subject issues) or the Supervisor (for pastoral issues)</li>
                        </ul>
                    </div>
                    <div class="col-md-6 remove_about_padding" data-aos="fade-left" data-aos-duration="2000">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731954/leadership_1_jgvevn.jpg">
                    </div>
                </div>
                <p class="section_col_text para" data-aos="fade-up" data-aos-duration="2000">
                Discipline is firm, fair and consistent. If further punishment is required, it usually consists of a detention, referral to a senior member of staff or a warning letter. Exclusions, either internal or when students are asked to stay away from school for a set time are also used for serious offences. 
                <br>
                On rare occasions, when a member of the Senior Leadership Team is involved, parents may be invited to the School to discuss particular issues.
                </p>
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';


export default {
    name: 'Rewards',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Rewards and Sanctions',
        }
    }
}
</script>