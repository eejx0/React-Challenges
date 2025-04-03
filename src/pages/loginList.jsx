import { useEffect, useState } from "react";
import styled from "styled-components"

export const LoginList = () => {
    const [authes, setAuthes] = useState([]);

    useEffect(() => {
        const storedAuthes = JSON.parse(localStorage.getItem("authes")) || [];
        setAuthes(storedAuthes);
    }, [])
    
    return (
        <Wrapper>
            <AuthWrapper>
                {authes.map((auth, index) => (
                    <SpanWrapper key={index}>
                        <span>아이디: {auth.id}</span>
                        <span>비밀번호: {auth.password}</span>
                    </SpanWrapper>
                ))}
            </AuthWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AuthWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const SpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;