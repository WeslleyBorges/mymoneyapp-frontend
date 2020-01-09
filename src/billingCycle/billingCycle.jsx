import React, { Component } from 'react'

import Content from '../common/templates/content'
import ContentHeader from '../common/templates/contentheader'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'

export default class extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"></ContentHeader>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
              <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">Lista</TabContent>
              <TabContent id="tabCreate">insert</TabContent>
              <TabContent id="tabUpdate">update</TabContent>
              <TabContent id="tabDelete">delete</TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}