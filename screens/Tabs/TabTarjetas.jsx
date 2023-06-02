import React from "react"
import TemplateMenu from "../TemplateMenu"
import { Text } from "@ui-kitten/components"

function TabTarjetas(){

    return (
        <TemplateMenu TabSelected={2}>
            <Text>
                Hola Tarjetas
            </Text>
        </TemplateMenu>
    )
}

export default TabTarjetas