const config = useRuntimeConfig()
export default defineCachedEventHandler(async () => {
    const res = await $fetch(`${config.public.apiLocalUrl}/races?fields=Slug`)
    return res
}, {
    maxAge: 60
});