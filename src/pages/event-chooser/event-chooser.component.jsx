import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../../redux/event/event.actions";
import EventList from "../../components/event-list/event-list.component";
import { createStructuredSelector } from "reselect";
import { selectEvents } from "../../redux/event/event.selectors";
class EventBuilder extends Component {
  componentDidMount() {
    this.props.loadEvents();
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
  loadEvents: () => dispatch(loadEvents())
});
export default connect(mapStateToProps, mapDispatchToProps)(EventBuilder);
