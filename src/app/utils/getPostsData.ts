import { headers } from "next/headers";
import { IEntry } from "../types/contentful";

export const getPostsData = async(): Promise<IEntry> => {
    const host = headers().get("host");
    const protocol = process.env.nodeEnv === "development" ? "http" : "https";

    const posts = await fetch(`${protocol}://${host}/api/getPostsData`, {
        method: "GET",
        headers: {
            "Cache-Control": "no-store"
        }
    }).then(res => res.json());

    return posts;
}