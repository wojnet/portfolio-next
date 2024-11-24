import { headers } from "next/headers";
import { IEntry } from "../types/contentful";

export const getPostsData = async(): Promise<IEntry> => {
    const host = headers().get("host");
    const protocal = process.env.nodeEnv === "development" ? "http" : "https";

    const posts = await fetch(`${protocal}://${host}/api/getPostsData`, {
        method: "GET",
        next: {
            revalidate: 100
        }
    })
    .then(res => res.json());

    return posts;
}