import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 0;

  > h1.title {
      font-weight: 700;
      font-size: 3.6rem;
      color: ${props => props.theme.textColor};
    }

  > div.content {
      width: 100%;
      max-width: 425px;

    > div.filter {
      display: flex;
      justify-content: center;
      margin: 3rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      > div.filter-item {
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;
        padding: 0 1.25rem 1.25rem 1.25rem;
        margin: 0 2rem;
        position: relative;
        border-bottom: 4px solid transparent;
        display: flex;
        justify-content: center;

        width: 33.33%;

        display: flex;
        justify-content: centers;

        &:hover {
          border-bottom: 4px solid #2F80ED;
        }
      }

      > div.selected {
        border-bottom: 4px solid #2F80ED;
      }
    }

    > form.form-group {
      display: flex;
      gap: 1rem;

      > input {
        width: 100%;
        border-radius: .5rem;
        border: 1px solid rgba(0, 0, 0, .1);
        padding: 0 1.65rem;
        outline: none;
        background: ${props => props.theme.inputColor};
        transition: background .25s;
        color: ${props => props.theme.textInputColor};;
      }

      > button {
        background: #2F80ED;
        font-size: 1.4rem;
        font-size: 600;
        border: none;
        color: #f8f8f8;
        padding: 1.25rem 2rem;
        border-radius: .5rem;
        cursor: pointer;

        &:hover {
          filter: brightness(.9);
        }
      }
    }

    > div.list {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      > div.list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div.list-item-content {
          display: flex;
          align-items: center;

          cursor: pointer;

          > input {
            cursor: pointer;
          }

          > span {
            font-size: 1.6rem;
            font-weight: 500;
            color: ${props => props.theme.textColor};
            margin-left: 1rem;
          }

          > span.completed {
            text-decoration: line-through;
            opacity: .5;
          }
        }

        > div.list-item-delete {
          
        }
      }
    }
  }
`;
