import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'

import { ResponsiveTable } from 'responsive-table'

const Example = () => (
  <Card elevation={5} className="rating">
    <CardHeader title="My sample" />
    <CardContent>
      <ResponsiveTable />
    </CardContent>
    <SyntaxHighlighter language="javascript" style={prism}>
      {`
import { ResponsiveTable } from 'seasoned-evaluator'

// MyComponent
<ResponsiveTable />
      `}
    </SyntaxHighlighter>
  </Card>
)

export default Example
