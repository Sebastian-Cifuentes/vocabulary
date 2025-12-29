import { useForm } from 'react-hook-form';
import { PrimaryButton, Input } from '../../components';
import { useWordStore } from '../../hooks/useWordStore';
import { useGlobalErrorPopup } from '../../hooks/useGlobalErrorPopup';
import { usePopupStore } from '../../hooks';

export const AddWord = () => {
    // TODO: create a form component to handle and trigger events from the same input
    // TODO: inside that component have to render with a for inputs that comes from a JSON
    // TODO: create a structure to add new fields to the form with its own rules like validations and name inputs
    // TODO: also, if is a select, create options for its list and o]=ptions to link with the form

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { create, loading } = useWordStore();
    const { closePopup } = usePopupStore();
    useGlobalErrorPopup();

    const onSubmit = async (data: any) => {
        await create(data);
        closePopup();  
    };


    if (loading) return ( <>Loading...</> )

    return (
        <>
            <p className='mt-4'>This word will be added to your list to learn</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type='text' 
                    placeholder='Add a word' 
                    register={register}
                    rules={{
                        required: 'Add a word is required',
                        // pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                    }}
                    name='name'
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