<template>
    <HeaderView />
    <div class="projects-page projects-page-1">
        <div class="projects-page-sel"><span>SELECTED PROJECTS</span></div>
        <div class="projects-page-1-up">
            <div class="projects-page-1-up-text">
                <span >MADE<span class="projects-page-1-up-text2">WITH</span></span>
            </div>
        </div>
        <div class="projects-page-1-under">
            <span class="projects-page-1-under-text">PASSION</span>
        </div>
    </div>
    <div class="projects-page projects-page-2">
        <!-- 左侧导航栏 -->
        <div class="projects-sidebar">
            <div>
                <span class="projects-sidebar-title">
                    CATEGORIES
                </span>
                <ul class="projects-navigation">
                    <li v-for="(item, index) in navigationItems" 
                        :key="index" 
                        :class="{ active: currentIndex == index }" 
                        @click="selectNavItem(index)"
                    >
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>

            <!-- 右侧作品卡片 -->
        <div ref="projectsContent" class="projects-content">
            <div ref="projectsCard" class="projects-card-container">
                <div v-for="(card, index) in currentCards" :key="index" >
                    <div class="projects-card-header">
                        <span>{{ card.number.toString().padStart(2, '0') }}.</span>
                    </div>
                    <div class="projects-card-body">
                        <!-- <img :src="iconPath('projects',card.image)" alt="Card Image" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
export default {
    name: "ProjectsView",
    components: {
        HeaderView
    },
    data()
    {
        return {
            currentIndex: 2,
            navigationItems: [
                { name: "BRAND PLANNING" ,  key: "brand" },
                { name: "APP / WEB DESIGN", key: "web" },
                { name: "VISUAL DESIGN",    key: "visual"},
                { name: "H5 ACTIVITY",      key: "activity"},
                { name: "PRODUCT DESIGN",   key: "product"}
            ],
            cards: {
                "brand": [
                    { number: 1, image: "path/to/image1.jpg",},
                    { number: 2, image: "path/to/image2.jpg",},
                    { number: 3, image: "path/to/image3.jpg",},
                    { number: 3, image: "path/to/image3.jpg",},
                ],
                "web": [
                    { number: 1, image: "path/to/image1.jpg",},
                    { number: 2, image: "path/to/image2.jpg",},
                    { number: 3, image: "path/to/image3.jpg",},
                    { number: 4, image: "path/to/image3.jpg",},
                ],
                "visual": [
                    { number: 1, image: "path/to/image1.jpg",},
                    { number: 2, image: "path/to/image2.jpg",},
                    { number: 3, image: "path/to/image3.jpg",},
                    { number: 4, image: "path/to/image3.jpg",},
                    { number: 5, image: "path/to/image3.jpg",},
                    { number: 6, image: "path/to/image3.jpg",},
                    { number: 7, image: "path/to/image3.jpg",},
                    { number: 8, image: "path/to/image3.jpg",},
                    { number: 9, image: "path/to/image3.jpg",},
                ],
                "activity": [
                    { number: 1, image: "path/to/image1.jpg",},
                    { number: 2, image: "path/to/image2.jpg",},
                    { number: 3, image: "path/to/image3.jpg",}
                ],
                "product": [
                    { number: 1, image: "path/to/image1.jpg",},
                    { number: 2, image: "path/to/image2.jpg",},
                    { number: 3, image: "path/to/image3.jpg",}
                ]
            }
        }
    },
    computed: {
        currentCards() {
            const currentCategory = this.navigationItems[this.currentIndex].key;
            return this.cards[currentCategory];
        }
    },
    methods: {
        selectNavItem(index) {
            // projects-content 的 scroll 设置为0 
            if (this.$refs.projectsContent) {
                this.$refs.projectsContent.scrollTo({
                    left: 0,    // 水平方向滚动到的位置
                    top: 0,     // 垂直方向滚动到的位置
                    behavior: 'smooth' // 滚动行为
                });
            }
            this.currentIndex = index;
        },
        iconPath(image){
            try{
                return require(`@/assets/images/project/${image}`);
            }catch(e){
                return require(`@/assets/images/project/default.png`);
            }
        }

    }
}
</script>

<style >
.projects-page {
    font-family: "Seravek";
    height: 1260apx;
    width: 2240apx;
    padding: 0;
    margin: 0;
}
.projects-page-1{
    font-family: "Seravek_Bold";
    position: relative;
}

.projects-page-sel {
    width: 688apx;
    font-size: 25apx;
    font-family: "Seravek";
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    position: absolute;
    left: 1410apx;
    top: 330apx;
    text-align: left;
    letter-spacing: 4apx;
    z-index: 24;
}

.projects-page-sel span{
    margin-right: 120apx;
}
.projects-page-sel::after{
    content: "";
    height: 1apx;
    border-width: 0.5px;
    border-style: solid;
    width: 286apx;
    background-color: white;
    top:50%;
    position: absolute;
}

.projects-page-1-up{
    width: 100%;
    height: 740apx;
}

.projects-page-1-up-text{
    font-size: 450apx;
    color: white;
    z-index: 23;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 15%;    
}
.projects-page-1-up-text2{
    font-size: 250apx;
}

.projects-page-1-under {
    position: relative;
    width: 100%;
    height: 510apx;
    background-color: white;
}

.projects-page-1-under-text {
    font-size: 300apx;
    color: black;
    /* z-index: 23; */
    position: absolute;
    top: -90apx;
    left: 25%;
}

.projects-page-2{
    margin-top :-20apx;
    display: flex;
    background-color: white;
    /* background-color: yellow; */
}


.projects-sidebar {
    width: 448apx;
    color: black;
    padding: 20apx;
    display: flex;
    height: 1260apx;
    text-align: left;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:30apx;
    letter-spacing: 2px;
}
.projects-sidebar-title{
    font-family: "Seravek_Bold";
    text-align: left;
    font-size: 30apx;
    list-style-type: none;
    padding: 0;
}

.projects-navigation {
    list-style-type: none;
    padding: 0;
}

.projects-navigation li {
    padding-top: 60apx;
    cursor: pointer;
}

.projects-navigation li.active {
    color: #a5a5a5;
    font-weight: bold;
}

.projects-content {
    width: 1790apx;
    padding: 20apx;
    color:black;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    overflow-x: auto;
}

.projects-card-container {
    display: flex;
    
}
.projects-card-container::-webkit-scrollbar {
    width: 0 !important;
}


.projects-card-container > div {
    display: inline-block;
    scroll-snap-align: start;
    background-color: rgb(17, 17, 17);
    width: 520apx;
    height: 760apx;
    margin-right: 20apx;
    position: relative;
}

.projects-card-header {
    font-size: 24apx;
    line-height: 1.25;
    position: absolute;
    top: -30apx;
    left: 0apx;
}

.projects-card-body img {
    width: 100%;
    height: auto;
    margin: 0;
}


.projects-card-body p {
    margin: 0;
}
</style>