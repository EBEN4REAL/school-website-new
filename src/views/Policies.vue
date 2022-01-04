<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_960_720.jpg">
        <div class="pace_container content_width policies_container">
            <div class="img_holder" data-aos="fade-down" data-aos-duration="2000">
                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731858/Group_2973_yxszeh.png"/>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <p class="section_col_text">At the school we have an ‘open door’ policy. Parents are encouraged to make an appointment to speak with the teachers and the Principal. We aim to deal with issues as they arise, contacting parents within the day if an incident should occur. The students are encouraged to talk to teachers and parents if they have any concerns or problems. Children are strongly advised not to retaliate, but to take the correct course of action, that is, to inform the teacher. We endeavour to have effective communication channels, a prerequisite for any healthy partnership. Parents, management, teachers, and governors are all committed to enforcing this policy. <br> <b><i>‘Can two walk together, unless they are in agreement?’ – Amos 3:3</i></b> <br><br> Our behaviour policy is evaluated periodically and any necessary changes made. To ensure the smooth running of the school and maintain consistency throughout the school community, parents must read and sign the policy stating their agreement. <br><br>

                <section class="home_programs_section">
                    <div class="row home_programs_holder">
                        <div class="col-md-3" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <a href="./safeguarding-2019.pdf" target="_blank" class="program_card first">
                                <h4 class="drop_program_card_title policies_cards">SAFEGUARDING</h4>
                            </a>
                        </div>
                        <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                            <a href="./Curriculum Policy For SEND v(1).docx" target="_blank" class="program_card first">
                                <h4 class="drop_program_card_title policies_cards">SEND POLICY</h4>
                            </a>
                        </div>
                        <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2000">
                            <a href="./Complaint policy (1).pdf" target="_blank" class="program_card first">
                                <h4 class="drop_program_card_title policies_cards">COMPLAINTS POLICY</h4>
                            </a>
                        </div>
                        <div class="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <a href="./safeguarding-2019.pdf" target="_blank" class="program_card first">
                                <h4 class="drop_program_card_title policies_cards">BEHAVIOUR, HEALTH AND SAFETY</h4>
                            </a>
                        </div>
                    </div>
                </section>

                <br> <br>Full details of all our policies listed below are available upon request. </p>

                <ul>
                    <li>
                        <a href="https://b79cefee-7358-4de2-977d-cf00cade6405.filesusr.com/ugd/211fb5_86a9bd70c6bc49918a826a9b12970eaf.docx?dn=Teachers' friendly behavioural policy (4" target="_blank">Behaviour Policy - Link</a>
                    </li>
                    <li>
                        Inclusion & SEN Policy
                    </li>
                     <li>
                       Anti Bullying Policy
                    </li>
                     <li>
                       Fire Safety Policy
                    </li>
                     <li>
                       First Aid Policy Guidance
                    </li>
                     <li>
                       Health and Safety Policy
                    </li>
                     <li>
                       Medication Care Plan for Emergency Needs
                    </li>
                     <li>
                        Medication Policy
                    </li>
                     <li>
                       Medication Procedure
                    </li> 
                    <li>
                        Missing Child Procedure
                    </li>
                     <li>
                       Playground Policy
                    </li>
                     <li>
                      Procedure for Uncollected Children
                    </li>
                     <li>
                      Safeguarding Children Policy and Procedures
                    </li>
                     <li>
                      School Trip Check List
                    </li>
                    <li>
                         <a href="https://b79cefee-7358-4de2-977d-cf00cade6405.filesusr.com/ugd/211fb5_3c4134c6d99a4a65bdf59ae2afb56a54.doc?dn=Promoting Fundamental British Values Pol" target="_blank">SMCS -Link</a>
                      
                    </li>
                    <li>
                       Transport Policy
                    </li>
                     <li>
                       Whistle Blowing Policy
                    </li>
                     <li>
                      Access to the Auditorium Policy and Procedures
                    </li> <li>
                       Access to the Building Policy
                    </li>
                     <li>
                     Complaints Policy
                    </li>
                     <li>
                      Pupil Attendance Policy
                    </li>
                     <li>
                       Transport Policy
                    </li>
                     <li>
                       Charging Policy
                    </li>
                     <li>
                      Access to the Auditorium Policy and Procedures
                    </li> <li>
                      Food & Kitchen Hygiene Guidance
                    </li>
                </ul>
            </div>
                
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
            title: 'Policies',
        }
    }
}
</script>