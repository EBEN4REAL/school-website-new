<template>
    <MasterLayout :title="formatTitle" :BgUrl="backImg[$route.query.title]">
        <div class="posts_container content_width">
            <!-- <h3 class="section_col_header text-center primary-color">{{ formatTitle }}</h3> -->
            <div class="post_header">
                <div class="post_date">
                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                    <p>{{todaysDate}}</p>
                </div>
                <div class="post_date">
                    <i class="fa fa-user mr-2" aria-hidden="true"></i>
                    <p>SOL Academy</p>
                </div>
            </div>
            <div class="mb-3 text-center" data-aos="fade-down" data-aos-duration="2000">
                <button class="gallery_button transparent_hover_effect" :class="[source == 'pictures' ? 'gallery_button_active' : null]" @click="changeSource('pictures')" v-if="videos[$route.query.title].length">Pictures</button>
                <button class="gallery_button transparent_hover_effect" :class="[source == 'videos' ? 'gallery_button_active' : null]" @click="changeSource('videos')" v-if="videos[$route.query.title].length">Videos</button>
            </div>
            <section class="row" v-if="source == 'pictures'">
                <div class="col-md-6" v-for="(image, i) in images[$route.query.title]" :key="i" :data-aos="((i + 1) % 2 !== 0) ? 'flip-left' : 'zoom-in'" data-aos-duration="2000">
                    <div class="post_card">
                        <img :src="image"  />
                    </div>
                </div>
            </section>
            <section class="row" v-if="source == 'videos'">
                <div class="col-md-6" v-for="(video, i) in videos[$route.query.title]" :key="i">
                    <video :key="video" controls class="post_image">
                        <source :src="video" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
        <Subscribe />
        <!-- <section class="content_width mt-5">
            <h4>Similar posts to this one</h4>
            <div class="row justify-content-between mt-4">
                <div class="col-md-4">
                    <div class="blog_post">
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731925/blog-posts-first_wwfo6z.png">
                        <div class="post_content_holder">
                            <div class="post_header">
                                <div class="post_date">
                                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i>
                                    <p>{{todaysDate}}</p>
                                </div>
                                <div class="post_date">
                                    <i class="fa fa-user mr-2" aria-hidden="true"></i>
                                    <p>SOL Academy</p>
                                </div>
                            </div>
                            <h4>Blackpool Trip</h4>
                            <p class="section_col_text">Book unique camping experiences on over 300,000 campsites.</p>
                            <router-link :to="{ name: 'post' }" class="text-decoration-none">Read More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';
import Subscribe from '@/components/Subscribe.vue';

export default {
    name: 'Post',
    components: {
        MasterLayout,
        Subscribe
    },
    data() {
        return {
            title: 'Post',
            postTitle: 'School Update',
            source: 'pictures',
            backImg: {
                'tree-top': 'https://res.cloudinary.com/sol-academy/image/upload/v1608732871/first_mlhpfp.jpg',
                'sports-day': 'https://res.cloudinary.com/sol-academy/image/upload/v1608732759/first_u943km.jpg',
                'sol-park': 'https://res.cloudinary.com/sol-academy/image/upload/v1608732727/first_y7penx.jpg',
                'sol-tennis': 'https://res.cloudinary.com/sol-academy/image/upload/v1608732784/first_bgqzlh.jpg',
                'museum': 'https://res.cloudinary.com/sol-academy/image/upload/v1608732685/first_tgyytk.jpg',
                'legoland': 'https://res.cloudinary.com/sol-academy/image/upload/v1608732653/first_jifgdq.jpg', 
            },
            images: {
                'tree-top': ['https://res.cloudinary.com/sol-academy/image/upload/v1608732871/first_mlhpfp.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732866/second_jzvdra.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732856/third_ls1nes.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732853/fourth_hwqvdm.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732876/fifth_k5kh86.jpg'],
                'sports-day': ['https://res.cloudinary.com/sol-academy/image/upload/v1608732759/first_u943km.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732800/second_mfdrcs.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732802/third_dxxmhb.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732796/fourth_mjlyaf.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732766/fifth_puqleq.jpg'],
                'sol-park': ['https://res.cloudinary.com/sol-academy/image/upload/v1608732727/first_y7penx.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732722/second_adcaa9.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732723/third_yqcbbe.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732716/fourth_nka3pu.jpg'],
                'sol-tennis': ['https://res.cloudinary.com/sol-academy/image/upload/v1608732784/first_bgqzlh.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732804/second_rwepsa.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732793/third_dakcef.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732774/fourth_j9d8zr.jpg'],
                'museum': ['https://res.cloudinary.com/sol-academy/image/upload/v1608732685/first_tgyytk.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732698/second_a6tdqo.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732685/third_zkzg7m.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732682/fourth_tlgkrb.jpg'],
                'legoland': ['https://res.cloudinary.com/sol-academy/image/upload/v1608732653/first_jifgdq.jpg', 'https://res.cloudinary.com/sol-academy/image/upload/v1608732651/second_k3p8ob.jpg'], 
            },
            videos: {
                'tree-top': ['https://res.cloudinary.com/dfjzditzc/video/upload/v1608717818/first_nbcmeb.mp4'],
                'sports-day': [],
                'sol-park': [],
                'sol-tennis': [],
                'museum': ['https://res.cloudinary.com/dfjzditzc/video/upload/v1608716896/first_x9y0xk.mp4'],
                'legoland': [],
            }
        }
    },
    computed: {
        todaysDate() {
            const todaysDate = this.$moment(new Date()).format("DD MMMM YYYY")
            return todaysDate
        },
        formatTitle() {
            const arr = this.$route.query.title.split('-')
            const formatted = arr.map(cur => {
                if (cur == 'sol') {
                    return cur.toUpperCase()
                }
                return `${cur[0].toUpperCase()}${cur.slice(1)}`
            }).join(' ')
            return formatted
        }
    },
    methods: {
        changeSource(src) {
            this.source = src
        }
    }
}
</script>