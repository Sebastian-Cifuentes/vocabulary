import { useForm } from 'react-hook-form';
import { Input } from '../../components/form/Input';
export const AddWord = () => {
    // TODO: create a form component to handle and trigger events from the same input
    // TODO: inside that component have to render with a for inputs that comes from a JSON
    // TODO: create a structure to add new fields to the form with its own rules like validations and name inputs
    // TODO: also, if is a select, create options for its list and options to link with the form

    const { register } = useForm();


    return (
        <>
            <p className='mb-4'>This word will be added to your list to learn</p>
            <Input 
                type='text' 
                placeholder='Add a word' 
                register={register} />
        </>
    );
};