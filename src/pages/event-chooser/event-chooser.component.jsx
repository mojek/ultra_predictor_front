import React from "react";
import EventList from "../../components/event-list/event-list.component";
import { useSelector, useDispatch } from "react-redux";
import {load_event} from  '../../redux/actions'

const EventBuilder = () => {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch()
  return (
    <div>
      <EventList events={events} />
      <button onClick={() => dispatch(load_event())}>Load events</button>
    </div>
  );
};

export default EventBuilder;
