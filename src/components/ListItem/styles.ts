import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div<ContainerProps>((props) => (
    `
    display: flex;
    background-color: #133BF0;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;

    }

    label {
        color: #fff;
        text-decoration: ${props.done ? 'line-through' : 'initial'};
    }
`
));
