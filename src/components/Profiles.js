import fakeUsers from '../apis/users.json';

export default function Profiles() {
    return (
        <div id="profiles">
            {
                fakeUsers.map((user) => {
                    const {image, username, id, age, location, online} = user;
                    return(
                        <div className="profile" key={id}>
                            <img src={image} width="640" height="360" alt="avatar" className="avatar" />
                            <div className={`userData ${online ? 'online' : ''}`}>
                                <p className="userName">{username}, <span className="age">{age}</span></p>
                                <small className="location">{location}</small>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
