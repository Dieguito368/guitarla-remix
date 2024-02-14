import Post from ".//post";

const ListadoPosts = ({ posts }) => {
    return (
        <div className="posts-grid">
            { posts.map(post => <Post key={ post.id } post={ post } />) }
        </div>
    );
}

export default ListadoPosts;