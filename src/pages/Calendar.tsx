import {
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Clock,
    MapPin,
    Globe,
    Video,
    AlertCircle,
    Paperclip,
    Bell,
    Users
} from 'lucide-react';
import {CalendarEvent, EventType, EventLocation, eventTypeColors} from '../types/calendar';
import {useState} from "react";
import {mockCalendarEvents} from "@/data/calendarEvents.ts";

export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const getEventsForDate = (date: number) => {
        return mockCalendarEvents.filter(event => {
            const eventDate = new Date(event.startDate);
            return (
                eventDate.getDate() === date &&
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear()
            );
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const LocationInfo = ({ location }: { location: EventLocation }) => {
        const icons = {
            physical: <MapPin className="h-4 w-4" />,
            virtual: <Video className="h-4 w-4" />,
            hybrid: <Globe className="h-4 w-4" />
        };

        return (
            <div className="flex items-start gap-2 text-sm text-gray-400">
                {icons[location.type]}
                <div className="flex flex-col">
                    <span>{location.name}</span>
                    {location.roomNumber && (
                        <span className="text-xs">Room: {location.roomNumber}</span>
                    )}
                    {location.floor && (
                        <span className="text-xs">{location.floor}</span>
                    )}
                    {location.meetingLink && (
                        <a
                            href={location.meetingLink}
                            className="text-blue-400 hover:text-blue-300 text-xs mt-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join Meeting
                        </a>
                    )}
                </div>
            </div>
        );
    };

    const EventCard = ({ event }: { event: CalendarEvent }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${eventTypeColors[event.type]}`} />
                            <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400">{event.description}</p>
                    </div>
                    <button
                        onClick={() => setSelectedEvent(null)}
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        ×
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Time and Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <div>
                            <div>{formatDate(event.startDate)}</div>
                            <div>
                                {formatTime(event.startDate)}
                                {event.endDate && ` - ${formatTime(event.endDate)}`}
                                {event.allDay && ' (All day)'}
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    {event.location && <LocationInfo location={event.location} />}

                    {/* Priority and Status */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <AlertCircle className="h-4 w-4 text-gray-400" />
                            <span className={`capitalize ${
                                event.priority === 'high' ? 'text-red-400' :
                                    event.priority === 'medium' ? 'text-yellow-400' :
                                        'text-green-400'
                            }`}>
                {event.priority} Priority
              </span>
                        </div>
                        <div className="text-sm text-gray-400 capitalize">
                            Status: {event.status}
                        </div>
                    </div>

                    {/* Participants */}
                    {event.participants && event.participants.length > 0 && (
                        <div className="border-t border-gray-700 pt-4">
                            <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Participants
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                                {event.participants.map(participant => (
                                    <div
                                        key={participant.id}
                                        className="text-sm text-gray-300 flex items-center justify-between bg-gray-700 p-2 rounded"
                                    >
                                        <div>
                                            <div>{participant.name}</div>
                                            <div className="text-xs text-gray-400">{participant.role}</div>
                                        </div>
                                        {participant.response && (
                                            <span className={`text-xs px-2 py-1 rounded ${
                                                participant.response === 'accepted' ? 'bg-green-900 text-green-300' :
                                                    participant.response === 'declined' ? 'bg-red-900 text-red-300' :
                                                        'bg-yellow-900 text-yellow-300'
                                            }`}>
                        {participant.response}
                      </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Attachments */}
                    {event.attachments && event.attachments.length > 0 && (
                        <div className="border-t border-gray-700 pt-4">
                            <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                                <Paperclip className="h-4 w-4" />
                                Attachments
                            </h4>
                            <div className="space-y-2">
                                {event.attachments.map(attachment => (
                                    <a
                                        key={attachment.id}
                                        href={attachment.url}
                                        className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2"
                                    >
                                        {attachment.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reminder */}
                    {event.reminder && (
                        <div className="border-t border-gray-700 pt-4 flex items-center gap-2">
                            <Bell className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-400">
                Reminder set for {event.reminder.timing} minutes before
                ({event.reminder.type})
              </span>
                        </div>
                    )}

                    {/* Metadata */}
                    <div className="border-t border-gray-700 pt-4 text-xs text-gray-500">
                        <div>Created by {event.metadata.createdBy}</div>
                        <div>Last modified: {new Date(event.metadata.lastModified).toLocaleString()}</div>
                        {event.metadata.recurrence !== 'none' && (
                            <div className="mt-1">
                                Recurrence: {event.metadata.recurrence}
                                {event.metadata.nextOccurrence &&
                                    ` (Next: ${new Date(event.metadata.nextOccurrence).toLocaleDateString()})`
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6 bg-gray-900 p-6 rounded-lg relative">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <CalendarIcon className="h-6 w-6" />
                    HR Calendar
                </h1>
                <div className="flex items-center gap-4">
                    <button
                        onClick={previousMonth}
                        className="p-2 hover:bg-gray-700 rounded-full"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-400" />
                    </button>
                    <h2 className="text-lg font-semibold text-white">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h2>
                    <button
                        onClick={nextMonth}
                        className="p-2 hover:bg-gray-700 rounded-full"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div
                        key={day}
                        className="text-gray-400 text-sm font-medium p-2 text-center"
                    >
                        {day}
                    </div>
                ))}

                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} className="p-2" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                    const date = index + 1;
                    const events = getEventsForDate(date);
                    const isToday =
                        date === new Date().getDate() &&
                        currentDate.getMonth() === new Date().getMonth() &&
                        currentDate.getFullYear() === new Date().getFullYear();

                    return (
                        <div
                            key={date}
                            className={`min-h-24 p-2 border border-gray-800 rounded-lg ${
                                isToday ? 'bg-gray-800' : 'hover:bg-gray-800'
                            }`}
                        >
                            <div className="text-sm text-gray-400">{date}</div>
                            <div className="mt-1 space-y-1">
                                {events.map((event) => (
                                    <button
                                        key={event.id}
                                        onClick={() => setSelectedEvent(event)}
                                        className="w-full text-left"
                                    >
                                        <div className="flex items-center gap-1 group hover:bg-gray-700 p-1 rounded">
                                            <div className={`w-2 h-2 rounded-full ${eventTypeColors[event.type]}`} />
                                            <div className="text-xs text-gray-300 truncate">
                                                {event.title}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
                {(Object.keys(eventTypeColors) as EventType[]).map(type => (
                    <div key={type} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${eventTypeColors[type]}`} />
                        <span className="text-sm text-gray-400 capitalize">{type}</span>
                    </div>
                ))}
            </div>

            {selectedEvent && <EventCard event={selectedEvent} />}
        </div>
    );
};

export default Calendar;