import styled from "styled-components"

export const AuthButton = ({buttonText, onClick, disable}) => {
    return (
        <Button onClick={onClick} disabled={disable}>{buttonText}</Button>
    )
}

const Button = styled.button`
    height: 40px;
    width: 100%;
    background-color: black;
    border-radius: 10px;
    color: white;
    border: none;
    font-weight: 600;
    font-size: 15px;
    background-color: ${({ disabled }) => (disabled ? "gray" : "black")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;