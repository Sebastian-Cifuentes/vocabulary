import { Title, PrimaryButton, Dialog } from '../../components';
import { usePopupStore } from '../../hooks';
export const WordsList = () => {

    const { openPopup } = usePopupStore();

    return (
        <>
            <div className="flex justify-between">
                <Title title='Words list' />
                <PrimaryButton
                    clickFunction={() => openPopup({title: 'Add a new word to learn', content: '', size: 'small'})}
                    name='Add word' />
            </div>
            <div className="body mt-5">
                <p>No words added</p>
            </div>
            <Dialog />
        </>
    );
};