import React, { useState, useEffect } from "react";
import * as service from "./omdb-service";
import { useParams } from "react-router-dom";

function ProfilePublic() {

    const {profileId} = useParams();
    const [peopleThatFollowMe, setPeopleThatFollowMe] = useState();
    const handleFollow = async () => {
        try {
            await service.createFollow(profileId);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPeopleThatFollowMe = async () => {
        const people = await service.findFollowsByFollowed(profileId);
        setPeopleThatFollowMe(people);
    };

    useEffect(() => {
        fetchPeopleThatFollowMe();
    }, []);

    return (
        <div>
            <h1>Profile Public {profileId}</h1>
            <button onClick={handleFollow}>Follow</button>
                {peopleThatFollowMe && (
                    <div>
                        <h2> People that follow me</h2>
                        <div className="list-group">
                            {peopleThatFollowMe.map((person) => (
                                <div className="list-group-item">{person.follower.username}</div>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ProfilePublic;