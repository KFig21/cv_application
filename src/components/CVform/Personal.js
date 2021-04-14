import React from 'react';
import Input from '../utils/input';
import Photo from '../utils/Photo';

const Personal = ({ personal, onChange }) => {
    return(
        <div className="personal-div">
            <div className="personal-form">
                <h2 className='personal-title'>Personal Information</h2>
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={personal.firstName}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={personal.lastName}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="currentRole"
                        placeholder="Current role"
                        value={personal.currentRole}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="address1"
                        placeholder="Address 1"
                        value={personal.address1}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="address2"
                        placeholder="Address 2"
                        value={personal.address2}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={personal.phone}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={personal.email}
                        className="personal-input"
                    />
                    <Photo
                        onChange={(e) => onChange(e)}
                        type="file"
                        name="photo"
                        value={personal.photo}
                        className="photo-input"
                    />
            </div>
        </div>
    )
}

export default Personal;