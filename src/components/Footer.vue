<template>
    <div class="footer">
        <div class="inner_container row  py-4">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer_links_header">Useful Links</div>
                        <div class="footer_menu mt-4">
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'admission' }">Admission</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'attendance' }">Attendance</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'homework' }">Homework</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'schoolHours' }">School Hours</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'reports' }">Ofsted Reports</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'pace' }">Pace</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'policies' }">Policy</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer_links_header hide_visibility display_none">Useful Links</div>
                        <div class="footer_menu mt-4">
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'gallery' }">Gallery</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'development' }">Reading Development</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'KidzoneLinks' }">Kidzone links to website</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'rewardsAndSanctions' }">Rewards & Sanctions</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'termDates' }">Term Dates</router-link>
                            </div>
                            <div class="footer_menu_item">
                                <router-link :to="{ name: 'contact' }">Contact Us</router-link>
                            </div> 
                            
                        </div>
                    </div>
                    <div class="col-md-4 footer_img">
                        <div>
                           <!-- <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731938/offstead_g2ia0y.png" width="130" />  -->
                        </div>
                        <div class="mt-3">
                           <!-- <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731939/offstead2_vggirk.png"  width="130"/>  -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 footer_img">
                <div class="bold_text text-white">
                    <span>Get In Touch</span>
                </div>
                <div class="footer_contact_text mt-3">Feel free to get in touch with us via email</div>
                <div class="bold_text text-white mt-3 contact_email_text">
                    <P><small>board@solacademy.org.uk</small></P>
                </div>
                <div class="mt-3">
                    <div class="social_media_icons">
                        <div class="sm_icon mr-3">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                         <div class="sm_icon mr-3">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                         <div class="sm_icon">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <div class="grey_text text-white">
                            <h6>Phone</h6>
                        </div>
                        <div class="text-white bold_text">
                            <small>+44(0)797 1402 653</small>
                        </div>
                    </div>
                    <div class="col-md-8 footer_img">
                        <div class="grey_text text-white">
                            <h6>Address</h6>
                        </div>
                        <div class="text-white bold_text">
                            <small>115 Fairfield Street Manchester, Piccadilly Station M12 6EL</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom py-3">
            <div class="footer_bottom_inner_container">
                <div>
                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731886/logo_qymv7k.png" width="60" class="mr-3" /> 
                    <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1620066057/output-onlinepngtools_6_okt4dr.png" width="90"  /> 
                    <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1620065791/output-onlinepngtools_3_mw65vg.png" width="90"  /> 
                    <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1620065757/output-onlinepngtools_4_ye7ndy.png" width="127"  />
                    <img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731940/Ofsted_Good_GP_cphpz1.jpg" width="60"  /> 
                    <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1620065624/output-onlinepngtools_2_javp3h.png" width="120"  /> 
                    <img src="https://res.cloudinary.com/dfjzditzc/image/upload/v1620065561/output-onlinepngtools_7_ng23vd.png" width="150"  /> 

                    
                </div> 
                <div>
                    <div class="grey_text text-white footer_text">© Copyright 2020 SOL. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer'
}
</script>