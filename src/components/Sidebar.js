import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems, sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import {useHistory} from 'react-router-dom'
function Sidebar(props) {
    const history = useHistory()
    const goToChannel = (id) => {
        if(id) {
            console.log(id);
            history.push(`/room/${id}`)
        }
    }
    const addChannel = () => {
        const promptName = prompt("Enter channel name :")
        if(promptName) {
            db.collection('rooms').add({
                name:promptName
            })
        }
    }

    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    Sameer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelsItems>
                            {item.icon}
                            {item.text}
                        </MainChannelsItems>
                    ))
                }
               
            </MainChannels>
            <ChannelContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item =>(
                        <Channel onClick={()=>goToChannel(item.id)}>
                            # {item.name} 
                        </Channel>
                        ))
                    }
                   
                  
                </ChannelsList>
            </ChannelContainer>
        </Container>
    )
}

export default Sidebar
const Container=styled.div`
background:#350d36;

`
const WorkSpaceContainer=styled.div`
color:white;
height:64px;
display:flex;
align-items:center;
padding-left:19px;
justify-content:space-between;
border-bottom: 1px solid #532753;
`
const Name=styled.div``
const NewMessage=styled.div`
width:36px;
height:36px;
background:white;
color:#3f0E40;
fill:#3f0E40;
display:flex;
justify-content:center;
align-items:center;
border-radius:50px;
margin-right:20px;
cursor:pointer;
`
const MainChannels=styled.div`
padding-top:20px;
`
const MainChannelsItems=styled.div`
color:rgb(188,171,188);
display:grid;
grid-template-columns:15% auto;
height:28px;
align-items:center;
padding-left:19px;
cursor:pointer;
:hover {
    background:#350D36;
}
`
const ChannelContainer=styled.div`
color:rgb(188,171,188);
margin-top:20px;
`
const NewChannelContainer=styled.div`
display:flex;
justify-content:space-between;
align-item:center;
hight:28px;
padding-left:19px;
padding-right:12px;
`
const ChannelsList=styled.div``
const Channel=styled.div`
height:20px;
display:flex;
align-item:center;
padding-left:19px;
cursor:pointer;
:hover {
    background:#350D36;
}
`
