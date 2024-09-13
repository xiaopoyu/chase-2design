<template>
    <div class="load-view">
        <div class="load-page">
            <div class="animated-page-mask" :class="{'flex-center': true,fadeIn: !isFadingOut,fadeOut: isFadingOut,}">
                <div class='load-div-img' >
                    <img style="width: 100%;" src="@/assets/images/loading/loading.png" alt="logo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isMobile } from "@/util/util";
export default {
    name: "LoadingView",
    data() {
        if (isMobile())  {
            import("@/assets/css/m/loading.css"); 
        }else{
            import("@/assets/css/pc/loading.css");
        }
        return {
            isFadingOut: false,
        };
    },
    mounted() {
        this.$emit("isShowHeader", false);
        this.createLoadingPage()
        window.addEventListener("resize", this.createLoadingPage);

    },
    beforeUnmount() {
        window.removeEventListener("resize", this.createLoadingPage);

    },
    methods: {
        createLoadingPage() {
            const load_page = document.getElementsByClassName('load-page')[0];
            const load_img = document.getElementsByClassName('load-div-img')[0];
            const content_page = document.getElementsByClassName('animated-page-mask')[0];
            const dot = document.getElementsByClassName('dot')[0];
            if (load_page) {
                load_page.style.display = 'flex';
                load_page.style.justifyContent = 'center';
                load_page.style.alignItems = 'center';
                load_page.style.width = '100%';
                load_page.style.height = `100%`; // 注意这里需要加上 'px'
                load_page.style.backgroundColor = 'black';
                load_page.style.zIndex = '9999';
            }
            // 获得屏幕宽高
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            if (load_img) {
                load_img.style.width = '30%';
            }
            if (content_page) {
                const contentHeight = screenWidth * 1260 / 2240 * 0.9;
                // content_page.style.height = `${contentHeight}px`;
                dot.style.top = `${(screenHeight- contentHeight)/2 + contentHeight*0.12}px`;
            }
            if (load_page) {
                this.animationEnd()
            }

        },
        animationEnd() {
            // 首先等待一段时间（如3秒），然后开始淡出动画
            setTimeout(() => {
                this.isFadingOut = true;
                this.$emit("isShowHeader", true);
            }, 3000);
            // 当动画结束时，触发自定义事件
            setTimeout(() => {
                this.$emit("LoadingPageEnd");
            }, 4000); // 假设动画总时长为5秒
        },
    },
};
</script>

<style scoped>

.load-view{
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.load-page{
    width: 2240apx;
    height: 1260apx;
}
.animated-page-mask {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 9999;
}

.animated-page-mask.fadeIn {
    opacity: 1;
}

.animated-page-mask.fadeOut {
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease; /* 背景淡出动画 */
    transform: translateY(-100%);
    /* 向上滚动离开可视区域 */
}

.text-container {
    /* position: absolute; */
    color: black;
    text-align: center;
    z-index: 16;
}


</style>
