import React, {useState} from "react";
import {
    ContainerMenu,
    Menu,
    MenuItem,
    MenuButton
} from  "./styles.js";

function MenuComponent() {
    const [search, setSearch] = useState(false);
    return (
        <ContainerMenu>
            <Menu>
                {search ? 
                    <MenuItem>
                        <MenuButton onClick={() => {setSearch(false)}}>
                            Buscar
                        </MenuButton> 
                </MenuItem>:
                    <MenuItem>
                        <MenuButton onClick={() => {setSearch(true)}}>
                            Armazenados
                        </MenuButton> 
                    </MenuItem>
                }
 
            </Menu>
        </ContainerMenu>
    )
}

export default MenuComponent;