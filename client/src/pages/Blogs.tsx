import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if(loading){
      return <div>
        Loading...
      </div>
    }

    return (
    <>
      <AppBar/>
      <div className="flex flex-col items-center">
          <div>
              {blogs.map(blog => <BlogCard
                  key={blog.id}
                  id={blog.id}
                  authorName={blog.author.name || "Anonymous"}
                  title={blog.title}
                  content={blog.content}
                  publishedDate={"2nd oct 2024"}
              />)}
          </div>
      </div>
      </>
    )
  }