import React from 'react'
import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
  // Temporary
  const posts = [
    {
      id: 1,
      name: 'john Doe',
      userId: 1,
      profilePic: 'https://img.freepik.com/free-photo/interested-woman-posing-sunglasses_197531-13203.jpg?t=st=1675450115~exp=1675450715~hmac=61a856d5da43624445d9bdc2fe434b699fc36dc8498bd01cb4a18c23e93639fb',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse quia distinctio.',
      img: 'https://img.freepik.com/free-photo/fulllength-shot-surprised-caucasian-woman-party-outfit-stunning-ginger-girl-red-dress-expressing-happiness_197531-26124.jpg?w=740&t=st=1675466284~exp=1675466884~hmac=10e338b7fe67bd030a614e9ade705766b043aee28a5aad6493b3ec4b807a0899'
    },
    {
      id: 2,
      name: 'john Doe',
      userId: 2,
      profilePic: 'https://img.freepik.com/free-photo/interested-woman-posing-sunglasses_197531-13203.jpg?t=st=1675450115~exp=1675450715~hmac=61a856d5da43624445d9bdc2fe434b699fc36dc8498bd01cb4a18c23e93639fb',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur ipsum aspernatur possimus.',
      img: 'https://img.freepik.com/free-photo/medium-shot-man-holding-bottle_23-2149220912.jpg'
    },
  ]
  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts