import React from 'react';
import Input from '../utils/input';
import TextArea from '../utils/textarea';
import Button from "../utils/Button";

const Experience = ({ id, experience, onChange, onDelete }) => {
    return(

                    <div className="personal-form">
                        <Input
                            onChange={(e) => onChange(e, id)}
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={experience.position}
                            className="personal-input"
                        />
                        <Input
                            onChange={(e) => onChange(e, id)}
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={experience.company}
                            className="personal-input"
                        />
                        <Input
                            onChange={(e) => onChange(e, id)}
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={experience.address}
                            className="personal-input"
                        />
                        <div className='input-row-div'>
                            <Input
                                onChange={(e) => onChange(e, id)}
                                type="text"
                                name="from"
                                placeholder="From"
                                value={experience.from}
                                className="personal-input"
                            />
                            <Input
                                onChange={(e) => onChange(e, id)}
                                type="text"
                                name="to"
                                placeholder="To"
                                value={experience.to}
                                className="personal-input"
                            />
                        </div>
                        <TextArea
                            onChange={(e) => onChange(e, id)}
                            name="description"
                            placeholder="Description"
                            value={experience.description}
                            className="experience-textarea"
                        />
                        <Button text="Delete this entry" onClick={() => onDelete(id)} className="personal-button delete-button"></Button>
                </div>

    )
}

export default Experience;