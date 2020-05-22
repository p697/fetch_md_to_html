import React, { useState } from 'react';
import './github_markdown.css'

const ReactMarkdown = require('react-markdown')

export default Page => {
  const [mdStr, setMdStr] = useState('加载中...')

  fetch('http://techo000.oss-cn-hangzhou.aliyuncs.com/README.md')
    .then((res) => res.text())
    .then(data => {
      setMdStr(data)
      console.log(data)
    })

  return (
    <div className="markdown-body">
      <ReactMarkdown source={mdStr} />
    </div>
  );
}



