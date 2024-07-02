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

export default function SimpleWithIcons() {
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
