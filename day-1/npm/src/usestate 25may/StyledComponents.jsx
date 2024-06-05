import styled from "styled-components";

const MyAnotherFontElement=styled.p`

font-size: 27px;
color: red;
font-weight: bold

`;

function StyledComponents(){

    return (

        <div>
                    <p>StyledComponents</p>
                    <MyAnotherFontElement>StyledComponents</MyAnotherFontElement>        
        </div>
    );
}

export default StyledComponents;