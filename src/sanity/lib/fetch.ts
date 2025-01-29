
import { createClient } from "next-sanity";

const client = createClient({
    projectId: "3s2cgwjr",
    dataset: "production",
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    apiVersion: "2023-01-01",
    token: "skpvDij7pFMpwxzlQ7VMcwxzqYy1gz2WDq8xElXVVoQjDvrjCBj3XOHvaSzlix8QnZBUsB1mPvIQ8jNQ0YnjY7jpdVMaUThSaVHZyQJt707Dv03SZzxQK7ZWlcgX1K02GQ6u82DX3gU4BnwhPtDXYlroADhdyxji8IVr4XtpYcW9Cg97a2Jr"
})

export async function sanityFetch({query, params = {}}:{ query : string , params?: any}){
    return client.fetch(query, params)
}

  