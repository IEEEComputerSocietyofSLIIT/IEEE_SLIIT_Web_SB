
import { useState } from 'react'
import React from 'react'
import axios from 'axios'

export const Eventform = () => {
  const [eventData, setEventData] = useState({
    eventDate: '',
    startTime: '',
    eventName: '',
    description: '',
    imageFiles: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(eventData);
    try {
      // Prepare the request payload
      const formData = new FormData();
      formData.append('eventDate', eventData.eventDate);
      formData.append('startTime', eventData.startTime);
      formData.append('eventName', eventData.eventName);
      formData.append('description', eventData.description);

      // Append each image file to FormData
     for (let i = 0; i < eventData.imageFiles.length; i++) {
       formData.append('images', eventData.imageFiles[i]);
       console.log(eventData.imageFiles[i])
      }


      console.log(formData.get('images'));

      // Make Axios POST request to the backend API endpoint
      const response = await axios.post('http://localhost:3001/event_api/createEvent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Clear the form after successful submission
      setEventData({
        eventDate: '',
        startTime: '',
        eventName: '',
        description: '',
        imageFiles: [],
      });

      console.log('Data stored successfully', response.data);
      alert('Event data added successfully!');
    } catch (error) {
      console.error('Error submitting event data:', error.message);
    }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    const scaledImages = [];

    for (const file of files) {
      const reader = new FileReader();

      const fileReadPromise = new Promise((resolve, reject) => {
        reader.onload = async (event) => {
          const img = new Image();
          img.src = event.target.result;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Calculate scaled dimensions while preserving aspect ratio
            let width = img.width;
            let height = img.height;
            const aspectRatio = width / height;
            const maxDimension = 500; // Maximum dimension (width or height)

            if (width > maxDimension || height > maxDimension) {
              if (aspectRatio > 1) {
                width = maxDimension;
                height = maxDimension / aspectRatio;
              } else {
                height = maxDimension;
                width = maxDimension * aspectRatio;
              }
            }

            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Draw image on canvas with improved quality
            ctx.drawImage(img, 0, 0, width, height);

            // Convert canvas to blob with higher quality
            canvas.toBlob(
              (blob) => {
                resolve(blob);
              },
              file.type,
              1
            ); // Set quality to 1 for maximum quality
          };
        };

        reader.readAsDataURL(file);
      });

      const resizedImageBlob = await fileReadPromise;
      const resizedImageFile = new File([resizedImageBlob], file.name, {
        type: file.type,
      });
      scaledImages.push(resizedImageFile);
    }

    setEventData((prevData) => ({
      ...prevData,
      imageFiles: scaledImages,
    }));
  };



  return (
    <div className='eventform'>
      <h3>Event Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={eventData.eventDate}
          onChange={(e) => setEventData({ ...eventData, eventDate: e.target.value })}
          required
        />

        <label htmlFor="startTime">Event Starting Time</label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          value={eventData.startTime}
          onChange={(e) => setEventData({ ...eventData, startTime: e.target.value })}
          required
        />

        <label htmlFor="eventName">Event Title</label>
        <input
          type='text'
          id='eventName'
          placeholder='Enter Event Title'
          value={eventData.eventName}
          onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })}
          required
        />

        <label htmlFor="description">Event Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter event description..."
          value={eventData.description}
          onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
          required
        />

        <label htmlFor="image">Upload Images (max 4)</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

