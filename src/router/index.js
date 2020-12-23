import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home"
import About from "@/views/About"
import BlogPosts from "@/views/BlogPosts"
import Post from "@/views/Post"
import Reports from "@/views/Reports"
import Pace from "@/views/Pace"
import Ofsted from "@/views/Ofsted"
import Rewards from "@/views/Rewards"
import Contact from "@/views/contact"
import Policies from "@/views/Policies"
import Uniform from "@/views/Uniform"
import Development from "@/views/Development"
import Curriculum from "@/views/Curriculum"
import SchoolHours from "@/views/SchoolHours"
import Admission from "@/views/Admission"
import KidzoneLinks from "@/views/kidzoneLinks"
import Homework from "@/views/Homework"
import Gallery from "@/views/gallery"
import Attendance from "@/views/Attendance"
import TermDates from "@/views/termDates"
import ParentsCorner from "@/views/parentsCorner"

Vue.use(VueRouter);

let routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'homework',
    path: '/homework',
    component: Homework
  },
  {
    name: 'KidzoneLinks',
    path: '/kidzone-links',
    component: KidzoneLinks
  },
  {
    name: 'parents_corner',
    path: '/parents-corner',
    component: ParentsCorner
  },
  {
    name: 'admission',
    path: '/Admission',
    component: Admission
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'blogPosts',
    path: '/blog-posts',
    component: BlogPosts
  },
  {
    name: 'post',
    path: '/post',
    component: Post
  },
  {
    name: 'reports',
    path: '/reports',
    component: Reports
  },
  {
    name: 'pace',
    path: '/pace',
    component: Pace
  },
  {
    name: 'ofsted',
    path: '/ofsted',
    component: Ofsted
  },
  {
    name: 'rewardsAndSanctions',
    path: '/rewards&sanctions',
    component: Rewards
  },
  {
    name: 'policies',
    path: '/policies',
    component: Policies
  },
  {
    name: 'uniform',
    path: '/uniform',
    component: Uniform
  },
  {
    name: 'development',
    path: '/development',
    component: Development
  },
  {
    name: 'curriculum',
    path: '/curriculum',
    component: Curriculum
  },
  {
    name: 'schoolHours',
    path: '/school-hours',
    component: SchoolHours
  },
   {
    name: 'gallery',
    path: '/gallery',
    component: Gallery
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'attendance',
    path: '/attendance',
    component: Attendance
  },
  {
    name: 'termDates',
    path: '/term-dates',
    component: TermDates
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;
