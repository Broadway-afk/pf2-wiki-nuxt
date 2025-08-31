import { getQuery, getRequestURL } from 'h3'
import { CompatibilityEvent } from 'h3'
export default defineCachedFunction(
    async (event: CompatibilityEvent ) => {
        const config = useRuntimeConfig()
        const query = getQuery(event)
        const res = await $fetch(`${config.public.apiLocalUrl}/feats`, {
            query: query
        })
        return res
    },
    {
        maxAge: useRuntimeConfig().cacheMaxAge,
        getKey: (event) => getRequestURL(event).toString()
    }
)