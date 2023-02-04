import React from 'react'
import './comments.scss'

const Comments = () => {
    // Temporary
    const comments = [
        {
            id: 1,
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam in rem inventore!.',
            name: 'John Doe',
            userId: 1,
            profilePicture:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 1,
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam in rem inventore!.',
            name: 'John Doe',
            userId: 1,
            profilePicture:'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
    ]
    return (
        <div className='comments'>
            <div className="write">
                <img src={require('../../assets/1.jpeg')} alt="" />
                <input type="text" placeholder='write a comment' />
                <button>Comment</button>
            </div>
            {comments.map((comment) => (
                <div className='comment'>
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments