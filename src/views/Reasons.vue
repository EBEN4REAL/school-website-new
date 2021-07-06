<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2017/06/23/08/55/board-2433982_960_720.jpg">
        <div class="content_width" id="character">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">Character</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            As Christians, we need to strive for success. Our strong Christian character needs to stand out to a lost world. The world needs to see Christians who can handle adversity as well as success. Success tests the crucible of our Christian character! Let us remember who we are and Who brought success our way. <br>
                            We all think about a lot of things that are not godly, and things we would be ashamed of if they were available for all to know. Abraham Lincoln once said, “Character is like a tree and reputation like its shadow. The shadow is what we think of it; the tree is the real thing.” My reputation is what others think of me, which may or may not be true, but my character is who I really am. Your character is the real you in the sense that you cannot separate what you do from who you are.

                        </p>

                    </div>
                </div>
            </section>
        </div>
        <div class="content_width" id="academics">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">Academics</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            Academics are important in the life of a disciple of Christ because they engage our minds by sharpening, stretching, and challenging our thinking about God in a myriad of ways. In science and math classes, we can love God by learning about His awesome creation and how the universe is perfectly designed. In language arts, we love God by learning the skills we need to read His Word and to communicate effectively with others. In history, we love God by learning how all human events fit into the arc of the Gospel – creation, fall, redemption, and (coming soon!) glorification. If it is true that God has something to say about every subject, and every subject has something to say about God, it follows that studying these subjects – when they are taught from a Biblical worldview – helps us to love God with our minds.

                        </p>

                    </div>
                </div>
            </section>
        </div>
        <div class="content_width" id="leadership">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <h3 class="section_col_header text-center primary-color">Leadership</h3>
                        <p class="section_col_text para remove_p_bottom_border">
                            As Christians, we carry the responsibility of representing Christ in the way we lead. It is not just for our sake but the sake of those around us. <br>
                            When people know that we are followers of Jesus, they see our behaviour and associate whatever behaviour they see in us with Jesus. Whether we like it or not, we are carefully watched by those outside the church, and we represent Jesus on earth.Our behaviour does not change the nature of Jesus, but we can change the way people around us think about Jesus based on our actions and behaviour. “If we lead poorly, that’s a really bad representation and every one of us knows that we can absolutely affect someone’s faith by how we lead, good or bad.”
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
            title: 'Reasons To Choose Us',
        }
    },
    mounted() {
        var section=this.$router.currentRoute.hash.replace("#", "");
        if (section)
            this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
    },
}
</script>