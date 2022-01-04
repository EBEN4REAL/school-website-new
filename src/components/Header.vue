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
                    <b-nav-item-dropdown text="Parents Corner" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'parents_corner' }">Parents Corner</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'uniform' }">Uniform</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'attendance' }">Attendance</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'homework' }">Homework</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'termDates' }">Term Dates</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'rewardsAndSanctions' }">Reward & Sanction</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" :to="{ name: 'policies' }">Policies</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Student Portal" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" target="_blank" href=" https://teams.office.com/">Microsoft Teams</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.office.com/">Microsoft 365</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom">Teams Assignment</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.hamilton-trust.org.uk/">Hamilton Trust English Maths Science</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://app.seesaw.me/#/login">Seesaw</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.edshed.com/en-gb">Edshed</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.oxfordowl.co.uk/login?active-tab=students">Oxford Owl</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.mathshed.com/en-gb/browse/">Mathshed</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://classroom.thenational.academy/subjects-by-key-stage">Oak Academy</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.languagenut.com/en-gb/">Languagenut</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://classroomsecrets.co.uk/">Classroom Secrets</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.edplace.com/worksheets">Edplace</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.twinkl.co.uk/">Twinkl</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.starfall.com/h/">Starfall</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.literacyshed.com/">The Literacy Shed</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.bbc.co.uk/teach">BBC Teach</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://readingeggs.co.uk/schools/">Reading Eggs</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://resources.whiterosemaths.com/resources/">White Rose Maths</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.bbc.co.uk/bitesize">BBC Bitesize</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.ruthmiskin.com/en/">Ruth Miskin Training</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.instagram.com/savewithstories/">Save with Stories</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.worldofdavidwalliams.com/elevenses-catch-up/">The World of David Walliams</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Staff Portal" right class="centralize_text">
                        <b-dropdown-item class="icon s7-home" target="_blank" href=" https://teams.office.com/">Microsoft Teams</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" target="_blank" href="https://www.office.com/">Microsoft 365</b-dropdown-item>
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
                        <b-dropdown-item class="icon s7-home" href="./Prospectus.pdf" target="_blank">Prospectus</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" href="./Fees_Struture.pdf" target="_blank">Fees Structure</b-dropdown-item>
                        <b-dropdown-item class="icon s7-home" href="./Ofsted.pdf" target="_blank">Ofsted Report</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item :to="{ name: 'contact' }" class="text-white ">Contact</b-nav-item>
                    <b-nav-item  class="" :to="{ name: 'application' }">
                        Apply Online
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
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item class="text-white nav_list header_hover">Student Portal</b-nav-item>
                        <div style="" class="dropdown_div " >
                            <ul class="dropdowm_list">
                                <li class="dropdowm_list_item">
                                    <a href="https://teams.office.com/" target="_blank" class="dropdown_link">Microsoft Teams</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.office.com/" target="_blank" class="dropdown_link">Microsoft 365</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom" target="_blank" class="dropdown_link">Teams Assignment</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.hamilton-trust.org.uk/" target="_blank" class="dropdown_link">Hamilton Trust English Maths Science</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://app.seesaw.me/#/login" target="_blank" class="dropdown_link">Seesaw</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.edshed.com/en-gb" target="_blank" class="dropdown_link">Edshed</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.oxfordowl.co.uk/login?active-tab=students" target="_blank" class="dropdown_link">Oxford Owl</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.mathshed.com/en-gb/browse/" target="_blank" class="dropdown_link">Mathshed5</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://classroom.thenational.academy/subjects-by-key-stage" target="_blank" class="dropdown_link">Oak Academy</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.languagenut.com/en-gb/" target="_blank" class="dropdown_link">Languagenut</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://classroomsecrets.co.uk/" target="_blank" class="dropdown_link">Classroom Secrets</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.edplace.com/worksheets" target="_blank" class="dropdown_link">Edplace</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.twinkl.co.uk/" target="_blank" class="dropdown_link">Twinkl</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.starfall.com/h/" target="_blank" class="dropdown_link">Starfall</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.literacyshed.com/" target="_blank" class="dropdown_link">The Literacy Shed</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.bbc.co.uk/teach" target="_blank" class="dropdown_link">BBC Teach</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://readingeggs.co.uk/schools/" target="_blank" class="dropdown_link">Reading Eggs</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://resources.whiterosemaths.com/resources/" target="_blank" class="dropdown_link">White Rose Maths</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.bbc.co.uk/bitesize" target="_blank" class="dropdown_link">BBC Bitesize</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.ruthmiskin.com/en/" target="_blank" class="dropdown_link">Ruth Miskin Training</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.instagram.com/savewithstories/" target="_blank" class="dropdown_link">Save with Stories</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.worldofdavidwalliams.com/elevenses-catch-up/" target="_blank" class="dropdown_link">The World of David Walliams</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item class="text-white nav_list header_hover">Staff Portal</b-nav-item>
                        <div style="" class="dropdown_div " >
                            <ul class="dropdowm_list">
                                <li class="dropdowm_list_item">
                                    <a href="https://teams.office.com/" target="_blank" class="dropdown_link">Microsoft Teams</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="https://www.office.com/" target="_blank" class="dropdown_link">Microsoft 365</a>
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
                                    <a href="./Prospectus.pdf" target="_blank" class="dropdown_link">Prospectus</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="./Fees_Struture.pdf" target="_blank" class="dropdown_link">Fees Structure</a>
                                </li>
                                <li class="dropdowm_list_item">
                                    <a href="./Ofsted.pdf" target="_blank" class="dropdown_link">Ofsted Report</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item :to="{ name: 'contact' }" class="text-white header_hover">Contact</b-nav-item>
                    </div>
                    <div class="nav-parent position-relative">
                        <b-nav-item  class="" :to="{ name: 'application' }">
                            <button class="btn btn-white hover_effect" style="width 156px">Apply Online</button>
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
                        e.target.children[1].style.display = "none"
                    })
                })
            })
        }
    },
    methods: {
    }
}
</script>