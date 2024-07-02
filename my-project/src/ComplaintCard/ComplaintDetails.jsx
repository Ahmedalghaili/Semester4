import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';

const timeline = [
  {
    id: 1,
    content: 'The report is being verified',
    iconBackground: 'bg-black',
    isActive: true,
  },
  {
    id: 2,
    content: 'The report is being followed up by the relevant parties',
    iconBackground: 'bg-gray-400',
    isActive: false,
  },
  {
    id: 3,
    content: 'The problems in this report have been resolved by the relevant parties',
    iconBackground: 'bg-gray-400',
    isActive: false,
  },
  {
    id: 4,
    content: 'Completed',
    iconBackground: 'bg-gray-400',
    isActive: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SimpleWithIcons() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    {event.isActive ? (
                      <span className="block h-5 w-5 bg-black rounded-full" aria-hidden="true" />
                    ) : (
                      <span className="block h-5 w-5 bg-gray-400 rounded-full" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className={classNames("text-sm", event.isActive ? "text-black" : "text-gray-500")}>
                      {event.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ComplaintDetails = () => {
    const location = useLocation();
    const { complaint } = location.state;
    const [showProgress, setShowProgress] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, user: 'Saipul jamil', content: 'yayayaya saya setuju', date: '20-12-2024' },
        { id: 2, user: 'Lendra Churvanof', content: 'relate bgt!', date: '20-12-2024' },
        { id: 3, user: 'Kak Gem', content: 'kzl deh sama pemerintah yang gaperna peka sma warga nya sybul', date: '20-12-2024' },
    ]);
    const [newComment, setNewComment] = useState('');

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

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Complaint Details</h2>
                <div className="flex items-center space-x-2 mb-4">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" alt="User" className="rounded-full w-10 h-10" />
                    <div>
                        <span className="text-gray-700 font-medium">{complaint.user}</span>
                        <span className="text-gray-500 text-sm ml-2">{complaint.time}</span>
                        <span className="text-gray-500 text-sm ml-2">{complaint.category}</span>
                    </div>
                    <span className={`ml-4 ${complaint.statusColor} text-sm`}>{complaint.status}</span>
                </div>
                <span className="block text-gray-500 text-sm">Tracking ID: #{complaint.trackingId}</span>
                <h3 className="text-xl font-semibold mt-2">Road hole never been fixed over a decade!</h3>
                <p className="text-gray-700 mt-2">
                    I would like to report issues concerning the treatment of lecturers by old PT operators at this institution. There are several issues that have infringed upon our rights as lecturers, including reduced teaching privileges, delayed honorarium payments, and lack of transparency in academic policies affecting our overall working conditions.
                </p>
                <div className="mt-4">
                    <h4 className="text-gray-800 font-medium">Attached Files:</h4>
                    <div className="flex mt-2 space-x-2">
                        <img src="https://i.imgur.com/zQZSWrt.jpg" alt="Attached File" className="w-16 h-16 rounded" />
                        <img src="https://i.imgur.com/zQZSWrt.jpg" alt="Attached File" className="w-16 h-16 rounded" />
                        <img src="https://i.imgur.com/zQZSWrt.jpg" alt="Attached File" className="w-16 h-16 rounded" />
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
                            Up Vote
                        </button>
                        <button className="text-blue-600 flex items-center">
                            <FontAwesomeIcon icon={faShare} className="mr-1" />
                            Share
                        </button>
                    </div>
                </div>
                {showProgress && (
                    <div className="mt-4">
                        <h4 className="text-gray-800 font-medium">Monitor the progress of this report:</h4>
                        <SimpleWithIcons />
                    </div>
                )}
                {showComments && (
                    <div className="mt-4">
                        <h4 className="text-gray-800 font-medium">Please comment respectfully and courteously. Any offensive or inappropriate comments will be removed. Thank you for your understanding.</h4>
                        <div className="mt-2">
                            {comments.map(comment => (
                                <div key={comment.id} className="flex items-start space-x-2 mt-2">
                                    <div className="rounded-full bg-gray-200 w-8 h-8"></div>
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
