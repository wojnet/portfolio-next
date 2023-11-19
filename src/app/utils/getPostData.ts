import { headers } from "next/headers";
import { IEntry } from "../types/contentful";

export const getPostData = async(postName: string): Promise<IEntry> => {
    const host = headers().get("host");
    const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

    const post = await fetch(`${protocal}://${host}/api/getPostData?p=${postName}`, {
        method: "GET",
        next: {
            revalidate: 100
        }
    })
    .then(res => res.json());

    return post;
}