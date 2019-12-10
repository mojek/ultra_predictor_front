import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../../redux/event/event.actions";
import EventList from "../../components/event-list/event-list.component";
import { createStructuredSelector } from "reselect";
import { selectEvents,selectEventLoadingStatus } from "../../redux/event/event.selectors";
import WithSpinner from "./../../components/with-spinner/with-spinner.component"
 
const EventsWithSpinner  = WithSpinner(EventList)
class EventBuilder extends Component {

  componentDidMount() {
    this.props.loadEvents();
this.setState({loading:false})
    
  }

  render() {
    const { events, selectEventLoadingStatus } = this.props;
    return <EventsWithSpinner isLoading={selectEventLoadingStatus} events={events} />;
  }
}
const mapStateToProps = createStructuredSelector({
  events: selectEvents,
  selectEventLoadingStatus: selectEventLoadingStatus
});
const mapDispatchToProps = dispatch => ({
  loadEvents: () => dispatch(loadEvents())
});
export default connect(mapStateToProps, mapDispatchToProps)(EventBuilder);
