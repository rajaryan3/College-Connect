import React from 'react'
import Navbar from './Navbar'
import "./Post.css"

function Post() {
    const imageArray = Array.from(Array(15).keys()); // generates an array of 15 numbers from 0 to 14
    return (
        <>
            <div>
                <h1>This is Post Page</h1>
            </div>
            <div className='post-section'>
                <Navbar></Navbar>
                {imageArray.map((index) => (
                    <div className='post-container'>
                        <div className="post-header">
                            <img className="post-user-img" src="/assets/photo.jpeg" alt="User" />
                            <div className="post-user-details">
                                <h3 className="post-user-name">User</h3>
                                <p className="post-user-branch">Branch</p>
                            </div>
                        </div>
                        <div className="post-content">
                            <img
                                key={index}
                                className='post-image'
                                src={`/assets/image${index + 1}.png`}
                                alt={`this${index + 1}`}
                            />
                            <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus nibh at velit lacinia, sit amet pretium magna porttitor. Donec vel nunc vitae felis ultricies consectetur non non mi.</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Post