import { getQuery, getRequestURL } from 'h3'
export default defineCachedFunction(
    async (event) => {
        const config = useRuntimeConfig()
        const query = getQuery(event)
        const res = await $fetch(`${config.public.apiLocalUrl}/races`, {
            query: query
        })
        return res
    },
    {
        maxAge: useRuntimeConfig().cacheMaxAge,
        getKey: (event) => getRequestURL(event).toString()
    }
)
