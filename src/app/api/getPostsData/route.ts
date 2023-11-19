import { NextRequest, NextResponse } from "next/server";
import contentfulClient from "@/app/helpers/contentfulClient";
import { IEntry } from "@/app/types/contentful";

export const GET = async (req: NextRequest, res: NextResponse) => {
    const entries: IEntry = await contentfulClient
        .getEntries({
            skip: 0,
            limit: 10,
            content_type: "portfolioBlog",
            order: "-sys.createdAt",
            select: [
                "fields.title",
                "fields.postImage",
                "fields.postSummary",
                "fields.creationDate",
                "fields.postAuthor"
            ].join(",")
        });
    return NextResponse.json(entries);
}