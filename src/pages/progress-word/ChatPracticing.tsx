import { ArrowUp } from "lucide-react";

export const ChatPracticing = () => {

    const messages = [
        {
            message: 'Lorem ipsum.',
            from: 'user',
            className: 'w-7/12 mr-0 ml-auto bg-gray-200 rounded-l-xl'
        },
        {
            message: 'Lorem ipsum.',
            from: 'ai',
            className: 'w-7/12 mr-auto ml-0 bg-blue-500 rounded-r-xl text-white'
        },
        {
            message: 'Lorem ipsum.',
            from: 'user',
            className: 'w-7/12 mr-0 ml-auto bg-gray-200 rounded-l-xl'
        },
        {
            message: 'Lorem ipsum.',
            from: 'ai',
            className: 'w-7/12 mr-auto ml-0 bg-blue-500 rounded-r-xl text-white'
        },
        {
            message: 'Lorem ipsum.',
            from: 'user',
            className: 'w-7/12 mr-0 ml-auto bg-gray-200 rounded-l-xl'
        },
        {
            message: 'Lorem ipsum.',
            from: 'ai',
            className: 'w-7/12 mr-auto ml-0 bg-blue-500 rounded-r-xl text-white'
        }
    ];

    return (
        <>
            <div className="w-4/6 mx-auto">
                <div className="messages">
                    {messages.map(({message, from, className}) => (
                        <div className={`px-4 py-2 my-3 rounded-t-xl ${className}`}>
                            {message}
                        </div>
                    ))}
                </div>

                <div className="relative w-full mt-8">
                    <input
                        className="border bg-gray-100 rounded-2xl px-3 py-2 w-full outline-none"
                        placeholder="Ask anything"
                        type="" />
                    <ArrowUp className="w-7 h-7 text-gray-400 bg-white absolute right-3 top-2/4 -translate-y-1/2 p-1 rounded-full cursor-pointer" />
                </div>
            </div>
        </>
    );
};