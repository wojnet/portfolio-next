export type IEntry = {
    sys: { type: string },
    total: number,
    skip: number,
    limit: number,
    items: {
        fields: {
            title: string,
            postImage: any,
            postSummary: string,
            postAuthor: string,
            creationDate: string,
            postContent?: any //niewiem!!!!
        },
        sys: { 
            id: string,
            type: string
        }
    }[],
    includes: { Asset: any[] | any }
}