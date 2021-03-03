import React, { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from '../config';


function CitySelector() {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);

    const onSearch = () => {
        fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`)
            .then((response) => response.json())
            .then((result) => console.log(result));
    }
    return (
        <div>
            <Row>
                <Col>
                    <h1>Search your city</h1>
                </Col>
            </Row>

            <Row>
                {/* xs={4} takes the one third  of the page*/}
                <Col xs={4} className="text-center">
                    <FormControl
                        placeholder="Enter city"
                        // update city value with the user's input
                        onChange={(event) => setCity(event.target.value)}
                        // value will be the currently selected city
                        value={city}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* event handler for button click */}
                    <Button onClick={onSearch}>Check Weather</Button>
                </Col>
            </Row>


        </div>

    );
};

export default CitySelector;