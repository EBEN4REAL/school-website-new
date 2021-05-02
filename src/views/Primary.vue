<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2019/04/21/00/27/goose-4143179_960_720.jpg">
        <div class="pace_container content_width">
            <section class="mb-5">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding mar_bot" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://cdn.pixabay.com/photo/2016/07/14/17/27/family-1517192_960_720.jpg">
                    </div>
                    <div class="col-xl-7 col-lg-12 col-md-12" data-aos="zoom-in" data-aos-duration="2000">
                        At Sol Academy Primary School, we choose to care. We create a safe and stimulating environment where we respect the property of others and ourselves and we care for and about each other, showing respect and understanding. We also recognise and respect individuality and children’s differing experiences. We recognise and nurture all forms of creativity, delivering a curriculum that develops communication, representation and self-expression, production, performance, presentation and enterprise, originality, thinking skills and problem solving. We have an enviable Mandarin and French teaching program which are run by world class tutors. We aim to enable everyone to realise their full potential, to encourage self-motivation, and encourage children to be proud of their own achievements.
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