import React from 'react';
import Image5 from '../images/1631385456234~2.jpg'
import './Blog.css'
const Blog = () => {
    return(
        <main className="container-blog"> 
            <img src={Image5} alt='Imagen de Bienvenida'/>
            <div className="blog">
                <p>The blog is a initial that goes hand in hand with my own studies, practices and research. The idea is to generate content, this helps me, as well as I hope it can help someone else. </p>
                <p>The blog in the first instance will be for the development of projects from start to finish. The goal is to later add content about experiences, both personal and professional, information about technological advances and more.</p>
                <p>I'm also new to this so I hope we can share the road collaborating with each other.</p>
                <p>For any info you can contact me in my different networks.</p>
            </div>
            <section className="container-articles">
                <article>

                </article>
                <article>

                </article>
                <article>

                </article>
                <article>

                </article>
                <article>

                </article>
                
            </section>
        </main>
    )
}
export default Blog;