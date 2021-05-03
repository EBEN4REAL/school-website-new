<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2017/01/24/09/20/learn-2004905_960_720.png">
        <div class="pace_container content_width">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding mar_bot" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://cdn.pixabay.com/photo/2020/12/19/05/39/girl-5843652_960_720.png">
                    </div>
                    <div class="col-xl-7 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        <p class="section_col_text para remove_p_bottom_border">
                            At Sol Academy Primary School, we choose to care. We create a safe and stimulating environment where we respect the property of others and ourselves and we care for and about each other, showing respect and understanding. We also recognise and respect individuality and children’s differing experiences. We recognise and nurture all forms of creativity, delivering a curriculum that develops communication, representation and self-expression, production, performance, presentation and enterprise, originality, thinking skills and problem solving. We have an enviable Mandarin and French teaching program which are run by world class tutors. We aim to enable everyone to realise their full potential, to encourage self-motivation, and encourage children to be proud of their own achievements.
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
            title: 'Primary School',
        }
    }
}
</script>