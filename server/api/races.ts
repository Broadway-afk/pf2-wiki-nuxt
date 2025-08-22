
export default defineCachedFunction(
    async () => {
        const config = useRuntimeConfig()
        const res = await $fetch(`${config.public.apiLocalUrl}/rasies?populate=*`)
        return res
    },
    {
        maxAge: 86400
    }
)
