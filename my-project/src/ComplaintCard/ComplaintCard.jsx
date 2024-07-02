import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ComplaintCard = ({ complaint }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/view-complaints/complaint/${complaint.id}`, { state: { complaint } });
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" alt="User" className="rounded-full w-8 h-8" />
                    <span className="text-gray-700 font-medium">{complaint.user}</span>
                    <span className="text-gray-500 text-sm">{complaint.time}</span>
                    <span className="text-gray-500 text-sm">{complaint.category}</span>
                    <span className={`${complaint.statusColor} text-sm`}>{complaint.status}</span>
                </div>
            </div>
            <h3 className="text-lg font-semibold mt-2">
                Complaints and Complaints about Old PT Operators Which Harm Lecturers' Rights
            </h3>
            <p className="text-gray-700 mt-2 cursor-pointer" onClick={handleNavigate}>
                I would like to report issues concerning the treatment of lecturers by old PT operators at this institution. There are several issues that have infringed upon our rights as lecturers, including reduced teaching privileges, delayed honorarium payments, and lack of transparency in academic policies affecting our overall working conditions.
            </p>
            <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-4 text-sm">
                    <button className="text-blue-600 flex items-center">
                        <FontAwesomeIcon icon={faComment} className="mr-1" />
                        Comment
                    </button>
                    <button className="text-blue-600 flex items-center">
                        <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                        Up Vote
                    </button>
                    <button className="text-blue-600 flex items-center">
                        <FontAwesomeIcon icon={faShare} className="mr-1" />
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComplaintCard;
