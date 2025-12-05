import { Title, PrimaryButton, Dialog } from '../../components';
import { usePopupStore } from '../../hooks';
import { WordsAdded } from './WordsAdded';
export const WordsList = () => {

    const { openPopup } = usePopupStore();
    const words = ['bring'];

    return (
        <>
            <div className="flex justify-between">
                <Title title='Words list' />
                <PrimaryButton
                    clickFunction={() => openPopup({title: 'Add a new word to learn', type: 'add-word', size: 'small'})}
                    label='Add word'
                    type='button'/>
            </div>
            {words.length === 0 
            ? (<div className="body mt-5">
                <p>No words added</p>
              </div>)
            : (<WordsAdded />)
            }
            
            <Dialog />
        </>
    );
};