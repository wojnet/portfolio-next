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
        <div className="w-full mb-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            { posts }
        </div>
    );
}

export default Posts;
