import { useForm } from 'react-hook-form';
import { PrimaryButton, Input } from '../../components';

export const AddWord = () => {
    // TODO: create a form component to handle and trigger events from the same input
    // TODO: inside that component have to render with a for inputs that comes from a JSON
    // TODO: create a structure to add new fields to the form with its own rules like validations and name inputs
    // TODO: also, if is a select, create options for its list and options to link with the form

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log("Form data:", data);
        console.log('here i have to send info to the api');
    };

    return (
        <>
            <p className='mb-4'>This word will be added to your list to learn</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type='text' 
                    placeholder='Add a word' 
                    register={register}
                    rules={{
                        required: 'Add a word is required',
                        // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                    }}
                    name='word'
                    errors={errors}
                    />
            </form>
            {/* TODO: create a component that show only send buttons in forms */}
            <PrimaryButton
                type='submit'
                label='Save'
                clickFunction={handleSubmit(onSubmit)}
                />
        </>
    );
};