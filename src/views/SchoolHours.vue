<template>
    <MasterLayout :title="title" BgUrl="https://res.cloudinary.com/sol-academy/image/upload/v1608732173/write-good-blog-article-t-more-traffic1_ca0agq.png">
        <div class="pace_container content_width uniform_container">
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-12 col-md-12 skewed_parent mar_bot">
                        <h3 class="section_col_header primary-color">To see a list of all events at SOL Christian Academy Please look at our events calendar</h3>
                        <a href="./Calendar 2020_2021.pdf" target="_blank"> 
                            <button class="view_calendar_button">
                                View Calendar
                            </button>
                        </a>
                        <div class="skewed_div uniform_skewed school_hours_skewed flex_column_around">
                            <div class="flex_stretch">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731936/notification_qdqxrj.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">School starts at 8:30 am</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731951/portfolio_xuradx.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">School starts at 8:30 am</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731936/notification_qdqxrj.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">School Closes at 15:00 pm</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731969/doorway_idc94c.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">Doors close at 15:15 pm</p>
                            </div>
                            <div class="flex_stretch">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731977/early_foydud.svg" style="width: 10px;" >
                                <p class="section_col_text para remove_p_mar ml-4">Early Years close at 15:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 remove_about_padding">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731855/Group_2374_zxostu.svg">
                    </div>
                </div>
                
            </section>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'SchoolHours',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'School Hours',
        }
    }
}
</script>