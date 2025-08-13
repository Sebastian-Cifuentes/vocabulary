import { useParams } from 'react-router-dom';
import { Title } from '../../components/Title';
import { HoverButton } from '../../components';
import './../../assets/components/ProgressWord.css'

export const ProgressWord = () => {
    
    const { id } = useParams();


    
    return (
        <>
            <Title title={`Bring ${id}`}/>
            <div className="main-progress flex">
                <div className="progress w-2/6 mt-4 p-5 bg-white rounded-lg">
                    <p className="percentage text-5xl font-semibold	text-blue-500 border-blue-400 border-8">60%</p>
                    <p className='w-2/4 mx-auto my-0 text-center font-semibold'>Progress of the word</p>

                    <p className='mt-5'>How many conversations have been - 40</p>
                    <p>How many successful exercise have been - 40</p>
                    <p>How many exercise to improve have been - 40</p>
                </div>
                <div className="exercises w-4/6 mt-4 ml-4 p-5 bg-white rounded-lg">
                    <HoverButton clickFunction={() => console.log('testing...')} label='Practice with a conversation' />
                    <HoverButton clickFunction={() => console.log('testing...')} label='Practice with a call' />
                    <HoverButton clickFunction={() => console.log('testing...')} label='View on practical phrases' />
                    <HoverButton clickFunction={() => console.log('testing...')} label='Definition' />
                </div>
            </div>
        </>
    );
};