<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2019/04/21/00/27/goose-4143179_960_720.jpg">
        <div class="pace_container content_width policies_container mb-5">
            <div data-aos="zoom-in" data-aos-duration="2000">
               At Sol Christian Academy we stay in close communication with parents and we value good relationships with the parents of our pupils. Many of our parents volunteer their time as classroom assistants, extras on school trips, minibus drivers, dinner ladies, PTA members and teachers of specialist subjects and our hope is that all parents will contribute in some way to the activity of our school.
               We encourage all prospective parents to make an <a href="" target="_blank"><router-link :to="{name: 'contact'}">appointment</router-link></a>  to come and visit us at the school and see for themselves how effective our particular system of education is.

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
            title: 'Parents Corner',
        }
    }
}
</script>