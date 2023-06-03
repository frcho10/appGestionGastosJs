import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem, Card } from '@ui-kitten/components';

import { useSelector } from 'react-redux';
import TemplateMenu from '../TemplateMenu';


const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for Item',
});

const TabTarjetas = () => {

    const cards = useSelector( state => state.cards.cards)

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name}`}
      description={`${item.name}`}
    />
  );

  return (
        <TemplateMenu TabSelected={2}>
            <Card>
                <List
                data={cards}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
                />
            </Card>
        </TemplateMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 20,
  },
});

export default TabTarjetas