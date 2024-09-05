<template>
    <HeaderView :default-color="'white'"/>
    <div class="about-page">
        <div class="about-page-1">
            <div class="about-header">
                <div class="about-image-section">
                    <img src="@/assets/images/about/about.png" alt="About Us Image">
                </div>
                <div class="about-section-title">
                     <div class="about-section-1">ABOUT</div>
                    <div class="about-section-2">
                        <span class="about-section-line"></span>US
                    </div>
                </div>
                <div class="about-section-subtitle">
                    <span> 
                        CHASE XU<br>FOUNDER OF 2 DESIGN
                    </span>
                </div>
            </div>

            <div class="about-design-studio-info">
                <div class="about-studio-name">2 DESIGN</div>
                <div class="about-studio-description">
                    We Digital design studio focusing on user experience.<br/>
                    We work with experts from different industries to pro<br/>
                    vide a complete service system.
                </div>
            </div>
        </div>
        <div class="about-page-2">
            <div class="about-design-philosophy">
                <div class="about-design-title">We create experiences and turn ideas into reality.</div>
                <div class="about-design-content"> 
                    I practice minimalist design with a huge love for design that your users will not only consume, but elicit reactions and interactions. As a designer, through in-depth understanding and practice of design, I have worked for many well-known enterprises and brand companies as consultants. I have been focusing on web design, app design, and digital product design and practice that design can go beyond the visual to create emotions and experiences that stay in the user's mind. My goal is to create a successful and tangible user experience for every project.
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { isMobile } from "@/util/util";
import HeaderView from "@/components/HeaderView.vue"; 
export default {
    name: "AboutPage",
    components: {
        HeaderView
    },
    data() {
        // 这里可能需要一个自定义的事件总线 $eventBus 和一个 $isMobile 方法
        // 确保这些在组件中可用或从外部导入
        if (isMobile()) {
            import("@/assets/css/m/about.css");
        } else {
            import("@/assets/css/pc/about.css");
        }
        // this.$refs.header.setBackgrandColor('white');
        return {
        }
    },
    mounted() {
    },
}
</script>

<style>
.about-page {
    font-family: "Seravek", sans-serif;
    color :black;
}
.about-page-1 {
    width: 90%;
    height: 100%;
    margin: 0 10%;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    padding-top: 10vh;
    position: relative;
    overflow: hidden;
    align-items: center;
}

.about-section-title {
    font-family: 'Seravek_Medium', sans-serif;
    font-size: 300apx;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 25%;
}
.about-section-1 , .about-section-2{
    z-index: 10;
    margin: 0;
    padding: 0;
    letter-spacing: 0px;
    line-height: 1;
}
.about-section-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

.about-section-line {
    border-width: 1apx;
    border-color: rgb(0, 0, 0);
    border-style: solid;
    background-color: rgb(0, 0, 0);
    width: 160apx;
    height: 40apx;
    z-index: 12;
    margin-right: 15apx;
}

.about-section-3 {
    letter-spacing: 0px;
    line-height: 1;
}
.about-section-subtitle {
    font-size: 18apx;
    background-color: black;
    color: white;
    text-align: center;
    transform: rotate(-10deg);
    border-radius: 50%;
    height: 150apx;
    width: 300apx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 170apx;
    z-index: 12;
    margin-bottom: 4%;
    
}
.about-header {
    position: relative;
    z-index: 10;
}
/* .about-header::after {
    content: "";
    position: absolute;
    left: 600apx;
    top: 160apx;
    width: 1020apx;
    height: 850apx;
    background-image: url('@/assets/images/about/about.png');
    background-size: contain;
    background-size: cover;
    background-position: center;
} */
.about-image-section {
    position: absolute;
    width: 1040apx;
    height: auto;
    z-index: 3;
    left: 540apx;
    top: 160apx;
}

.about-image-section img {
    width: 100%;
    height: 100%;
}

.about-design-studio-info {
    z-index: 15;
    text-align: left;
    position: absolute; 
    top: 85%;          
    left: 70%;
    width: 431apx;
}

.about-studio-name {
    font-family: 'Seravek', sans-serif;
    font-size: 25apx;
    font-weight: 700;
    margin-bottom: 5px;
    color: rgb(1, 1, 1);
    z-index: 11;
    line-height: 1.441;
    position: relative
}
.about-studio-name::after {
    content: "";
    position: absolute;
    width: 70%; 
    height: 1px;
    background-color: black; 
    top:50%;
    margin-left: 10%;
    margin-right: 10%;
}

.about-studio-description {
    margin-bottom: 40apx;
    line-height: 30apx;
    font-size: 20apx;
}


.about-page-2 {
    height: 100vh;
    margin: 0 10%;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 10%;

    
}

.about-design-philosophy {
    margin-top: 20%;
    text-align: justify;
    
}
.about-design-title {
    font-size: 30apx;
    font-family: 'Seravek_Medium';
    color: rgb(1, 1, 1);
    text-transform: uppercase;
    line-height: 2.45;
}
.about-design-content {
    font-size: 24apx;
    font-family: "Seravek";
    color: rgb(0, 0, 0);
    line-height: 2.292;
    text-align: justifyLeft;
    position: absolute;
    width: 45vw;
}

</style>