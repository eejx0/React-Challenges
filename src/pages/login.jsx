import styled from "styled-components"
import { AuthInput } from "../components/authInput";
import { AuthButton } from "../components/authButton";
import { useState } from "react";

// 로그인에서 할 수 있는 기능들 (하)

// ✔ 버튼 비활성화 (입력값이 없으면 `disabled`) -> 완료
// ✔ 필드 배열을 사용해 동적 양식 구현 -> loginList 페이지에서 구현 완료 (로그인 정보 로컬스토리지에 저장)
// ✔ 버튼, 인풋 컴포넌트 만들어서 사용 -> 완료

// 나중에 여기다가 useDebounce, useLocalStorage 기능 추가하면 될 듯

export const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [, setAuthes] = useState([]);

    const handleOnChange = (e) => {
        const {name} = e.target;

        if (name === "id") {
            setId(e.target.value)
        } else if (name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleButtonClick = () => {
        const storedAuthes = JSON.parse(localStorage.getItem("authes")) || [];
        const updatedAuthes = [...storedAuthes, {id, password}];

        setAuthes(updatedAuthes);
        localStorage.setItem("authes", JSON.stringify(updatedAuthes));

        console.log("로그인 정보: ", updatedAuthes)
    }

    return (
        <Wrapper>
            <LoginBox>
                <h2>로그인</h2>
                <InputWrapper>
                    <AuthInput name="id" placeholder="아이디를 입력하세요" type="text" onChange={handleOnChange} value={id}/>
                    <AuthInput name="password" placeholder="비밀번호 입력하세요" type="password" onChange={handleOnChange} value={password}/>
                </InputWrapper>
                <ButtonStyle>
                    <AuthButton onClick={handleButtonClick} buttonText='로그인' disable={!(id && password)} />
                </ButtonStyle>
            </LoginBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
`;

const LoginBox = styled.div`
    width: 400px;
    height: 450px;
    box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.2);
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
    gap: 10px;
`;

const ButtonStyle = styled.div`
    width: 100%;
    margin-top: auto;
`;