import React from "react";
import {getProfileStatus, getUser, savePhoto, saveProfile, updateProfileStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter-hoc";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUser(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.router.params.userId !== prevProps.router.params.userId)) {
            this.refreshProfile()
        }
    }

    render() {
        return <><Profile savePhoto={this.savePhoto} isOwner={!this.props.router.params.userId} {...this.props} /></>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUser, getProfileStatus, updateProfileStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer);