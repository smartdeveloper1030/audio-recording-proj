// src/components/Notes/NoteList.js
import React, { useEffect, useState } from 'react';
import { getNotes } from '../../api';

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await getNotes(token);
                setNotes(response.data);
            } catch (error) {
                console.error('Error fetching notes: ', error);
            }
        };

        fetchNotes();
    }, [token]);

    return (
        <div>
            <h2>Your Notes</h2>
            {notes.map(note => (
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    {/* Add audio playback functionality here */}
                </div>
            ))}
        </div>
    );
};

export default NoteList;