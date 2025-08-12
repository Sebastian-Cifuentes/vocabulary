import { useParams } from 'react-router-dom';
import { Title } from '../../components/Title';
import { HoverButton } from '../../components';
export const ProgressWord = () => {
    
    const { id } = useParams();


    
    return (
        <>
            <Title title={`Bring ${id}`}/>
            <div className="main-progress">
                <div className="progress">
                    <p className="percentage">60%</p>
                    <p>How many conversations have been - 40</p>
                    <p>How many successful exercise have been - 40</p>
                    <p>How many exercise to improve have been - 40</p>
                </div>
                <div className="exercises">
                    <HoverButton clickFunction={() => console.log('testing...')} label='Practice with a conversation' />
                    <HoverButton clickFunction={() => console.log('testing...')} label='Practice with a call' />
                    <HoverButton clickFunction={() => console.log('testing...')} label='View on practical phrases' />
                    <HoverButton clickFunction={() => console.log('testing...')} label='Definition' />
                </div>
            </div>
        </>
    );
};