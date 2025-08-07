import { usePopupStore } from "../hooks";

export const Dialog = () => {

    const { closePopup, content, isOpen, title, size } = usePopupStore();

    const popupSize = {
        'large': 'w-10/12',
        'medium': 'w-6/12',
        'small': 'w-4/12',
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/75 flex items-start justify-center z-50 pt-44">
                <div className={`bg-white p-6 rounded shadow-lg ${popupSize[size]} relative`}>
                    {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                    <div>{content}</div>
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