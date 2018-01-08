import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default (props) => {

  const average = (data) => {
    return _.round(_.sum(data) / data.length, 1);
  }

  const current = (data) => {
    return _.round(data[0], 1)
  }

  console.log(props.data)

  return (
    <div >
      <Sparklines  className="chart" data={props.data} margin={5} style={{background: "#efeff4"}} width={props.width} height={props.height}>
        <SparklinesLine style={{strokeWidth: "2", fill: "#efeff4", }} color={props.lineColor} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>Average: { average(props.data) } { props.unit } &nbsp;|&nbsp; Current: { current(props.data) } { props.unit }</div>
    </div>
  )
}