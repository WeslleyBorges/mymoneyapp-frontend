import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/templates/content'
import ContentHeader from '../common/templates/contentheader'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'
import { showTabs, selectTab } from '../common/tabs/tabActions'
import { create } from './billingCycleAction'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {
  componentWillMount() {
    this.props.showTabs('tabList', 'tabCreate')
    this.props.selectTab('tabList')
  }
  
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
              <TabContent id="tabList">
                <List></List>
              </TabContent>
              <TabContent id="tabCreate">
                <Form onSubmit={this.props.create}></Form>
              </TabContent>
              <TabContent id="tabUpdate">update</TabContent>
              <TabContent id="tabDelete">delete</TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ selectTab, showTabs, create }, dispatch); 

export default connect(null, mapDispatchToProps)(BillingCycle)