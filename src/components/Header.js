import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({user, signOut}) {
    return (
        <Container>
            <Main>
            <AccessTimeIcon />
            <SearchContainer>
            <Search>
                <input type="text" placeholder="Search Here.." />
            </Search>
            </SearchContainer>
            <HelpOutlineIcon />
            
            </Main>
            <UserContainer>
            <Name>
            {user.name}
            </Name>
            <UserImage onClick={signOut}>
                <img src={user.photo} alt="" />
            </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header
const Container=styled.div`
background:#350d36;
color:white;
display:flex;
align-items:center;
justify-content:center;
position:relative;
z-index:10;
box-shadow: inset 0 0 0 1px gray;
`
const UserContainer=styled.div`
display:flex;
align-items:center;
padding-right:16px;
position:absolute;
right:0;

`
const Main=styled.div`
display:flex;
margin-right:16px;
margin-left:16px;
`
const SearchContainer=styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;
`

const Search=styled.div`
width:100%;
box-shadow: inset 0 0 0 1px gray;
border-radius:6px;
display:flex;
align-items:center;

input {
    background-color:transparent;
    border:none;
    padding-left:8px;
    padding-right:8px;
    color:white;
    padding-top:4px;
    padding-bottom:4px;
}
input:focus {
    outline:none;
    
}
`
const Name=styled.div`
padding-right:16px;
`
const UserImage=styled.div`
width:28px;
height:28px;
border: 2px solid white;
border-radius: 6px;
cursor:pointer;
img {
    width:100%;
}

`
