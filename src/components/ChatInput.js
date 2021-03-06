import React, { useState } from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function ChatInput({sendMessage}) {

    const [input,setInput] = useState("")

    const send = (e) => {
        e.preventDefault()
        if(!input) return
        sendMessage(input)
        setInput("")
    }
    return (
        <Container>
            <InputContainer>
                <form>
                     <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Message Here.." />
                     <SendButton onClick={send} type="submit">
                        <Send /> 
                     </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput
const Container=styled.div`
padding-left:20px;
padding-right:20px;
padding-bottom:25px;
min-height:0;
`
const InputContainer=styled.div`
border: 1px solid #80808E;
border-radius:4px;

form {
    display:flex;
    height:42px;
    align-item:center;
    padding-left:10px;
    input {
        flex:1;
        border:none;
        font-size:13px;
    }
    input:focus {
        outline:none;
    }
}
`
const SendButton=styled.button`
background-color:#007a5a;
border-radius:2px;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-item:center;
margin-right:5px;
cursor:pointer;
border:none;

.MuiSvgIcon-root {
    width:18px;
}
:hover {
    background:#148567;
}
`
const Send = styled(SendOutlinedIcon)`
color:white;
`
