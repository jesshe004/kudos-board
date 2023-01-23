import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/submit', { name, message });
            alert('Data saved successfully!');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input class = "nameTag" placeholder = "enter a name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <br />
                    <label className>
                        <textarea class = "messageTag" placeholder = "type out a kudos..." value={message} onChange={(event) => setMessage(event.target.value)} />
                    </label>
                    <br />
                    <button class = "submitButton" type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Home;
