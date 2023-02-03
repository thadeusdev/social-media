import React from 'react'
import './stories.scss'

const Stories = () => {
    //Temporary
    const stories = [
        {
            id: 1,
            name: 'John Doe',
            img: 'https://img.freepik.com/free-photo/handsome-african-guy-with-happy-face-expression-supporting-his-friends-before-conference-indoor-portrait-work-team-young-international-specialists-preparing-meeting-with-chief_197531-3781.jpg?w=740&t=st=1675461659~exp=1675462259~hmac=cb4d528c1f1e23a58bb4e7e4c18f2b5ad2bf6cde35126e7feb0b05e5368ad5be'
        },
        {
            id: 2,
            name: 'John Doe',
            img: 'https://img.freepik.com/free-photo/blithesome-student-green-t-shirt-posing-with-laptop-indoor-photo-amazed-male-freelancer-isolated_197531-20164.jpg?w=740&t=st=1675461697~exp=1675462297~hmac=75d6d89e53882086b63286f738c901cc77d343e729c4b704b2b035edffd80b44'
        },
        {
            id: 3,
            name: 'John Doe',
            img: 'https://img.freepik.com/free-photo/wonderful-european-female-model-chilling-with-puppy-indoor-portrait-debonair-girl-enjoying-portraitshoot-with-her-cute-pet_197531-11031.jpg?w=740&t=st=1675461721~exp=1675462321~hmac=19d647c65c33cd6982f1ad312b01b69097cebda88d1c698bffc615193317d985'
        },
        {
            id: 4,
            name: 'John Doe',
            img: 'https://img.freepik.com/free-photo/winsome-beautiful-young-woman-posing-brown-wall-close-up-shot-wonderful-brunette-girl_197531-13994.jpg?t=st=1675450115~exp=1675450715~hmac=4467a399754b034b1766aed203a8cef35ca21e9a1aef1ebe0bf9f69ced1ca52d'
        },
        {
            id: 5,
            name: 'John Doe',
            img: 'https://img.freepik.com/free-photo/pretty-smiling-woman-street-with-flowers_197531-33103.jpg?t=st=1675450116~exp=1675450716~hmac=7c82ad4caf0621bdc84cac5686d3992103896620bad264337fe274a1ad321724'
        }
    ]

  return (
    <div className='stories'>
        {/* user */}
            <div className="story">
                <img src={require('../../assets/4.jpeg')} alt="" />
                <span>John Doe</span>
                <button>+</button>
            </div>
        {/* others/friends */}
        {stories.map((story) => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories