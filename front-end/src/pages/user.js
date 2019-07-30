import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Scream from "../components/Scream";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";
import StaticProfile from "../components/StaticProfile";
import ScreamSkeleton from "../components/ScreamSkeleton";
import ProfileSkeleton from "../components/ProfileSkeleton";

class User extends Component {
  state = {
    profile: null,
    handle: null,
    screamIdParam: null
  };

  componentDidMount() {
    const handle = this.props.match.params.handle; // Get user handle from the route parameter.
    const screamId = this.props.match.params.screamId; // This may or may not exist

    if (screamId) this.setState({ screamIdParam: screamId });

    this.props.getUserData(handle); // Sets the user's screams to the global state.
    this.setState({ handle });
    // The user profile is just static, so it doesn't need to be stored in
    // global state.
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { screams, loading } = this.props.data;
    const { handle, screamIdParam } = this.state;

    const screamsMarkup = loading ? (
      <ScreamSkeleton />
    ) : screams === null || screams.length === 0 ? (
      <p>No screams from {handle}</p>
    ) : !screamIdParam ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map(scream => {
        if (scream.screamId !== screamIdParam)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );

    const staticProfileMarkup = this.state.profile ? (
      <StaticProfile profile={this.state.profile} />
    ) : (
      <ProfileSkeleton />
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {staticProfileMarkup}
        </Grid>
      </Grid>
    );
  }
}

User.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(User);
