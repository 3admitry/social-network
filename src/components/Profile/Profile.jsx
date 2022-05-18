import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo profile={props.userProfile}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;