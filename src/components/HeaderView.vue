<template>
    <div v-show="isMenuOpen" class="header-overlay">
        <div>
            <div class="header-navigation" v-for="(item, index) in menuItems" :key="index">
                <div 
                    @mouseenter="showNavigation(index)"
                    @mouseleave="hiddenNavigation(index)"
                >
                    <a :href="item.link"  >
                        <div  class="header-navigation-relative" >
                            <div class="header-navigation-cn">{{ item.cnName }}</div>
                            <span  class="header-navigation-en">{{ item.name }}</span>
                        </div>
                        
                        <div v-if="!isMobile" :id="'navigationHover' + index" class="header-navigation-hover" style="width: 0%;">
                            <div class="header-navigation-hover-cn">{{ item.cnName }}</div>
                            <span  class="header-navigation-hover-en">{{ item.name }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="app-header" :style="headerStyle" >
        <div class="header-left-section">
            <div class="header-div header-div-left">
                <router-link v-cloak @click="toHome" to="/" class="_2_design_studio" :style="menuStyle" 
                @mouseenter="handleMouseEnter()"
                @mouseleave="handleMouseLeave()">
                    2 DESIGN STUDIO
                </router-link>
            </div>
        </div>
        <div class="header-right-section">
            <div @click="toggleMenu" class="header-menu-button "
            @mouseenter="handleMouseEnter()"
            @mouseleave="handleMouseLeave()">
                <div class="header-div header-menu-div">
                    <div class="header-menu-text" :style="menuStyle" v-if="!isMobile" v-cloak >{{menuText}}</div>
                    <div class="header-hamburger" :class="{ active: isCross,'header-hamburger': !isMenuOpen, 'header-hamburger-close': isMenuOpen }" :style="hamburger">
                        <div class="header-hamburger-line-3 nav-bg" :class="{ 'header-hamburger-line': !isMenuOpen, 'header-hamburger-close-line': isMenuOpen }" :style="hamburgerLine" />
                        <div class="header-hamburger-line-4 nav-bg" :class="{ 'header-hamburger-line': !isMenuOpen, 'header-hamburger-close-line': isMenuOpen }" :style="hamburgerLine" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { handleMouseEnter, handleMouseLeave, isMobile } from '@/util/util';
export default {
    name: "HeaderView",
    components: {
    },
    props: {
        defaultColor:{
            type : String,
            required: false, 
        } 
    },
    mounted() {
        this.setBackgrandColor(this.defaultColor);
        this.rebuildStyle();
        window.addEventListener("resize", this.rebuildStyle);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.rebuildStyle);
    },
    data() {
        if(isMobile()){
            import("@/assets/css/m/header.css");
        }else{
            import("@/assets/css/pc/header.css");
        }
        const menuItems = [
            { cnName: "项目", name: "PROJECTS", link: `/chase-2design/projects` },
            { cnName: "服务", name: "SERVICE", link: "/chase-2design/service" },
            { cnName: "我们", name: "ABOUT", link: "/chase-2design/about" },
            { cnName: "联系", name: "CONTACT", link: "/chase-2design/contact" },
        ]
        return {
            menuText : 'MENU',
            isCross : false,
            isMobile: isMobile(),
            hamburger:{},
            hamburgerLine: {},
            headerStyle: {},
            menuStyle: {},
            isMenuOpen: false,
            menuItems: menuItems,
        };
    },
    created() {
        // this.$eventBus.addEventListener('change-header', this.changeHeader);
    },
    methods: {
        handleMouseEnter() {
            handleMouseEnter();
        },
        handleMouseLeave(){
            handleMouseLeave();
        },
        changeHeader(setColor){
            console.log("changeHeader:", setColor);
            if(setColor != null){
                this.setBackgrandColor(setColor);
            }
        },
        showNavigation(index){
            if(document.getElementById('navigationHover'+index)){
                // console.log('showNavigation:', index);
                document.getElementById('navigationHover'+index).style.width = '100%';
            }
        },
        hiddenNavigation(index){
            if(document.getElementById('navigationHover'+index)){
                // console.log('hiddenNavigation:', index);
                document.getElementById('navigationHover'+index).style.width = '0%';
            }
        }, 
        rebuildStyle(){
            this.isMobile =  isMobile();
        },
        toHome() {
            this.setBackgrandColor()
            this.isMenuOpen = false;
            this.defaultColor == null;
            this.$router.push('/');

        },
        setBackgrandColor(setColor){
            switch(setColor){
                case 'white':
                    this.backgroundColorWhite();
                    break;
                case 'black':
                    this.backgroundColorBlack();
                    break;
                default:
                    if (this.defaultColor != null){
                        this.backgroundColorWhite();
                    }else{
                        this.backgroundColorBlack();
                    }
            }
        },
        backgroundColorBlack(){
            document.body.style.backgroundColor = "black";
            this.headerStyle = {
                color: 'white',
            }
            this.menuStyle = {
                color: 'white',
            }
            this.hamburgerLine = {
                backgroundColor: 'white',
            }
        },
        backgroundColorWhite(){
            document.body.style.backgroundColor = "white";
            this.headerStyle = {
                color: 'black',
            }
            this.menuStyle = {
                color: 'black',
            }
            this.hamburgerLine = {
                backgroundColor: 'black',
            }
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            this.isCross = !this.isCross; // 切换状态
            if (this.isMenuOpen) {
                this.backgroundColorWhite();
                this.menuText = 'CLOSE';
            } else {
                this.setBackgrandColor();
                this.menuText = 'MENU';
            }
        },
    },
    computed: {
        
    },
};
</script>

<style scoped>
.header-div {
    height: 4vh;
}
.header-div-left {
    display: flex;
    align-content: flex-start;
    align-items: center;
}
.header-menu-text {
    /* width: 4vw; */
    font-family: Seravek_Medium;
    font-size: inherit;
}
._2_design_studio {
    /* font-family: "Seravek_Medium"; */
    text-transform: uppercase;
    position: absolute;
    text-decoration: none;
    /* 去掉下划线 */
    border: none;
    /* 去掉边框 */
    background: none;
    /* 去掉背景 */
    color: inherit;
    /* 继承父元素的颜色 */
    letter-spacing:2px;
    /* font-weight: bold; */
}

.header-menu-button {
    font-size: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
    overflow: hidden;
    color: white;
}

.header-menu-div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}


.header-hamburger {
    flex-direction: column;
    /* justify-content: space-evenly; */
    display: flex;
    cursor: pointer; /* 让鼠标悬停时显示为可点击状态 */
    /* margin-left: 0.5vw; */
    margin-left: 10px;
}

.header-hamburger-line-3,
.header-hamburger-line-4 {
    transform-origin: center center; /* 确保围绕中心点旋转 */
    transition: transform 0.1s ease, background-color 0.1s ease;
}

/* 定义叉号状态的旋转 */
.header-hamburger.active .header-hamburger-line-3 {
    transform: rotate(45deg);
}

.header-hamburger.active .header-hamburger-line-4 {
    transform: rotate(-45deg);
}



</style>
