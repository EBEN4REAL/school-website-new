<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2017/12/02/15/17/contact-us-2993109_960_720.jpg">
        <div class="content_width">
            <div class="row mt-3 justify-content-center">
                <div class="col-lg-7 col-md-7">
                    <div class="contact_details form_details text-center p-3 mb-5" data-aos="fade-down" data-aos-duration="2000">
                        <h6>Write to Us
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731925/mailicon_p2lugu.svg" alt="" class="ml-2" width="30"></h6>
                        <span>Need more info?<br>We would love to hear from you. Please send us a message and we will respond as soon as possible.</span>
                        <div class="form_group_details pl-5 pr-5 mt-3 text-left">
                            <form action="https://formspree.io/f/xqkggeag" method="POST">
                                <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" name="name" id="" placeholder="Your Name">
                                </div>
                                <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="email" id="" placeholder="Your Email">
                                </div>
                                <div class="form-group">
                                <label>Phone Number</label>
                                <input type="number" class="form-control" name="phone" id="" placeholder="Your phone number">
                                </div>
                                <div class="form-group">
                                <label>Message</label>
                                <textarea name="message" class="form-control" id="" cols="10" rows="4" placeholder="Give as many details as possible…"></textarea>
                                </div>
                                 <button type="submit" class="btn btn_submit mb-3 hover_effect" @click="submitForm">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout>
</template>
<script>
import MasterLayout from '@/views/masterlayout.vue';

export default {
    name: 'About',
    components: {
        MasterLayout
    },
    data() {
        return {
            title: 'Contact Us',
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            alert(`Write to us will be coming soon`)
        }
    }
}
</script>