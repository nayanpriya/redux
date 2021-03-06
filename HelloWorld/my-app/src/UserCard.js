import React from 'react'

export default class UserCard extends React.Component {
    state = {
        name: "Alex Bakery",
        description: "Software Engineer, Speaker, and Occasional Model",
        likes: "Cats, Wine, and Black dresses",
        location: "localhost"
    };

    render() {
        const { name, description, likes, location } = this.state
        return (<div>
            <section className="user_img">
                <img src="https://image.ibb.co/jj1FGp/user.png" alt=""></img>
            </section>
            <section className="user_details">
                <p><span className="faint">I am</span> <span>{description}</span></p>
                <p><span className="faint">I like </span><span>{likes}</span></p>
                <p className="user_details_divider faint"></p>
                <p className="user_info_details faint">
                    <span>Name</span> <span>{name}</span>
                </p>
                <p className="user_info_details faint">
                    <span>location</span> <span>{location}</span>
                </p>
            </section>
        </div>)
    }



}