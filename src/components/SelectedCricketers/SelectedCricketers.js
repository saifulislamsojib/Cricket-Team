import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SelectedCricketers = ({club}) => {
    const totalSalary = club.reduce((total, cricketer) => total + cricketer.salary, 0 );

    return (
        <div className="text-center">
            <h2>Selected Cricketers</h2>
            <h3>Total selected: {club.length}</h3>
            <h4>Total Salary: ${totalSalary}</h4>
            <h5 className="mt-5">Selected Cricketers Name:</h5>
            <ol>
                {
                    club.map(cricketer=> <li key={cricketer.id}><FontAwesomeIcon className="text-primary mr-2" icon={faCheckCircle} /> {cricketer.name}</li> )
                }
            </ol>
        </div>
    );
};

export default SelectedCricketers;