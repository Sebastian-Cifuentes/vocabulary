import { usePopupStore } from "../hooks";
import { AddWord } from "../pages/words-list/AddWord";

export const Dialog = () => {

    const { closePopup, type, isOpen, title, size, error } = usePopupStore();

    const popupSize = {
        'large': 'w-10/12',
        'medium': 'w-6/12',
        'small': 'w-4/12',
    };

    const content: Record<string, React.ComponentType<any>> = {
        'add-word': AddWord,
    }

    const Content = content[type];
    
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/75 flex items-start justify-center z-50 pt-32">
                <div className={`bg-white p-6 rounded shadow-lg ${popupSize[size]} relative`}>
                    {title && <h2 className="text-xl font-semibold mb-1">{title}</h2>}
                    {error && <p className="error p-1 rounded" style={{ background: '#ff5151', color: 'white' }}>{ error }</p>}
                    <div><Content /></div>
                    <button
                        onClick={() => closePopup()}
                        className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        >
                        ✕
                    </button>
                </div>
            </div>
        </>
    );
};