import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Cricketer.css';

const Cricketer = ({cricketer, handleSelect}) => {

    const {name, img,role, battingStyle, salary } = cricketer;

    return (
        <div className="cricketer d-flex flex-column flex-lg-row align-items-center">
            <div>
                <Image className="cricketer-img" src={img} alt=""thumbnail rounded fluid />
            </div>
            <div className="ml-lg-5">
                <h3 className="mb-4">Name: {name}</h3>
                <h5>Role: {role}</h5>
                <h5>Batting Style: {battingStyle}</h5>
                <h5 className="mb-4">Salary: $ {salary}</h5>
                <Button onClick={() => handleSelect(cricketer)} variant="primary"><FontAwesomeIcon className=" mr-2" icon={faCheckCircle} /> Select</Button>
            </div>

        </div>
    );
};

export default Cricketer;