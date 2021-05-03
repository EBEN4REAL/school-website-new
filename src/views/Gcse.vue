<template>
    <MasterLayout :title="title" BgUrl="https://cdn.pixabay.com/photo/2017/12/02/15/17/contact-us-2993109_960_720.jpg">
        <div class="content_width">
            <div class="row mt-3 justify-content-center">
                <!-- <div class="col-lg-5 col-md-4 mt-5 desktop_view">
                    <div class="physical_address_details" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div class="row align-item-center mt-4">
                            <div class="col-4 circle_img_container">
                                <div class="circle_img">
                                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731948/pin_1_2_zn5lni.svg" alt="" width="30">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="address">
                                    <h6>Physical Address:</h6>
                                    <p class="mt-4">SOL Christian Academy</p>
                                    <p>115 Fairfield Street <br>Manchester, Piccadilly Station<br> M12 6EL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact_details mt-4 mb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div class="row align-content-center pb-1">
                            <div class="col-4 text-center">
                            </div>
                            <div class="col-8 mt-5 pb-3">
                                <h6>Contact Details:</h6>
                            </div>
                            <div class="col-4 text-center">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731948/phonecall_sxhf1c.svg" alt="" width="20">
                            </div>
                            <div class="col-8">
                                <p>01616372944</p>
                            </div>
                            <div class="col-4 mt-3 text-center">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608732093/tel_gf39my.svg" alt="" width="20">
                            </div>
                            <div class="col-8 mt-3">
                                <p>01616372944</p>
                            </div>
                            <div class="col-4 mt-3 mb-4 text-center">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731887/mail_s0plcn.svg" alt="" width="20">
                            </div>
                            <div class="col-8 mt-3">
                                <p> board@solacademy.org.uk</p>
                            </div>
                            <div class="col-4 mt-3  text-center">
                                <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731887/mail_s0plcn.svg" alt="" width="20">
                            </div>
                            <div class="col-8 mt-3">
                                <p> admin@solacademy.org.uk</p>
                            </div>
                            
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-7 col-md-7">
                    <div class="contact_details form_details text-center p-3 mb-5" data-aos="fade-down" data-aos-duration="2000">
                        <h6>Request for GCSE Tutorials
                        <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731925/mailicon_p2lugu.svg" alt="" class="ml-2" width="30"></h6>
                        <!-- <span>Need more info?<br>We would love to hear from you. Please send us a message and we will respond as soon as possible.</span> -->
                        <div class="form_group_details pl-5 pr-5 mt-3 text-left">
                            <form action="https://formspree.io/f/xqkggeag" method="POST">
                                <div class="form-group">
                                    <label>Name Of Student</label>
                                    <input type="text" class="form-control" name="name" id="" placeholder="Student Name">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email" id="" placeholder="Your Email">
                                </div>
                                <div class="form-group">
                                    <label>Country Of Residence</label>
                                    <input type="text" class="form-control" name="country" id="" placeholder="Student Country Of Residence">
                                </div>
                                <div class="form-group">
                                    <label>Nationality</label>
                                    <input type="text" class="form-control" name="nationality" id="" placeholder="Your Nationality">
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea name="message" class="form-control" id="" cols="10" rows="4" placeholder="Give as many details as possible…"></textarea>
                                </div>
                                 <button type="submit" class="btn btn_submit mb-3 hover_effect">Submit</button>
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
            title: 'GCSE Tutorials',
        }
    }
}
</script>