<template>
    <HeaderView :default-color="'white'"/>
    <div class="contact-page">
        <div class="contact-left">
            <!-- <div  class="concat email" @click="copyText(item.text)">
                21588080@QQ.com
            </div>
            <div  class="concat phone" @click="copyText(item.text)">
                +86&nbsp;&nbsp;18616991221
            </div> -->
            <div v-for="(item,index) in contactItems" :key="index"
                :class="['concat',this.type]" @click="copyText(item.text)"
            >
                <img :src="iconPath(item.icon)" />
                {{ item.text }}
            </div>
        </div>
        <div class="contact-right">
            <span class="contact-right-1">SAY HI <span class="contact-right-1 contact-right-1-bol">!</span></span> 
            <span class="contact-right-2">CONTA<br>US</span>
        </div>
    </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
export default {
    name: "ContactView",
    components: {
        HeaderView
    },
    data() {
        return {
            contactItems:[
                {type: "email", text: "21588080@QQ.com", icon: "email.png"},
                {type: "phone", text: "+86  18616991221", icon: "phone.png"},
                {type: "wechat", text: "Chase_Xu", icon: "wechat.png"}
            ]
        };
    },
    methods:{
        copyText(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert("复制成功");
            });
        },
        iconPath(icon) {
            return require(`@/assets/images/contact/${icon}`);
        }
    }
}

</script>

<style>
.contact-page {
    margin-top: 20vh;
    font-family: "Seravek", sans-serif;
    color :black;
    display: flex;
    justify-content: space-between;
}
.contact-left {
    margin-top:22%;
    margin-left: 10%;
    height: 400apx;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.contact-left .concat{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
    font-size: 25apx;
    font-family: "Seravek";
    line-height: 3;
    word-spacing: 2apx;
    letter-spacing: 2apx;
    z-index: 15;
}

.contact-left img {
    margin-right: 40apx;
    width: 30apx;
}
.contact-right{
    /* width: 50vw; */
    /* height: 100vh; */
    display:inline-block;
    line-height: 1;
}

.contact-right-1, .contact-right-2{
    font-size: 300apx;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
}

.contact-right-1{
    font-size: 210apx;
    text-align: left;   
    justify-content: flex-start;
}

.contact-right-1-bol{
    transform: rotate(10deg);
}

.contact-right-2{
    font-family: "Seravek_Bold", sans-serif;
    
}
</style>