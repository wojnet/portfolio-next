import { NextRequest, NextResponse } from "next/server";
import contentfulClient from "@/app/helpers/contentfulClient";
import { IEntry } from "@/app/types/contentful";

export const GET = async (req: NextRequest, res: NextResponse) => {
    const entry: IEntry = await contentfulClient
        .getEntries({
            limit: 1,
            "fields.title": req.nextUrl.searchParams.get("p")?.replaceAll("_", " "),
            content_type: "portfolioBlog",
            select: [
                "fields.title",
                "fields.postImage",
                "fields.postSummary",
                "fields.creationDate",
                "fields.postAuthor",
                "fields.postContent"
            ].join(",")
        });
    return NextResponse.json(entry);
}