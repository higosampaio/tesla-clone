import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/CarSlice'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <LogoContainer>
                <a>
                    <img src="/images/logo.svg" />
                </a>
            </LogoContainer>
            <Menu>
                {cars &&
                    cars.map((car, index) => (
                        <a key={index} href="#">
                            {car}
                        </a>
                    ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomClose onClick={() => setBurgerStatus(false)} />
                {cars &&
                    cars.map((car, index) => (
                        <li key={index}>
                            <a href="#">{car}</a>
                        </li>
                    ))}
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-in</a>
                </li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    a {
        font-weight: 500;
        font-size: 15px;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const LogoContainer = styled.div`
    width: 100px;

    img {
        width: 100%;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;

    a {
        font-weight: 500;
        font-size: 15px;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) =>
        props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 0.8em 1em;

        a {
            color: #393c41;
            font-weight: 600;
            font-size: 15px;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    align-self: end;
    margin-bottom: 1em;
`
