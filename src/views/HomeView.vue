<template>
    <LoadingPage v-if="isShowLoading" @LoadingPageEnd="handleAnimationEnd" @isShowHeader="handleToggleHeader" />
    <HeaderView v-if="showHeader" />
    <div ref="container">
        
        <div class="fullpage-section">
            <div v-cloak v-show="!dotFinish" ref="dotElement" id="item_0" class="dot"></div>
            <div v-cloak v-show="dotFinish"  class="dot-div dotText"  ref="dotTextElement"> 
                <span>hello</span>
                <span class="home-content">We create experiences. We turn ideas into reality.</span>
            </div>
        </div>
    </div>
</template>
	
<script>
import { isMobile } from "@/util/util";
import LoadingPage from "@/components/LoadingView.vue";
import HeaderView from "@/components/HeaderView.vue";
export default {
    name: "HomeView",
    components: {
        LoadingPage,
        HeaderView
    },
    data() {
        if(isMobile()){
            import("@/assets/css/m/home.css");
        }else{
            import("@/assets/css/pc/home.css");
        }
        return {
            entryId:"",
            isShowLoading: true,
            pages: [],
            dotFinish:false,
            showHeader:false
        };
    },
    computed: {
    },
    mounted() {
        this.animateDotText();
        window.addEventListener("wheel", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("wheel", this.handleScroll);
    },
    methods: {  
        handleToggleHeader(isShowHeader) {
            this.showHeader = isShowHeader;
        },
        handleAnimationEnd() {
            this.isShowLoading = false;
        },
        animateDotText() {
            const dot = this.$refs.dotElement
            const dotText = this.$refs.dotTextElement
            dot.addEventListener('animationend', () => {
                // const dotRect = dot.getBoundingClientRect();
                // dotText.style.top = `${dotRect.top}px`;
                // dotText.style.left = `${dotRect.left}px`;
                // dotText.style.visibility = 'visible';
                this.dotFinish = true; 
                dotText.classList.add('hello-animate')
            });
        },
        handleScroll(){
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if(entry.target.id != null && entry.target.id != this.entryId){
                            this.entryId = entry.target.id;
                            const id = entry.target.id.replace("item_","");
                            const page = this.pages[id]
                            if(page != null && page.showHeader != null){
                                this.$emit("isShowHeader", page.showHeader);
                            }
                        }
                    }
                });
            }, {
                rootMargin: '0px',
                threshold: 0.5
            });

            this.$nextTick(() => {
                this.$refs.container.querySelectorAll('.fullpage-section').forEach(section => {
                    observer.observe(section);
                });
            });
        }
    },
};
</script>
	
<style >
[v-cloak] {
    display: none !important;
}

.container{
    height: 1260apx;
    width: 2240apx;
    padding: 0;
    margin: 0;
}

.dot {
    /* animation: moveDot 6s linear infinite; */
    animation: moveDot 4s linear forwards;
    left: 75%;
    border-radius: 50%;
    background-color: rgb(255, 221, 0);
    position: absolute;
    width: 34apx;
    height: 34apx;
    z-index: 9999;
}

@keyframes moveDot {
    0% {
        transform: scale(1) translate(0px, 0px);
    }
    20% {
        transform: scale(1) translate(-600%, 2000%);
    }
    40% {
        transform: scale(1) translate(-1400%, 700%);
    }
    60% {
        transform: scale(1) translate(-2000%, 2000%);
    }
    80% {
        transform: scale(1) translate(-2600%, 500%);
    }
    100% {
        transform: scale(1) translate(-3300%, 1600%);
    }
}

.dotText {
    position: absolute;
}

</style>