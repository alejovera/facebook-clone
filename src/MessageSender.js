import React, { useState } from 'react';
import './MessageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmojiIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';



function MessageSender() {

    const [{ user , dispatch}] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setImageUrl('');
        setInput('');
    }
    
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Qué estás pensando? ${user.displayName}`} 
                        className="messageSender__input" 
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="URL de imagen (opcional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Publicar
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Video en Vivo</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Foto/Video</h3>
                </div>
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'orange' }} />
                    <h3>Sentimiento/Actividad</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
