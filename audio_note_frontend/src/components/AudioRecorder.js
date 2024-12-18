// src/components/AudioRecorder.js
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

const AudioRecorder = ({ setAudioBlob }) => {
    const [recording, setRecording] = useState(false);

    const startRecording = () => {
        setRecording(true);
    };

    const stopRecording = (recordedBlob) => {
        setRecording(false);
        setAudioBlob(recordedBlob.blob);
    };

    return (
        <div>
            <ReactMic
                record={recording}
                className="sound-wave"
                onStop={stopRecording}
                mimeType="audio/wav"
                strokeColor="#000000"
                backgroundColor="#FF4081"
            />
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
        </div>
    );
};

export default AudioRecorder;