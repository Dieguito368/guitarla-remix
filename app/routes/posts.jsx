import { Outlet } from "@remix-run/react";
import blog from '~/styles/blog.css';

export const links = () => {
    return [
        { rel: 'stylesheet', href: blog }
    ];
} 

const Blog = () => {
    return (
        <main className="contenedor">
            <Outlet />
        </main>    
    )
}

export default Blog;