import styled from "styled-components"

export const AuthInput = ({placeholder, type, name, onChange}) => {
    return (
        <Input type={type} placeholder={placeholder} name={name} onChange={onChange}/>
    )
}

const Input = styled.input`
    height: 40px;
    padding: 0px 20px 0px 20px;
    border: 1px solid rgba(0,0,0,0.2);
    outline: none;
    border-radius: 10px;
`;