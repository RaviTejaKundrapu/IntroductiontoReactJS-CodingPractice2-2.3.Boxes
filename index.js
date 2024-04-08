const Box = props => {
  //  Write your code here.
  let {uniqueBox, textStyle, boxSizeText} = props

  return (
    <div className={uniqueBox}>
      <p className={textStyle}>{boxSizeText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='all-boxes-container'>
      <Box uniqueBox='smallBox' textStyle='textStyle' boxSizeText='Small' />
      <Box uniqueBox='mediumBox' textStyle='textStyle' boxSizeText='Medium' />
      <Box uniqueBox='largeBox' textStyle='textStyle' boxSizeText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
