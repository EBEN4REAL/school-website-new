<template>
    <MasterLayout :title="title" BgUrl="https://res.cloudinary.com/sol-academy/image/upload/v1608732173/write-good-blog-article-t-more-traffic1_ca0agq.png">
        <div class="pace_container content_width">
            <div :style="[{
                backgroundImage: `url('https://res.cloudinary.com/dfjzditzc/image/upload/v1572447495/samples/ecommerce/leather-bag-gray.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }]" class="post_image">
                
            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';


export default {
    name: 'Ofsted',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Ofsted',
        }
    }
}
</script>