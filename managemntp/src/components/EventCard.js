import React from 'react';

const EventCard = ({ event, onDelete, currentUser }) => {
  const canDelete = currentUser === event.creator_id;

  const handleDeleteClick = async () => {
    if (canDelete) {
      try {
        const response = await fetch('http://localhost/php/deleteCard.php', { // Update the URL
          method: 'POST', // Use POST method for deleteCard.php
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ event_id: event.event_id }), // Send the event_id to delete
        });

        if (response.ok) {
          onDelete(event.event_id); // Update the event list after deletion
        }
      } catch (error) {
        console.error('Error deleting event', error);
      }
    } else {
      console.log("You don't have permission to delete this event.");
    }
  };

  return (
    <div className="event-card">
      <h3>{event.event_name}</h3>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      {canDelete && <button onClick={handleDeleteClick}>Delete</button>}
    </div>
  );
};

export default EventCard;
