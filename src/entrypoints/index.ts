export {}
let loaded = false

const init = async () => {
    if (loaded) return
    loaded = true


    console.log("Hello from adastra-plugin")
    const { default: Alpine } = await import("alpinejs")
    // const { default: AlpinePersist } = await import("@alpinejs/persist")
    // const { default: Morph } = await import("@alpinejs/ui")
    // const { default: AlpineUI } = await import("@alpinejs/morph")
    // const { default: AlpineFocus } = await import("@alpinejs/focus")
    // const { default: Intersect } = await import("@alpinejs/intersect")
    // const { default: LoadMoreComponentFunctionality } = await import(
    //     "~/components/collection/index"
    // )

    // Alpine.plugin(AlpinePersist)

    Alpine.data("HeroSection", (props) => ({
      async init() {
        console.log("HeroSection", props)
      },
    }))

    Alpine.start()

    // window.Alpine = Alpine
}

if (document.querySelector(".template-product")) {
    init()
} else {
    document.addEventListener("mousedown", init, { once: true })
    document.addEventListener("mousemove", init, { once: true })
    document.addEventListener("scroll", init, { once: true })
    document.addEventListener("touchstart", init, { once: true })
    document.addEventListener("keydown", init, { once: true })
}
