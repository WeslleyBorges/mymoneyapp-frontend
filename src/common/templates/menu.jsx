import React from 'react'

import MenuItem from './menuitem'
import MenuTree from './menutree'

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="#" label="Dashboard" icon="dashboard"></MenuItem>
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem path="#billingCycle" label="Ciclos de pagamentos"
                icon="usd">
      </MenuItem>
    </MenuTree>
  </ul>
)