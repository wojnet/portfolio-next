import { FC, Suspense } from 'react';
import { getPostsData } from '../utils/getPostsData';
import PostTile from '../components/PostTile';

const Posts: FC = async () => {
    const postsData = await getPostsData();

    const posts = postsData.items.map(post => <PostTile
        key={post.sys.id}
        title={post.fields.title}
        summary={post.fields.postSummary}
        imageSrc={post.fields.postImage.fields.file.url}
        imageAlt={post.fields.postImage.fields.file.fileName}
        postId={post.sys.id}
        author={post.fields.postAuthor}
        creationDate={post.fields.creationDate}
    />);

    return (
        <div className="w-full flex justify-center flex-wrap gap-[50px] px-[50px] mb-[50px]">
            { posts }
        </div>
    );
}

export default Posts;
