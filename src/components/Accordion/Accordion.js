import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from "react-icons/fi";
import { Data } from './Data';

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background-color: #e7e7e7;
    `;

const Container = styled.div`
    max-width: clamp(60%, 90vw, 900px);
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
    background-color: mediumseagreen;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;
    h1 {
        padding: 20px 10px;
        font-size: 2rem;
    }
    span {
        margin-right: 1.5rem;
    }
`;

const DropDown = styled.div`
    background: #1c1c1c;
    color: #00ffb9;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;

    p {
        font-size: 1.5rem
    }
`;

const Accordion = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <IconContext.Provider value={{ color: '#00ffB9', size: "25px" }}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <DropDown>
                                        <p>{item.answer}</p>
                                    </DropDown>
                                ) : null}
                            </div>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;