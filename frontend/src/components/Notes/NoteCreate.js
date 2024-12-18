// src/components/Notes/NoteCreate.js
import React, { useState } from 'react';
import { createNote } from '../../api';
import AudioRecorder from '../AudioRecorder';

const NoteCreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [audioBlob, setAudioBlob] = useState(null);
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const noteData = { title, description, audio: audioBlob };
        try {
            await createNote(noteData, token);
            // Redirect or update the UI as needed
        } catch (error) {
            console.error('Error creating note: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <AudioRecorder setAudioBlob={setAudioBlob} />
            <button type="submit">Create Note</button>
        </form>
    );
};

export default NoteCreate;