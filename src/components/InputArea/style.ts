import styled from 'styled-components'


export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
`;




export const Item = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    justify-content: center;
`;

export const Label = styled.div`
    font-weight: bold;
    color: black;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    border: 1px solid aquamarine;
    border-radius: 5px;
    height: 25px;
    width: 90%;
    box-sizing: border-box;
`;

export const Select = styled.select`
    border: 1px solid aquamarine;
    border-radius: 5px;
    height: 25px;
    width: 90%;
    box-sizing: border-box;
`;

export const Button = styled.input`
    border: 1px solid aquamarine;
    border-radius: 5px;
    height: 25px;
    width: 90%;
    background-color: aquamarine;
    margin: 0 auto;
`;