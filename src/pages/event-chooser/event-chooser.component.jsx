import React, { Component } from "react";
import { connect } from "react-redux";
import { load_event } from "../../redux/event/event.actions";
import EventList from "../../components/event-list/event-list.component";
class EventBuilder extends Component {
  
  componentDidMount() {
    this.props.load_events();
  }
  render() {
    return <EventList events={this.props.events} />;
  }
}
const mapStateToProps = state => ({
  events: state.events
});
const mapDispatchToProps = dispatch => ({
  load_events: () => dispatch(load_event())
});
export default connect(mapStateToProps, mapDispatchToProps)(EventBuilder);
