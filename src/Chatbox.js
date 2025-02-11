import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./style.css";

const socket = io("http://localhost:5000"); // Backend WebSocket connection

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");
    const [isOpen, setIsOpen] = useState(false); // State to toggle chatbox

    useEffect(() => {
        const name = prompt("Enter your name:") || "Guest";
        setUsername(name);

        socket.on("chat message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.off("chat message");
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const chatMessage = { user: username, text: message };
            socket.emit("chat message", chatMessage);
            setMessage("");
        }
    };

    return (
        <div>
            {/* Floating Chat Button */}
            <div className="chat-button" onClick={() => setIsOpen(!isOpen)}>
                💬
            </div>

            {/* Chat Box */}
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <h2>Live Chat</h2>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chat-box">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.user === username ? "my-message" : "other-message"}`}>
                                <strong>{msg.user}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={sendMessage} className="chat-form">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
