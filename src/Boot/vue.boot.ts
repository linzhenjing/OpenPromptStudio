import Vue from "vue"

// ----------------- 全局组件 -----–––––––––––––––-
import { Icon as vIcon } from "@iconify/vue2"
// ----------------------–––––––––––––––-
import vRoot from "../Pages/Root.vue"
import { getPagesRouter } from "../Pages"

export function bootVue(setVueHandler?: (VueConstructor: typeof Vue) => any) {
    // 设置 Vue
    if (setVueHandler) setVueHandler(Vue)
    // --------––––––––––––––––––––––––––––––
    Vue.component("Icon", vIcon)
    // --------––––––––––––––––––––––––––––––
    let router = getPagesRouter(Vue)
    let vueIns = new Vue({
        el: "#app-root",
        router,
        render: (h) => h(vRoot),
    })

    // 注册变量
    Object.assign(window, {
        vueIns,
        _Vue: Vue,
    })
    return { Vue, vueIns }
}
