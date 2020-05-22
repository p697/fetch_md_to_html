import React, { useState } from 'react';
import CodeBlock from './code_block'
import './markdown.css'

const ReactMarkdown = require('react-markdown/with-html')

export default Page => {
  const [mdStr, setMdStr] = useState('加载中...')

  fetch('http://techo000.oss-cn-hangzhou.aliyuncs.com/README.md')
    .then((res) => res.text())
    .then(data => {
      setMdStr(data)
    })

  return (
    <div className="markdown-body">
      <ReactMarkdown 
        source={mdStr} 
        escapeHtml={false}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  );
}



