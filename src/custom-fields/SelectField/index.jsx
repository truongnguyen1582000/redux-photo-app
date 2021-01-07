import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

function SelectField(props) {
    const {field,
        type, label, placeholder, disabled, options
    } = props;
    
    const {name, value} = field;

    const selectOption = options.find(x=>x.value === value);

    const handleSelectedOptionChange = (selectOption) =>{
        const selectValue = selectOption ? selectOption.value : selectOption;

        const changeEvent = {
            target : {
                name,
                value: selectValue
            }
        };

        field.onChange(changeEvent);
    }
    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{name}</Label>}
                <Select 
                id={name} 
                {...field}
                value={selectOption}
                onChange={handleSelectedOptionChange}

                type={type}
                idDisabled={disabled}
                placeholder={placeholder}
                options={options}
                />
            </FormGroup>
        </div>
    );
}

export default SelectField;