import { useState } from "react";
import styled from "styled-components"
import {ThemeProvider} from "styled-components";

// 화면에 요소 표시/숨기기 (하)

// 한 줄 소개가 보이고 '더보기' 버튼을 누르면 전체 내용이 펼쳐지는 UI -> 완성
// 검색 결과 없음 -> 아무것도 안적으면 아무것도 안보이고 검색어 입력하면 검색 결과 없다고 뜨게하기 -> 완성
// 다크모드 전환 -> theme 사용 -> 완성

const lightTheme = {
    background: "white",
    color: "black"
}

const blackTheme = {
    background: 'black',
    color: "white"
}

export const VisibilityFeatures = () => {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState(lightTheme);
    
    const fullSentence = "ㅇㄹㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹㄴㅇㄹㄴㅁㅇsdfasdfasdfsdfㄹㅁ";

    const handleMoreClick = () => {
        setVisible((prev) => !prev)
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handlethemeClick = () => {
        setTheme((theme) => (theme === lightTheme ? blackTheme : lightTheme))
    }

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <button onClick={handlethemeClick} style={{marginBottom: '30px'}}>테마</button>
                <input onChange={handleSearchChange} type="text" placeholder="검색어를 입력하세요" />
                {search && <div style={{marginTop: '20px'}}>검색 결과가 없습니다.</div>}
                <ContentBox>
                    <TextWrapper>
                        <Sentence $visible={visible}>{fullSentence}</Sentence>
                    </TextWrapper>
                    <button onClick={handleMoreClick}>더보기</button>
                </ContentBox>
            </Wrapper>
        </ThemeProvider>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    > input {
        width: 300px;
        height: 40px;
        border-radius: 30px;
        border: none;
        box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.1);
        padding: 0px 20px 0px 20px;
        outline: none;
    }
`;


const ContentBox = styled.div`
    width: 500px;
    height: 100%;
    padding: 30px;
    margin-top: 30px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

`;

const Sentence = styled.div`
    overflow: ${(props) => (props.$visible ? "none" : "hidden")};
    text-overflow: ${(props) => (props.$visible ? "none" : "ellipsis")};
    white-space: ${(props) => (props.$visible ? "none" : "nowrap")};
`;