import React from 'react'
export default class BasicPage extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div>
        <main>
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{__html: page.content}}/>
        </main>
      </div>
    )
  }
}
