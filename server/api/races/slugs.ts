const config = useRuntimeConfig()
export default defineCachedEventHandler(async (event) => {
    const res = await $fetch(`${config.public.apiLocalUrl}/races?fields=slug`)
    return res
}, {
    maxAge: 60
});