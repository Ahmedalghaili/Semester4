import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ComplaintCard = ({ complaint }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/view-complaints/complaint/${complaint.id}`, { state: { complaintId: complaint.id } });
    };

    // Update the base URL to match your server configuration
    const baseURL = "http://localhost/semester4/my-project/src/uploads/";

    return (
        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={`${baseURL}${complaint.user_photo}`} alt="User" className="rounded-full w-10 h-10" />
                    <span className="text-gray-700 font-medium">{complaint.user_name}</span>
                    <span className="text-gray-500 text-sm">{new Date(complaint.created_at).toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">{complaint.category}</span>
                    <span className={`${complaint.state} text-sm`}>{complaint.state}</span>
                </div>
            </div>
            <h3 className="text-lg font-semibold mt-2">{complaint.title}</h3>
            <p className="text-gray-700 mt-2 cursor-pointer" onClick={handleNavigate}>
                {complaint.description}
            </p>
            <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-4 text-sm">
                    <button className="text-blue-600 flex items-center">
                        <FontAwesomeIcon icon={faComment} className="mr-1" />
                        Comment
                    </button>
                    <button className="text-blue-600 flex items-center">
                        <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                        Up Vote <span className="ml-1">{complaint.likes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComplaintCard;
