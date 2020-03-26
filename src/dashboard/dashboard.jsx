import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardAction'
import ContentHeader from '../common/templates/contentheader'
import Content from '../common/templates/content'
import ValueBox from '../common/widget/valuebox'
import Row from '../common/layout/row'

class Dashboard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    // const { credit, debt } = this.props.summary
    const credit = 50
    const debt = 15
    
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank"
                    value={`R$ ${credit}`} text="Total de créditos" />
            <ValueBox cols="12 4" color="red" icon="credit-card"
                    value={`R$ ${debt}`} text="Total de débitos" />
            <ValueBox cols="12 4" color="blue" icon="money"
                    value={`R$ ${credit - debt}`} text="Valor consolidado" />
          </Row>
          
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary }) 
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)