<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2016/09/13/11/08/browser-1666995_960_720.png">
        <div class="blog_posts_container content_width">
            <div class="mb-3 text-center" data-aos="fade-down" data-aos-duration="2000">
                <button class="gallery_button mr-2 transparent_hover_effect" @click="changeView('all')" :class="view == 'all' ? ['gallery_button_active'] : null">All</button>
                <button class="gallery_button mr-2 transparent_hover_effect" @click="changeView('pictures')" :class="view == 'pictures' ? ['gallery_button_active'] : null">Pictures</button>
                <button class="gallery_button mr-2 transparent_hover_effect" @click="changeView('videos')" :class="view == 'videos' ? ['gallery_button_active'] : null">Videos</button>
                <button class="gallery_button mr-2 transparent_hover_effect" @click="changeView('bvp')" :class="view == 'bvp' ? ['gallery_button_active'] : null">British Value Presentation</button>
                <button class="gallery_button mr-2 transparent_hover_effect" @click="changeView('sca')" :class="view == 'sca' ? ['gallery_button_active'] : null">S.C.A Yearly</button>
            </div>
            <section class="row" v-if="view == 'all' || view == 'pictures'" data-aos="zoom-in" data-aos-duration="2000">
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732144/ttop_1_ystymo.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732132/ttop_2_ffap7s.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732146/ttop_3_dirzf7.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732136/ttop_4_ovkbs6.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732163/ttop_5_dkstug.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732084/sport_1_t20fxe.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732094/sport_2_dl3x72.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732098/sport_3_r2bady.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732098/sport_3_r2bady.jpg"  />
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732101/sport_4_jv7gxi.jpg"  />
                    </div>
                </div>
            </section>
            <section class="row" v-if="view == 'all' || view == 'videos'" data-aos="zoom-in" data-aos-duration="2000">
                <div class="col-md-6" >
                    <video controls class="post_image">
                        <source src="https://res.cloudinary.com/dfjzditzc/video/upload/v1608717373/gallery1_vh8lut.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="col-md-6" >
                    <video controls class="post_image">
                        <source src="https://res.cloudinary.com/dfjzditzc/video/upload/v1608721826/gallery2_7YuTluyp_dehjwx.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="col-md-6" >
                    <video controls class="post_image">
                        <source src="https://res.cloudinary.com/sol-academy/video/upload/v1608742711/gallery3_hce8ZJ1D_a4uqhp.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            <section class="row" v-if="view == 'all' || view == 'bvp'" data-aos="zoom-in" data-aos-duration="2000">
                <div class="col-md-3" >
                    <div class="gallery_card">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732144/ttop_1_ystymo.jpg"  />
                    </div>
                </div>
            </section>
        </div>
        <Subscribe />
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import Subscribe from '@/components/Subscribe.vue';

export default {
    name: 'BlogPosts',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Gallery',
            view: 'all'
        }
    },
    methods: {
        getImage(path) {
            return require(path)
        },
        changeView(view) {
            this.view = view
        }
    }
}
</script>