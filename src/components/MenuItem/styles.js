import styled from 'styled-components';

const getSize = size => {
   const sizes = {
      large: 380,
      default: 240
   };

   return sizes[size] || sizes['default'];
};

export const MenuItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.imageUrl})`};
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  
  height: ${props => getSize(props.size)}px;
  
  &:hover {
    cursor: pointer;

    ${MenuItemImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(.25, .45, .45, .95);
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const MenuItemSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
