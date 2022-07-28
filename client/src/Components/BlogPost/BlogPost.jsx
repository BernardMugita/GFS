import image from '../../Resources/spinach.jpg'
import '../BlogPost/BlogPost.css'
import { Link } from 'react-router-dom'
import posts from '../../Data/data'


const BlogPost = () => {
    return (
        <div className="blogpost">
            {
                posts.map((post, index) => (
                    <div className="BlogPost" key={index}>
                        <div className="ImageHolder">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="PostTitle">
                            <h2>{post.title}</h2>
                        </div>
                        <div className="Meta-Tags">
                            <p>{post.author},</p>
                            <p>{post.date}</p>
                        </div>
                        <div className="PostPreview">
                            <p>
                                {post.body}
                                <Link to={`/Blog/${post.id}`}>Continue Reading...</Link>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogPost;