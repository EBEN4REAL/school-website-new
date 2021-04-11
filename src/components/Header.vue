<template>
    <div>
         <b-navbar toggleable="md" type="dark"  class="mai-top-header m-nav">
            <b-navbar-brand :to="{ name: 'home' }"><img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731978/sch_logo_engn7w.png" width="60"  /></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mai-top-nav">
                    <b-nav-item :to="{ name: 'home' }" class="text-white">Home</b-nav-item>
                    <b-nav-item :to="{ name: 'about' }" class="text-white">About</b-nav-item>
                    <b-nav-item :to="{ name: 'admission' }" class="text-white ">Admission</b-nav-item>
                    <b-nav-item :to="{ name: 'schoolHours' }" class="text-white ">School Hours</b-nav-item>
                    <b-nav-item-dropdown text="Parents Corner" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'parents_corner' }">Parents Corner</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'uniform' }">Uniform</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'attendance' }">Attendance</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'homework' }">Homework</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'termDates' }">Term Dates</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'rewardsAndSanctions' }">Reward & Sanction</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'policies' }">Policies</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'gallery' }">Gallery</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'parents_corner' }">Parent Corner</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="News & Extracurriculars" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'blogPosts' }">Blog</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'gallery' }">Gallery</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Academic Evaluations" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'reports' }">Ofsted Report</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'pace' }">Pace</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'curriculum' }">Curriculum</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Documents" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" href="./Prospectus.pdf"  download>Prospectus</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" href="./Fees_Struture.pdf"  download>Fees Structure</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" href="./Application_Form.pdf"  download>Application Form</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" href="./Application_Form.pdf"  download>Payment</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" href="./Application_Form.pdf"  download>Fees</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item :to="{ name: 'contact' }" class="text-white ">Contact</b-nav-item>
                    <b-nav-item  class="">
                        <button class="btn btn-white hover_effect" @click="apply" style="width 156px">Apply Online</button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-navbar toggleable="md" type="dark"  class="mai-top-header desk-nav">
            <b-navbar-brand :to="{ name: 'home' }"><img src="https://res.cloudinary.com/sol-academy/image/upload/v1608731978/sch_logo_engn7w.png" width="60"  /></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mai-top-nav">
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'home' }" class="text-white header_hover">Home</b-nav-item>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'about' }" class="text-white header_hover">About</b-nav-item>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'admission' }" class="text-white header_hover">Admission</b-nav-item>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'schoolHours' }" class="text-white header_hover">School Hours</b-nav-item>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item class="text-white nav_list header_hover">Parents Corner</b-nav-item>
                        <div style="" class="dropdown_div">
                            <ul class="dropdowm_list">
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'parents_corner'}" class="dropdown_link">Parents Corner</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'uniform'}" class="dropdown_link">Uniform</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'attendance'}" class="dropdown_link">Attendance</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'homework'}" class="dropdown_link">Homework</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'termDates'}" class="dropdown_link">Term Dates</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'rewardsAndSanctions'}" class="dropdown_link">Reward & Sanction</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'policies'}" class="dropdown_link">Policies</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'gallery'}" class="dropdown_link">Gallery</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item class="text-white nav_list header_hover">News & Extracurriculars</b-nav-item>
                        <div style="" class="dropdown_div " >
                            <ul class="dropdowm_list">
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'blogPosts'}" class="dropdown_link">Blog</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'gallery'}" class="dropdown_link">Gallery</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item class="text-white nav_list header_hover">Academic Evaluations</b-nav-item>
                        <div style="" class="dropdown_div " >
                            <ul class="dropdowm_list">
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'reports'}" class="dropdown_link">Ofsted Report</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'pace'}" class="dropdown_link">Pace</router-link>
                                </li>
                                <li class="dropdowm_list_item">
                                    <router-link :to="{name: 'curriculum'}" class="dropdown_link">Curriculum</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'blogPosts' }" class="text-white nav_list header_hover">Documents</b-nav-item>
                        <div style="" class="dropdown_div " >
                            <ul class="dropdowm_list">
                                <li class="dropdowm_list_item">
                                    <a href="./Prospectus.pdf"  download class="dropdown_link">Prospectus</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="./Fees_Struture.pdf"  download class="dropdown_link">Fees Structure</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="./Application_Form.pdf"  download class="dropdown_link">Application Form</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="./Prospectus.pdf"  download class="dropdown_link">Payment</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="./Prospectus.pdf"  download class="dropdown_link">Fees</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'contact' }" class="text-white header_hover">Contact</b-nav-item>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item  class="">
                        <button class="btn btn-white hover_effect" @click="apply" style="width 156px">Apply Online</button>
                    </b-nav-item>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
// import Jquery from 'jquery'
// let $ = Jquery
export default {
    data() {
        return  {
            activeTab: this.$route.name,
            navEl: null,
            activeNavIndex: null
        }
    },
    mounted() {
        if(screen.width <= 575) {
            Array.from(document.querySelectorAll('.nav-link')).forEach((el) => {
                el.addEventListener('click', (e) => {
                    if (el.classList.contains('dropdown-toggle')) {
                        Array.from(document.querySelectorAll('.dropdown-menu')).forEach(el => {
                            if (el !== e.target.parentNode.parentNode.children[1]) {
                                el.style.display = 'none'
                            }
                        })

                        const parentList = e.target.parentNode
                        if (parentList.parentNode.children[1].style.display == 'block') {
                            parentList.parentNode.children[1].style.display = 'none'
                        } else {
                            parentList.parentNode.children[1].style.display = 'block'
                        }
                    }
                })
            })
        }else {
            Array.from(document.querySelectorAll('.nav-link')).forEach((el) => {
                el.addEventListener('mouseover', (e) => {
                    const parentList = e.target.parentNode
                    parentList.parentNode.children[1].style.display = 'block'
                    parentList.parentNode.addEventListener('mouseleave' , (e) => {
                        console.log(e)
                        e.target.children[1].style.display = "none"
                    })
                })
            })
        }
    },
    methods: {
      apply(e) {
        e.preventDefault();
        alert("Online Application Form would be Laucnhed soon")
      },
    }
}
</script>