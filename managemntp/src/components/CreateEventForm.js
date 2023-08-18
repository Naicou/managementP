import React, { useState } from 'react';
import api from '../api/api'; // Import your API module

const CreateEventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    event_name: '',
    description: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      await api.createEvent(formData);

      // Update the form data state and then notify the parent component
      setFormData({
        event_name: '',
        description: '',
        date: '',
        time: '',
      });

      onEventCreated(); // Notify the parent component
    } catch (error) {
      console.error('Error creating event', error);
    }
  };

  return (
    <div className="create-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        <label>
          Event Name:
          <input type="text" name="event_name" value={formData.event_name} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleInputChange} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
