import { useEffect, useState } from 'react';
import cricketTeam from '../../cricket-team/cricket-team';
import Cricketer from '../Cricketer/Cricketer';
import SelectedCricketers from '../SelectedCricketers/SelectedCricketers';
import './Cricketers.css';

const Cricketers = () => {
    const [cricketers, SetCricketers] = useState([]);
    useEffect(() => {
        SetCricketers(cricketTeam);
    }, []);

    const [club, setClub] = useState([]);
    const handleSelect = (cricketer) => {
        const added = club.find(player => player.id === cricketer.id);
        const newClub = [...club, cricketer];
        !added && setClub(newClub);
        // const removeAdded = club.filter(player => player.id !== cricketer.id);
        // added ? setClub(removeAdded) : setClub(newClub);
    }

    return (
        <div className='d-flex flex-column-reverse flex-sm-row mt-5'>
            <div className="all-cricketers">
                {
                    cricketers.map(cricketer => <Cricketer cricketer={cricketer} handleSelect={handleSelect} key={cricketer.id} />)
                }
            </div>
            <div className='selected-cricketers'>
                <SelectedCricketers  club={club}/>
            </div>
        </div>
    );
};

export default Cricketers;