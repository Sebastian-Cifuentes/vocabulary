import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export const WordsAdded = () => {

    const words = ['Bring', 'Talk', 'Bag', 'Floor', 'Float', 'Plug', 'Screen'];

    return (
        <>
            <p className="text-lg">Select a word to start practice:</p>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {words.map(word => 
                <div>
                    <Tippy
                        content={
                        <button onClick={() => alert('Button clicked!')}>
                            Click Me
                        </button>
                        }
                        interactive={true}
                        placement="right"
                        animation="scale"
                    >
                        <p className="font-semibold hover:bg-gray-200 cursor-pointer w-fit rounded-md px-5 py-2">{word}</p>
                    </Tippy>
                </div>
                )}
            </div>
        </>
    );
};