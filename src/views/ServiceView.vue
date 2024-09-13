<template>
    <HeaderView />
    <div class="service-page service-page-1">
        <div class="service-page-sel"><span>scroll</span></div>
        <div class="service-page-1-1">
            <span>WHAT WE DO BEST</span>
        </div>
        <div class="service-page-1-2">
            <div class="service-page-1-2-left">OUR</div>
            <div class="service-page-1-2-right">SERVICES</div>
        </div>
        <div class="service-page-1-3">
            <div class="service-page-1-3-left">
                <span>LESS IS MORE</span>
            </div>
            <div class="service-page-1-3-right">
                <span>It echoes China's philosophical thoughts of "the empty room gives birth to white, the avenue leads to simplicity".</span>
                <span>Emphasizing "blank" in China's traditional aesthetics is an important condition for the beauty of artistic conception. </span>
                <span>Using concise forms to convey rich connotations and functions, and being purely unpretentious is the ultimate level of design.</span>
            </div>
        </div>
    </div>
    <div class="service-page service-page-2">
        <div class="service-page-2-left">
            <div class="service-page-2-left-title">
                <span class="service-page-2-left-title-quotation">“</span>
                <span class="service-page-2-left-title-text">Minimalism design</span>
            </div>
            <div class="service-page-2-left-description">
                <span>We remove unnecessary things, just to highlight the core of your business.</span>
                <span>There is no second chance to leave a first impression in the digital world. We always know your goals and the users you want to reach. We will transform your ideas into unique and friendly web pages, applications and product designs. In this way, you can make a deep first impression, stay in their minds, let your users feel the real contact with you from the first moment, and decide whether they are willing to trust you.</span>
                <span>Anyone who solves users' emotions is always talking to users. We design unique applications to do this for you, because we are good at creating emotions. The design of digital products is communicative and marketable. Don't let this important task happen by chance. We can ensure that the right users agree with your company right from the start.</span>                
            </div>            
        </div>
        <div class="service-page-2-right">
            <div class="service-container">
                <!-- 导航菜单 -->
                <ul class="service-nav-menu">
                    <li v-for="(item, index) in menuItems" :key="index" @click="selectMenu(index)">
                        <div 
                            class="service-nav-name"
                            @mouseenter="handleMouseEnter()"
                            @mouseleave="handleMouseLeave()"
                        >
                            {{ item.name }}
                        </div>
                        <!-- 内容展示 -->
                        <div v-show="currentMenu === index" class="service-nav-content">
                            <p>{{ item.content }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {handleMouseEnter,handleMouseLeave } from '@/util/util';
import HeaderView from '@/components/HeaderView.vue';
export default {
    name: "ServiceView",
    components: {
        HeaderView
    },
    data() {
        return {
            currentMenu: 0, // 默认展示第一个菜单项
            menuItems: [
                { name: "PRODUCT DESIGN", content: "In our digital world, there are no borders. Do you have a super product idea? Let us make it happen for you. Of course, we will also implement your product in a way that gives your users a great experience." },
                { name: "BRAND PLANNING", content: "Brand planning content goes here." },
                { name: "WEB DESIGN AND DEVELOPMENT", content: "Web design and development content goes here." },
                { name: "APP DESIGN", content: "App design content goes here." },
                { name: "VISUAL DESIGN", content: "Visual design content goes here." },
                { name: "PHOTOGRAPHY", content: "Photography content goes here." }
            ],
            handleMouseEnter,
            handleMouseLeave,
        }
    },
    methods: {
        selectMenu(index) {
            this.currentMenu = index;
        }
    },
}
</script>

<style>
.service-page {
    font-family: "Seravek";
    color: rgb(255, 255, 255);
    height: 1260apx;
    width: 2240apx;
    padding: 0;
    margin: 0;
}
.service-page-1{
    position:relative;
    width: 100%;
}

.service-page-sel {
    font-size: 15apx;
    font-family: "Seravek";
    text-transform: uppercase;
    position: absolute;
    left: 5apx;
    top: 637apx;
    text-align: left;
    letter-spacing: 2px;
    z-index: 24;
    transform: rotate(90deg);
}

.service-page-sel span{
    margin-right: 120apx;
}

.service-page-sel::after{
    content: "";
    border-width: 0.5px;
    border-style: solid;
    width: 286apx;
    background-color: white;
    top:50%;
    position: absolute;
}

.service-page-1-1 {
    font-size: 20apx;
    position: absolute;
    right: 210apx;
    top: 314apx;
    text-transform: uppercase;
    line-height: 1.964;
    text-align: center;
    word-spacing: 4apx;
    letter-spacing: 2apx;
}

.service-page-1-2 {
    display: flex;
    text-align: center;
    justify-content: space-between;
    position: absolute;
    top:450apx;
    right: 210apx;
    font-size: 230apx;
}

.service-page-1-2-left{
    width: 500apx;
    text-align: right;
}

.service-page-1-2-right{
    font-family: "Seravek_Bold";
    text-align: right;
    width: 1000apx;
    padding-left:100apx;
}

.service-page-1-3 {
    display: flex;
    position: absolute;
    top:800apx;
    right: 210apx;
    font-size: 30apx;
}

.service-page-1-3-left {
    font-size: 25apx;
    width: 500apx;
    display: flex;
    justify-content: right;
    word-spacing: 8apx;
    letter-spacing: 2apx;
    line-height: 2;
}

.service-page-1-3-right {
    font-size: 20apx;
    width: 1000apx;
    padding-left:100apx;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    word-spacing: 4apx;
    letter-spacing: 2apx;
    line-height: 2;
}

.service-page-2{
    display: flex;
}

.service-page-2-left{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10%;
    margin-top: 20%;
}

.service-page-2-left-title{
    display: flex;
    align-items: center;
}

.service-page-2-left-title-quotation {
    font-size: 160apx;
    font-family: "Arial Black";
    color: rgb(253, 253, 253);
    text-transform: uppercase;
}

.service-page-2-left-title-text{
    font-size: 25apx;
    letter-spacing: 4apx;
    line-height: 2;
    margin-left: 30apx;
    text-transform: uppercase;
}

.service-page-2-left-description {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 1000apx;
    font-size: 21apx;
    text-align: left;
    line-height: 2;
    letter-spacing: 2apx;
    position: relative; /* 确保元素可以相对于其正常位置移动 */
    top: -40apx; /* 向上移动10px */
}

.service-page-2-right{
    width: 40%;
    padding-top:15%;
}

.service-container {
    display: flex;
}

.service-nav-menu::before{
    content: "";
    position: absolute;
    top: -10apx;
    left: -10apx;
    height: 20apx;
    width: 20apx;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
}

.service-nav-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border-left: 2apx solid rgb(255, 255, 255);
    position: relative;
}

.service-nav-menu li {
    padding-top:5%;
    padding-left:5%;
}

.service-nav-name{
    font-size:20apx;
    font-family: "Seravek_Medium";
    display: flex;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 4apx;
}

.service-nav-content {
    width: 590apx;
    height: 430apx;
    font-family: "Seravek";
    font-size: 22apx;
    text-align: left;
    display: flex;
    letter-spacing: 2apx;
    word-spacing: 5apx;
    line-height: 2;
}


</style>