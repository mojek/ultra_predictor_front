import React, { Component } from "react";
import { connect } from "react-redux";
import { load_event } from "../../redux/event/event.actions";
import EventList from "../../components/event-list/event-list.component";
import { createStructuredSelector } from "reselect";
import { selectEvents } from "../../redux/event/event.selectors";
class EventBuilder extends Component {
  componentDidMount() {
    this.props.load_events();
  }
  render() {
    const { events } = this.props;
    return <EventList events={events} />;
  }
}
const mapStateToProps = createStructuredSelector({
  events: selectEvents
});
const mapDispatchToProps = dispatch => ({
  load_events: () => dispatch(load_event())
});
export default connect(mapStateToProps, mapDispatchToProps)(EventBuilder);
