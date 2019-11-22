import styled from 'styled-components';
import { CollectionItemContainer } from '../../components/CollectionItem/styles';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.div`
   font-size: 38px;
   margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-gap: 10px;
   
   ${CollectionItemContainer} {
      margin-bottom: 30px;
   }
`;
