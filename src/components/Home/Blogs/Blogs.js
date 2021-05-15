import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import './Blogs.css'


const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge for health',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5 mt-5">
        <div className="container">
            <div className="section-header text-center">
                 <h5 className="text-success text-uppercase">our blog</h5>
                 <h1>From Our Blog News</h1>
            </div>
            <div className="row mt-5">
                 {
                     blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Blogs;