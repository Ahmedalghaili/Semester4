import React from 'react';

// Utility function to conditionally combine class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Function to determine the background color based on status
function getStatusBgColor(status) {
  switch (status) {
    case 'on-progress':
      return 'bg-black';
    case 'verified':
    case 'solved':
      return 'bg-gray-400';
    default:
      return 'bg-gray-400';
  }
}

// Function to determine if an event is active based on status
function isEventActive(status) {
  return status === 'on-progress';
}

// Functional component that renders a timeline with icons
function SimpleWithIcons({ timeline }) {
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
                      getStatusBgColor(event.status),
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    {isEventActive(event.status) ? (
                      <span className="block h-5 w-5 bg-black rounded-full" aria-hidden="true" />
                    ) : (
                      <span className="block h-5 w-5 bg-gray-400 rounded-full" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className={classNames("text-sm", isEventActive(event.status) ? "text-black" : "text-gray-500")}>
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

// Sample data for the timeline with status field
const timelineData = [
  {
    id: 1,
    content: 'The report is being verified',
    status: 'on-progress',
  },
  {
    id: 2,
    content: 'The problems in this report have been resolved by the relevant parties',
    status: 'verified',
  },
  {
    id: 3,
    content: 'Completed',
    status: 'solved',
  },
];

// Main application component
export default function App() {
  return <SimpleWithIcons timeline={timelineData} />;
}
