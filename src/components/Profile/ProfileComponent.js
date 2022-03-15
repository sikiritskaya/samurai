import { connect } from "react-redux";
import { setProfile } from "../../redux/profilepage_reducer";
import React from "react";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    return <WrappedComponent {...props }
    params = { params }
    />;
};
class ProfileCont extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const getProfile = async() => {
            let userId = this.props.params.userId;
            if (!userId) {
                userId = 2;
            }
            let URL_PROFILE =
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
            const res = await fetch(URL_PROFILE);
            const data = await res.json();
            console.log(data);
            this.props.setProfile(data);
        };
        getProfile();
    }
    render() {
        return <Profile {...this.props }
        profile = { this.props.profile }
        />;
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

let WithUrlProfile = withRouter(ProfileCont);
const ProfileComponent = connect(mapStateToProps, {
    setProfile,
})(WithUrlProfile);

export default ProfileComponent;