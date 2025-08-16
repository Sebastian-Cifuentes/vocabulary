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
            className: 'w-7/12 mr-auto ml-0 bg-blue-300 rounded-r-xl'
        },
        {
            message: 'Lorem ipsum.',
            from: 'user',
            className: 'w-7/12 mr-0 ml-auto bg-gray-200 rounded-l-xl'
        },
        {
            message: 'Lorem ipsum.',
            from: 'ai',
            className: 'w-7/12 mr-auto ml-0 bg-blue-300 rounded-r-xl'
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
                {/* <input type="" /> */}
            </div>
        </>
    );
};