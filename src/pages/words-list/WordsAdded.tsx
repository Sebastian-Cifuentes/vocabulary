import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useNavigate } from 'react-router-dom';
import { HoverButton } from '../../components/HoverButton';
import { useWordStore } from '../../hooks/useWordStore';

export const WordsAdded = () => {

    const navigate = useNavigate();

    const { words } = useWordStore();

    const navigateTo = (id: number) => {
        navigate(`/progress-word/${id}`);
    };

    return (
        <>
            <p className="text-lg">Select a word to start practice:</p>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {words.map((word: any) => 
                    <div key={word.id}>
                        <HoverButton key={word.id} clickFunction={() => navigateTo(1)} label={word.name} />
                    </div>
                )}
            </div>
        </>
    );
};