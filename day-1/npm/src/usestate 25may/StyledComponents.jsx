import styled from "styled-components";

const MyAnotherFontElement=styled.p`

font-size: 27px;
color: red;
font-weight: bold

`;

function StyledComponents(){

    return (

        <div>
                    <p>StyledComponents- THIS IS Simple statement</p>
                    <MyAnotherFontElement>StyledComponents- THis is styled by Style component</MyAnotherFontElement>        
        </div>
    );
}

export default StyledComponents;