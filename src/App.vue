<template>
    <div class="router-view-container">
        <router-view/>
        <div v-if="showCursor" class="cursor-circle" ref="cursorCircle"></div>
    </div>
</template>

<script>
import "@/assets/styles/global.css";
import { isMobile } from "@/util/util";
import flexibleScript from '@/assets/utils/flexible.js';
export default {
    components: {
    },
    data() {
        return {
            showHeader: true,
            circleRadius: 0,
            oldIsMobile: isMobile(),
            showPage: "",
            showCursor: !isMobile(),
            cursorCircle:null,
            oldCursorCircleWidth: 0,
            currentWidth: window.innerWidth,
        };
    },
    computed: {
        isIndex() {
            return this.$route.path === '/' || this.$route.path === '/chase-2design/';
        },
    },
    created() {
    },
    mounted() {
        //屏幕适配分辨率
        this.addFlexibleScript();
        window.addEventListener("resize", this.onResize);
        window.addEventListener('mousemove', this.updateCursorCirclePosition);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener('mousemove', this.updateCursorCirclePosition);

    },
    methods: {
        updateCursorCirclePosition(event){
            if (this.cursorCircle) {
                if(this.oldCursorCircleWidth != this.cursorCircle.offsetWidth){
                    this.circleRadius = this.cursorCircle.offsetWidth / 2;
                    this.oldCursorCircleWidth = this.cursorCircle.offsetWidth;
                }
                // 减去圆圈半径的一半以居中对齐鼠标
                this.cursorCircle.style.top = `${event.pageY - this.circleRadius}px`;
                this.cursorCircle.style.left = `${event.pageX - this.circleRadius}px`;
            }else{
                if(this.$refs.cursorCircle){
                    this.cursorCircle = this.$refs.cursorCircle; // 获取圆圈元素的引用
                    this.circleRadius = this.cursorCircle.offsetWidth / 2;
                    this.oldCursorCircleWidth = this.cursorCircle.offsetWidth;
                    console.log('circleRadius:', this.circleRadius);
                }
            }
        },
        onResize() {
            if(this.oldIsMobile != isMobile()){
                window.location.reload();
            }
            const newWidth = window.innerWidth;
            if (newWidth !== this.currentWidth) {
                this.currentWidth = newWidth;
            }
            this.showCursor = !isMobile() && window.innerWidth>1024;
            if( this.$refs.cursorCircle != null){
                this.cursorCircle = this.$refs.cursorCircle; // 获取圆圈元素的引用
            }
        },
        addFlexibleScript() {
            const script = document.createElement("script");
            script.textContent = flexibleScript;
            document.head.appendChild(script);
        },
    },
};
</script>

<style>
[v-cloak] {
    display: none;
}
.pc-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.router-view-container {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto;
    position: relative;
}

</style>
