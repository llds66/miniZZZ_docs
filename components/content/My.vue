<script lang="ts" setup>
const avatarList = ref([
    { name: '默认', icon: 'default', auther: '' },
    { name: '原神_纳西妲_1', icon: 'ys_nxd_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_钟离_1', icon: 'ys_zl_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_八重神子_1', icon: 'ys_bbts_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_枫原万叶_1', icon: 'ys_fnn_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_甘雨_1', icon: 'ys_gy_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_雷电影_1', icon: 'ys_ldjj_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_凝光_1', icon: 'ys_ng_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '原神_神里绫华_1', icon: 'ys_sllh_1', auther: '粥粥呀粥粥', autherLink: 'https://www.miyoushe.com/ys/accountCenter/postList?id=307963392' },
    { name: '崩铁_开拓者_1', icon: 'bt_ktz_1', auther: '' },
    { name: '崩铁_三月七_1', icon: 'bt_syq_1', auther: '' },
    { name: '崩铁_流萤_1', icon: 'bt_ly_1', auther: '' },
]);
const openLink = (url: string | undefined) => {
    if (url) {
        window.open(url, '_blank')
    }
    return
}
</script>

<template>
    <div class="flex gap-5 flex-wrap py-5">
        <div v-for="item in avatarList" :key="item.icon" class="flex flex-col items-center gap-y-2">
            <img class="rounded-full min-h-40px min-w-40px w-14 h-14"
                :src="`https://minizzz.xyz/avatar_presets/${item.icon}.jpg`" />
            <span @click="openLink(item.autherLink)"
                class=" text-sm text-slate-500 cursor-pointer hover:text-slate-400">@{{
                    item.auther }}</span>
        </div>
    </div>
</template>