import React from 'react';

import { Card, Text } from '@ui-kitten/components';
import TemplateMenu from '../TemplateMenu';

function TabSaldo() {

    return (

        <TemplateMenu TabSelected={0}>
            <Card>
                <Text>
                    Tu deuda/ganancia el mes de hoy es de $14,500.
                </Text>
            </Card>
        </TemplateMenu>
    )
}

export default TabSaldo

