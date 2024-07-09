import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
import SimpleWithIcons from './SimpleWithIcons';

const ComplaintDetails = () => {
    const { id } = useParams();
    const [complaint, setComplaint] = useState(null);
    const [showProgress, setShowProgress] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get(`http://localhost/semester4/my-project/src/ComplaintCard/fetch_complaint.php?id=${id}`)
            .then(response => {
                setComplaint(response.data);
                setComments(response.data.comments); // Assuming comments are part of the response
            })
            .catch(error => {
                console.error("There was an error fetching the complaint data!", error);
            });
    }, [id]);

    const toggleProgress = () => {
        setShowProgress(!showProgress);
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                user: 'Anonymous', // Replace with actual user data
                content: newComment,
                date: new Date().toLocaleDateString(),
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    };

    if (!complaint) {
        return <div>Loading...</div>;
    }

    // Update the base URL to match your server configuration
    const baseURL = "http://localhost/semester4/my-project/src/Report/";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Complaint Details</h2>
                <div className="flex items-center space-x-2 mb-4">
                    <div>
                        <span className="text-gray-700 font-medium">{complaint.user_name}</span>
                        <span className="text-gray-500 text-sm ml-2">{new Date(complaint.created_at).toLocaleString()}</span>
                        <span className="text-gray-500 text-sm ml-2">{complaint.category}</span>
                    </div>
                    <span className={`ml-4 ${complaint.state} text-sm`}>{complaint.state}</span>
                </div>
                <h3 className="text-xl font-semibold mt-2">{complaint.title}</h3>
                <p className="text-gray-700 mt-2">{complaint.description}</p>
                <div className="mt-4">
                    <h4 className="text-gray-800 font-medium">Attached Files:</h4>
                    <div className="flex mt-2 space-x-2">
                        {complaint.attached_files.map((file, index) => (
                            <img key={index} src={`${baseURL}${file}`} alt="Attached File" className="w-16 h-16 rounded" />
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-4 text-sm">
                        <button onClick={toggleProgress} className="text-blue-600 flex items-center">
                            Progress
                        </button>
                        <button onClick={toggleComments} className="text-blue-600 flex items-center">
                            <FontAwesomeIcon icon={faComment} className="mr-1" />
                            Comment
                        </button>
                        <button className="text-blue-600 flex items-center">
                            <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                            Up Vote <span className="ml-1">{complaint.likes}</span>
                        </button>
                      
                    </div>
                </div>
                {showProgress && (
                    <div className="mt-4">
                        The State is:{complaint.state}  
                    </div>
                )}
                {showComments && (
                    <div className="mt-4">
                        <h4 className="text-gray-800 font-medium">Please comment respectfully and courteously. Any offensive or inappropriate comments will be removed. Thank you for your understanding.</h4>
                        <div className="mt-2">
                            {comments.map(comment => (
                                <div key={comment.id} className="flex items-start space-x-2 mt-2">
                                    <div>
                                        <span className="block font-medium">{comment.user}</span>
                                        <span className="block text-gray-700">{comment.content}</span>
                                        <span className="block text-gray-500 text-sm">{comment.date}</span>
                                    </div>
                                </div>
                            ))}
                            <form onSubmit={handleCommentSubmit} className="mt-4">
                                <textarea
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    rows="3"
                                    placeholder="Your Comment"
                                    value={newComment}
                                    onChange={handleCommentChange}
                                />
                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-2">
                                    Send Comment
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default ComplaintDetails;
