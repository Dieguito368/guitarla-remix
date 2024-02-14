import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";
import { obtenerPosts } from "~/models/posts.server";

export const meta = () => {
    return [
        { title: 'GuitarLA - Blog' }
    ];
}

export const loader = async () => {
    const posts = await obtenerPosts();

    return posts.data;
}

const Blog = () => {
    const posts = useLoaderData();

    return (
        <>
            <h2 className="heading">Blog</h2>

            <ListadoPosts posts={ posts }/>
        </>    
    )
}

export default Blog
