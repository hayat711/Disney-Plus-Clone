import React from 'react'
import styled from 'styled-components'


function Detail() {
  return (
    <Container>
            <Background>
                    <img src="/bao.jpeg" />
            </Background>
            <ImageTitle>
                    <img src="/bau_poster.jpg" />
            </ImageTitle>
            <Controls>
                    <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                            <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                            <img src="/images/group-icon.png" />
                    </GroupWatchButton>
            </Controls>
            <Subtitle>
                    2018 * 7m * Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
                Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. 
                It is the first Pixar short film to be directed by a female director.[1] It was screened at the Tribeca Film Festival before being 
                released with Incredibles 2 on June 15, 2018. The film is about an aging and lonely Chinese Canadian 
                mother suffering from empty nest syndrome, who receives an unexpected second chance at 
                motherhood when she makes a steamed bun (baozi) that comes to life. The film won the Academy 
                Award for Best Animated Short Film at the 91st Academy Awards.[2] 
            </Description>
    </Container>
  )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.85;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0, 0.3);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

`

const AddButton = styled.button`
    margin-left: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0,0,0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);

`
const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    min-height: 20px;
    margin-top: 26px;

`

const Description = styled.div`
    font-size: 20px;
    line-height: 1.3;
    color: rgb(249, 229, 249);

    
`