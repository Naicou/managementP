import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import CreateEventForm from './CreateEventForm'; // Import the CreateEventForm component
import api from '../api/api'; // Import your API module

const EventList = ({ currentUser }) => {
  const [events, setEvents] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchEvents = async () => {
    try {
      const fetchedEvents = await api.getEvents();
      setEvents(fetchedEvents);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDeleteEvent = (deletedEventId) => {
    const updatedEvents = events.filter(event => event.event_id !== deletedEventId);
    setEvents(updatedEvents);
  };

  const handleCreateFormToggle = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handleEventCreated = () => {
    fetchEvents();
    setShowCreateForm(false);
  };

  return (
    <div className="event-list">
      {showCreateForm ? (
        <CreateEventForm onEventCreated={handleEventCreated} />
      ) : (
        <button onClick={handleCreateFormToggle}>Create Event</button>
      )}

      {events.map(event => (
        <EventCard key={event.event_id} event={event} onDelete={handleDeleteEvent} currentUser={currentUser} />
      ))}
    </div>
  );
};

export default EventList;
