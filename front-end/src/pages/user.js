import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Scream from "../components/Scream";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";
import StaticProfile from "../components/StaticProfile";

class User extends Component {
  state = {
    profile: null,
    handle: null
  };

  componentDidMount() {
    const handle = this.props.match.params.handle; // Get user handle from the route parameter.
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
    const { handle } = this.state;

    const screamsMarkup = loading ? (
      <p>Loading data...</p>
    ) : screams === null ? (
      <p>No screams from {handle}</p>
    ) : (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    );

    const staticProfileMarkup = this.state.profile ? (
      <StaticProfile profile={this.state.profile} />
    ) : (
      <p>Loading profile...</p>
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
