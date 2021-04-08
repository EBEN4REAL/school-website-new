<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2016/09/18/03/40/logo-1677364_960_720.png">
        <div class="blog_posts_container content_width">
            <h3 class="section_col_header text-center primary-color">Latest Posts</h3>
            <section class="row justify-content-between">
                <div class="col-md-4" v-for="(blog,i) in blogs" :key="i" :data-aos="((i + 1) % 2 !== 0) ? 'flip-left' : 'zoom-in'" data-aos-duration="2000">
                    <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none ">
                        <div class="blog_post home_cards_hover">
                            <img :src="blog.img">
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
                                <h4>
                                    <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none primary-color">{{blog.title}}</router-link>
                                </h4>
                                
                                <div class="post_content_spread">
                                    <p class="section_col_text">{{blog.content}}</p>
                                <router-link :to="{ name: 'post', query: { title: blog.key } }" class="text-decoration-none">See More</router-link>
                                </div>
                            </div>
                        </div>
                    </router-link>
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
            title: 'Blog',
            blogs: [
                {title: 'Tree Top', key: 'tree-top', content: 'Students having fun in the tree top', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732871/first_mlhpfp.jpg'}, 
                {title: 'Sports Day', key: 'sports-day', content: 'Students participating in sporting activities on sports day', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732759/first_u943km.jpg'}, 
                {title: 'SOL Park', key: 'sol-park', content: 'Students at the school park', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732727/first_y7penx.jpg'}, 
                {title: 'SOL Tennis', key: 'sol-tennis', content: 'Students at the tennis court', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732784/first_bgqzlh.jpg'}, 
                {title: 'Museum', key: 'museum', content: 'Students taking an excursion at a museum', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732685/first_tgyytk.jpg'}, 
                {title: 'Legoland', key: 'legoland', content: 'Students having a fun day at legoland', img: 'https://res.cloudinary.com/sol-academy/image/upload/v1608732653/first_jifgdq.jpg'}
            ]
        }
    },
    computed: {
        todaysDate() {
            const todaysDate = this.$moment(new Date()).format("DD MMMM YYYY")
            return todaysDate
        }
    }
}
</script>